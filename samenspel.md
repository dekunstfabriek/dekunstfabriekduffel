---
title: samenspel
layout: default
top_image: Header-folder-2021-D.jpg
alt_tekst: collage van foto's van samenspelgroepen, maar ook banner met de tekst samenspel
description: In groep muziek spelen is één van de leukste dingen die je kan doen met
  je muziekinstrument. Bekijk hier alle mogelijke samenspel groepen van dit jaar in
  de Kunstfabriek.
intro_text:
---

<main id="top">
    <section class="ensemble">
      <div class="row ensemble__head">
        <!-- <h2>Samenspel</h2> -->
        <img src="/assets/img/{{ page.top_image }}" width="1820" alt="{{ page.alt_tekst }}">
        {{ page.intro_text }}
      </div>
      <div class="row ensemble__wrap">

      {% for ensemble in site.ensembles %}

     <article>
          <div class="ensemble__item ensemble__item--img">
            <img src="/assets/img/{{ ensemble.image }}" width="600" alt="{{ ensemble.alt_text }}" class="{{ ensemble.overlay }}">
            <figcaption class="capitalize">{{ ensemble.title }}</figcaption>
          </div>
          <div class="ensemble__item ensemble__item--uitleg">
            <p>{{ ensemble.beschrijving | escape }}</p>
          </div>
          <div class="ensemble__item ensemble__item--instr">
            <p>{{ ensemble.instrumenten }}</p>
          </div>
        </article>

       {% endfor %}
      </div>
    </section><!-- samenspel -->

  </main>
