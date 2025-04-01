"use client"
// import { useState } from "react";

// export default function VoiceAssistantUI() {
//   const [listening, setListening] = useState(false);
//   const [response, setResponse] = useState("");
//   const [transcript, setTranscript] = useState("");

//   let recognition;
//   if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
//     recognition = new window.webkitSpeechRecognition();
//     recognition.continuous = false;
//     recognition.interimResults = false;
//     recognition.lang = "en-US";

//     recognition.onresult = (event) => {
//       const spokenText = event.results[0][0].transcript;
//       setTranscript(spokenText);
//       getResponse(spokenText);
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error", event);
//       setResponse("Sorry, I couldn't understand.");
//       setListening(false);
//     };

//     recognition.onend = () => {
//       setListening(false);
//     };
//   }

//   const toggleListening = () => {
//     if (!listening && recognition) {
//       setListening(true);
//       setResponse("Listening...");
//       recognition.start();
//     } else if (recognition) {
//       recognition.stop();
//       setListening(false);
//     }
//   };

//   const getResponse = (query) => {
//     // Simulated AI Response (You can integrate an AI API here)
//     setTimeout(() => {
//       setResponse(`You said: "${query}". I am still learning!`);
//     }, 2000);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <div className="p-6 bg-gray-800 rounded-2xl shadow-lg text-center w-96">
//         <h1 className="text-2xl font-bold mb-4">Voice Assistant</h1>
//         <p className="text-gray-400 mb-2">🗣 {transcript || "Say something..."}</p>
//         <p className="text-gray-300 mb-4">{response}</p>
//         <button
//           onClick={toggleListening}
//           className="flex items-center gap-2 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition"
//         >
//           {listening ? "🛑 Stop" : "🎤 Start Listening"}
//         </button>
//       </div>
//     </div>
//   );
// }

// app/components/VoiceAssistantUI.js


// "use client"; // Use this to indicate client-side rendering in Next.js

// import { useState, useEffect } from "react";

// export default function VoiceAssistantUI() {
//     const [listening, setListening] = useState(false);
//     const [response, setResponse] = useState("");
//     const [transcript, setTranscript] = useState("");
//     const [loading, setLoading] = useState(false);

//     // Speech recognition setup
//     let recognition;
//     if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
//         recognition = new window.webkitSpeechRecognition();
//         recognition.continuous = false;
//         recognition.interimResults = false;
//         recognition.lang = "en-US";

//         recognition.onresult = (event) => {
//             const spokenText = event.results[0][0].transcript.toLowerCase();
//             setTranscript(spokenText);
//             getResponse(spokenText);
//         };

//         recognition.onerror = (event) => {
//             console.error("Speech recognition error", event);
//             setResponse("Sorry, I couldn't understand.");
//             setListening(false);
//         };

//         recognition.onend = () => {
//             setListening(false);
//         };
//     }

//     const toggleListening = () => {
//         if (!listening && recognition) {
//             setListening(true);
//             setResponse("Listening...");
//             recognition.start();
//         } else if (recognition) {
//             recognition.stop();
//             setListening(false);
//         }
//     };

//     const getResponse = (query) => {
//         setLoading(true); // Set loading state while fetching response
//         fetch(`/api/assistant?question=${encodeURIComponent(query)}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setResponse(data.answer || data.error || "Sorry, I didn't get that.");
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setResponse("Error connecting to API");
//                 setLoading(false);
//             });
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//           <VoiceAssistantUI/>
//             <div className="p-6 bg-gray-800 rounded-2xl shadow-lg text-center w-96">
//                 <h1 className="text-2xl font-bold mb-4">Voice Assistant</h1>
//                 <p className="text-gray-400 mb-2">🗣 {transcript || "Say something..."}</p>
//                 {loading ? (
//                     <p className="text-gray-500">Thinking...</p>
//                 ) : (
//                     <p className="text-gray-300 mb-4">{response}</p>
//                 )}
//                 <button
//                     onClick={toggleListening}
//                     className="flex items-center gap-2 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition"
//                 >
//                     {listening ? "🛑 Stop" : "Say something"}
//                 </button>
//             </div>
//         </div>
//     );
// }

"use client"; // Use this to indicate client-side rendering in Next.js

import { useState } from "react";

export default function VoiceAssistantUI() {
    const [listening, setListening] = useState(false);
    const [response, setResponse] = useState("");
    const [transcript, setTranscript] = useState("");
    const [loading, setLoading] = useState(false);
    

    // Speech recognition setup
    let recognition;
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
        recognition = new window.webkitSpeechRecognition();
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
    }

    const toggleListening = () => {
        if (!listening && recognition) {
            setListening(true);
            setResponse("Listening...");
            recognition.start();
        } else if (recognition) {
            recognition.stop();
            setListening(false);
        }
    };
    const getResponse = (query) => {
      setLoading(true);
      fetch(`/api/assistant?question=${encodeURIComponent(query)}`)
          .then((res) => res.json())
          .then((data) => {
              console.log("API Response:", data); // Debugging
              setResponse(data.answer || data.error || "Sorry, I didn't get that.");
              setLoading(false);
          })
          .catch((error) => {
              console.error("API Error:", error);
              setResponse("Error connecting to API");
              setLoading(false);
          });
  };
  

    return (
        <div className="flex flex-col items-center justify-center md:min-h-screen bg-gray-900 text-white">
            <div className="p-6 bg-gray-800 rounded-2xl shadow-lg text-center w-96">
                <h1 className="text-2xl font-bold mb-4">Voice Assistant</h1>
                <p className="text-gray-400 mb-2">🗣 {transcript || "Say something..."}</p>
                {loading ? (
                    <p className="text-gray-500">Thinking...</p>
                ) : (
                    <p className="text-gray-300 mb-4">{response}</p>
                )}
                <button
                    onClick={toggleListening}
                    className="flex items-center gap-2 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition"
                >
                    {listening ? "🛑 Stop" : "Say something"}
                </button>
            </div>
        </div>
    );
}
