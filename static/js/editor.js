
// Get rendering context
var ctx = c.getContext("2d")

c.width = settings.gameClient.clientWidth;
c.height = settings.gameClient.clientHeight + 100;


var selectedTile = 1;

var cursor = [0,0];

var level = [];

var xAnchor;

// Draw the editor
var update = function () {
    // Background
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,c.width,settings.gameClient.clientHeight);


    // Grid
    ctx.fillStyle = '#444';

    var gridSize = settings.levels.gridSize
    for (var x=gridSize;x<settings.gameClient.clientWidth;x+=gridSize) {
        ctx.fillRect(x,0,1,settings.gameClient.clientHeight);
    }
    for (var y=gridSize;y<settings.gameClient.clientHeight;y+=gridSize) {
        ctx.fillRect(0,y,c.width,1);  
    }

    // Tiles
    ctx.fillStyle = "#fff";

    for (var t in level) {

        var y = Math.floor( t / (settings.gameClient.clientWidth / gridSize) );
        var x = t % (settings.gameClient.clientWidth / gridSize);

        tiles[level[t]].draw(ctx,x*gridSize,y*gridSize);

    }

    // Bottom Menu Bar
    ctx.fillStyle = "#111";
    ctx.fillRect(0,settings.gameClient.clientHeight,c.width, 100);


    // Tile Buttons
    ctx.fillStyle = "#fff";
    var yAnchor = settings.gameClient.clientHeight + 30;
    xAnchor = settings.gameClient.clientWidth/2 - (gridSize+20)*tiles.length/2;

    for (var t in tiles) {
        tiles[t].draw(ctx, xAnchor+t*(gridSize+20), yAnchor);
    }

    // Cursor Preview
    ctx.fillStyle = "#888";
    tiles[selectedTile].draw(ctx, cursor[0]*gridSize,  cursor[1]*gridSize)


}

c.onclick = function (ev) {
    if (ev.offsetY < settings.gameClient.clientHeight) {
        var tileID = cursor[0] + cursor[1] * Math.floor(settings.gameClient.clientWidth/gridSize);
        level[tileID] = selectedTile;

    } else if (ev.offsetX > xAnchor && ev.offsetX < xAnchor+tiles.length*(gridSize+20)) {
        var menuX = ev.offsetX - xAnchor;
        selectedTile = Math.floor(menuX / (gridSize+20))
    }
}

c.onmousemove = function (ev) {
    cursor[0] = Math.floor(ev.offsetX/gridSize);

    cursor[1] = Math.floor(ev.offsetY/gridSize);
    cursor[1] = Math.min(settings.gameClient.clientHeight-gridSize, cursor[1])
}


setInterval(update, 33)