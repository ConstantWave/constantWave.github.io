---
layout: page
title: "Investigación y colaboraciones"
subtitle: "Aplicamos tecnología de juegos más allá del entretenimiento."
description: "También colaboramos en proyectos de investigación aplicada fuera del desarrollo tradicional de videojuegos."
permalink: /researches/
lang: es
page_id: researches
---

### Nuestras colaboraciones

{% assign researches = site.researches | sort: 'order' | reversed %}
{% include research-cards.html %}
