---
title: samenspel
top_image: Header-folder-2021-D.jpg
alt_tekst: collage van foto's van samenspelgroepen, maar ook banner met de tekst samenspel
description: In groep muziek spelen is één van de leukste dingen die je kan doen met
  je muziekinstrument. Bekijk hier alle mogelijke samenspel groepen van dit jaar in
  de Kunstfabriek.
intro_text: |-
  Spelen in groep kan zo geweldig zijn. Samen muziek maken, klanken die verweven in elkaar en jouw stem die mee de harmonie maakt, interactie met de andere muzikanten, via de muziek een sfeer creëren, voelen dat je in een groep een belangrijk onderdeel bent van het gebeuren, ... Dat gevoel is onbeschrijflijk.

  In de Kunstfabriek hebben we heel uiteenlopende samenspelgroepen. Van kleine gemengde groepen over instrumenten-ensembles tot rock-bands. Ook kunnen bestaande groepen via bandcoaching begeleid worden.

  Er zijn dit jaar enkele **nieuwe** samenspelgroepen. Onder voorbehoud van voldoende inschrijvingen worden deze opgericht: **SOUL/FUNK - FOLK - FILM-muziek - Pop-ensemble unplugged**
layout: default
---

<main id="top">
    <section class="ensemble">
      <div class="row ensemble__head">
        <!-- <h2>Samenspel</h2> -->
        <img src="/assets/img/{{ page.top_image }}" width="1820" alt="{{ page.alt_tekst }}">
        {{ page.intro_text | markdownify }}
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
