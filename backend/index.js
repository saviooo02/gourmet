const express = require("express");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const Groq = require("groq-sdk");
require("dotenv").config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: "https://gourmet-client.vercel.app/",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  message: "Too many requests from this IP, please try again later.",
});

app.use(cors(corsOptions)); // Apply CORS configuration

app.use(bodyParser.json());
app.use(limiter);

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Route to handle recipe generation
app.post("/recipe", async (req, res) => {
  const formdata = req.body;

  const prompt = `Generate a ${formdata.cuisine} recipe with ingredients like ${formdata.ingredients} in ${formdata.time} minutes.`;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-8b-8192",
    });

    res.send({
      recipe: chatCompletion.choices[0]?.message?.content || "No recipe found",
    });
  } catch (error) {
    console.error("Error generating recipe:", error.message);
    res.status(500).send("Error generating recipe");
  }
});
