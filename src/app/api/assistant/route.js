// export async function GET() {
//     const dataset = { 
//         "hello": "Hi there! How can I help you?",
//         "how are you": "I'm just a bot, but I'm doing great!",
//         "bye": "Goodbye! Have a great day!",
          
//         "what is pollution": "Pollution is the introduction of harmful substances into the environment, negatively affecting air, water, and land.",
//         "types of pollution": "The major types of pollution are air pollution, water pollution, soil pollution, noise pollution, and plastic pollution.",
//         "causes of air pollution": "Air pollution is caused by vehicle emissions, industrial waste, burning fossil fuels, deforestation, and agricultural activities.",
//         "effects of air pollution": "It leads to respiratory diseases, climate change, acid rain, and harm to wildlife and vegetation.",
//         "how to reduce air pollution": "Use public transport, switch to renewable energy, plant trees, and enforce stricter emission laws.",
        
//         "why is water pollution a problem": "Water pollution harms marine life, contaminates drinking water, spreads diseases, and disrupts ecosystems.",
//         "how can we prevent water pollution": "Reduce plastic use, dispose of waste properly, use eco-friendly products, and treat industrial waste before disposal.",
        
//         "what is global warming": "Global warming is the rise in Earth's average temperature due to increased greenhouse gas emissions.",
//         "how does pollution contribute to climate change": "Pollution increases greenhouse gases like CO2 and methane, trapping heat and causing climate change.",
        
//         "what are the effects of plastic pollution": "It harms marine life, pollutes water bodies, takes centuries to decompose, and enters the food chain.",
//         "how to reduce plastic waste": "Use reusable bags, avoid single-use plastics, recycle, and support plastic bans.",
        
//         "should governments impose stricter environmental laws": "Yes, stricter laws ensure reduced pollution, promote sustainability, and protect public health.",
//         "is climate change real": "Yes, scientific evidence shows rising temperatures, melting ice caps, and extreme weather events caused by human activity.",
        
//         "what is carbon footprint": "A carbon footprint is the total amount of greenhouse gases emitted by human activities, usually measured in CO2 equivalents.",
//         "how to reduce carbon footprint": "Use energy-efficient appliances, drive less, eat sustainably, and switch to renewable energy.",
        
//         "role of industries in pollution": "Industries contribute to air, water, and land pollution through emissions, waste disposal, and deforestation.",
//         "how can industries reduce pollution": "Adopt cleaner production methods, use renewable energy, recycle waste, and follow environmental regulations."
      
      
//     };
  
//     return new Response(JSON.stringify(dataset), {
//       headers: { "Content-Type": "application/json" },
//     });
//   }
  


// app/api/assistant/route.js
export async function GET(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get("question")?.toLowerCase();

    if (!query) {
        return new Response(JSON.stringify({ error: "No question provided" }), {
            headers: { "Content-Type": "application/json" },
        });
    }

    const dataset = { 
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a bot, but I'm doing great!",
        "bye": "Goodbye! Have a great day!",
       
        "what is pollution": "Pollution is the introduction of harmful substances into the environment, negatively affecting air, water, and land.",
        "types of pollution": "The major types of pollution are air pollution, water pollution, soil pollution, noise pollution, and plastic pollution.",
        "causes of air pollution": "Air pollution is caused by vehicle emissions, industrial waste, burning fossil fuels, deforestation, and agricultural activities.",
        "effects of air pollution": "It leads to respiratory diseases, climate change, acid rain, and harm to wildlife and vegetation.",
        "how to reduce air pollution": "Use public transport, switch to renewable energy, plant trees, and enforce stricter emission laws.",
        
        "why is water pollution a problem": "Water pollution harms marine life, contaminates drinking water, spreads diseases, and disrupts ecosystems.",
        "how can we prevent water pollution": "Reduce plastic use, dispose of waste properly, use eco-friendly products, and treat industrial waste before disposal.",
        
        "what is global warming": "Global warming is the rise in Earth's average temperature due to increased greenhouse gas emissions.",
        "how does pollution contribute to climate change": "Pollution increases greenhouse gases like CO2 and methane, trapping heat and causing climate change.",
        
        "what are the effects of plastic pollution": "It harms marine life, pollutes water bodies, takes centuries to decompose, and enters the food chain.",
        "how to reduce plastic waste": "Use reusable bags, avoid single-use plastics, recycle, and support plastic bans.",
        
        "should governments impose stricter environmental laws": "Yes, stricter laws ensure reduced pollution, promote sustainability, and protect public health.",
        "is climate change real": "Yes, scientific evidence shows rising temperatures, melting ice caps, and extreme weather events caused by human activity.",
        
        "what is carbon footprint": "A carbon footprint is the total amount of greenhouse gases emitted by human activities, usually measured in CO2 equivalents.",
        "how to reduce carbon footprint": "Use energy-efficient appliances, drive less, eat sustainably, and switch to renewable energy.",
        
        "role of industries in pollution": "Industries contribute to air, water, and land pollution through emissions, waste disposal, and deforestation.",
        "how can industries reduce pollution": "Adopt cleaner production methods, use renewable energy, recycle waste, and follow environmental regulations."
};

    // Check if the question exists in the predefined dataset
    if (dataset[query]) {
        return new Response(JSON.stringify({ answer: dataset[query] }), {
            headers: { "Content-Type": "application/json" },
        });
    }

    // If not found in dataset, call OpenAI API
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`, // Ensure API key is set in .env.local
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", 
                messages: [
                    { role: "system", content: "You are an AI assistant specialized in pollution-related topics." },
                    { role: "user", content: query }
                ],
                max_tokens: 100,
            }),
        });

        const apiData = await response.json();
        console.log("OpenAI API Response:", apiData); // Debugging

        const answer = apiData.choices?.[0]?.message?.content.trim() || "Sorry, I couldn't understand your question.";

        return new Response(JSON.stringify({ answer }), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Error with OpenAI API:", error);
        return new Response(JSON.stringify({ error: "Unable to fetch data from OpenAI API" }), {
            headers: { "Content-Type": "application/json" },
        });
    }
}
