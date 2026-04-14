---
permalink: /
layout: home
title: "Wenhao Zhang"
redirect_from: 
  - /about/
  - /about.html
---

<<<<<<< HEAD
Wenhao Zhang is a Ph.D. cnadidate from [Department of The Built Environment](https://cde.nus.edu.sg/dbe/), [National University of Singapore](https://nus.edu.sg/). His research interest includes occupant-centric controls and indoor thermal comfort. He currently works on just-in-time adaptive intervention for indoor comfort, dynamic bedroom environment optimization during sleep, and cold-start personal comfort model design. Before joining the NUS, he worked at [DesignBuilder Software Ltd](https://designbuilder.co.uk/), where he was responsible for developing training content for DesignBuilder scripting tools.
=======
{% include base_path %}
>>>>>>> 02f41fd06a8fc0e459375fd63d903a33c4fdc4e1

<div class="home-hero">
  <div class="home-hero__text">
    <h1>Wenhao<br/>Zhang</h1>
    <span class="home-hero__role">Ph.D. Candidate · National University of Singapore</span>
    <div class="home-hero__bio">
      <p>Researching occupant-centric controls and indoor thermal comfort. Currently working on just-in-time adaptive intervention for indoor comfort, dynamic bedroom environment optimization during sleep, and cold-start personal comfort model design.</p>
      <p>Supervised by <a href="https://cis.smu.edu.sg/faculty/profile/8346/clayton-miller">Prof. Clayton Miller</a> (SMU), <a href="https://cde.nus.edu.sg/dbe/staff/adrian-chong-dr/">Prof. Adrian Chong</a> (NUS), and <a href="https://ced.berkeley.edu/people/stefano-schiavon">Prof. Stefano Schiavon</a> (UC Berkeley).</p>
    </div>
    <div class="home-hero__links">
      <a href="mailto:{{ site.author.email }}"><i class="fas fa-envelope"></i> Email</a>
      <a href="https://scholar.google.com/citations?hl=zh-CN&user=11jU6YIAAAAJ"><i class="ai ai-google-scholar"></i> Scholar</a>
      <a href="https://github.com/{{ site.author.github }}"><i class="fab fa-github"></i> GitHub</a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}"><i class="fab fa-linkedin"></i> LinkedIn</a>
      <a href="{{ base_path }}/cv/"><i class="fas fa-file-alt"></i> CV</a>
    </div>
  </div>
  <div class="home-hero__photo">
    <img src="{{ base_path }}/images/profile_zhang.png" alt="Wenhao Zhang">
  </div>
</div>

<div class="home-divider"><hr/></div>

<div class="home-section reveal-on-scroll">
  <h2 class="home-section__title">Selected Work</h2>
  <div class="featured-work">
    {% assign sorted_portfolio = site.portfolio | sort: 'title' | reverse %}
    {% for post in sorted_portfolio limit:6 %}
    <a href="{{ base_path }}{{ post.url }}" class="featured-work__item">
      <div class="featured-work__image">
        {% assign excerpt_img = post.excerpt | split: "src='" | last | split: "'" | first %}
        {% if excerpt_img contains "/" %}
          <img src="{{ excerpt_img }}" alt="{{ post.title }}" loading="lazy">
        {% else %}
          <img src="{{ base_path }}/images/placeholder.png" alt="{{ post.title }}" loading="lazy" style="object-fit: contain; padding: 2em; background: #f0f0f0;">
        {% endif %}
      </div>
      <div class="featured-work__overlay">
        <p class="featured-work__title">{{ post.title }}</p>
      </div>
    </a>
    {% endfor %}
  </div>
  <a href="{{ base_path }}/portfolio/" class="view-all">View all work →</a>
</div>

<div class="home-divider"><hr/></div>

<div class="home-section reveal-on-scroll">
  <h2 class="home-section__title">Recent News</h2>
  <ul class="news-timeline">
    <li class="news-timeline__item">
      <span class="news-timeline__date">Apr 2026</span>
      <div class="news-timeline__content">Paper <a href="/publication/2026-04-01-jitai-iaq-sleep">"Just-in-Time Adaptive Interventions (JITAI) to Improve Indoor Air Quality in Sleep Environments"</a> accepted by <strong>Indoor Air 2026</strong>.</div>
    </li>
    <li class="news-timeline__item">
      <span class="news-timeline__date">Jan 2026</span>
      <div class="news-timeline__content">Launched the <a href="https://poor-trader-dashboard.onrender.com">Poor Trader Dashboard</a> — a free market sentiment tracker.</div>
    </li>
    <li class="news-timeline__item">
      <span class="news-timeline__date">Nov 2025</span>
      <div class="news-timeline__content">Poster abstract on <a href="https://dl.acm.org/doi/10.1145/3736425.3772103">dynamic bedroom air temperature control</a> published in <strong>BuildSys'25</strong>.</div>
    </li>
    <li class="news-timeline__item">
      <span class="news-timeline__date">Aug 2025</span>
      <div class="news-timeline__content">Won <strong>Gold Medal</strong> and <strong>Most Efficient AI Algorithm Award</strong> at the <a href="https://www.globalaichallenge.com/en/competition/">Global AI Challenge for Building E&M Facilities 2025</a>.</div>
    </li>
    <li class="news-timeline__item">
      <span class="news-timeline__date">Jul 2025</span>
      <div class="news-timeline__content">Paper <a href="https://www.researchgate.net/publication/393870238">"Wrist to Rest"</a> accepted by <strong>CISBAT 2025</strong>.</div>
    </li>
    <li class="news-timeline__item">
      <span class="news-timeline__date">Apr 2025</span>
      <div class="news-timeline__content">Paper on <a href="https://www.researchgate.net/publication/394052941">bedroom ventilation and air quality during sleep</a> accepted by <strong>Healthy Building 2025</strong>.</div>
    </li>
    <li class="news-timeline__item">
      <span class="news-timeline__date">Dec 2024</span>
      <div class="news-timeline__content">Paper published in <a href="https://www.sciencedirect.com/science/article/pii/S037877882401363X"><strong>Energy and Buildings</strong></a>.</div>
    </li>
    <li class="news-timeline__item">
      <span class="news-timeline__date">Apr 2024</span>
      <div class="news-timeline__content">Paper published in <a href="https://www.sciencedirect.com/science/article/pii/S2352710224010659"><strong>Journal of Building Engineering</strong></a>.</div>
    </li>
  </ul>
  <a href="{{ base_path }}/year-archive/" class="view-all">All news →</a>
</div>

<div class="home-divider"><hr/></div>

<div class="home-section reveal-on-scroll">
  <h2 class="home-section__title">Research Interests</h2>
  <div class="home-tags">
    <span class="home-tag">Occupant-Centric Controls</span>
    <span class="home-tag">Indoor Thermal Comfort</span>
    <span class="home-tag">Just-in-Time Adaptive Intervention</span>
    <span class="home-tag">Bedroom Environment Optimization</span>
    <span class="home-tag">Personal Comfort Models</span>
    <span class="home-tag">Reinforcement Learning</span>
    <span class="home-tag">Building Energy Simulation</span>
  </div>
</div>

