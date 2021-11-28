---
title: Screen Capturing Module for MopReM
date: 2021-11-27 22:09:10
categories:
- Research
tags:
- computer_vision
- image_processing
- moire
- demoire
cover: /img/snucvpip.jpg
thumbnail: /img/snucvpip.jpg
---

This is a part of image pre-processing module for [MopReM: Moiré Pattern Removal for Mobile, Texts/Diagrams on Single-colored Background](https://github.com/snucvpip/MopReM). Click the link to visit the project page of <b>SNU-CV-PIP</b> team.

We first select the window to screen-capture and crop the shared screen with range selector. The module saves the screenshot surrounded with target frame as `target.png`. Re-capture the target photo and save as `source.png`.

<script src="/js/jquery-3.4.1.min.js"></script>
<script src="/js/html2canvas.min.js"></script>
<script src="/js/es6-promise.min.js"></script>
<script src="/js/es6-promise.auto.min.js"></script>
<script src="/js/custom/moprem.js" defer></script>


<p align="center">
    <button id="moprem_start" class="button is-secondary is-rounded" style="width:49%">Screen Share</button>
    <button id="moprem_capture" class="button is-secondary is-rounded" style="width:49%">Image Crop</button>
</p>
<video id="moprem_video" style="border:solid #dbdbdb 0.5pt;width:100%;" autoplay></video>
<div id="moprem_output" style="display:flex"></div>

<a id="moprem_target" style="display:none"></a>
<style>
    #screenshot_mask {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        display: block;
        opacity: 0.3;
        text-align: center;
        box-sizing: border-box;
        z-index: 2147483647;
        border-color: black;
        border-style: solid;
    }

    #screenshot_focus:before,
    #screenshot_focus:after {
        border: none !important;
        content: "" !important;
        height: 100% !important;
        position: absolute !important;
        width: 100% !important
    }

    #screenshot_focus:before {
        border-right: 1px solid white !important;
        border-bottom: 1px solid white !important;
        left: -100% !important;
        top: -100% !important
    }

    #screenshot_focus:after {
        border-top: 1px solid white !important;
        border-left: 1px solid white !important;
        left: 0 !important;
        top: 0 !important
    }

    #screenshot_focus {
        height: 100% !important;
        position: fixed !important;
        width: 100% !important;
        z-index: 2147483648 !important
    }
</style>
<script>
    function capture(scaleFactor) {
        var video = document.getElementById('moprem_video');
        if (scaleFactor == null) {
            scaleFactor = 1;
        }
        var w = video.videoWidth * scaleFactor;
        var h = video.videoHeight * scaleFactor;
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, w, h);
        return canvas;
    }

    $("#moprem_capture").on('click', function (e) {
        var height = window.innerHeight;
        var width = $(document).width();
        var $mask = $('<div id="screenshot_mask"></div>').css("border-width", "0 0 " + height + "px 0");
        var $focus = $('<div id="screenshot_focus"></div>');
        $("body").append($mask);
        $("body").append($focus);
        var selectArea = false;
        $("body").one("mousedown", function (e) {
            e.preventDefault();
            selectArea = true;
            startX = e.clientX;
            startY = e.clientY;
        }).one('mouseup', function (e) {
            selectArea = false;
            $("body").off('mousemove', mousemove);
            $("#screenshot_focus").remove();
            $("#screenshot_mask").remove();

            var x = e.clientX;
            var y = e.clientY;

            var top = Math.min(y, startY);
            var left = Math.min(x, startX);
            var width = Math.max(x, startX) - left;
            var height = Math.max(y, startY) - top;
            
            var canvas = capture();
            var W = canvas.width;
            var H = canvas.height;
            
            var video = document.getElementById('moprem_video');
            var rect = video.getBoundingClientRect();

            y_off = rect.top;
            x_off = rect.left;
            y_size = rect.height;
            x_size = rect.width;

            width = width*W/x_size;
            height = height*H/y_size;
  
            try {
              var img = canvas.getContext('2d').getImageData((left-x_off)*W/x_size, (top-y_off)*H/y_size, width, height);
  
              let pad = 30;
              let w = img.width + pad*6;
              let h = img.height + pad*6;
  
              let arr = new Uint8ClampedArray(w*h*4);
  
              for (let i = 0; i < img.width; i++) {
                for (let j = 0; j < img.height; j++) {
                  let pad_idx = (j+pad*3)*w + (i+pad*3);
                  let idx = j*img.width + i;
                  for (let k = 0; k < 4; k++) {
                    arr[pad_idx*4+k] = img.data[idx*4+k];
                  }
                }
              }
                
              for (let i = 0; i < img.width; i++) {
                for (let j = 0; j < pad; j++) {
                  let pad_idx = (pad*3-j)*w + (i+pad*3);
                  arr[pad_idx*4+3] = 255;
                  pad_idx = (pad*3+j+img.height)*w + (i+pad*3);
                  arr[pad_idx*4+3] = 255;
                  if (i > img.width/4 && i < img.width*3/4) {
                    pad_idx = (pad*2-j)*w + (i+pad*3);
                    arr[pad_idx*4+3] = 255;
                    pad_idx = (pad*4+j+img.height)*w + (i+pad*3);
                    arr[pad_idx*4+3] = 255;
                  }
                }
              }
                                        
              for (let i = 0; i < img.height; i++) {
                for (let j = 0; j < pad; j++) {
                  let pad_idx = (pad*3+i)*w + (pad*3-j);
                  arr[pad_idx*4+3] = 255;
                  pad_idx = (pad*3+i)*w + (pad*3+img.width+j);
                  arr[pad_idx*4+3] = 255;
                  if (i > img.height/4 && i < img.height*3/4) {
                    pad_idx = (pad*3+i)*w + (pad*2-j);
                    arr[pad_idx*4+3] = 255;
                    pad_idx = (pad*3+i)*w + (pad*4+img.width+j);
                    arr[pad_idx*4+3] = 255;
                  }
                }
              }
                                        
              for (let i = 0; i < pad; i++) {
                for (let j = 0; j < pad; j++) {
                  let pad_idx = (pad*3-i)*w + (pad*3-j);
                  arr[pad_idx*4+3] = 255;
                  pad_idx = (pad*3-i)*w + (pad*3+img.width+j);
                  arr[pad_idx*4+3] = 255;
                  pad_idx = (pad*3+img.height+i)*w + (pad*3-j);
                  arr[pad_idx*4+3] = 255;
                  pad_idx = (pad*3+img.height+i)*w + (pad*3+img.width+j);
                  arr[pad_idx*4+3] = 255;
                }
              }
                                      
  
              img_pad = new ImageData(arr, w);
              console.log(img_pad);
    /*
  pad = 50
WHITE = (255,255,255)
BLACK = (0,0,0)

imPad = cv2.copyMakeBorder(imOrg, pad, pad, pad, pad, cv2.BORDER_CONSTANT, value=BLACK)
imPad = cv2.copyMakeBorder(imPad, pad, pad, pad, pad, cv2.BORDER_CONSTANT, value=WHITE)
height, width, _ = imPad.shape
imPad[:pad, width//3:width*2//3] = BLACK
imPad[-pad:, width//3:width*2//3] = BLACK
imPad[height//3:height*2//3, :pad] = BLACK
imPad[height//3:height*2//3, -pad:] = BLACK
imPad = cv2.copyMakeBorder(imPad, pad*2, pad*2, pad*2, pad*2, cv2.BORDER_CONSTANT, value=WHITE)
*/
              console.log(img);
  
              var c = document.createElement("canvas");
              c.width = img_pad.width;
              c.height = img_pad.height;
              c.getContext('2d').putImageData(img_pad, 0, 0);
              c.style.margin = "auto";

              var output = document.getElementById('moprem_output');
              output.innerHTML = '';
              output.appendChild(c);

              save(c);
            } catch (e) {
              alert("No Area to Capture");
            }

        }).on("mousemove", mousemove);
        function mousemove(e) {
            var x = e.clientX;
            var y = e.clientY;
            $focus.css("left", x);
            $focus.css("top", y);
            if (selectArea) {
                var top = Math.min(y, startY);
                var right = width - Math.max(x, startX);
                var bottom = height - Math.max(y, startY);
                var left = Math.min(x, startX);
                $mask.css("border-width", [top + 'px', right + 'px', bottom + 'px', left + 'px'].join(' '));
            }
        }
        function save(canvas) {
            if (navigator.msSaveBlob) {
                var blob = canvas.msToBlob();
                return navigator.msSaveBlob(blob, 'target.png');
            } else {
                var el = document.getElementById("moprem_target");
                el.href = canvas.toDataURL("image/png");
                el.download = 'target.png';
                el.click();
            }
        }
    });
</script>