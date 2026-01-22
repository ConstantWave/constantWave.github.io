---
layout: page
title: "Research & Collaborations"
subtitle: Applying game technology beyond entertainment.
description: "We also collaborate on applied research projects outside traditional game development."
permalink: /researches/
lang: en
page_id: researches
---

### Our Collaborations

{% assign researches = site.researches | sort: 'order' | reversed %}
{% include research-cards.html %}
