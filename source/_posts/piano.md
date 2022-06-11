---
title: Piano API
date: 2022-04-24 15:49:10
categories:
  - Study
tags:
  - 2022S
  - socket.io
  - music
  - nestjs
  - herokuapp
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js"></script>
<iframe src="https://theremini.herokuapp.com/" class="browser"></iframe>

<script src="https://gist.github.com/lucetre/21bcb17e3783fa2fca3e93e2ff392027.js"></script>

<script>
  Zepto(function($){
  $('.browser').each(function(id, frame){
    var nav = '';
    nav += '<nav class="nav">';
    nav += '  <div class="buttons">';
    nav += '    <button class="back">&larr;</button>';
    nav += '    <button class="forward">&rarr;</button>';
    nav += '    <button class="refresh">&#x27F3;</button>';
    nav += '  </div>';
    nav += '  <div class="urlbar">';
    nav += '    <input class="url" type="text" />';
    nav += '  </div>';
    nav += '</nav>';
    
    var frameid = 'frame' + id;
    
    $(frame)
      .wrap('<div class="chrome"></div>')
      .before(nav)
      .attr('name', frameid);
    
    var chrome = $(frame).parent();
    var nav = $(chrome).children('nav');
    var urlbar = $(nav).find('.url');
    var back = $(nav).find('.back');
    var forward = $(nav).find('.forward');
    var refresh = $(nav).find('.refresh');
    
    $(urlbar)
      .val( $(frame).attr('src') )
      .on('mouseup', function(e) {
        return false;
      })
      .on('focus', function(e) {
        setTimeout(function () {
          $(this).select();
        }, 50);
      })
      .on('keyup', function(e) {
        if (e.keyCode == 13) {
          $(frame).attr('src', $(this).val());
        }
      })
      .focus();
    
    $(refresh)
      .on('click', function(e) {
        $(frame).attr('src', $(frame).contentWindow.location.href);
      });
    
    $(back)
      .on('click', function(e) {
        $(frame).contentWindow.history.back(); 
      });
    
    $(forward)
      .on('click', function(e) {
        $(frame).contentWindow.history.forward(); 
      });
  })
})
</script>

<style>
  body {
    margin: 0;
  }
  .chrome {
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    height: 400px;
    margin: 10px 0px;
    border-radius: 0.25rem;
    overflow: hidden;
    background-color: #1a2734;
  }
  .chrome iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }
  .chrome nav {
    background: #dfdfdf;
    border-bottom: 1px solid #aaa;
    padding: 0.25rem 0.5rem;
  }
  .chrome nav .buttons {
    float: left;
  }
  .chrome nav .urlbar {
    overflow: hidden;
  }
  .chrome nav button {
    display: inline-block;
    border: 0;
    padding: 0.5rem;
    background: none;
    font-size: 1rem;
    line-height: 1rem;
    width: 2rem;
    height: 2rem;
    border-radius: .25rem;
    color: #555;
    transition: background 0.2s ease-out;
  }
  .chrome nav button:hover {
    background: rgba(0,0,0,0.075);
  }
  .chrome nav button:active {
    background: rgba(0,0,0,0.15);
  }
  .chrome nav input {
    display: inline-block;
    border: 1px solid #bbb;
    font-size: .9rem;
    padding: 0.5rem;
    width: 100%;
  }
  .chrome nav input:focus {
    border-color: #2196F3;
  }
  .chrome *:focus {
    outline: none;
  }
  iframe.browser {
    position: relative;
    top: -33%;
    left: 0;
    width: 167%;
    height: 167%;
    -ms-zoom: 0.6;
    -ms-transform-origin: 0 0;
    -moz-transform: scale(0.6);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.6);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.6);
    -webkit-transform-origin: left;
  }
  .gist iframe.render-viewer {
    height: 800px;
  }
</style>
