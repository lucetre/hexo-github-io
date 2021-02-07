---
title: Music Chords with Mathematics
date: 2021-02-06 15:30:30
categories:
- Study
tags:
- music
- math
- chord
---

<style>
.value {
  text-align: center;
  font-weight: bold;
  font-size: 3em;
  height: auto;
  width: 100%;
  line-height: 60px;
  margin: 20px auto;
  letter-spacing: -.07em;
}
input[type="range"] {
  display: block;
  -webkit-appearance: none;
  background-color: #bdc3c7;
  width: 95%;
  height: 5px;
  border-radius: 5px;
  margin: 0 auto;
  outline: 0;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background-color: #e74c3c;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  transition: .3s ease-in-out;
}
input[type="range"]::-webkit-slider-thumb:hover {
  background-color: white;
  border: 2px solid #e74c3c;
}
input[type="range"]::-webkit-slider-thumb:active {
  transform: scale(1.6);
} 
.fraction {
    display: inline-block;
    width: 2em;
}
.numerator {
    text-align: center;
    border-bottom: 1px solid black; 
}
.denominator {
    text-align: center;
}
</style>

<script src="/js/Tone.js"></script>
<script src="/js/yui-min.js"></script>
 
<div style="width:100%;overflow:hidden;">
    <div style="width:30%;float:left;text-align:center">
        <div class="yui3-skin-sam">
            <div id="demo"></div>
        </div>
    </div>
    <div style="width:70%;float:right;text-align:center">
        <div class="value">
            <span class="fraction"><div class="numerator">1</div><div class="denominator">1</div></span>
        </div>
        <input type="range" min="-1" max="1" step="0.0001" value="0" onChange="playCouple(this)">
    </div>
</div>

<script src="/js/chord.js"></script>

<div>
    <button id="tone-1" class="button is-secondary" onClick="playSingle(this)">440</button>
    <button id="tone-2" class="button is-secondary" onClick="playSingle(this)">540</button>
    <button id="tone-3" class="button is-secondary" onClick="playSingle(this)">640</button>
    <button id="all" class="button is-primary" onClick="playAll(this)"><i class="fas fa-music"></i></button>
</div>
