---
layout: page
title: "Nuestros juegos"
subtitle: "De pequeños experimentos a aventuras completas."
description: "Algunos son pequeños, otros más grandes, y todos están hechos con mimo y amor por la jugabilidad."
permalink: /games/
lang: es
page_id: games
---

### Ya disponibles

{% assign games = site.games | where: "status", "published" | sort: 'order' | reversed %}
{% include game-cards.html %}

### Próximamente

{% assign games = site.games | where: "status", "coming-soon" | sort: 'order' | reversed %}
{% include game-cards.html %}
