var renderCan = document.createElement("canvas");
var renderContext = renderCan.getContext("2d");

renderCan.width = 1000;
renderCan.height = 1000;

var origScaleX = 200;
var origScaleY = 200;

function renderLetter(letter)
{
    renderContext.clearRect(0, 0, renderCan.width, renderCan.height);
    var width = 10;
    if (letter == "A")
    {
        new LineObj([[150,167],[123,35],[23,178]], width, [10, 2], "3pt.sharp").Draw(renderContext);
        new LineObj([[54,98],[186, 100]], width, [10], "2pt.basic").Draw(renderContext);
    }
    else if (letter == "B")
    {
        new LineObj([[60,27],[49,48],[38,80],[33,101],[28,126],[29,157],[37,183],[54,187],[81,187],[100,180],[116,160],[127,141],[132,121],[123,103],[94,100],[58,105],[76,104],[109,98],[141,92],[167,78],[179,61],[171,40],[150,28],[123,22],[95,19],[74,19],[55,25]], width, [1], "multipt.curve", 1).Draw(renderContext);
    }
    else if (letter == "C")
    {
        new LineObj([[162,12],[98,14],[53,35],[19,90],[43,149],[99,178],[188,182]], width, [10], "multipt.curve", .9).Draw(renderContext);
    }
    else if (letter == "D")
    {
        new LineObj([[34,12],[22,184],[31,189],[142,158],[174,117],[186,73],[143,28],[32,30]], width, [5], "multipt.curve", .67).Draw(renderContext);
    }
    else if (letter == "E")
    {
        new LineObj([[183,23],[35,19]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[156,82],[27,105]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[169,170],[24,171]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[33,17],[22,178]], width, [5], "2pt.basic").Draw(renderContext);
    }
    else if (letter == "F")
    {
        new LineObj([[183,33],[47,16],[30,180]], width, [10,2], "3pt.sharp").Draw(renderContext);
        new LineObj([[127,96],[45,90]], width, [5], "2pt.basic").Draw(renderContext);
    }
    else if (letter == "G")
    {
        new LineObj([[133,35],[105,17],[46,40],[19,101],[37,151],[69,175],[108,184],[148,164],[157,139],[151,107],[114,94],[182,87]], width, [3], "multipt.curve", .9).Draw(renderContext);
    }
    else if (letter == "H")
    {
        new LineObj([[30,26],[32,161]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[178,24],[161,172]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[26,79],[167,89]], width, [5], "2pt.basic").Draw(renderContext);
    }
    else if (letter == "I")
    {
        new LineObj([[20,36],[176,28]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[90,27],[84,181]], width, [2], "2pt.basic").Draw(renderContext);
        new LineObj([[19,183],[183,180]], width, [5], "2pt.basic").Draw(renderContext);
    }
    else if (letter == "J")
    {
        new LineObj([[119,21],[127,74],[123,120],[109,152],[80,175],[43,182],[17,167]], width, [3], "multipt.curve", 1).Draw(renderContext);
        new LineObj([[64,21],[176,23]], width, [5], "2pt.basic").Draw(renderContext);
    }
    else if (letter == "K")
    {
        new LineObj([[48,20],[32,182]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[172,42],[41,78]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[37,83],[86,141],[151,167]], width, [3], "multipt.curve", 1).Draw(renderContext);
        //new LineObj([[67,96],[91,140],[155,166]], width, [3], "multipt.curve", 1).Draw(renderContext);
    }
    else if (letter == "L")
    {
        new LineObj([[58,23],[28,184],[180,171]], width, [10, 2], "3pt.sharp").Draw(renderContext);
    }
    else if (letter == "M")
    {
        new LineObj([[23,177],[107,25],[124,123],[174,41],[170,179]], width, [5], "multipt.curve", .9).Draw(renderContext);
    }
    else if (letter == "N")
    {
        new LineObj([[16,176],[108,30],[104,185],[188,21]], width, [10], "multipt.curve", .9).Draw(renderContext);
    }
    else if (letter == "O")
    {
        new LineObj([[131,27],[101,27],[65,38],[36,64],[17,94],[15,142],[29,166],[53,178],[97,169],[134,152],[169,116],[186,74],[185,41],[163,29],[128,36]], width, [2], "multipt.curve", 1).Draw(renderContext);
    }
    else if (letter == "P")
    {
        new LineObj([[65,14],[33,182]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[60,13],[119,24],[177,58],[166,94],[112,109],[47,116]], width, [2], "multipt.curve", 1).Draw(renderContext);
    }
    else if (letter == "Q")
    {
        new LineObj([[114,100],[179,165]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[136,23],[85,22],[44,63],[19,113],[25,159],[62,183],[108,165],[140,116],[141,53]], width, [2], "multipt.curve", 1).Draw(renderContext);
    }
    else if (letter == "R")
    {
        new LineObj([[50,24],[28,175]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[51,22],[91,17],[121,20],[144,32],[123,59],[86,75],[45,74]], width, [2], "multipt.curve", 1).Draw(renderContext);
        new LineObj([[80,70],[115,133],[173,182]], width, [1], "multipt.curve", 1).Draw(renderContext);
    }
    else if (letter == "S")
    {
        new LineObj([[119,24],[84,19],[48,45],[36,69],[59,93],[118,110],[168,122],[177,138],[162,160],[106,185]], width, [5], "multipt.curve", 1).Draw(renderContext);
    }
    else if (letter == "T")
    {
        new LineObj([[27,25],[181,24]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[80,22],[61,176]], width, [5], "2pt.basic").Draw(renderContext);
    }
    else if (letter == "U")
    {
        new LineObj([[50,22],[31,83],[32,148],[51,173],[85,184],[125,170],[150,146],[176,88],[179,35]], width, [3], "multipt.curve", 1).Draw(renderContext);
    }
    else if (letter == "V")
    {
        new LineObj([[38,22],[69,175],[173,26]], width, [10], "multipt.curve", .7).Draw(renderContext);
    }
    else if (letter == "W")
    {
        new LineObj([[11,13],[38,179],[97,72],[109,162],[190,40]], width, [5], "multipt.curve", .9).Draw(renderContext);
    }
    else if (letter == "X")
    {
        new LineObj([[52,23],[135,171]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[19,181],[172,22]], width, [5], "2pt.basic").Draw(renderContext);
    }
    else if (letter == "Y")
    {
        new LineObj([[63,85],[48,176]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[182,21],[61,84],[23,17]], width, [5], "multipt.curve", .9).Draw(renderContext);
    }
    else if (letter == "Z")
    {
        new LineObj([[51,101],[157,106]], width, [5], "2pt.basic").Draw(renderContext);
        new LineObj([[55,27],[166,23],[16,180],[183,162]], width, [5], "multipt.curve", .5).Draw(renderContext);
    }
    return renderCan;
}

function LineObj(tpoints, twidth, tstds, tconnectType, tTension)
{
    this.Points = tpoints;
    this.STDs = tstds;
    this.Ltype = tconnectType;
    this.Width = average([renderCan.width/origScaleX,renderCan.height/origScaleY]) * twidth; //HACK: Since we cant define width in both axes, we will just average it
    this.Tension = tTension;
    this.Draw = function(renderContext)
    {
        if (this.Ltype == "3pt.sharp")
        {
            //Apply random transform
            var p0 = applyScalingSingle(applyRandTransformPoint(this.STDs[0], this.Points[0]), origScaleX, origScaleY, renderCan.width, renderCan.height);
            var p1 = applyScalingSingle(applyRandTransformPoint(this.STDs[1], this.Points[1]), origScaleX, origScaleY, renderCan.width, renderCan.height);
            drawline(renderContext, this.Width, p0[0], p0[1], p1[0], p1[1]);
            p0 = applyScalingSingle(applyRandTransformPoint(this.STDs[1], this.Points[1]), origScaleX, origScaleY, renderCan.width, renderCan.height);
            p1 = applyScalingSingle(applyRandTransformPoint(this.STDs[0], this.Points[2]), origScaleX, origScaleY, renderCan.width, renderCan.height);
            drawline(renderContext, this.Width, p0[0], p0[1], p1[0], p1[1]);
        }
        else if (this.Ltype == "2pt.basic")
        {
            var p0 = applyScalingSingle(applyRandTransformPoint(this.STDs[0], this.Points[0]), origScaleX, origScaleY, renderCan.width, renderCan.height);
            var p1 = applyScalingSingle(applyRandTransformPoint(this.STDs[0], this.Points[1]), origScaleX, origScaleY, renderCan.width, renderCan.height);
            drawline(renderContext, this.Width, p0[0], p0[1], p1[0], p1[1]);
        }
        else if (this.Ltype == "multipt.curve")
        {
            for (var i = 0; i < this.Points.length; i++)
            {
                this.Points[i] = applyScalingSingle(applyRandTransformPoint(this.STDs[0], this.Points[i]), origScaleX, origScaleY, renderCan.width, renderCan.height);
            }
            drawCurve(renderContext, this.Points, this.Width, this.Tension);
        }
    };
}

function applyFilters()
{
    var outimg = undefined;
    outimg = Filters.filterImage(Filters.convolute, renderCan, 
        [ 1/9, 1/9, 1/9,
            1/9, 1/9, 1/9,
            1/9, 1/9, 1/9 ]);
    renderContext.putImageData(outimg, 0, 0);
    outimg = Filters.filterImage(Filters.convolute, renderCan, 
        [ 1/9, 1/9, 1/9,
            1/9, 1/9, 1/9,
            1/9, 1/9, 1/9 ]);
    renderContext.putImageData(outimg, 0, 0);
    outimg = Filters.filterImage(Filters.convolute, renderCan, 
        [ 1/8, 1/8, 1/8,
            1/8, 0, 1/8,
            1/8, 1/8, 1/8 ]);
    renderContext.putImageData(outimg, 0, 0);
    // outimg = Filters.filterImage(Filters.convolute, renderCan, 
    //     [0, -1,  0,
    //     -1,  5, -1,
    //      0, -1,  0]);
    // renderContext.putImageData(outimg, 0, 0);
    // outimg = Filters.filterImage(Filters.convolute, renderCan, 
    //     [0, -1,  0,
    //     -1,  5, -1,
    //      0, -1,  0]);
    // renderContext.putImageData(outimg, 0, 0);
    outimg = Filters.filterImage(Filters.randomAlphaFilter, renderCan, .25);
    renderContext.putImageData(outimg, 0, 0);
    //outimg = Filters.filterImage(Filters.compressAlpha, renderCan, .05);
    //renderContext.putImageData(outimg, 0, 0);
    //outimg = Filters.filterImage(Filters.thresholdPass, renderCan, 200);
    //renderContext.putImageData(outimg, 0, 0);
    outimg = Filters.filterImage(Filters.alphaMultFilter, renderCan, 1.2);//1.2);
    renderContext.putImageData(outimg, 0, 0);
}