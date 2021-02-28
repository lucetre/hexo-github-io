---
title: Skulpt to use Python in Markdown
date: 2020-12-23 11:13:00
tags:
- python
- turtle
- ta
- 2020F
categories:
- Tutorial
---

<script src="/js/skulpt.min.js" type="text/javascript"></script> 
<script src="/js/skulpt-stdlib.js" type="text/javascript"></script> 

<script type="text/javascript"> 
// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit(prog) { 
   var mypre = document.getElementById("output"); 
   mypre.innerHTML = ''; 
   Sk.pre = "output";
   Sk.configure({output:outf, read:builtinRead}); 
   (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
   var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
   });
   myPromise.then(function(mod) {
       console.log('success');
   },
       function(err) {
       console.log(err.toString());
   });
} 
</script>

***This is an example article showing how to embed Skulpt and Ace code editor to use Python.***
    
* [Skulpt](http://skulpt.org/) is an entirely in-browser implementation of Python.
* Tutorial w. simple Python turtle code used while doing TA works.
    
<h3>Try This</h3>
<style type="text/css" media="screen">
    #editor { 
        display: block;
        width: 100%;
        height: 300px;
    }
</style>
<div id="editor">import turtle as t
print("Drawing Ryan...")
t.shape("turtle")
t.speed(7)
t.fillcolor("#f7aa1b")
t.pencolor("#111111")
t.pensize(10)
print("Left Ear...")
t.penup()
t.goto(-120, 120)
t.pendown()
t.begin_fill()
t.circle(50)
t.end_fill()
t.penup()
t.goto(120, 120)
print("Right Ear...")
t.pendown()
t.begin_fill()
t.circle(50)
t.end_fill()
t.penup()
t.goto(0, -200)
print("Face...")
t.pendown()
t.begin_fill()
t.circle(200)
t.end_fill()
t.penup()
t.pensize(15)
t.goto(-120, 60)
print("Left Eyebrow...")
t.pendown()
t.goto(-50, 60)
t.penup()
t.goto(120, 60)
t.pendown()
print("Right Eyebrow...")
t.goto(50, 60)
t.penup()
t.goto(-80, 15)
print("Left Eye...")
t.pendown()
t.fillcolor("#111111")
t.begin_fill()
t.circle(6)
t.end_fill()
t.penup()
t.goto(80, 15)
print("Right Eye...")
t.pendown()
t.fillcolor("#111111")
t.begin_fill()
t.circle(6)
t.end_fill()
t.penup()
t.goto(-7, -25)
print("Mouth...")
t.pendown()
t.fillcolor("#ffffff")
t.begin_fill()
t.left(135)
t.circle(32, 290)
t.right(130)
t.circle(32, 290)
t.end_fill()
t.penup()
t.home()
t.goto(0, -30)
print("Nose...")
t.pendown()
t.begin_fill()
t.circle(8)
t.end_fill()
print("Done!")
t.hideturtle()
</div>
    
<script src="/js/ace-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
<script>
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/xcode");
    editor.session.setMode("ace/mode/python");
    
    editor.commands.addCommand({
        name: 'myCommand',
        bindKey: {win: 'Ctrl-Enter',  mac: 'Command-Enter'},
        exec: function(editor) {
            runit(editor.getValue());
        },
        readOnly: true // false if this command should not apply in readOnly mode
    });
    editor.on('change', (arg, activeEditor) => {
      const aceEditor = activeEditor;
      const newHeight = aceEditor.getSession().getScreenLength() *
        (aceEditor.renderer.lineHeight + aceEditor.renderer.scrollBar.getWidth());
       aceEditor.container.style.height = `${newHeight}px`;
      aceEditor.resize();
    });
</script>
<a class="level-item button is-primary" onclick="runit(editor.getValue())" target="_blank" rel="noopener">Run (Ctrl+Enter)</a>

<pre id="output" ></pre> 
<!-- If you want turtle graphics include a canvas -->
<div id="mycanvas"></div>