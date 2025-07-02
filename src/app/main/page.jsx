"use client";

import { useState, useEffect, useRef } from "react";

export default function VoiceAssistantUI() {
    const [listening, setListening] = useState(false);
    const [response, setResponse] = useState("");
    const [transcript, setTranscript] = useState("");
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(true);

    const recognitionRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = "en-US";

            recognition.onresult = (event) => {
                const spokenText = event.results[0][0].transcript.toLowerCase();
                setTranscript(spokenText);
                getResponse(spokenText);
            };

            recognition.onerror = (event) => {
                console.error("Speech recognition error", event);
                setResponse("Sorry, I couldn't understand.");
                setListening(false);
            };

            recognition.onend = () => {
                setListening(false);
            };

            recognitionRef.current = recognition;
        } else {
            console.warn("Speech Recognition not supported in this browser.");
        }
    }, []);

    const toggleListening = () => {
        if (!listening && recognitionRef.current) {
            setListening(true);
            setResponse("Listening...");
            recognitionRef.current.start();
        } else if (recognitionRef.current) {
            recognitionRef.current.stop();
            setListening(false);
        }
    };

    const getResponse = (query) => {
        setLoading(true);
        fetch(`/api/assistant?question=${encodeURIComponent(query)}`)
            .then((res) => res.json())
            .then((data) => {
                const answer = data.answer || data.error || "Sorry, I didn't get that.";
                setResponse(answer);
                setLoading(false);
                setHistory((prev) => [{ question: query, answer }, ...prev]);
                speakText(answer);
            })
            .catch((error) => {
                console.error("API Error:", error);
                setResponse("Error connecting to API");
                setLoading(false);
            });
    };

    const speakText = (text) => {
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            const voices = window.speechSynthesis.getVoices();
            const femaleVoice =
                voices.find((v) => v.name.toLowerCase().includes("female")) || voices[0];
            utterance.voice = femaleVoice;
            utterance.lang = "hi-IN";
            utterance.pitch = 1;
            utterance.rate = 1;
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white relative">
            {/* Main assistant UI */}
            <main className="flex flex-1 items-center justify-center p-6 order-1 md:order-1">
                <div className="p-6 bg-gray-800 rounded-2xl shadow-lg text-center w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4">Voice Assistant</h1>
                    <p className="text-gray-400 mb-2">You: {transcript || "Say something..."}</p>
                    {loading ? (
                        <p className="text-gray-500">Thinking...</p>
                    ) : (
                        <p className="text-gray-300 mb-4">{response}</p>
                    )}
                    <button
                        onClick={toggleListening}
                        className="flex items-center gap-2 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition"
                    >
                        {listening ? "Stop" : "Stark asking"}
                    </button>
                    {!showHistory && (
                        <div className="mt-4">
                            <button
                                onClick={() => setShowHistory(true)}
                                className="text-sm text-blue-400 hover:text-blue-600 transition px-3 py-1 rounded-md border border-blue-400"
                            >
                                Show History
                            </button>
                        </div>
                    )}
                </div>
            </main>

            {/* History panel */}
            {showHistory && (
                <div
                    className="bg-gray-800 p-4 overflow-y-auto transition-all duration-300 ease-in-out
                     w-full md:w-1/4 flex flex-col order-2 md:order-2 mt-4 md:mt-0"
                    style={{ minWidth: "15%", maxHeight: "50vh" }} // restrict height on mobile for scroll
                >
                    <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2 gap-2">
                        <h2 className="text-lg font-semibold">History</h2>
                        <div className="flex gap-2">
                            {history.length > 0 && (
                                <button
                                    onClick={() => setHistory([])}
                                    className="text-sm text-red-400 hover:text-red-600 transition px-3 py-1 rounded-md border border-red-400"
                                >
                                    Clear
                                </button>
                            )}
                            <button
                                onClick={() => setShowHistory((prev) => !prev)}
                                className="text-sm text-blue-400 hover:text-blue-600 transition px-3 py-1 rounded-md border border-blue-400"
                            >
                                Hide
                            </button>
                            
                        </div>
                        
                    </div>
                    {history.length === 0 ? (
                        <p className="text-gray-500">No history yet</p>
                    ) : (
                        <ul className="space-y-4 text-sm overflow-auto">
                            {history.map((item, index) => (
                                <li key={index} className="border-b border-gray-700 pb-3">
                                    <p className="font-medium text-blue-400 mb-1">You asked: {item.question}</p>
                                    
                                    <p className="text-gray-400">Assistant: {item.answer}</p>
                                    
                                    <button
                                        onClick={() => {
                                            setTranscript(item.question);
                                            getResponse(item.question);
                                        }}
                                        className="text-xs text-blue-400 hover:text-blue-600 transition mt-2"
                                    >
                                        Repeat
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}
