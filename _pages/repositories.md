---
layout: page
permalink: /repositories/
title: Softwares
nav: true
nav_order: 5
---

{% if site.data.repositories.github_users %}

## GitHub users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}


## GitHub Repositories

<div class="repo-grid">
  {% include repository/custom_repo_card.liquid
    title="Repeat-Aware Substitution Rate Estimator"
    owner="medvedevgroup"
    repo="Repeat-Aware_Substitution_Rate_Estimator"
    description="Estimates substitution rate based on k-spectrum analysis."
  %}
</div>
