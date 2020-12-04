var ctx; // context as global value
var path = './data/';
var name;
var filename = '';

window.onload = function() {
  if(document.addEventListener){
      can = document.getElementById("can1");
      can.addEventListener("mousedown" , onMouseDown);
      can.addEventListener("mousemove" , onMouseMove);
      can.addEventListener("mouseup" , onMouseUp);
  }else if(document.attachEvent){
    // アタッチイベントに対応している
    alert("attachEVENT");
    // マウスを移動するたびに実行されるイベント
    document.attachEvent("onmousedown" , onMouseDown);
    document.attachEvent("onmousemove" , onMouseMove);
  }

  can = document.getElementById("can1");
  ctx = can.getContext("2d");
  clear();

  var fn = document.getElementById("filename").value;
  read(fn);
}

function clear() {
  ctx.clearRect(0, 0, can.width, can.height);
  ctx.fillStyle = "#EEEEEE";
  ctx.fillRect(0, 0, can.width, can.height);
}

function loaddata() {
  var fn = document.getElementById("filename").value;
  clear();
  read(fn);
}

function erase() {
  var fn = document.getElementById("filename").value;
  command("erase");
  clear();
}

/* define Point Class */

var Point = function(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.getText = function() {
    return Math.round(this.x)+ " " + Math.round(this.y);
}

/* define GraObj Class */
var GraObj = function(type, attr, para) {
    this.type = type;
    this.attr = attr;
}

function read(fname){
  var xmlHttpReq = new XMLHttpRequest();
  var i, j;

  // cache への対策
  //xmlHttpReq.open('GET', path + fname + '.txt', true);
  args = "cmd=read&fn="+fname+".txt";
  xmlHttpReq.open('GET', './stroke.rb?'+args, true);

  xmlHttpReq.onreadystatechange = function() {
    if (xmlHttpReq.readyState==4) {
      txt = xmlHttpReq.responseText;
      lines = txt.split(/\r\n|\r|\n/);

      ctx.strokeStyle="blue";

      for (j = 0; j < lines.length; j++) {
        p = lines[j].split(" ");
        console.log(p);
        cmd = p[1];
          if (cmd == "polyline") {
            i = 2;

            ctx.beginPath();
            ctx.moveTo(p[i++],p[i++]);
            while(i < p.length) {
              ctx.lineTo(p[i++],p[i++]);
            }
            ctx.lineWidth=8;
            ctx.stroke();
          } else if (cmd == "color") {
            ctx.strokeStyle=p[2];
          }
      }
    }
  }

  xmlHttpReq.send(null);
}

var id = 0;
var idx = 0;
var canx = 0;
var cany = 0;
var mode = 0;

function command(cmd){
  var xmlHttpReq = new XMLHttpRequest();
  var fn = document.getElementById("filename").value;

  args = "cmd="+cmd+"&fn="+fn+".txt";
  xmlHttpReq.open('GET', './stroke.rb?'+args, true);

  xmlHttpReq.onreadystatechange = function() {
    if (xmlHttpReq.readyState==4) {
    }
  }

  xmlHttpReq.send(null);
}

function set(id, type, points){
  var xmlHttpReq = new XMLHttpRequest();
  var fn = document.getElementById("filename").value;
  var i;

  args = "cmd="+"add"+"&fn="+fn+".txt&params="+id+" "+type+" ";
  for (i = 0; i < points.length; i++) {
      args += points[i].getText() + " ";
  }

  xmlHttpReq.open('GET', './stroke.rb?'+args, true);

  xmlHttpReq.onreadystatechange = function() {
    if (xmlHttpReq.readyState==4) {
    }
  }

  xmlHttpReq.send(null);
}

/* mouse related operations */

function startDrawing(ev) {
    mode = 1;
    points = new Array();
    points.push(new Point(mouseX, mouseY));
}

function continueDrawing(ev) {
    if (mode == 0) return;

    points.push(new Point(mouseX, mouseY));

    document.cursor = "pointer";

    ctx.strokeStyle="red";
    ctx.lineWidth=10;
    ctx.lineJoin="round";

    ctx.beginPath();
      ctx.moveTo(points[0].x,points[0].y);
      for (i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x,points[i].y);
      }
      ctx.stroke();
    ctx.closePath();
}

function endDrawing(ev) {
    mode = 0;
    id++;
    set(id, "polyline", points);
}

function adjustPoint(ev) {
    var r = ev.target.getBoundingClientRect();
    mouseX = ev.clientX - r.left;
    mouseY = ev.clientY - r.top;
}

function onMouseDown(ev) {
    adjustPoint(ev);
    startDrawing(ev);
}

function onMouseMove(ev) {
    adjustPoint(ev);
    continueDrawing(ev);
}

function onMouseUp(ev) {
    adjustPoint(ev);
    endDrawing(ev);
}