---
layout: page
permalink: /publications/
title: Publications
description: <a href='https://scholar.google.com/citations?user=HYmzF-QAAAAJ'><u>Google Scholar</u></a>
years: [2025, 2024, 2023, 2021]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
