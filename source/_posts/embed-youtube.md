---
title: Embed YouTube in HTML
date: 2020-12-23 23:20:07
tags:
- youtube
- korean_martial_arts
- 2020S
categories:
- Social
---

<style>
.mySlides {display: none}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 15px 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>

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
</style>

***This is an example article showing how to embed YouTube videos.***

Due to COVID-19,
I've started a YouTube channel and decided to upload practice videos while taking PE courses.

### Korean Traditional Martial Arts
* Long Staff Spinning Skills

<div class="slideshow-container">
<div class="mySlides fade">
      <div class="video-container">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/U2Sd6Ye5ozw" frameborder="0" allowfullscreen></iframe>
      </div>
</div>
<div class="mySlides fade">
      <div class="video-container">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Pq4EvivOMkA" frameborder="0" allowfullscreen></iframe>
      </div>
</div>
<div class="mySlides fade">
      <div class="video-container">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/tHxSLcTR_Rc" frameborder="0" allowfullscreen></iframe>
      </div>
</div>
<div class="mySlides fade">
      <div class="video-container">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/F2LXcxX75uY" frameborder="0" allowfullscreen></iframe>
      </div>
</div>
<div class="mySlides fade">
      <div class="video-container">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/-Pf_4cV7iAE" frameborder="0" allowfullscreen></iframe>
      </div>
</div>
<div class="mySlides fade">
      <div class="video-container">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/FQgm57IaihY" frameborder="0" allowfullscreen></iframe>
      </div>
</div>
<div class="mySlides fade">
      <div class="video-container">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/QjK8ly-Agos" frameborder="0" allowfullscreen></iframe>
      </div>
</div>
<div class="mySlides fade">
      <div class="video-container">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/aqChEXs782I" frameborder="0" allowfullscreen></iframe>
      </div>
</div>
<div class="mySlides fade">
      <div class="video-container">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Uws4C-I6HXc" frameborder="0" allowfullscreen></iframe>
      </div>
</div>
<div class="mySlides fade">
      <div class="video-container">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/L0ISDeyOyas" frameborder="0" allowfullscreen></iframe>
      </div>
</div>
<div class="mySlides fade">
      <div class="video-container">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/Cc7HOkLx4LE" frameborder="0" allowfullscreen></iframe>
      </div>
</div>
<div class="mySlides fade">
      <div class="video-container">
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/BMuhIeoefws" frameborder="0" allowfullscreen></iframe>
      </div>
</div>
<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
  <span class="dot" onclick="currentSlide(4)"></span> 
  <span class="dot" onclick="currentSlide(5)"></span> 
  <span class="dot" onclick="currentSlide(6)"></span> 
  <span class="dot" onclick="currentSlide(7)"></span> 
  <span class="dot" onclick="currentSlide(8)"></span> 
  <span class="dot" onclick="currentSlide(9)"></span> 
  <span class="dot" onclick="currentSlide(10)"></span> 
  <span class="dot" onclick="currentSlide(11)"></span> 
  <span class="dot" onclick="currentSlide(12)"></span> 
</div>

<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>