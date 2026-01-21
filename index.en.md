---
layout: home
title: Constant Wave Games
hero: Transforming innovative ideas into captivating gaming experiences.
subtitle: Founded in 2024, we focus on sharp gameplay, clean design, and memorable experiences that push beyond the expected.
permalink: /
lang: en
page_id: index
---

### Next Releases

These are the games we’re currently building — bigger, bolder, and shaped by everything we’ve learned so far. New worlds, more personality, and the same focus on fun gameplay.

{% assign games = site.games | where: "status", "coming-soon" | sort: 'order' | reversed %}
{% include game-cards.html %}

### Available Now

Before jumping into bigger worlds, we built a couple of small games to explore ideas, mechanics, and platforms. Simple, fun, and straight to the point.

{% assign games = site.games | where: "status", "published" | sort: 'order' | reversed %}
{% include game-cards.html %}
