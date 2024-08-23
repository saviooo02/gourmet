const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Groq = require("groq-sdk");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Groq SDK
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Start server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// Route to handle recipe generation
app.post("/api/recipe", async (req, res) => {
  const formdata = req.body;

  // Construct the prompt for recipe generation
  const prompt = `Generate a ${formdata.cuisine} recipe with ingredients like ${formdata.ingredients} in ${formdata.time} minutes.`;

  try {
    // Generate chat completion using Groq SDK
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-8b-8192", // Ensure this model is available or replace with a valid model
    });

    // Send the response to the frontend
    res.send({
      recipe: chatCompletion.choices[0]?.message?.content || "No recipe found",
    });
  } catch (error) {
    console.error("Error generating recipe:", error.message);
    res.status(500).send("Error generating recipe");
  }
});
