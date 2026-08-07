---
title: "Shipping the Weather App"
project: "weather-app"
summary: "Turning a weather API into a calm, useful product — with geolocation, smart defaults and a design people actually enjoy using."
role: "Solo developer, design to deploy"
timeline: "3 weeks"
year: 2023
stack: ["React", "OpenWeather API", "Tailwind CSS"]
highlights:
  - "Geolocation with graceful fallback to a default city."
  - "5-day forecast with hourly detail."
  - "Design system built with Tailwind tokens."
metrics:
  - label: "API calls cached"
    value: "90%"
  - label: "Initial load"
    value: "<1.5s"
links:
  demo: "https://scorcherfjk.github.io/weather-app/"
  repo: "https://github.com/scorcherfjk/weather-app"
---

## Overview

The Weather App gives you the current conditions and a 5-day forecast for your location. What started as a simple API wrapper grew into a small design system: tokens, reusable components and thoughtful empty and loading states.

## The challenge

Weather APIs are slow and rate-limited, and geolocation permission is flaky. On top of that, a weather app that looks generic adds nothing — I wanted a UI with character that still stayed out of the way.

## The solution

I made three key decisions:

1. **Cache aggressively.** Responses are cached in memory and sessionStorage so repeat visits don't hammer the API.
2. **Smart defaults.** If geolocation is denied, the app falls back to the last city, then to a sensible default — never a dead screen.
3. **Design tokens first.** I built the UI from a small set of Tailwind tokens so every state (sunny, rain, night) feels consistent and calm.

## Results

The app loads fast on slow connections, respects the user's permission choices, and the visual system makes the data feel trustworthy. The component library I built here got reused in later projects.

## What I learned

- Caching is a feature, not an optimization.
- Graceful degradation matters more than edge-case polish.
- A small, consistent design system pays off across every future screen.
