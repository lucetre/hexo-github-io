---
title: Nim Game against Computer
date: 2023-01-10 20:13:40
tags:
- game
- nim
- minmax
- baskin_robbins_31
- human_vs_computer
categories:
- Study
---

<script src="/js/d3.v4.min.js"></script>
<script src="/js/d3-scale-chromatic.v1.min.js"></script>

<style>
#canvas {
  width: 100%;
  height: auto;
}

#nim-controller {
  margin-left: 10px;
}

svg {
  float: center;
}

rect.match {
  stroke: #888267;
  rx: 10;
  ry: 10;
}

.heap rect.selection {
  fill: #888267;
}

.error {
  color: #e41a1c;
}

.success {
  color: #4daf4a;
}

</style>

From an article in [Wikipedia](https://en.wikipedia.org/wiki/Nim#The_subtraction_game),
> In another game which is commonly known as **Nim** (but is better called the subtraction game), an upper bound is imposed on the number of objects that can be removed in a turn. Instead of removing arbitrarily many objects, a player can only remove 1 or 2 or ... or k at a time. **The player taking the last object wins.**

### **How to Play**
In this game, we'll slightly change the rule to get a certain number of stones. Now you can only grab as many stones as the number written inside colored circles. 
1. Drag and highlight the stones that you would like to remove.
2. Click the `Take` button.
3. Win the game against the computer.

<div id="legend"></div>
<div id="canvas_nim"></div>
<script src="/js/custom/nim.js"></script>
