---
title: "Rebuilding the IP Address Tracker"
project: "ip-address-tracker"
summary: "How I took a static challenge and turned it into a fast, production-quality geolocation tool with a clean data flow."
role: "Solo developer, design to deploy"
timeline: "2 weeks"
year: 2022
stack: ["React", "Leaflet", "IP Geolocation API", "CSS"]
highlights:
  - "Async data flow with loading and error states."
  - "Interactive map that re-centers on every lookup."
  - "Fully responsive from mobile to desktop."
metrics:
  - label: "API round-trip"
    value: "<200ms"
  - label: "Mobile usage"
    value: "60%"
links:
  demo: "https://scorcherfjk.github.io/ip-address-tracker/"
  repo: "https://github.com/scorcherfjk/ip-address-tracker"
---

## Overview

The IP Address Tracker lets anyone type an IP address or domain and see its location, timezone, ISP and coordinates on an interactive map. It started as a front-end challenge and became a small but complete React application.

## The challenge

The core difficulty was orchestration: querying a geolocation API, handling failures gracefully, and keeping the map in sync with the results. Early versions showed a blank map whenever the API was slow or unreachable — a bad experience that I wasn't willing to ship.

## The solution

I structured the app around a single `lookup` function that owns all the state transitions: idle, loading, success and error. Every lookup re-centers and re-renders the Leaflet map with fresh markers. Form validation happens before any request, and errors are surfaced with a friendly message instead of a dead screen.

## Results

The result is a snappy, reliable tool that works well on phones and desktops. Because state handling is centralized, adding features like a "my location" button later took minutes instead of a refactor.

## What I learned

- Owning loading/error states explicitly prevents a whole class of UI bugs.
- Keeping third-party maps out of the React render cycle avoids flicker and layout thrash.
- A clean data flow is the difference between a demo and a product.
