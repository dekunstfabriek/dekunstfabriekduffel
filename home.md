---
title: home
permalink: "/home"
layout: default
quote1: Vind de artiest in jezelf!
quote2: Muziek geeft je kriebels
info_muziek: De muziekafdeling van De Kunstfabriek werkt zoals een muziekacademie,
  maar met een persoonlijke aanpak, zonder examens en in een ontspannen kader. De
  instrumentlessen zijn één-op-één zodat je een persoonlijk traject kan volgen op
  een professionele manier. Van de cursist wordt verwacht dat hij een regelmatige
  inzet toont.
info_BV: In de lessen beeldende vorming ontdek je je creatieve mogelijkheden. Je maakt
  kennis met vorm, kleur, ruimte en compositie. Je leert jezelf artistiek te uiten
  via verschillende technieken en met allerlei materialen. Voor volwassenen wordt
  de nadruk vooral gelegd op het aanleren van verschillende teken- en schildertechnieken.
info_talen: De Kunstfabriek is geen centrum voor volwassenenonderwijs (CVO), onze
  lesgevers zijn wel allemaal professioneel opgeleid.
---

  <main id="top">

    <div class="laatste-nieuws row">
        <div class="laatste-nieuws__item">
          <h2>Laatste Nieuws</h2>
          <!-- <small>laatste nieuws items... <br><a href="#">meer...</a></small> -->
            {% for post in site.posts limit: 2 %}
               <div class="nieuws__title-wrap">
                   <h4><a href="{{ post.url }}">{{ post.title }}</a></h4>
                    <p>gepost op: {{ post.date | date_to_string }}</p>
               </div>
                {{ post.excerpt | truncatewords: 15 | markdownify }}
            {% endfor %}
            <a href="/posts">meer Laatste Nieuws items ...</a>
        </div>
        <div class="laatste-nieuws__item">
         <h2>Afwezig / Aanwezig</h2>
          <p class="blue"><span class="aanwezig">Geen les op: </span><br>
                {% capture now %}{{"now" | date: "%s" | plus: 0 }}{% endcapture %}
                {% for afwezig in site.afwezigen %}
                  {% capture date %}{{afwezig.date | date: "%s" | plus: 86400 }}{% endcapture %}
                  {% if date >= now %}
                    <!-- post content here -->
                    &#8680; {{ afwezig.date | date: '%a %d %b %Y' }} - {{ afwezig.leraar }} <small>{{ afwezig.reden }}</small> <br>
                  {% endif %}
                {% endfor %}
          </p>
          <p class="blue"><span class="aanwezig">Lesverplaatsing op: </span><br>
             {% capture now %}{{"now" | date: "%s" | plus: 0 }}{% endcapture %}
                {% for lesverplaatsing in site.lesverplaatsing %}
                  {% capture date %}{{lesverplaatsing.date | date: "%s" | plus: 86400 }}{% endcapture %}
                  {% if date >= now %}
                    <!-- post content here -->
                    &#8680; {{ lesverplaatsing.date | date: '%a %d %b %Y' }} - {{ lesverplaatsing.leraar }} <br>
                  {% endif %}
                {% endfor %}
          </p>
        </div>
    </div> <!-- laatste-nieuws -->

    <div class="row festival__wrap">
      <h2 class="festival">Festivaldag</h2>
      <div class="festival__item--wrap">
        <div class="festival__item">
          <h3>Concertavond</h3>
          <p>vrijdag 5 mei (19.30 - 21 u.) Mijlstraatkerk</p>
          <p>Laat je onderdompelen in akoestische muziek met "Sterk Onversterkt".</p>
        </div><!-- festival__item -->
        <div class="festival__item">
          <h3>Festivaldag</h3>
          <p>zaterdag 6 mei (14 - 18 u.) De Kunstfabriek, Rietlei 103</p>
          <p>Proef van een sfeervolle namiddag met beeld, taal en muziek.</p>
        </div><!-- festival__item -->
        <div class="festival__item">
          <h3>Instrumentenvoorstelling</h3>
          <p>Bespeel verschillende instrumenten en maak een praatje met de leerkrachten.</p>
          <p>donderdag 11 mei (17.30 - 18.30 u.) Sint-Martinuskerk, Kerkstraat 31</p>
        </div><!-- festival__item -->
      </div><!-- festival__item--wrap -->

    </div><!-- row -->

    <!-- MUZIEK -->

    <div class="muziek">
      <div class="muziek__wrap row">
        <div class="muziek__item muziek__item--1">
         <a href="/home">
          <img src="/assets/img/strijkers3.jpg" alt="optreden door vioolklas in de Plaza in 2020">
         </a>
          <figcaption class="upcase">muziek</figcaption>
        </div>
        <div class="muziek__item muziek__item--1">
          <h3>info</h3>
          <p>{{ page.info_muziek }}</p>
<!--          <a href="/">meer info</a>-->
        </div>
      </div><!-- muziek__wrap -->
      <div class="muziek__wrap muziek__wrap--lessen row">
        <p>instrument</p>
        <p>samenspel</p>
        <p>koren</p>
        <p>muzieklab</p>
        <p>andere</p>

      </div>
    </div><!-- muziek -->

    <!-- SLOGAN -->
    <div class="slogan row">
      <q cite=""><i>{{ page.quote1 }}</i></q>
    </div>

    <!-- BEELDENDE VORMING -->
    <div class="bak">
      <div class="bak__wrap row">
        <div class="muziek__item muziek__item--2">
         <a href="/home">
          <img src="/assets/img/Beeldende-vorming-klein-web.jpeg" alt="beeldende kunsten">
         </a>
          <figcaption class="upcase">beeldende vorming</figcaption>
        </div>
        <div class="muziek__item muziek__item--2">
          <h3>info</h3>
          <p>{{ page.info_BV }}</p>
<!--          <a href="/">meer info</a>-->
        </div>
      </div><!-- bak__wrap -->
    </div><!-- bak -->

    <!-- SLOGAN -->
    <div class="slogan row">
      <q cite=""><i>{{ page.quote2 }}</i></q>
    </div>

    <!-- TALEN -->
    <div class="talen">
      <div class="talen__wrap row">
        <div class="muziek__item muziek__item--1">
         <a href="/talen">
          <img src="/assets/img/talen-2.jpg" alt="verschillende wensen van over de hele wereld zeggen hallo">
         </a>
          <figcaption class="upcase">talen</figcaption>
        </div>
        <div class="muziek__item muziek__item--1">
          <h3>info</h3>
          <p>{{ page.info_talen }}</p>
          <p>De Kunstfabriek werkt in een ontspannen kader, zonder examens, en met een persoonlijke aanpak. </p>
<!--          <a href="/">meer info</a>-->
        </div>
      </div><!-- talen__wrap -->
    </div><!-- talen -->

      <br>
      <hr>
      <br>

  </main>
