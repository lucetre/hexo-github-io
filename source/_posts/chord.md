---
title: Music Chords with Mathematics
date: 2021-02-13 15:30:30
categories:
- Study
tags:
- music
- temperament
- ratio
- math
- chord
- harmony
---

<style>
.valuefrac {
  text-align: center;
  font-weight: bold;
  font-size: 3em;
  height: auto;
  vertical-align:middle;
  width: 100%;
  line-height: 60px;
  margin: 40px auto;
  letter-spacing: -.07em;
  cursor:pointer;
}
.valuefrac:hover {
    color: #3273dc;
}
.fraction {
    display: inline-block;
    width: 2em;
}
.numerator {
    text-align: center;
    border-bottom: 2px solid; 
}
.denominator {
    text-align: center;
}
.f {
    font-size: 10pt;
    display: inline-block;
    width: 2em;
}
.n {
    text-align: center;
    border-bottom: 1px solid; 
}
.d {
    text-align: center;
}
span {
    height: auto;
    vertical-align: middle;
}
span#small{
    margin-left: 2px;
    font-size: 8pt;
}
</style>

<script src="/js/Tone.js"></script>
<script src="/js/yui-min.js"></script>
 
### **Finding Consonance**
<p style="text-indent:30px">
How can we distinguish euphony and cacophony? The quality of sound is determined by frequency, one of the main characteristics regarding a singular tone. A chord containing several tones can be harmonious and discordant depending on its frequency set. Tuning and temperament produce the desired pitch regarding a given pitch and modify that tuning to lessen dissonance.
</p>
<p style="text-indent:30px">
There is a simple and easy way to determine whether two tones are compatible. Consonance happens when there is little interference engendered by pulsations of sound waves. And it occurs only when the ratio between the frequencies of the two tones, so-called distance, is numerically simple. A distance between two pitches can be mathematically described as the ratio between the frequency of the first pitch and the second frequency.
</p>

<script src="/js/chord.js"></script>

<div style="width:100%;overflow:hidden;">
    <div style="width:35%;float:left;text-align:center">
        <div class="yui3-skin-sam">
            <div id="demo1"></div>
        </div>
    </div>
    <div style="width:30%;float:left;text-align:center">
        <div class="valuefrac" onClick="playCouple()">
            <span class="fraction"><div class="numerator">2</div><div class="denominator">3</div></span>
        </div>
    </div>
    <div style="width:35%;float:left;text-align:center">
        <div class="yui3-skin-sam">
            <div id="demo2"></div>
        </div>
    </div>
</div>

<p style="text-indent:30px">
    Let's delve into an example of two pitches, 260 Hz and 390 Hz above. We can calculate the distance as 2:3, the consonant interval named the fifth (from C to G). The same process can reduce various frequency ratios. You can drag and modify each frequency value and check out the simplest integer ratio of two pitches. Clicking the fraction lets you hear a custom-made chord of two pitches.
</p>

### <b>Musical Temperament</b> (12 tones /  1 octave)

<p style="text-indent:30px">
    Temperament is especially crucial for keyboard instruments, which allow players to play only the pitches assigned to the various keys. Thereby, altering a single note's pitch can spoil the whole performance. Different musical temperament methods like just intonation, meantone temperament have been developed to tune . We'll identify how those methods create 12 tones in 1 octave (12-TET) and how melodious they sound.
</p>

> *From articles in Wikipedia,*
> * **[Pythagorean tuning](https://en.wikipedia.org/wiki/Pythagorean_tuning)** is a system of musical tuning in which the frequency ratios of all intervals are based on the ratio 3:2.
> * **[Just intonation or pure intonation](https://en.wikipedia.org/wiki/Just_intonation)** is the tuning of musical intervals as whole number ratios (such as 3:2 or 4:3) of frequencies.
> * **[Equal temperament](https://en.wikipedia.org/wiki/Equal_temperament)** divides the octave into 12 parts, all of which are equal on a logarithmic scale, with a ratio equal to the 12th root of 2.

<p style="text-indent:30px">
    Don't hesitate to click on each entry of the table below and check out how it sounds. 
    Listen to random music composed on each temperament. 
    Our aural sense can find that the most familiar one is the equal temperament, commonly used in piano tuning.
</p>

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-size:13px;
  font-weight:bold;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-c3ow{
    border-color:inherit;vertical-align:middle;
}
td.tg-c3ow {
    font-size: 10pt;
    cursor:pointer;
}
td.tg-c3ow:hover {
    background-color:#f7f7f7;
}
td.tg-c3ow.playing {
    background-color:#efefef;
    color:#3273dc;
    font-weight:bold;
}
</style>
<table class="tg">
<thead>
  <tr>
    <th id="freq" class="tg-c3ow">260 Hz</th>
    <th class="tg-c3ow">P1</th>
    <th class="tg-c3ow">m2</th>
    <th class="tg-c3ow">M2</th>
    <th class="tg-c3ow">m3</th>
    <th class="tg-c3ow">M3</th>
    <th class="tg-c3ow">P4</th>
    <th class="tg-c3ow">TT</th>
    <th class="tg-c3ow">P5</th>
    <th class="tg-c3ow">m6</th>
    <th class="tg-c3ow">M6</th>
    <th class="tg-c3ow">m7</th>
    <th class="tg-c3ow">M7</th>
    <th class="tg-c3ow">P8</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow" onClick="playTemp('p')">Pythagorean Tuning <i class="fas fa-headphones-alt"></i></td>
      <td id='pC' class="tg-c3ow" onClick="playTone('p', 0)"><span class="f"><div class="n">3<sup>0</sup></div><div class="d">2<sup>0</sup></div></span></td>
      <td id='pCs' class="tg-c3ow" onClick="playTone('p', 1)"><span class="f"><div class="n">2<sup>8</sup></div><div class="d">3<sup>5</sup></div></span></td>
      <td id='pD' class="tg-c3ow" onClick="playTone('p', 2)"><span class="f"><div class="n">3<sup>2</sup></div><div class="d">2<sup>3</sup></div></span></td>
      <td id='pDs' class="tg-c3ow" onClick="playTone('p', 3)"><span class="f"><div class="n">2<sup>5</sup></div><div class="d">3<sup>3</sup></div></span></td>
      <td id='pE' class="tg-c3ow" onClick="playTone('p', 4)"><span class="f"><div class="n">3<sup>4</sup></div><div class="d">2<sup>6</sup></div></span></td>
      <td id='pF' class="tg-c3ow" onClick="playTone('p', 5)"><span class="f"><div class="n">2<sup>2</sup></div><div class="d">3<sup>1</sup></div></span></td>
      <td id='pFs' class="tg-c3ow" onClick="playTone('p', 6)"><span class="f"><div class="n">3<sup>6</sup></div><div class="d">2<sup>9</sup></div></span></td>
      <td id='pG' class="tg-c3ow" onClick="playTone('p', 7)"><span class="f"><div class="n">3<sup>1</sup></div><div class="d">2<sup>1</sup></div></span></td>
      <td id='pGs' class="tg-c3ow" onClick="playTone('p', 8)"><span class="f"><div class="n">2<sup>7</sup></div><div class="d">3<sup>4</sup></div></span></td>
      <td id='pA' class="tg-c3ow" onClick="playTone('p', 9)"><span class="f"><div class="n">3<sup>3</sup></div><div class="d">2<sup>4</sup></div></span></td>
      <td id='pAs' class="tg-c3ow" onClick="playTone('p', 10)"><span class="f"><div class="n">2<sup>4</sup></div><div class="d">3<sup>2</sup></div></span></td>
      <td id='pB' class="tg-c3ow" onClick="playTone('p', 11)"><span class="f"><div class="n">3<sup>5</sup></div><div class="d">2<sup>7</sup></div></span></td>
      <td id='pC+' class="tg-c3ow" onClick="playTone('p', 12)"><span class="f"><div class="n">2<sup>1</sup></div><div class="d">3<sup>0</sup></div></span></td>
  </tr>
  <tr>
    <td class="tg-c3ow" onClick="playTemp('j')">Just Intonation <i class="fas fa-headphones-alt"></i></td>
      <td id='jC' class="tg-c3ow" onClick="playTone('j',0)"><span class="f"><div class="n">1</div><div class="d">1</div></span></td>
      <td id='jCs' class="tg-c3ow" onClick="playTone('j',1)"><span class="f"><div class="n">12</div><div class="d">11</div></span></td>
      <td id='jD' class="tg-c3ow" onClick="playTone('j',2)"><span class="f"><div class="n">9</div><div class="d">8</div></span></td>
      <td id='jDs' class="tg-c3ow" onClick="playTone('j',3)"><span class="f"><div class="n">6</div><div class="d">5</div></span></td>
      <td id='jE' class="tg-c3ow" onClick="playTone('j',4)"><span class="f"><div class="n">5</div><div class="d">4</div></span></td>
      <td id='jF' class="tg-c3ow" onClick="playTone('j',5)"><span class="f"><div class="n">4</div><div class="d">3</div></span></td>
      <td id='jFs' class="tg-c3ow" onClick="playTone('j',6)"><span class="f"><div class="n">7</div><div class="d">5</div></span></td>
      <td id='jG' class="tg-c3ow" onClick="playTone('j',7)"><span class="f"><div class="n">3</div><div class="d">2</div></span></td>
      <td id='jGs' class="tg-c3ow" onClick="playTone('j',8)"><span class="f"><div class="n">8</div><div class="d">5</div></span></td>
      <td id='jA' class="tg-c3ow" onClick="playTone('j',9)"><span class="f"><div class="n">5</div><div class="d">3</div></span></td>
      <td id='jAs' class="tg-c3ow" onClick="playTone('j',10)"><span class="f"><div class="n">7</div><div class="d">4</div></span></td>
      <td id='jB' class="tg-c3ow" onClick="playTone('j',11)"><span class="f"><div class="n">11</div><div class="d">6</div></span></td>
      <td id='jC+' class="tg-c3ow" onClick="playTone('j',12)"><span class="f"><div class="n">2</div><div class="d">1</div></span></td>
  </tr>
  <tr>
    <td class="tg-c3ow" onClick="playTemp('e')">Equal Temperament <i class="fas fa-headphones-alt"></i></td>
      <td id='eC' class="tg-c3ow" onClick="playTone('e',0)">2<sup>0⁄12</sup></td>
      <td id='eCs' class="tg-c3ow" onClick="playTone('e',1)">2<sup>1⁄12</sup></td>
      <td id='eD' class="tg-c3ow" onClick="playTone('e',2)">2<sup>2⁄12</sup></td>
      <td id='eDs' class="tg-c3ow" onClick="playTone('e',3)">2<sup>3⁄12</sup></td>
      <td id='eE' class="tg-c3ow" onClick="playTone('e',4)">2<sup>4⁄12</sup></td>
      <td id='eF' class="tg-c3ow" onClick="playTone('e',5)">2<sup>5⁄12</sup></td>
      <td id='eFs' class="tg-c3ow" onClick="playTone('e',6)">2<sup>6⁄12</sup></td>
      <td id='eG' class="tg-c3ow" onClick="playTone('e',7)">2<sup>7⁄12</sup></td>
      <td id='eGs' class="tg-c3ow" onClick="playTone('e',8)">2<sup>8⁄12</sup></td>
      <td id='eA' class="tg-c3ow" onClick="playTone('e',9)">2<sup>9⁄12</sup></td>
      <td id='eAs' class="tg-c3ow" onClick="playTone('e',10)">2<sup>10⁄12</sup></td>
      <td id='eB' class="tg-c3ow" onClick="playTone('e',11)">2<sup>11⁄12</sup></td>
      <td id='eC+' class="tg-c3ow" onClick="playTone('e',12)">2<sup>12⁄12</sup></td>
  </tr>
</tbody>
</table>
