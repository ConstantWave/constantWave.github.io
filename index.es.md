---
layout: home
title: Constant Wave Games
hero: Transformamos ideas innovadoras en experiencias de juego cautivadoras.
subtitle: Fundada en 2024, nos centramos en una jugabilidad precisa, un diseño limpio y experiencias memorables que van más allá de lo esperado.
permalink: /
lang: es
page_id: index
---

### Próximos lanzamientos

Estos son los juegos que estamos construyendo ahora: más grandes, más ambiciosos y con todo lo que hemos aprendido hasta hoy. Nuevos mundos, más personalidad y el mismo foco en la jugabilidad divertida.

{% assign games = site.games | where: "status", "coming-soon" | sort: 'order' | reversed %}
{% include game-cards.html %}

### Ya disponibles

Antes de dar el salto a mundos más grandes, hicimos un par de juegos pequeños para explorar ideas, mecánicas y plataformas. Simples, divertidos y directos al grano.

{% assign games = site.games | where: "status", "published" | sort: 'order' | reversed %}
{% include game-cards.html %}

### Más allá de los juegos

También colaboramos en proyectos de investigación que aplican tecnología interactiva y realidad mixta más allá del entretenimiento.

{% assign researches = site.researches | sort: 'order' | reversed %}
{% include research-collaborators.html %}

[Más sobre nuestras colaboraciones en investigación →](/researches)
