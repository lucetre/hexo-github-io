---
title: The Water Jug Riddle
date: 2022-11-07 15:20:24
categories:
- Study
tags:
- game
- strategy
- die_hard
- water_jug
- number
cover: /img/die-hard.jpg
thumbnail: /img/die-hard.jpg
---

<style>
.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
}
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
  
p.num-in {
  font-size: 20px;
  text-align: right;
}
  
.num-block {
	float: left;
	width: 49%;
  padding: 0px;
}

.skin-1 .num-in {
	display: inline-block;
	text-align: center;
	width: 49%;
  }

.skin-1 .num-in span {
	display: inline-block;
    vertical-align: middle;
	width: 20px;
	height: 32px;
	line-height: 32px;
	text-align: center;
	position: relative;
	cursor: pointer;
}

.skin-1 .num-in span.dis:before {
  background-color: #ccc !important;
}

.skin-1 .num-in input {
	display: inline-block;
	width: 32px;
	height: 32px;
	border: 1px solid #6E6F7A;
	border-radius: 5px;
	color: #000;
	text-align: center;
	padding: 0;
}

.skin-1 .num-in span.minus:before {
	content: '';
	position: absolute;
	width: 15px;
	height: 2px;
	background-color: #00A94F;
	top: 50%;
	left: 0;
}

.skin-1 .num-in span.plus:before, .skin-1 .num-in span.plus:after {
	content: '';
	position: absolute;
	right: 0px;
	width: 15px;
	height: 2px;
	background-color: #00A94F;
	top: 50%;
}

.skin-1 .num-in span.plus:after {
	-webkit-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	-o-transform: rotate(90deg);
	transform: rotate(90deg);
}
  
 .diehard-container {
  width: 49%;
  align-items: center;
  justify-content: center;
  text-align: center;
	 max-width: 1010px;
	 margin: auto;
	 position: relative;
	 z-index: 10;
      display:inline-block;
}
 h2.diehard-gal {
  text-align: center;
	 position: absolute;
	 bottom: 0px;
	 color: #bbeddd;
    font-weight: bold;
	 z-index: 20;
	 font-size: 30px;
	 writing-mode: horizontal-tb;
}
 .diehard-shadow {
	 position: relative;
	 width: 70px;
	 height: 10px;
	 background: #e0f6ef;
	 margin: 5px auto;
	 margin-bottom: 0;
	 padding: 0;
	 top: 0%;
	 left: 0%;
	 border-radius: 30px;
}
 .diehard-bottle {
	 margin: 0 30px 0 30px;
}
 .diehard-box {
  display: inline-block;
	 position: relative;
	 width: 60px;
	 margin: 10px;
	 margin-top: 0;
	 padding: 0;
	 border-left: 2px solid #80ab9d;
	 border-right: 2px solid #80ab9d;
	 border-bottom: 2px solid #80ab9d;
	 border-radius: 0 0 60px 60px;
	 overflow: hidden;
	 color: rgba(255, 255, 255, 0.5);
	 font-size: 14px;
	 text-align: right;
	 writing-mode: vertical-rl;
}
 .diehard-box::after {
	 content: "";
	 position: absolute;
	 bottom: 5%;
	 left: 55%;
	 background: #e0f6ef;
	 width: 300px;
	 height: 320px;
	 border-radius: 40%;
	 box-sizing: border-box;
	 transform: translateX(-50%) rotate(0);
	 animation: wave 4s linear infinite;
}
 .diehard-box::before {
	 content: "";
	 position: absolute;
	 bottom: 5%;
	 left: 55%;
	 background: rgba(255, 255, 255, 0.5);
	 width: 370px;
	 height: 350px;
	 border-radius: 40%;
	 box-sizing: border-box;
	 transform: translateX(-50%) rotate(0);
	 animation: wave 5s linear infinite -5s;
}
 .diehard-box.ee::after {
	 bottom: var(--bottomA);
  }
 .diehard-box.ee::before {
	 bottom: var(--bottomA);
  }
 .diehard-box.ff::after {
	 bottom: var(--bottomB);
  }
 .diehard-box.ff::before {
	 bottom: var(--bottomB);
  }
 .diehard-bobble {
	 position: absolute;
	 background: rgba(255, 255, 255, 0.5);
	 bottom: 120px;
	 left: -10%;
	 width: 20px;
	 height: 5px;
	 border-radius: 10px;
}
 .diehard-bobble::before {
	 content: "";
	 position: absolute;
	 background: rgba(255, 255, 255, 0.5);
	 left: 0;
	 top: 800%;
	 width: 20px;
	 height: 5px;
	 border-radius: 10px;
}
 .diehard-bobble::after {
	 content: "";
	 position: absolute;
	 background: rgba(255, 255, 255, 0.5);
	 left: 0;
	 top: -800%;
	 width: 20px;
	 height: 5px;
	 border-radius: 10px;
}
 .diehard-box.ee {
	 background: linear-gradient(107deg, #27a342, #b2edbf);
	 background-size: 600% 600%;
	 animation: GradientBackground 5s ease infinite;
}
 .diehard-box.ff {
	 background: linear-gradient(107deg, #b0288e, #f0c7e6);
	 background-size: 600% 600%;
	 animation: GradientBackground 5s ease infinite;
}
  
  @keyframes wave {
	 50% {
		 transform: reanslatex(-50%) rotate(0deg);
	}
	 100% {
		 transform: translatex(-50%) rotate(360deg);
	}
}
 @keyframes GradientBackground {
	 0% {
		 background-position: 0% 50%;
	}
	 50% {
		 background-position: 100% 50%;
	}
	 100% {
		 background-position: 0% 50%;
	}
}
</style>

<div class="video-container">
    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/BVtQNK_ZUJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>

<p style="text-indent:30px">
Detective John McClane must measure out exactly 4 gallons of water and place the resulting weight on a scale to disable a bomb. His tools are yours: a 3-gallon and a 5-gallon jug—and a single fountain. McClane did it in less than 5 minutes. Can you also do it in time and provide a generalized solution for arbitrary gallons of both jugs?
</p>


<!-- skin 1 -->
<script>
function changeJug(jugNum, delta) {
  let jug = document.getElementById("jug"+jugNum);
  let newVal = parseInt(jug.value) + delta;
  if (newVal < 1 || newVal > 15) return;
  jug.value = newVal;
  if (jugNum == 1) init(newVal, -1);
  else init(-1, newVal);
}
</script>

<div class="num-block skin-1" style="text-align:center;">
  <h3><b>Jug 1</b></h3>
  <div class="num-in">
    <span class="minus" onclick="changeJug(1,-1)"></span>
    <input class="in-num" id="jug1" type="text" value="5" readonly="" />
    <span class="plus" onclick="changeJug(1,+1)"></span>
  </div>
  
</div>
  
<div class="num-block skin-1" style="text-align:center;">
  <h3><b>Jug 2</b></h3>
  <div class="num-in">
    <span class="minus" onclick="changeJug(2,-1)"></span>
    <input class="in-num" id="jug2" type="text" value="3" readonly="" />
    <span class="plus" onclick="changeJug(2,+1)"></span>
  </div>
</div>
  
  
  <div class="diehard-container">
    <div class="diehard-bottle">
      <div class="diehard-shadow ee"></div>
      <div class="diehard-box ee" id="bottle1">gal&emsp;&emsp;
        <div class="diehard-bobble"></div>
        <h2 class="diehard-gal">5</h2>
      </div>
    </div>
  
  </div>
  <div class="diehard-container">
    <div class="diehard-bottle">
      <div class="diehard-shadow ff"></div>
      <div class="diehard-box ff" id="bottle2">gal&emsp;&emsp;
        <div class="diehard-bobble"></div>
        <h2 class="diehard-gal">3</h2>
      </div>
    </div>
  </div>
  
<p style="text-indent:30px">
Every step can be visualized as billiard moves in the coordinate system on a triangular lattice. The above hexagonal plot gives two solutions to the 5-gallon and 3-gallon puzzle. Each point on the boundary denotes combinations achievable with the jugs. Starting at two vertices (5, 0) and (0, 3), traces of the blue points show pourable transitions. We have measured 4 gallons in 6 and 7 steps concerning the starting points. Might it be possible to get a prime gallon of water from coprime gallon jugs (e.g., to yield 7 gallons from a 9-gallon jug and 15-gallon jug)?
</p>

<canvas id="die-hard"></canvas>
<script src="/js/custom/die-hard.js"></script>
