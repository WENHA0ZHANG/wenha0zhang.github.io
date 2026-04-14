---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="archive-intro">
    <p class="archive-intro__eyebrow">Research Output</p>
    <p class="archive-intro__lead">A selected record of peer-reviewed papers, conference publications, and ongoing work. For the most up-to-date citation list, you can also visit <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</p>
  </div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
