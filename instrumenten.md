---
title: instrumenten
layout: default
description: Filmpjes met een voorstelling van alle instrumenten die worden aangeleerd
  in de Kunstfabriek in de afdeling muziek.
---

<main id="top">
    <div class="instr-wrap row">

        <h2 class="upcase">Instrumenten</h2>

       <div class="instr-grid">
        {% for instrument in site.instrumenten %}

        <div class="instr-item">
            <h3><a href="{{ instrument.url }}">{{ instrument.instrument | capitalize }}</a></h3>

            <video controls preload="none" width="100%" poster="/assets/img/{{ instrument.instrument }}-thumb.jpg">

                <source src="/assets/video/{{ instrument.video }}" type="video/mp4">

                <!-- andere formaten toevoegen hoeft niet meer. Alle browsers supporten mp4 -->

                <p>Your browser doesn't support HTML5 video. Here is
                    a <a href="https://youtu.be/bkp9aVFeTPE">link to the video</a> instead.</p>

                  <!-- ook duidelijk: dient voor als de browser toch niet HTML5 video ondersteunt -->

              </video>

            <p>{{ instrument.vraag }} </p>
        </div>

        {% endfor %}
        </div><!-- instr-grid -->

    </div><!-- instr-wrap -->
</main>
