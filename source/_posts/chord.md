---
title: Music Chord with Mathematics
date: 2021-02-06 15:30:30
categories:
- Study
tags:
- music
- math
- chord
---


<script src="/js/Tone.js"></script>
<script src="/js/chord.js"></script>


<input type="range" value="0" min="0" max="1000" step="100" onChange>



<button id="tone-1" class="button is-secondary" onClick="play(this)">440</button>
<button id="tone-2" class="button is-secondary" onClick="play(this)">540</button>
<button id="tone-3" class="button is-secondary" onClick="play(this)">640</button>
<button id="all" class="button is-primary" onClick="playAll(this)"><i class="fas fa-music"></i></button>
