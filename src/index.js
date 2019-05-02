import "./styles.css";
// Reference:
// Reference: https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace
// https://github.com/processing/p5.js/wiki/Global-and-instance-mode
import p5 from "p5";

import {
  format,
  formatDistance,
  formatRelative,
  subDays,
  compareAsc,
  compareDesc,
  differenceInCalendarDays
} from "date-fns";

//first sketch
let s = function(sketch) {
  var x = 100;
  var y = 100;
  var angle = 0;

  // sketch.setup = function() {
  sketch.setup = () => {
    sketch.createCanvas(400, 400, sketch.WEBGL);

    sketch.box(2);

    var result = differenceInCalendarDays(
      new Date(2012, 6, 2, 0, 0),
      new Date(2011, 6, 2, 23, 0)
    );

    console.log(result);

    result = [
      new Date(1995, 6, 2),
      new Date(1987, 1, 11),
      new Date(1989, 6, 10)
    ].sort(compareDesc);
    console.log(result);

    console.log(formatDistance(subDays(new Date(), 3), new Date()));

    console.log(format(new Date(), "'Today is a' iiii"));
    sketch.text("something" + result);

    /*
    document.getElementById("app").innerHTML = formatRelative(
      subDays(new Date(), 3),
      new Date()
    );
    */
  };

  // sketch.draw = function() {
  sketch.draw = () => {
    sketch.translate(20, 20, 20);
    sketch.rotateX(angle);

    sketch.background(255);
    sketch.fill(0);
    sketch.normalMaterial();
    sketch.box(100);
    angle += 0.01;
  };
};
var myp5 = new p5(s, "p5sketch");

//////////////////////////////////////////
let s2 = function(sketch) {
  var x = 100;
  var y = 100;
  var angle = 0;

  sketch.setup = function() {
    sketch.createCanvas(200, 200, sketch.WEBGL);
    sketch.box(2);
  };

  sketch.draw = function() {
    sketch.translate(20, 20, 20);
    sketch.rotateX(angle);

    sketch.background(255);
    sketch.fill(0);
    sketch.normalMaterial();
    sketch.box(100);
    angle += 0.01;
  };
};
var myp5another = new p5(s2, "p5sketch2");
