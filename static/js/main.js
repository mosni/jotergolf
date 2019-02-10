
// Get rendering context
var ctx = c.getContext("2d")

c.width = settings.gameClient.clientWidth;
c.height = settings.gameClient.clientHeight;

ctx.fillRect(0,0,c.width,c.height);

//var levelImport = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,0,0,4,null,3,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,0,0,0,0,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,0,0,1,2,1,null,null,null,null,null,null,null,3,4,null,3,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,0,0,null,null,null,null,null,null,null,null,null,null,2,0,0,0,0,0,0,4,null,null,null,null,null,null,null,null,null,null,null,0,0,1,null,null,null,null,null,null,null,null,null,null,null,null,null,2,1,null,2,1,null,null,4,null,null,null,null,null,null,null,null,0,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,3,4,null,null,null,null,0,0,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,0,4,null,null,null,null,null,null,null,2,1,null,null,null,null,0,1,null,null,null,null,null,null,0,null,null,null,null,null,null,null,3,0,0,0,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,4,null,0,4,null,null,null,null,3,0,0,1,2,0,0,0,4,null,null,null,null,null,null,null,null,null,null,null,null,null,3,0,1,null,0,0,0,0,0,0,0,0,0,null,null,null,null,2,0,4,null,null,null,null,null,null,null,null,null,null,null,3,0,1,null,3];
//var levelImport = [0,0,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,0,null,null,0,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,0,null,null,0,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,0,null,null,0,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,0,null,null,0,null,0,null,null,null,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,null,null,null,null,null,0,null,0,null,null,0,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,0,null,0,0,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,0,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,0,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,0,null,null,null,null,null,null,null,null,null,null,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//var levelImport = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,1,1,null,null,null,2,2,2,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,1,null,null,null,null,null,2,2,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,1,null,null,null,null,null,null,null,2,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,3,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,0,0,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,0,0,0,0,4,null,null,null,null,null,null,null,4,null,null,null,null,null,null,null,null,null,3,null,null,null,null,null,null,null,null,2,0,0,0,0,1,null,null,null,null,null,null,null,4,4,null,null,null,null,null,null,null,3,3,null,null,null,null,null,null,null,null,null,2,0,0,1,null,null,null,null,null,null,null,null,4,4,4,null,null,null,null,null,3,3,3,null,null,null,null,null,null,null,null,null,null,2,1,null,null,null,null,null,null,null,null,null,4,4,4,4,4,null,null,3,3,3,3];
var levelImport = [0,0,0,0,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,0,0,0,4,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,0,0,1,2,0,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2,0,0,4,3,0,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2,0,0,0,1,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,2,0,1,null,2,0,0,1,null,null,2,0,0,0,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,4,null,2,4,null,null,2,1,null,3,0,null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,null,2,4,null,null,null,3,0,0,null,null,0,1,null,null,null,null,null,null,null,null,null,null,null,2,0,0,0,0,0,0,0,4,null,2,0,4,null,2,0,0,0,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,2,0,0,0,0,0,0,0,0,4,null,2,4,null,2,0,null,null,0,null,null,0,null,null,null,null,null,null,null,null,null,null,null,2,0,0,0,0,0,0,0,0,4,null,0,null,null,0,null,0,0,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,2,0,0,1,null,null,2,0,1,null,0,null,null,0,null,null,0,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,0,0,null,null,3,4,null,null,3,0,null,null,0,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,0,0,null,null,2,0,0,0,0,1,null,null,0,null,null,null,null,3,0,4,null,null,null,null,null,null,null,null,null,null,null,null,0,0,4,null,null,null,null,null,null,null,null,null,0,null,null,null,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

var level = [];
for (var l in levelImport) {
    if (levelImport[l] != null) level[l] = levelImport[l]
}

var Ball = function (posX, posY) {
    var velX = 0;
    var velY = 0;

    var playerColor = "white";

    var radius = settings.game.ballRadius;

    this.draw = function () {
        ctx.fillStyle = playerColor;
        ctx.beginPath();
        ctx.arc(posX, posY, radius, 0, 2 * Math.PI, false);
        ctx.fill();

        if (settings.debug.ball) {
            ctx.font = "15px Consolas"
            ctx.textAlign = "center";
            ctx.fillText("X: "+Math.round(posX) + " ("+Math.round(velX)+") \nY: "+Math.round(posY)+" ("+Math.round(velY)+")",posX, posY-20);
        }
    }

    this.move = function () {
        
        var velocity = Math.sqrt( Math.pow(velX, 2) + Math.pow(velY, 2) );

        if (velocity == 0) return;

        velX /= velocity;
        velY /= velocity;

        velocity -= settings.game.ballFriction;

        if (velocity <= 0) velocity = 0;

        velX *= velocity;
        velY *= velocity;

        for (var c=0; c<settings.game.movementGranularity; c++) {
            posX += velX/settings.game.movementGranularity;
            posY += velY/settings.game.movementGranularity;

            if (posX + radius > settings.gameClient.clientWidth) {
                posX = settings.gameClient.clientWidth - radius;
                velX = -velX;
            } else if (posX - radius < 0) {
                posX = radius;
                velX = -velX;
            }

            if (posY + radius > settings.gameClient.clientHeight) {
                posY = settings.gameClient.clientHeight - radius;
                velY = -velY;
            } else if (posY - radius < 0) {
                posY = radius;
                velY = -velY;
            }

            var gridCenter = getGridCoords(posX, posY);
            var gridUp = getGridCoords(posX, posY-radius);
            var gridDown = getGridCoords(posX, posY+radius);
            var gridLeft = getGridCoords(posX-radius, posY);
            var gridRight = getGridCoords(posX+radius, posY);

            if (gridUp[1] == gridCenter[1] || level[ getTileID( gridUp ) ] == undefined ) gridUp = false;
            if (gridDown[1] == gridCenter[1] || level[ getTileID( gridDown ) ] == undefined) gridDown = false;
            if (gridLeft[0] == gridCenter[0] || level[ getTileID( gridLeft ) ] == undefined) gridLeft = false;
            if (gridRight[0] == gridCenter[0] || level[ getTileID( gridRight ) ] == undefined) gridRight = false;
            if (!level[ getTileID( gridCenter ) ]) gridCenter = false;

            if (settings.debug.collision) {
                ctx.fillStyle = "rgba(0, 100, 0, 0.5)";
                if (gridUp) ctx.fillRect(gridUp[0]*gridSize, gridUp[1]*gridSize, gridSize, gridSize);
                if (gridDown) ctx.fillRect(gridDown[0]*gridSize, gridDown[1]*gridSize, gridSize, gridSize);
                if (gridLeft) ctx.fillRect(gridLeft[0]*gridSize, gridLeft[1]*gridSize, gridSize, gridSize);
                if (gridRight) ctx.fillRect(gridRight[0]*gridSize, gridRight[1]*gridSize, gridSize, gridSize);
            }


            if (gridUp ) {
                tiles[ level[ getTileID( gridUp ) ] ].collideUp(this, gridUp);
            } 
            if (gridDown) {
                tiles[ level[getTileID(gridDown)] ].collideDown(this, gridDown);
            }

            if (gridLeft) {
                 tiles[ level[getTileID(gridLeft)] ].collideLeft(this, gridLeft);
            } 
            if (gridRight) {
                tiles[ level[getTileID(gridRight)] ].collideRight(this, gridRight);
            }

            if (gridCenter) {
                tiles[ level[getTileID(gridCenter)]].collideCenter(this, gridCenter);
            }

            /*if ( (gridCenter && (level[getTileID(gridCenter)] == 1)) ) {
                if ( Math.abs( gridCenter[0]*gridSize - posX) + Math.abs( gridCenter[1]*gridSize - posY) < gridSize+radius ) {

                    if (settings.debug.grid) {
                        ctx.fillStyle = "rgba(0,255,255,0.5)";
                        ctx.fillRect(gridCenter[0]*gridSize, gridCenter[1]*gridSize, gridSize, gridSize);
                        ctx.beginPath();
                        ctx.strokeStyle = "rgba(255,255,0,1)";
                        ctx.moveTo(posX, posY);
                        ctx.lineTo(gridCenter[0]*gridSize, gridCenter[1]*gridSize);
                        ctx.stroke();
                    }

                    var vX = -velY;
                    var vY = -velX;
                    velX = vX;
                    velY = vY;
                }
            } 
            /*if ( (gridLeft && (level[getTileID(gridLeft)] == 1)) ) {
                if ( ( Math.abs((gridLeft[0])*gridSize - posX) + Math.abs( (gridLeft[1])*gridSize - posY)) < gridSize+radius ) {
                    console.log("LEFT:", ((gridLeft[0])*gridSize - posX) + ( (gridLeft[1])*gridSize - posY) )

                    if (settings.debug.grid) {
                        ctx.fillStyle = "rgba(255,0,255,0.5)";
                        ctx.fillRect(gridLeft[0]*gridSize, gridLeft[1]*gridSize, gridSize, gridSize);
                        ctx.beginPath();
                        ctx.strokeStyle = "rgba(255,255,0,1)";
                        ctx.moveTo(posX, posY);
                        ctx.lineTo(gridLeft[0]*gridSize, (gridLeft[1])*gridSize);
                        ctx.stroke();
                    }

                    var vX = -velY;
                    var vY = -velX;
                    velX = vX;
                    velY = vY;
                }
            } 
            if ( (gridUp && (level[getTileID(gridUp)] == 1)) ) {
                if ( Math.abs( (gridUp[0]-1)*gridSize - posX) + Math.abs( (gridUp[1]-1) *gridSize - posY) < gridSize+radius ) {

                    if (settings.debug.grid) {
                        ctx.fillStyle = "rgba(255,255,0,0.5)";
                        ctx.fillRect(gridUp[0]*gridSize, gridUp[1]*gridSize, gridSize, gridSize);
                        ctx.beginPath();
                        ctx.strokeStyle = "rgba(255,255,0,1)";
                        ctx.moveTo(posX, posY);
                        ctx.lineTo(gridUp[0]*gridSize, (gridUp[1])*gridSize);
                        ctx.stroke();
                    }

                    var vX = -velY;
                    var vY = -velX;
                    velX = vX;
                    velY = vY;
                }
            } */

        }


    }

    this.getX = function () {
        return posX;
    }

    this.getY = function () {
        return posY;
    }

    this.getVel = function () {
        return [velX, velY];
    }

    this.setVel = function (vec) {
        velX = vec[0];
        velY = vec[1];
    }

    this.setPos = function (pos) {
        posX = pos[0];
        posY = pos[1];
    }

    this.getPos = function () {
        return [posX, posY];
    }

    this.shoot = function(vX, vY) {
        velX = vX;
        velY = vY;
    }
}



var ArrowCursor = function (ball) {
    var posX;
    var posY;

    var vectorX;
    var vectorY;

    var powerFactor;

    var color = "white";

    var maxDist = settings.gameClient.cursorMaxDist;

    this.draw = function () {
        ctx.strokeStyle = color;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(posX, posY);
        ctx.lineTo(ball.getX(), ball.getY());
        ctx.stroke();

        if (settings.debug.cursor) {
            ctx.fillStyle = "white";
            ctx.font = "15px Consolas"
            ctx.textAlign = "center";
            ctx.fillText("X: "+Math.round(vectorX)  +" Y: "+Math.round(vectorY)+ " Power: "+powerFactor,posX, posY-20);
        }
    }

    this.update = function (x,y) {

        vectorX = x-ball.getX();
        vectorY = y-ball.getY();

        var distance = Math.sqrt( Math.pow( vectorX, 2 ) + Math.pow( vectorY, 2 ));

        vectorX /= distance;
        vectorY /= distance;

        distance = Math.min(distance, maxDist)
        powerFactor = distance / maxDist;

        posX = ball.getX() + vectorX*distance;
        posY = ball.getY() + vectorY*distance;
    } 

    this.getResult = function() {
        return [-vectorX*powerFactor, -vectorY*powerFactor];
    }
}

c.onmousedown = function (ev) {
    cursor = new ArrowCursor(b);
    cursor.update(ev.offsetX, ev.offsetY);
}

c.onmouseup = function (ev) {
    var vector = cursor.getResult();
    cursor = null;
    var vX = vector[0];
    var vY = vector[1];
    b.shoot(vX*settings.game.ballMaxSpeed, vY*settings.game.ballMaxSpeed)
}

c.onmousemove = function ( ev ) {
    if (cursor) cursor.update(ev.offsetX, ev.offsetY);
}

var b = new Ball(1200, 600);

var cursor;

var update = function () {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,c.width,c.height);

    ctx.fillStyle = '#444';

    /*if (settings.debug.grid) {
        var gridSize = settings.levels.gridSize
        for (var x=gridSize;x<settings.gameClient.clientWidth;x+=gridSize) {
            ctx.fillRect(x,0,1,c.height);
        }
        for (var y=gridSize;y<settings.gameClient.clientHeight;y+=gridSize) {
            ctx.fillRect(0,y,c.width,1);  

        }
    }*/

    if (cursor) {
        //cursor.update();
        cursor.draw();
    }

    ctx.fillStyle = "#fff";

    for (var t in level) {

        var y = Math.floor( t / (settings.gameClient.clientWidth / gridSize) );
        var x = t % (settings.gameClient.clientWidth / gridSize);

        tiles[level[t]].draw(ctx,x*gridSize,y*gridSize);

    }

    b.move();
    b.draw();   
}




setInterval(update, 8)