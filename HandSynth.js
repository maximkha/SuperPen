var can = undefined;
var can2d = undefined;

//var lettersOrder = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// var sources = [];
// var images = [];

// function tLoadImg(i)
// {
//     if (sources.length - 1 < i) 
//     {
//         Ready();
//         return;
//     }
//     var img = new Image();
//     images.push(img);
//     img.onload = function() { 
//         console.log("Loaded image " + i + " (" + sources[i] + ")");
//         tLoadImg(i+1);
//     };
//     img.src = sources[i];
// }

function Load()
{
    can = document.getElementById("myCanvas");
    can.width = 1000;
    can.height = 1000;
    can2d = can.getContext("2d");
    //can2d.imageSmoothingEnabled = false;
    can2d.translate(10, 10);
    Ready();
    // sources.push("200x200/A.jpg");
    // sources.push("200x200/B.jpg");
    // sources.push("200x200/C.jpg");
    // sources.push("200x200/D.jpg");
    // sources.push("200x200/E.jpg");
    // sources.push("200x200/F.jpg");
    // sources.push("200x200/G.jpg");
    // sources.push("200x200/H.jpg");
    // sources.push("200x200/I.jpg");
    // sources.push("200x200/J.jpg");
    // sources.push("200x200/K.jpg");
    // sources.push("200x200/L.jpg");
    // sources.push("200x200/M.jpg");
    // sources.push("200x200/N.jpg");
    // sources.push("200x200/O.jpg");
    // sources.push("200x200/P.jpg");
    // sources.push("200x200/Q.jpg");
    // sources.push("200x200/R.jpg");
    // sources.push("200x200/S.jpg");
    // sources.push("200x200/T.jpg");
    // sources.push("200x200/U.jpg");
    // sources.push("200x200/V.jpg");
    // sources.push("200x200/W.jpg");
    // sources.push("200x200/X.jpg");
    // sources.push("200x200/Y.jpg");
    // sources.push("200x200/Z.jpg");
    // tLoadImg(0);
    //ctx.drawImage(img, 10, 10);
    
}

function Ready()
{
    //drawString(0, 0, "This is a test".toUpperCase());
    //drawString(0, 0, "Hi Anna".toUpperCase());
    //drawString(0, 0, "This is a test".toUpperCase());
    
    //drawString(0, 0, "This is a test of rendering strings that are too long to display in one line".toUpperCase());
    //drawString(0, 0, "cool".toUpperCase());
    
    //drawString(0, 0, "Hello my name is max im super cool".toUpperCase());
    drawString(0, 0, "This is a really long sentence that seems to never end however eventually it will end as any sentence would but not at this point because sentences shouldnt be too short".toUpperCase());

    //var outimg = Filters.filterImage(Filters.grayscale, can);
    //can2d.putImageData(outimg, 0, 0);
    //can2d.clearRect(0, 0, can.width, can.height);
    //var outimg = Filters.filterImage(Filters.thresholdPass, can, 120);
    //can2d.putImageData(outimg, 0, 0);
}

var dbug = false;

function dot(x, y, color)
{
    can2d.beginPath();
    can2d.arc(x, y, 2, 0, 2 * Math.PI, false);
    can2d.closePath();
    can2d.fillStyle = color;
    can2d.fill();
}

//SETTINGS
var masterStd = 2;
var currentCharNumber = 0;
var penXstd = masterStd;
var penYstd = masterStd;

var bheight = 50;
var bwidth = 50;
var heightStd = masterStd;
var widthStd = masterStd;

var spaceWidth = ((bwidth*2)/4);
var spaceWidthStd = masterStd;

var newlineHeight = ((bwidth*9)/8);

var dashWidth = ((bwidth*6)/4);

var useDash = true;
//END SETTINGS

function drawString(x, y, str)
{
    //Assume starting pen is valid.
    var penX = x;
    var penY = y;
    penX = penX + randomRange(0, penXstd);
    penY = penY + randomRange(0, penYstd);
    var height = bheight + randomRange(-heightStd, heightStd);
    var width = bwidth + randomRange(-widthStd, widthStd)
    var cChar = str[currentCharNumber];
    drawLetter(penX, penY, height, width, cChar);
    penX += width;
    currentCharNumber++;
    var dash = false;
    var newline = false;
    while (true)
    {
        var diffx = 0;
        if (newline) diffx = randomRange(0, penXstd);
        else diffx = randomRange(-penXstd, penXstd);
        newline = false;
        penX += diffx;
        penY = penY + randomRange(-penYstd, penYstd);
        height = bheight + randomRange(-heightStd, heightStd);
        width = bwidth + randomRange(-widthStd, widthStd);
        cChar = str[currentCharNumber];
        //validate letter and pen end
        if (dash)
        {
            //For now replace dash with space
            //diffx = spaceWidth + randomRange(-spaceWidthStd, spaceWidthStd);
            penX = 0;
            newline = true;
            penY += newlineHeight;
            if (!isYPenValid(penY))
            {
                penY -= newlineHeight;
                console.log("RAN OUT OF BOTTOM SPACE");
                break;
            }
            dash = false;
        }
        else if (!isXPenValid(penX + dashWidth))
        {
            dash = true;
            if (dbug) dot(penX, penY, "blue");
            continue;
        }
        drawLetter(penX, penY, height, width, cChar);
        console.log(newline);
        //if (cChar == " ") { console.log(currentCharNumber);  }
        if (cChar == " " && !newline)
        {
            if (dbug) dot(penX, penY, "green");
            diffx = spaceWidth + randomRange(-spaceWidthStd, spaceWidthStd);
            penX += diffx;
            //validate current pen
            if (!isXPenValid(penX))
            {
                //ran out of space, lets go to next line.
                penX -= diffx;
                if (dbug) dot(penX, penY, "yellow");
                //we just need to go to the next line
                penX = 0;
                penY += newlineHeight;
                newline = true;
                if (!isYPenValid(penY))
                {
                    penY -= newlineHeight;
                    console.log("RAN OUT OF BOTTOM SPACE");
                    break;
                }
            }
        }
        else if (cChar != " ")
        {
            if (dbug) dot(penX, penY, "red");
            penX += width;
            //validate current pen
            if (!isXPenValid(penX))
            {
                //TODO: add dash
                //ran out of space, lets go to next line.
                penX -= width;
                if (dbug) dot(penX, penY, "yellow");
                //we just need to go to the next line
                penX = 0;
                penY += newlineHeight;
                newline = true;
                if (!isYPenValid(penY))
                {
                    penY -= newlineHeight;
                    console.log("RAN OUT OF BOTTOM SPACE");
                    break;
                }
            }
        }
        currentCharNumber++;
        if (currentCharNumber >= str.length) break;
    }
}

function randomRange(min, max)
{
    return min + Math.random() * (max - min);
}

function isXPenValid(x)
{
    return (0 < x && x < can.width);
}

function isYPenValid(y)
{
    return (0 < y && y < can.height);
}

function drawLetter(x, y, w, h, c)
{

    if (c == " ") {console.log("<SPACE>"); return;}
    //var letter = lettersOrder.indexOf(c);
    //console.log(c);
    //console.log(letter);
    //console.log(images[letter]);
    //can2d.drawImage(images[letter], x, y, w, h);
    renderCan.width = w;
    renderCan.height = h;
    renderLetter(c)
    applyFilters();
    can2d.drawImage(renderCan, x, y, w, h);
}

window.onload = Load;