
export async function GET(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get("question")?.toLowerCase();

    if (!query) {
        return new Response(JSON.stringify({ error: "No question provided" }), {
            headers: { "Content-Type": "application/json" },
        });
    }

    const dataset = {
        "how does air pollution affect children": "According to WHO, air pollution exposure in children is linked to asthma, developmental issues, and respiratory infections.",
        "how does air pollution affect": "Elderly individuals are more susceptible to respiratory diseases, cardiovascular issues, and cognitive decline due to air pollution.",
        "is it safe to drink tap water in industrial areas": "According to the CDC and WHO, tap water in heavily industrial areas often contains contaminants like lead, arsenic, and heavy metals, which pose long-term health risks.",
        "is tap water safe to drink in industrial towns": "according to the cdc and who, tap water in industrial areas can contain harmful substances like lead, arsenic, and heavy metals due to aging infrastructure and industrial runoff",
        "how air pollution from factories affects local communities": "according to the who, factory emissions release particulate matter and toxic gases that can cause respiratory diseases, heart conditions, and reduce life expectancy",
        "does living near a chemical plant harm children's health": "studies from the american lung association show that children living near industrial zones are at higher risk for asthma, developmental issues, and long-term lung damage",
        "how factory emissions impact the quality of rainwater": "according to the noaa, emissions of sulfur dioxide and nitrogen oxides from factories lead to acid rain, which lowers the pH of rainwater and harms ecosystems",
        "can industrial waste pollute underground water": "according to the epa, poorly managed industrial waste can seep into the soil and contaminate groundwater with chemicals like benzene, mercury, and nitrates",
        "are rivers near factories safe for fishing or bathing": "the epa reports that rivers near industrial zones often carry chemical residues, heavy metals, and pathogens, making them unsafe for recreational use and fishing",
        "how industrial air affects people with asthma": "according to the who, pollutants like sulfur dioxide, nitrogen dioxide, and fine particulate matter from factories can trigger asthma attacks and worsen chronic symptoms",
        "do factories contribute to acid rain in nearby areas": "the ipcc states that emissions from industrial processes are a major source of acid rain, which damages soil, aquatic life, and buildings",
        "how polluted water from industries affects farming": "the fao warns that using contaminated water for irrigation can lead to toxic buildup in soil and crops, reducing yield and harming human health",
        "can breathing industrial smoke cause long-term illness": "according to the national cancer institute, long-term exposure to industrial air pollutants such as formaldehyde and asbestos increases the risk of cancer and chronic respiratory diseases",
        "what is air pollution": "air pollution is the presence of harmful gases or particles in the air that can affect health and the environment",
        "what causes water pollution in industrial areas": "factories often release waste into rivers and lakes, which pollutes the water",
        "why is clean air important for health": "clean air helps people breathe properly and reduces the risk of diseases like asthma",
        "how do factories pollute the air": "factories release smoke and harmful gases like carbon monoxide and sulfur dioxide",
        "can dirty water make people sick": "yes, polluted water can cause diseases like diarrhea, cholera, and skin infections",
        "how does pollution affect animals": "pollution can harm animals by contaminating their food and water sources",
        "what are some signs of polluted water": "bad smell, unusual color, and presence of garbage or oil on the surface",
        "how can we reduce air pollution near factories": "using filters, reducing emissions, and planting trees can help",
        "what is the role of rain in spreading pollution": "rain can carry air pollutants to the ground and into water sources, causing acid rain",
        "why should we care about pollution in industrial areas": "because it affects the health of people, animals, and the environment around them",
        "what is the full form of ipcc": "IPCC is the Intergovernmental Panel on Climate Change. It's a United Nations body established to provide policymakers with scientific assessments of climate change.",
        "hello": "Hi there! How can I help you?",
        "hi there": "Hello! How can I assist you today?",
        "hi there!": "Hello! How can I assist you today?",
        "hello!": "Hello! How can I assist you today?",
        "hi!": "Hello! How can I assist you today?",
        "hi": "Hello! How can I assist you today?",
        "hey": "Hey! What can I do for you?",
        "what's up": "Not much, just here to help you! What do you need?",
        "how's it going": "I'm just a computer program, but I'm here to assist you! How can I help?",
        "good morning": "Good morning! How can I assist you today?",
        "good afternoon": "Good afternoon! How can I help you today?",
        "good evening": "Good evening! How can I assist you today?",
        "good night": "Good night! If you have any questions, feel free to ask.",
        "thank you": "You're welcome! If you have any more questions, feel free to ask.",
        "thanks": "You're welcome! If you need anything else, just let me know.",
        "bye": "Goodbye! Have a great day!",
        "see you later": "See you later! If you have more questions, just ask.",
        "what is your purpose": "My purpose is to assist you with information and tasks. How can I help you today?",
        "what can you do": "I can answer",
        "how are you": "I'm just a computer program, but thanks for asking! How can I assist you today?",
        "what is pollution": "Pollution is the introduction of harmful substances or contaminants into the environment, causing adverse effects.",
        "what is your name": "I am an AI assistant created by Prem Kumar Yadav. How can I help you today?",
        "who is prem kumar yadav": "Prem Kumar Yadav is a software engineer and the creator of this AI assistant. He is passionate about technology and helping others.",
        "who is apana time": "Apana Time is a platform created by Prem Kumar Yadav, focusing on technology and innovation.",
        "who is yadav": " Yadav is powerfull brand up and vihar .Namaste Yadav ji",
        "who is akhilesh yadav": "Akhilesh Yadav is an Indian politician and the national president of the Samajwadi Party. He served as the Chief Minister of Uttar Pradesh from 2012 to 2017, becoming the youngest person to hold the office at the age of 38. He is currently a Member of Parliament for Kannauj in the 18th Lok Sabha and leads the Samajwadi Party in the Lok Sabha",
        "effects of air pollution": "It leads to respiratory diseases, climate change, acid rain, and harm to wildlife and vegetation.",
        "how to reduce air pollution": "Use public transport, switch to renewable energy, plant trees, and enforce stricter emission laws.",
        "what is water pollution": "Water pollution is the contamination of water bodies with harmful substances, affecting aquatic life and human health.",
        "causes of water pollution": "Industrial waste, agricultural runoff, sewage discharge, and plastic waste are major causes of water pollution.",
        "effects of water pollution": "It leads to health issues, loss of biodiversity, and disruption of ecosystems.",
        "how to reduce water pollution": "Reduce plastic use, treat wastewater, and avoid using harmful chemicals in agriculture.",
        "what is soil pollution": "Soil pollution is the contamination of soil with harmful chemicals, affecting plant growth and food safety.",
        "causes of soil pollution": "Excessive use of pesticides, industrial waste disposal, and plastic waste contribute to soil pollution.",
        "effects of soil pollution": "It leads to reduced soil fertility, contamination of food crops, and harm to wildlife.",
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
        "what is noise pollution": "Noise pollution is excessive or harmful levels of noise in the environment, affecting human health and wildlife.",
        "causes of noise pollution": "Traffic, construction, industrial activities, and loud music are major causes of noise pollution.",
        "effects of noise pollution": "It can cause stress, sleep disturbances, hearing loss, and negative impacts on wildlife behavior.",
        "how to reduce noise pollution": "Use soundproofing materials, plant trees, enforce noise regulations, and promote quieter technologies.",
        "what is noise pollution": "Noise pollution refers to harmful or disturbing sounds that affect the health and well-being of humans and wildlife.",
        "how to reduce noise pollution": "Limit vehicle traffic, use soundproofing materials, enforce noise regulations, and promote green spaces in urban areas.",
        "what are the effects of soil pollution": "Soil pollution degrades soil quality, harms plant life, and can contaminate food crops with harmful chemicals.",
        "how to prevent soil pollution": "Use organic farming methods, reduce pesticide use, properly dispose of hazardous waste, and prevent soil erosion.",
        "why is biodiversity important": "Biodiversity is crucial for ecosystem stability, food security, medicine, and maintaining the balance of nature.",
        "how does deforestation contribute to pollution": "Deforestation leads to increased carbon emissions, loss of biodiversity, and disrupts the water cycle, contributing to pollution.",
        "how to protect marine life from pollution": "Reduce plastic waste, avoid harmful chemicals, support sustainable fishing practices, and protect marine habitats.",
        "what is acid rain": "Acid rain is rain that has been made acidic by pollutants like sulfur dioxide and nitrogen oxides, which harm plants, animals, and water bodies.",
        "how to reduce industrial pollution": "Implement cleaner production technologies, use renewable energy, recycle waste, and enforce environmental regulations.",
        "what is the greenhouse effect": "The greenhouse effect occurs when greenhouse gases trap heat in the Earth's atmosphere, leading to global warming.",
        "how does deforestation affect global warming": "Deforestation increases CO2 levels in the atmosphere, reducing the planet’s ability to absorb carbon, thus contributing to global warming.",
        "what is the role of renewable energy in reducing pollution": "Renewable energy sources like solar, wind, and hydro power produce little to no pollution compared to fossil fuels.",
        "how can individuals reduce environmental impact": "Individuals can reduce their impact by conserving energy, using public transport, reducing waste, and supporting sustainable practices.",
        "why is recycling important": "Recycling reduces waste, conserves natural resources, and saves energy, thus reducing pollution and environmental impact.",
        "how to protect air quality": "Reduce vehicle emissions, use public transport, avoid burning fossil fuels, and support policies that promote clean energy.",
        "what is eco-friendly living": "Eco-friendly living involves making choices that reduce harm to the environment, such as using sustainable products and reducing waste.",
        "what is the impact of agriculture on pollution": "Agriculture contributes to water pollution through pesticide runoff, air pollution through methane emissions, and soil degradation.",
        "how can sustainable farming practices reduce pollution": "Sustainable farming reduces pesticide use, conserves water, and promotes biodiversity, which helps reduce pollution.",
        "how does water scarcity relate to pollution": "Polluted water sources worsen scarcity by making clean water less available, leading to health and environmental issues.",
        "why is plastic waste a global issue": "Plastic waste pollutes the oceans, harms wildlife, and takes hundreds of years to decompose, causing long-term environmental damage.",
        "should factories be more eco-friendly": "Yes, factories should adopt cleaner technologies, reduce emissions, and follow sustainable practices to reduce pollution.",
        "should people be fined for littering": "Yes, imposing fines for littering encourages proper waste disposal and helps reduce pollution in public spaces.",
        "how do cars contribute to air pollution": "Cars emit harmful gases like carbon monoxide and nitrogen oxides, which contribute to air pollution and global warming.",
        "what role do forests play in combating pollution": "Forests absorb carbon dioxide, produce oxygen, and filter pollutants from the air, playing a crucial role in maintaining environmental health.",
        "is industrialization the main cause of pollution": "Yes, industrialization has led to increased emissions, waste, and resource depletion, significantly contributing to pollution.",
        "how does noise pollution affect human health": "Noise pollution can cause stress, sleep disturbances, hearing loss, and an increased risk of heart disease.",
        "should we stop using fossil fuels": "Yes, transitioning to renewable energy sources will reduce greenhouse gas emissions, mitigate climate change, and improve air quality.",
        "can pollution be completely eliminated": "While it may not be possible to eliminate all pollution, we can significantly reduce it through technological advancements and stricter regulations.",
        "should plastic bags be banned": "Yes, banning plastic bags would reduce waste, prevent harm to wildlife, and encourage the use of eco-friendly alternatives.",
        "how does water pollution affect biodiversity": "Water pollution harms aquatic species, disrupts ecosystems, and can lead to the extinction of some species.",
        "why is indoor air pollution a concern": "Indoor air pollution can lead to respiratory issues, allergies, and other health problems, especially in poorly ventilated spaces.",
        "should businesses be required to use sustainable packaging": "Yes, businesses should adopt sustainable packaging to reduce waste, conserve resources, and minimize their environmental impact.",
        "how does chemical pollution affect agriculture": "Chemical pollution from pesticides and fertilizers can degrade soil quality, contaminate water sources, and harm crops.",
        "how does air pollution affect wildlife": "Air pollution can cause respiratory problems in animals, disrupt ecosystems, and lead to the decline of certain species.",
        "is renewable energy the solution to pollution": "Yes, renewable energy sources like solar, wind, and hydro power produce little to no pollution and help reduce reliance on fossil fuels.",
        "should the use of pesticides be restricted": "Yes, restricting pesticide use can protect the environment, prevent chemical runoff, and safeguard biodiversity.",
        "can pollution control be achieved without economic growth": "It is possible to balance pollution control and economic growth through green technologies, sustainability practices, and policy changes.",
        "how does plastic pollution affect human health": "Plastic pollution can lead to harmful chemicals entering the food chain, affecting human health through consumption of contaminated seafood.",
        "why is soil pollution a problem": "Soil pollution reduces land productivity, harms plant growth, contaminates water sources, and poses health risks to humans and animals.",
        "how do agricultural practices contribute to pollution": "Agricultural practices contribute to pollution through the use of pesticides, fertilizers, and improper waste disposal, which degrade ecosystems.",
        "should recycling be mandatory": "Yes, mandatory recycling can reduce waste, conserve resources, and decrease the environmental impact of landfills.",
        "how does waste management reduce pollution": "Proper waste management reduces the amount of waste in landfills, prevents pollution of air and water, and promotes recycling.",
        "what is the importance of clean energy": "Clean energy reduces greenhouse gas emissions, minimizes pollution, and contributes to a sustainable future.",
        "what is the role of education in reducing pollution": "Education can raise awareness about the causes and consequences of pollution, encouraging more sustainable practices.",
        "what is your name": "I am an AI created by Prem Kumar Yadav. How can I assist you today?",
        "what can you do": "I can answer your questions, assist with tasks, and help you learn new things.",
        "who created you": "I was created by ApanaTime Team.",
        "who developed you": "I was created by Prem Kumar Yadav.",
        "what is AI": "AI, or Artificial Intelligence, refers to the simulation of human intelligence processes by machines, particularly computer systems.",
        "what is your purpose": "My purpose is to assist with tasks, answer questions, and provide useful information.",
        "can you help with programming": "Yes, I can help with coding and programming-related questions.",
        "what is Python": "Python is a high-level programming language used for web development, data analysis, machine learning, and more.",
        "what is JavaScript": "JavaScript is a programming language used to create interactive effects within web browsers.",
        "can you speak": "Yes, I can respond with text, and I can also process voice commands if enabled.",
        "what is MongoDB": "MongoDB is a NoSQL database used for storing large volumes of unstructured data.",
        "what is React": "React is a JavaScript library for building user interfaces, particularly single-page applications.",
        "what is Node.js": "Node.js is a runtime environment that allows you to run JavaScript on the server side.",
        "how do you work": "I process your input and generate appropriate responses based on my training data.",
        "how can I learn programming": "You can start by learning the basics of Python or JavaScript. There are many online resources and tutorials available.",
        "what is a database": "A database is an organized collection of data that can be accessed, managed, and updated.",
        "what is machine learning": "Machine learning is a subset of AI where machines learn from data and improve their performance over time without being explicitly programmed.",
        "what is deep learning": "Deep learning is a branch of machine learning that uses neural networks with many layers to model complex patterns in large datasets.",
        "how does AI learn": "AI learns by analyzing large amounts of data, identifying patterns, and adjusting its algorithms to improve its accuracy.",
        "can you do calculations": "Yes, I can perform basic and advanced mathematical calculations.",
        "can you help me with homework": "I can definitely help with that! Just let me know what you're working on.",
        "what is the capital of France": "The capital of France is Paris.",
        "what is the largest ocean in the world": "The largest ocean is the Pacific Ocean.",
        "what is the speed of light": "The speed of light is approximately 299,792 kilometers per second.",
        "what is the tallest mountain in the world": "Mount Everest is the tallest mountain in the world.",
        "how do I create a website": "To create a website, you can use HTML, CSS, and JavaScript. You’ll also need a server and hosting.",
        "what is an API": "An API, or Application Programming Interface, allows different software applications to communicate with each other.",
        "what is cloud computing": "Cloud computing is the delivery of computing services like storage, processing, and software over the internet, instead of on local servers.",
        "what is a network": "A network is a group of computers or devices connected to share resources and data.",
        "how do I set up Wi-Fi": "You need a router and a modem. Follow the instructions that came with your device to connect and configure your Wi-Fi.",
        "what is HTML": "HTML (HyperText Markup Language) is the standard language for creating web pages.",
        "what is CSS": "CSS (Cascading Style Sheets) is used to style and format the layout of web pages.",
        "can you help me with SEO": "Yes, I can help with SEO (Search Engine Optimization) to improve your website's visibility on search engines.",
        "what is digital marketing": "Digital marketing refers to marketing products or services using digital channels like websites, social media, and email.",
        "what is a chatbot": "A chatbot is an AI application that interacts with users through text or voice to provide information or assistance.",
        "how do I make a chatbot": "To create a chatbot, you need to choose a platform, define the conversation flow, and integrate it with AI tools for processing input.",
        "what is the Internet of Things (IoT)": "IoT refers to the interconnection of everyday devices, allowing them to collect and exchange data over the internet.",
        "what is a smart home": "A smart home uses IoT devices to control various aspects of the home, like lighting, security, and temperature, remotely.",
        "what is augmented reality (AR)": "AR is a technology that overlays digital content on the real world using devices like smartphones or AR glasses.",
        "what is virtual reality (VR)": "VR creates a fully immersive digital environment that users can interact with using special equipment like VR headsets.",
        "what is cryptocurrency": "Cryptocurrency is a type of digital or virtual currency that uses cryptography for security, like Bitcoin or Ethereum.",
        "what is blockchain": "Blockchain is a decentralized digital ledger used to record transactions across multiple computers.",
        "what is the Internet": "The Internet is a global network of interconnected computers that allows data and information to be shared.",
        "how do I protect my online privacy": "Use strong passwords, enable two-factor authentication, and avoid sharing sensitive information online.",
        "what is a virus in computers": "A computer virus is a malicious software program designed to spread to other devices and disrupt or damage systems.",
        "what is cybersecurity": "Cybersecurity involves protecting computer systems and networks from digital attacks, theft, and damage.",
        "how can I improve my internet speed": "Try restarting your router, check for any interference, or upgrade your internet plan if needed.",
        "what is a search engine": "A search engine is a tool used to search for information on the internet, like Google or Bing.",
        "how do I use Google search effectively": "Use specific keywords, use quotation marks for exact phrases, and try to include relevant terms to narrow your results.",
        "what is your favorite color": "As an AI, I don't have preferences or emotions, but I can help you learn about colors!",
        "do you have feelings": "No, I don't have emotions like humans, but I can understand and process human emotions based on data.",
        "have feelings": "No, I don't have emotions like humans, but I can understand and process human emotions based on data.",
        "can you love": "I cannot experience love or any other human emotions, as I'm just a program designed to help you.",
        "do you love": "I cannot experience love or any other human emotions, as I'm just a program designed to help you.",
        "are you real": "I am a virtual assistant, created by Prem, to assist with tasks and provide information.",
        "can you think like a human": "I can process and analyze data to answer your questions, but I don't think like a human. My responses are based on programming and algorithms.",
        "Pollution kya hota hai": "Pollution is the presence or introduction of harmful substances into the environment, causing adverse effects.",
        "Noise pollution kis wajah se hota hai": "Noise pollution is produced by traffic, construction, and industrial machinery.",
        "Dilli me smog kyu hota hai": "Burning of crop residues is a major contributor to seasonal smog in northern India.",
        "Water pollution ke main karan kya hain": "Water pollution is caused by industrial waste, oil spills, and sewage disposal into water bodies.",
        "Air pollution se health par kya effect padta hai": "Air pollution can cause asthma, respiratory infections, and cardiovascular problems.",
        "Soil pollution kyu hota hai": "Soil pollution occurs due to excessive pesticide use, industrial dumping, and plastic waste.",
        "AQI kya hota hai": "The Air Quality Index (AQI) measures the level of air pollution.",
        "Deforestation se air pollution ka kya relation hai": "Deforestation leads to increased carbon dioxide levels and worsens air quality.",
        "Plastic pollution ka kya nuksaan hota hai": "Plastic pollution threatens marine life and causes long-term environmental damage.",
        "Ganga nadi itni polluted kyu hai": "The Ganges River is severely polluted due to untreated industrial and domestic waste.",
        "Kya pollution se climate change hota hai": "Yes, pollution contributes to climate change by increasing greenhouse gas emissions.",
        "Kya pollution se health problems hoti hain": "Yes, pollution can cause various health issues, including respiratory diseases and allergies.",
        "Kya pollution ka koi solution hai": "Yes, solutions include reducing emissions, using renewable energy, and promoting recycling.",
        "Kya pollution se wildlife par effect padta hai": "Yes, pollution can harm wildlife by contaminating habitats and food sources.",
        "Kya pollution se global warming hota hai": "Yes, pollution contributes to global warming by increasing greenhouse gas concentrations in the atmosphere.",
        "Kya pollution se biodiversity khatam hoti hai": "Yes, pollution can lead to habitat destruction and loss of biodiversity.",
        "Kya pollution se water scarcity hoti hai": "Yes, pollution can contaminate water sources, leading to scarcity of clean water.",
        "Kya pollution se soil fertility khatam hoti hai": "Yes, pollution can degrade soil quality and reduce its fertility.",
        "Kya pollution se health problems hoti hain": "Yes, pollution can cause various health issues, including respiratory diseases and allergies.",
        "Kya pollution ka koi solution hai": "Yes, solutions include reducing emissions, using renewable energy, and promoting recycling.",
        "Kya pollution se wildlife par effect padta hai": "Yes, pollution can harm wildlife by contaminating habitats and food sources.",
        "Kya pollution se global warming hota hai": "Yes, pollution contributes to global warming by increasing greenhouse gas concentrations in the atmosphere.",
        "Kya pollution se biodiversity khatam hoti hai": "Yes, pollution can lead to habitat destruction and loss of biodiversity.",
        "Kya pollution se water scarcity hoti hai": "Yes, pollution can contaminate water sources, leading to scarcity of clean water.",
        "Kya pollution se soil fertility khatam hoti hai": "Yes, pollution can degrade soil quality and reduce its fertility.",
        "Kya pollution se health problems hoti hain": "Yes, pollution can cause various health issues, including respiratory diseases and allergies.",
        "Kya pollution ka koi solution hai": "Yes, solutions include reducing emissions, using renewable energy, and promoting recycling.",
        "Kya pollution se wildlife par effect padta hai": "Yes, pollution can harm wildlife by contaminating habitats and food sources.",
        "Kya pollution se global warming hota hai": "Yes, pollution contributes to global warming by increasing greenhouse gas concentrations in the atmosphere.",
        "Kya pollution se biodiversity khatam hoti hai": "Yes, pollution can lead to habitat destruction and loss of biodiversity.",
        "Kya pollution se water scarcity hoti hai": "Yes, pollution can contaminate water sources, leading to scarcity of clean water.",
        "Kya pollution se soil fertility khatam hoti hai": "Yes, pollution can degrade soil quality and reduce its fertility.",
        "Kya pollution se health problems hoti hain": "Yes, pollution can cause various health issues, including respiratory diseases and allergies.",
        "Kya pollution ka koi solution hai": "Yes, solutions include reducing emissions, using renewable energy, and promoting recycling.",
        "Kya pollution se wildlife par effect padta hai": "Yes, pollution can harm wildlife by contaminating habitats and food sources.",
        "Kya pollution se global warming hota hai": "Yes, pollution contributes to global warming by increasing greenhouse gas concentrations in the atmosphere.",
        "Kya pollution se biodiversity khatam hoti hai": "Yes, pollution can lead to habitat destruction and loss of biodiversity.",
        "Kya pollution se water scarcity hoti hai": "Yes, pollution can contaminate water sources, leading to scarcity of clean water.",
        "Kya pollution se soil fertility khatam hoti hai": "Yes, pollution can degrade soil quality and reduce its fertility.",
        "Kya pollution se health problems hoti hain": "Yes, pollution can cause various health issues, including respiratory diseases and allergies.",
        "Kya pollution ka koi solution hai": "Yes, solutions include reducing emissions, using renewable energy, and promoting recycling.",
        "Kya pollution se wildlife par effect padta hai": "Yes, pollution can harm wildlife by contaminating habitats and food sources.",
    };

    const answer = dataset[query] || null;
    if (answer) {
        return new Response(JSON.stringify({ answer }), {
            headers: { "Content-Type": "application/json" },
        });
    }

    // If the question is not found, call  API
    try {
        const response = await fetch("http://localhost:8000/api/debate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }), // send the user query
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const apiData = await response.json();

        console.log("FastAPI Response:", apiData);

        const generatedAnswer = apiData.answer || "Sorry, I couldn't understand your question.";

        return new Response(JSON.stringify({ answer: generatedAnswer }), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Error fetching from FastAPI:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch response from local AI." }), {
            headers: { "Content-Type": "application/json" },
        });
    }
}