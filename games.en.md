---
layout: page
title: "Our Games"
subtitle: "From small experiments to full-featured adventures."
description: "Some are small, some are bigger, and all of them are made with care and a love for gameplay."
permalink: /games/
lang: en
page_id: games
---

### Coming Soon

{% assign games = site.games | where: "status", "coming-soon" | sort: 'order' | reversed %}
{% include game-cards.html %}

### Available Now

{% assign games = site.games | where: "status", "published" | sort: 'order' | reversed %}
{% include game-cards.html %}
