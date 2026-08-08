---
title: "Ichigo: an NLP assistant for Discord"
project: "ichigo"
summary: "A full-stack AI assistant that automatically answers FAQ questions in Discord — planned and delivered end to end, from an intent-classification model to a FastAPI backend and the bot itself."
role: "Full-stack developer & project lead"
timeline: "1.5 months"
year: 2021
stack: ["Python", "scikit-learn", "NLTK", "spaCy", "FastAPI", "MongoDB", "Discord.js"]
highlights:
  - "Custom Spanish intent-classification model (Naive Bayes) trained on 9 FAQ intents."
  - "Full project lifecycle: planning, kickoff, insights, delivery and closure."
  - "Three decoupled services: ML model, FastAPI backend and Discord bot."
  - "MongoDB as the source of truth for intents, messages and response data."
metrics:
  - label: "Intent categories"
    value: "9"
  - label: "Repositories"
    value: "3"
  - label: "Project duration"
    value: "1.5 mo"
links:
  repos:
    - label: "Backend"
      url: "https://github.com/Scorcherfjk/ichigo-assistant-backend"
    - label: "Discord bot"
      url: "https://github.com/Scorcherfjk/ichigo-assistant-discord"
    - label: "ML model"
      url: "https://github.com/Scorcherfjk/ichigo-assistant-model"
---

## Overview

**Ichigo (いちご)** is a full-stack NLP assistant built to answer FAQ questions in Discord automatically. The client wanted a level of language understanding good enough that users could ask the same thing in many different ways and still get the right answer.

It's not just a bot — it's the whole delivery lifecycle: requirement analysis, a kickoff presentation, an insights report, an ML model, documentation, the Discord integration, a test plan and a production service. I was the developer and project lead across all of it.

## The challenge

FAQ questions come in many forms. "How do I contact you?" and "I want a phone number to call" mean the same thing, but a rule-based bot would miss it. The project needed a model that understands user intent in Spanish, plus a backend to serve it and a chat interface people actually use.

The timeline was tight: from planning (October 18) to closure (December 5) — about a month and a half.

## The architecture

I split the project into three decoupled pieces, each in its own repository:

1. **ML model** — a Python pipeline (NLTK, spaCy, scikit-learn) that trains a Naive Bayes classifier on intent datasets. Spanish stopword removal and tokenization feed a pickled model (`IchigoModel.v1`) that the backend loads at runtime.

2. **Backend** — a FastAPI service with REST endpoints for `intents` and `messages`. It connects to MongoDB (source of truth for intent definitions and conversation history), runs the model over incoming text, and returns the best matching response.

3. **Discord bot** — a Node.js service using `discord.js` that listens for direct messages, forwards the payload to the backend, reacts and replies with the matched answer.

## The intents

The model was trained on nine FAQ intent categories, each with many example phrasings:

- Saludo (greetings) · Despedida (farewells) · Contacto · Servicios · Pagos · Entregas · Ubicación · Cultura (mission & values) · Reclutamiento

This is what makes the assistant feel natural: a user can greet, ask about payments, or check delivery countries and the model classifies the intent before responding.

## The delivery process

Because this was a real engagement, I planned it like one:

- **Kickoff** — a presentation covering goals, success metrics, scope (what's in / what's out), timeline and stakeholders.
- **Insights report** — analysis before building, so the model and responses were grounded in real customer language.
- **Deliverables** — ML model, documentation, the Discord assistant, a test plan and a production service, tracked on a kanban board.
- **Closure** — lessons learned and external feedback to improve future projects.

## Results

Ichigo shipped on schedule: users could ask FAQ questions in Discord in their own words and get accurate automated answers. The modular split meant each service was testable and replaceable independently — and the whole lifecycle produced documentation and lessons learned that made the next project faster to start.

## What I learned

- A project is more than code — planning, scope and closure discipline is what makes delivery predictable.
- Clean service boundaries (model / API / client) make an AI system debuggable and upgradable.
- Intent classification beats rules for messy, real-world user language.
- Small, well-organized datasets per intent are enough to build a genuinely useful classifier.
