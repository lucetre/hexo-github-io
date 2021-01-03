---
title: Advanced Nim Game
date: 2021-01-01 22:13:40
tags:
- game
- nim
- minmax
- baskin_robbins_31
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

### How to Play
1. Drag and highlight the stones that you would like to remove.
2. Click the `Take` button.

<div id="legend"></div>
<div id="canvas"></div>
<script src="/js/nim.js"></script>