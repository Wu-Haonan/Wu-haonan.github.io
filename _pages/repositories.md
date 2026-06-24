---
layout: page
permalink: /repositories/
title: Softwares
nav: true
nav_order: 5
---

{% for section in site.data.repositories.sections %}
<h3>{{ section.title }}</h3>

  <div class="repo-grid">
    {% for repo_full_name in section.repos %}
      {% assign repo = site.data.github_repo_metadata[repo_full_name] %}
      {% include repository/custom_repo_card.liquid
        full_name=repo_full_name
        description=repo.description
        language=repo.language
        stars=repo.stars
        forks=repo.forks
        url=repo.url
      %}
    {% endfor %}
  </div>
{% endfor %}
