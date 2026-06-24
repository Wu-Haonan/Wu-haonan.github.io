---
layout: page
permalink: /repositories/
title: Softwares
nav: true
nav_order: 5
---

{% for section in site.data.repositories.sections %}
<h3>{{ section.title }}</h3>

  {% if section.note %}
    <p class="repo-section-note">{{ section.note }}</p>
  {% endif %}
  <div class="repo-grid">
    {% for repo_item in section.repos %}
      {% if repo_item.name %}
        {% assign repo_full_name = repo_item.name %}
        {% assign repo_note = repo_item.note %}
      {% else %}
        {% assign repo_full_name = repo_item %}
        {% assign repo_note = nil %}
      {% endif %}
      {% assign repo = site.data.github_repo_metadata[repo_full_name] %}
      {% include repository/custom_repo_card.liquid
        full_name=repo_full_name
        note=repo_note
        description=repo.description
        language=repo.language
        stars=repo.stars
        forks=repo.forks
        url=repo.url
      %}
    {% endfor %}
  </div>
{% endfor %}
