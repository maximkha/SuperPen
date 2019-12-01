// https://stackoverflow.com/questions/4672279/bresenham-algorithm-in-javascript
function line(x0, y0, x1, y1) {
    var dx = Math.abs(x1 - x0);
    var dy = Math.abs(y1 - y0);
    var sx = (x0 < x1) ? 1 : -1;
    var sy = (y0 < y1) ? 1 : -1;
    var err = dx - dy;
    
    var pix = [];

    while(true) {
       pix.push([x0, y0]);
 
       if ((x0 === x1) && (y0 === y1)) break;
       var e2 = 2*err;
       if (e2 > -dy) { err -= dy; x0  += sx; }
       if (e2 < dx) { err += dx; y0  += sy; }
    }
    return pix;
}

function setPixel(x, y, r, g, b, a, can2d)
{
    can2d.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
    can2d.fillRect( x, y, 1, 1 );
}

function clamp(x, min, max)
{
    var d = x;
    if (x > max) d = max;
    if (x < min) d = min;
    return d;
}

function map(x, minIn, maxIn, minOut, maxOut)
{
    return ((x-minIn)*((maxOut-minOut)/(maxIn-minIn))) + minOut;
}

function compLines(n, x0, y0, x1, y1)
{
    var pixelsOfLine = line(x0, y0, x1, y1);
    var centerLine = Math.floor((n-1)/2);
    console.log((n-centerLine)+n);
    //console.log(n - centerLine);
    for (var i = 0; i < n; i++)
    {
        var off = Math.floor(map(i, 0, n, -centerLine, centerLine));
        console.log(off);
        pixelsOfLine.concat(line(x0 + off, y0, x1 + off, y1));
    }
    return pixelsOfLine;
}

var alpha = 1;

function drawline(can2d, width, x0, y0, x1, y1)
{
    can2d.beginPath();
    can2d.globalAlpha = alpha;
    can2d.lineWidth = width;
    can2d.lineCap = "round";
    can2d.moveTo(x0, y0);
    can2d.lineTo(x1, y1);
    //can2d.closePath();
    can2d.stroke();
}

// https://stackoverflow.com/questions/7054272/how-to-draw-smooth-curve-through-n-points-using-javascript-html5-canvas/15528789
function drawCurve(can2d, points, width, tension) {
    can2d.beginPath();
    can2d.moveTo(points[0].x, points[0].y);

    var t = (tension != null) ? tension : 1;
    for (var i = 0; i < points.length - 1; i++) {
        var p0 = (i > 0) ? points[i - 1] : points[0];
        var p1 = points[i];
        var p2 = points[i + 1];
        var p3 = (i != points.length - 2) ? points[i + 2] : p2;

        var cp1x = p1[0] + (p2[0] - p0[0]) / 6 * t;
        var cp1y = p1[1] + (p2[1] - p0[1]) / 6 * t;

        var cp2x = p2[0] - (p3[0] - p1[0]) / 6 * t;
        var cp2y = p2[1] - (p3[1] - p1[1]) / 6 * t;

        can2d.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2[0], p2[1]);
    }
    can2d.globalAlpha = alpha;
    can2d.lineWidth = width;
    can2d.lineCap = "round";
    can2d.stroke();
}

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function applyRandTransformPoint(std, point)
{
    return [point[0] + getRandomInt(-std, std), point[1] + getRandomInt(-std, std)];
}

function applyScaling(points, origx, origy, newx, newy)
{
    var npoints = [];
    for (var i = 0; i < points.length; i++)
    {
        var xComp = points[i][0];
        var yComp = points[i][1];
        npoints.push([map(xComp, 0, origx, 0, newx), map(yComp, 0, origy, 0, newy)]);
    }
    return npoints;
}

function applyScalingSingle(point, origx, origy, newx, newy)
{
    var xComp = point[0];
    var yComp = point[1];
    return [map(xComp, 0, origx, 0, newx), map(yComp, 0, origy, 0, newy)];
}

function average(vals)
{
    var sum = vals.reduce((s,x)=>{return x+s;},0);
    return sum / vals.length;
}

function lerp(v0, v1, t)
{
    return ((1 - t) * v0) + (t * v1);
}