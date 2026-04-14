---
permalink: /
layout: home
title: "Wenhao Zhang"
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}
{% assign selected_publications = site.publications | sort: "date" | reverse %}
{% assign selected_work = site.portfolio | reverse %}

<section class="home-hero">
  <div class="home-hero__main">
    <p class="home-eyebrow">Ph.D. Candidate · National University of Singapore</p>
    <h1 class="home-hero__title">Designing calmer, healthier, and more responsive indoor environments.</h1>
    <p class="home-hero__lead">I study occupant-centric controls, thermal comfort, sleep environments, and just-in-time adaptive interventions. My work combines field experiments, sensing, and data-driven control design to make buildings feel more adaptive to people rather than the other way around.</p>
    <div class="home-hero__actions">
      <a class="home-button" href="mailto:{{ site.author.email }}">Email</a>
      <a class="home-button home-button--ghost" href="{{ site.author.googlescholar }}">Google Scholar</a>
      <a class="home-button home-button--ghost" href="{{ base_path }}/cv/">Curriculum Vitae</a>
    </div>
  </div>

  <aside class="home-hero__aside">
    <div class="home-panel">
      <p class="home-panel__label">Current Focus</p>
      <p class="home-panel__text">Wearable-driven interventions for indoor comfort, bedroom environment optimization during sleep, and occupant-aware control strategies.</p>
    </div>
    <div class="home-panel">
      <p class="home-panel__label">Affiliations</p>
      <p class="home-panel__text">Department of the Built Environment, NUS</p>
      <p class="home-panel__text">BUDS Lab, SMU</p>
      <p class="home-panel__text">IDEAS Lab, NUS</p>
    </div>
    <div class="home-panel">
      <p class="home-panel__label">Supervision</p>
      <p class="home-panel__text"><a href="https://cis.smu.edu.sg/faculty/profile/8346/clayton-miller">Clayton Miller</a>, <a href="https://cde.nus.edu.sg/dbe/staff/adrian-chong-dr/">Adrian Chong</a>, and <a href="https://ced.berkeley.edu/people/stefano-schiavon">Stefano Schiavon</a>.</p>
    </div>
  </aside>
</section>

<section class="home-metrics reveal-on-scroll">
  <div class="home-metric">
    <span class="home-metric__value">{{ site.publications | size }}</span>
    <span class="home-metric__label">Publications</span>
  </div>
  <div class="home-metric">
    <span class="home-metric__value">{{ site.talks | size }}</span>
    <span class="home-metric__label">Talks</span>
  </div>
  <div class="home-metric">
    <span class="home-metric__value">{{ site.portfolio | size }}</span>
    <span class="home-metric__label">Projects</span>
  </div>
  <div class="home-metric">
    <span class="home-metric__value">{{ site.teaching | size }}</span>
    <span class="home-metric__label">Teaching</span>
  </div>
</section>

<section class="home-section reveal-on-scroll">
  <div class="home-section__heading">
    <p class="home-section__eyebrow">Research</p>
    <h2 class="home-section__title">A quieter and more human-centered direction for building intelligence.</h2>
  </div>
  <div class="home-two-column">
    <div>
      <p>I am interested in how digital systems can support comfort without becoming intrusive. That includes personal comfort modeling, sleep-related indoor environmental quality, and interventions that are timely enough to matter in everyday life.</p>
      <p>Before starting my Ph.D., I worked at <a href="https://designbuilder.co.uk/">DesignBuilder Software Ltd</a> on technical content and product education. That experience still shapes the way I approach tools: rigorous, practical, and designed to be usable beyond the lab.</p>
    </div>
    <div class="home-chip-grid">
      <span class="home-chip">Occupant-Centric Controls</span>
      <span class="home-chip">Indoor Thermal Comfort</span>
      <span class="home-chip">Sleep Environments</span>
      <span class="home-chip">JITAI</span>
      <span class="home-chip">Personal Comfort Models</span>
      <span class="home-chip">Reinforcement Learning</span>
      <span class="home-chip">Building Simulation</span>
      <span class="home-chip">Wearables and Sensing</span>
    </div>
  </div>
</section>

<section class="home-section reveal-on-scroll">
  <div class="home-section__heading">
    <p class="home-section__eyebrow">Selected Publications</p>
    <h2 class="home-section__title">Recent papers and ongoing research outputs.</h2>
  </div>
  <div class="feature-list">
    {% for post in selected_publications limit:3 %}
      <article class="feature-card">
        <p class="feature-card__meta">{{ post.venue }} · {{ post.date | date: "%Y" }}</p>
        <h3 class="feature-card__title"><a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a></h3>
        <p class="feature-card__excerpt">{{ post.excerpt }}</p>
      </article>
    {% endfor %}
  </div>
  <a class="section-link" href="{{ base_path }}/publications/">View all publications</a>
</section>

<section class="home-section reveal-on-scroll">
  <div class="home-section__heading">
    <p class="home-section__eyebrow">Selected Work</p>
    <h2 class="home-section__title">Projects, tools, and applied experiments beyond papers.</h2>
  </div>
  <div class="editorial-grid">
    {% for post in selected_work limit:4 %}
      {% assign excerpt_img = post.excerpt | split: "src='" | last | split: "'" | first %}
      <article class="editorial-card">
        <a class="editorial-card__link" href="{{ base_path }}{{ post.url }}">
          {% if excerpt_img contains "/" %}
            <div class="editorial-card__media">
              <img src="{{ excerpt_img }}" alt="{{ post.title }}" loading="lazy">
            </div>
          {% else %}
            <div class="editorial-card__placeholder">
              <span>{{ forloop.index | prepend: "0" }}</span>
            </div>
          {% endif %}
          <div class="editorial-card__body">
            <p class="editorial-card__meta">Project</p>
            <h3 class="editorial-card__title">{{ post.title }}</h3>
            <p class="editorial-card__excerpt">{{ post.excerpt | markdownify | strip_html | truncatewords: 22 }}</p>
          </div>
        </a>
      </article>
    {% endfor %}
  </div>
  <a class="section-link" href="{{ base_path }}/portfolio/">Browse all projects</a>
</section>

<section class="home-section reveal-on-scroll">
  <div class="home-section__heading">
    <p class="home-section__eyebrow">Recent Highlights</p>
    <h2 class="home-section__title">Selected updates from recent work.</h2>
  </div>
  <div class="timeline-list">
    <article class="timeline-item">
      <p class="timeline-item__date">Apr 2026</p>
      <p class="timeline-item__content">Paper <a href="{{ base_path }}/publication/2026-04-01-jitai-iaq-sleep">Just-in-Time Adaptive Interventions (JITAI) to Improve Indoor Air Quality in Sleep Environments</a> accepted by <strong>Indoor Air 2026</strong>.</p>
    </article>
    <article class="timeline-item">
      <p class="timeline-item__date">Jan 2026</p>
      <p class="timeline-item__content">Launched the <a href="https://poor-trader-dashboard.onrender.com">Poor Trader Dashboard</a>, a free market-sentiment tracker built from stitched public indicators.</p>
    </article>
    <article class="timeline-item">
      <p class="timeline-item__date">Aug 2025</p>
      <p class="timeline-item__content">Won <strong>Gold Medal</strong> and the <strong>Most Efficient AI Algorithm Award</strong> at the <a href="https://www.globalaichallenge.com/en/competition/">Global AI Challenge for Building E&amp;M Facilities 2025</a>.</p>
    </article>
    <article class="timeline-item">
      <p class="timeline-item__date">Dec 2024</p>
      <p class="timeline-item__content">Research published in <a href="https://www.sciencedirect.com/science/article/pii/S037877882401363X"><strong>Energy and Buildings</strong></a>.</p>
    </article>
  </div>
  <a class="section-link" href="{{ base_path }}/year-archive/">See the archive</a>
</section>


