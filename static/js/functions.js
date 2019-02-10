var getTileID = function (v) {
   return v[0] + v[1] * Math.floor(settings.gameClient.clientWidth/settings.levels.gridSize);
}

var getGridCoords = function (x,y) {
    return [Math.floor(x/settings.levels.gridSize), Math.floor(y/settings.levels.gridSize)];
}