var tiles = [];

var gridSize = settings.levels.gridSize;

var rect = {
    "draw": function (ctx,x,y) {

        ctx.fillStyle = "white";
        ctx.fillRect(x,y,gridSize,gridSize);
    },
    "collideLeft": function(ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        vel[0] = -vel[0];
        pos[0] = (tilePos[0]+1)*gridSize + settings.game.ballRadius;

        ball.setVel(vel);
        ball.setPos(pos);
    },
    "collideRight": function(ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        vel[0] = -vel[0];
        pos[0] = (tilePos[0])*gridSize - settings.game.ballRadius;

        ball.setVel(vel);
        ball.setPos(pos);
    },
    "collideUp": function(ball, tilePos) {

        var vel = ball.getVel();
        var pos = ball.getPos();
        vel[1] = -vel[1];


        pos[1] = (tilePos[1]+1)*gridSize + settings.game.ballRadius;

        ball.setVel(vel);
        ball.setPos(pos);

    },
    "collideDown": function(ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        vel[1] = -vel[1];
        pos[1] = (tilePos[1])*gridSize - settings.game.ballRadius;

        ball.setVel(vel);
        ball.setPos(pos);
    },
    "collideCenter": function(ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();


        pos[1] = (tilePos[1])*gridSize - settings.game.ballRadius;
        pos[0] = (tilePos[0])*gridSize - settings.game.ballRadius;

        ball.setVel(vel);
        ball.setPos(pos);
    },
};

tiles.push(rect);


var triangle1 = {
    "draw": function (ctx,x,y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+gridSize,y);
        ctx.lineTo(x,y+gridSize);
        ctx.fill();
    },
    "collideDown": function(ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        vel[1] = -vel[1];
        pos[1] = (tilePos[1])*gridSize - settings.game.ballRadius;

        ball.setVel(vel);
        ball.setPos(pos);
    },
    "collideRight": function(ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        vel[0] = -vel[0];
        pos[0] = (tilePos[0])*gridSize - settings.game.ballRadius;

        ball.setVel(vel);
        ball.setPos(pos);
    },
    "collideLeft": function (ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        if ( ( Math.abs((tilePos[0])*gridSize - pos[0]) + Math.abs( (tilePos[1])*gridSize - pos[1])) < gridSize+settings.game.ballRadius ) {


            if (settings.debug.grid) {
                ctx.fillStyle = "rgba(255,0,255,0.5)";
                ctx.fillRect(tilePos[0]*gridSize, tilePos[1]*gridSize, gridSize, gridSize);
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,255,0,1)";
                ctx.moveTo(pos[0], pos[1]);
                ctx.lineTo(tilePos[0]*gridSize, (tilePos[1])*gridSize);
                ctx.stroke();
            }

            var vX = -vel[1];
            var vY = -vel[0];
            vel[0] = vX;
            vel[1] = vY;

            ball.setVel(vel);
            ball.setPos(pos);
        }
    },
    "collideUp": function (ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        if ( ( Math.abs((tilePos[0])*gridSize - pos[0]) + Math.abs( (tilePos[1])*gridSize - pos[1])) < gridSize+settings.game.ballRadius ) {


            if (settings.debug.grid) {
                ctx.fillStyle = "rgba(255,0,255,0.5)";
                ctx.fillRect(tilePos[0]*gridSize, tilePos[1]*gridSize, gridSize, gridSize);
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,255,0,1)";
                ctx.moveTo(pos[0], pos[1]);
                ctx.lineTo(tilePos[0]*gridSize, (tilePos[1])*gridSize);
                ctx.stroke();
            }

            var vX = -vel[1];
            var vY = -vel[0];
            vel[0] = vX;
            vel[1] = vY;

            ball.setVel(vel);
            ball.setPos(pos);
        }
    },
    "collideCenter": function (ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        if ( ( Math.abs((tilePos[0])*gridSize - pos[0]) + Math.abs( (tilePos[1])*gridSize - pos[1])) < gridSize+settings.game.ballRadius ) {


            if (settings.debug.grid) {
                ctx.fillStyle = "rgba(255,0,255,0.5)";
                ctx.fillRect(tilePos[0]*gridSize, tilePos[1]*gridSize, gridSize, gridSize);
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,255,0,1)";
                ctx.moveTo(pos[0], pos[1]);
                ctx.lineTo(tilePos[0]*gridSize, (tilePos[1])*gridSize);
                ctx.stroke();
            }

            var vX = -vel[1];
            var vY = -vel[0];
            vel[0] = vX;
            vel[1] = vY;

            ball.setVel(vel);
            ball.setPos(pos);
        }
    },
}

var triangle2 = {
    "draw": function (ctx,x,y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+gridSize,y+gridSize);
        ctx.lineTo(x+gridSize,y);
        ctx.fill();
    },
    "collideDown": function(ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        vel[1] = -vel[1];
        pos[1] = (tilePos[1])*gridSize - settings.game.ballRadius;

        ball.setVel(vel);
        ball.setPos(pos);
    },
    "collideLeft": function(ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        vel[0] = -vel[0];
        pos[0] = (tilePos[0]+1)*gridSize + settings.game.ballRadius;
        
        ball.setVel(vel);
        ball.setPos(pos);
    },
    "collideCenter": function (ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        if ( ( Math.abs(((tilePos[0]+1))*gridSize - pos[0]) + Math.abs( (tilePos[1])*gridSize - pos[1])) < gridSize+settings.game.ballRadius ) {


            if (settings.debug.grid) {
                ctx.fillStyle = "rgba(255,0,255,0.5)";
                ctx.fillRect((tilePos[0]+1)*gridSize, tilePos[1]*gridSize, gridSize, gridSize);
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,255,0,1)";
                ctx.moveTo(pos[0], pos[1]);
                ctx.lineTo((tilePos[0]+1)*gridSize, (tilePos[1])*gridSize);
                ctx.stroke();
            }

            var vX = vel[1];
            var vY = vel[0];
            vel[0] = vX;
            vel[1] = vY;

            ball.setVel(vel);
            ball.setPos(pos);
        }
    },
    "collideUp": function (ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        if ( ( Math.abs(((tilePos[0]+1))*gridSize - pos[0]) + Math.abs( (tilePos[1])*gridSize - pos[1])) < gridSize+settings.game.ballRadius ) {


            if (settings.debug.grid) {
                ctx.fillStyle = "rgba(255,0,255,0.5)";
                ctx.fillRect(tilePos[0]*gridSize, tilePos[1]*gridSize, gridSize, gridSize);
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,255,0,1)";
                ctx.moveTo(pos[0], pos[1]);
                ctx.lineTo((tilePos[0]+1)*gridSize, (tilePos[1])*gridSize);
                ctx.stroke();
            }

            var vX = vel[1];
            var vY = vel[0];
            vel[0] = vX;
            vel[1] = vY;

            ball.setVel(vel);
            ball.setPos(pos);
        }
    },
    "collideRight": function (ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        if ( ( Math.abs(((tilePos[0]+1))*gridSize - pos[0]) + Math.abs( (tilePos[1])*gridSize - pos[1])) < gridSize+settings.game.ballRadius ) {


            if (settings.debug.grid) {
                ctx.fillStyle = "rgba(255,0,255,0.5)";
                ctx.fillRect((tilePos[0]+1)*gridSize, tilePos[1]*gridSize, gridSize, gridSize);
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,255,0,1)";
                ctx.moveTo(pos[0], pos[1]);
                ctx.lineTo((tilePos[0]+1)*gridSize, (tilePos[1])*gridSize);
                ctx.stroke();
            }

            var vX = vel[1];
            var vY = vel[0];
            vel[0] = vX;
            vel[1] = vY;

            ball.setVel(vel);
            ball.setPos(pos);
        }
    },

}

var triangle3 = {
    "draw": function (ctx,x,y) {
        ctx.beginPath();
        ctx.moveTo(x+gridSize,y);
        ctx.lineTo(x+gridSize,y+gridSize);
        ctx.lineTo(x,y+gridSize);
        ctx.fill();
    },
    "collideUp": function(ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();
        vel[1] = -vel[1];


        pos[1] = (tilePos[1]+1)*gridSize + settings.game.ballRadius;

        ball.setVel(vel);
        ball.setPos(pos);

    },
    "collideLeft": function(ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        vel[0] = -vel[0];
        pos[0] = (tilePos[0]+1)*gridSize + settings.game.ballRadius;
        
        ball.setVel(vel);
        ball.setPos(pos);
    },
    "collideRight":  function (ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        if ( ( Math.abs(((tilePos[0]+1))*gridSize - pos[0]) + Math.abs( (tilePos[1]+1)*gridSize - pos[1])) < gridSize+settings.game.ballRadius ) {


            if (settings.debug.grid) {
                ctx.fillStyle = "rgba(255,0,255,0.5)";
                ctx.fillRect((tilePos[0]+1)*gridSize, tilePos[1]*gridSize, gridSize, gridSize);
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,255,0,1)";
                ctx.moveTo(pos[0], pos[1]);
                ctx.lineTo((tilePos[0]+1)*gridSize, (tilePos[1])*gridSize);
                ctx.stroke();
            }

            var vX = -vel[1];
            var vY = -vel[0];
            vel[0] = vX;
            vel[1] = vY;

            ball.setVel(vel);
            ball.setPos(pos);
        }
    },
    "collideDown":  function (ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        if ( ( Math.abs(((tilePos[0]+1))*gridSize - pos[0]) + Math.abs( (tilePos[1]+1)*gridSize - pos[1])) < gridSize+settings.game.ballRadius ) {


            if (settings.debug.grid) {
                ctx.fillStyle = "rgba(255,0,255,0.5)";
                ctx.fillRect((tilePos[0]+1)*gridSize, tilePos[1]*gridSize, gridSize, gridSize);
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,255,0,1)";
                ctx.moveTo(pos[0], pos[1]);
                ctx.lineTo((tilePos[0]+1)*gridSize, (tilePos[1])*gridSize);
                ctx.stroke();
            }

            var vX = -vel[1];
            var vY = -vel[0];
            vel[0] = vX;
            vel[1] = vY;

            ball.setVel(vel);
            ball.setPos(pos);
        }
    },
    "collideCenter":  function (ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        if ( ( Math.abs(((tilePos[0]+1))*gridSize - pos[0]) + Math.abs( (tilePos[1]+1)*gridSize - pos[1])) < gridSize+settings.game.ballRadius ) {


            if (settings.debug.grid) {
                ctx.fillStyle = "rgba(255,0,255,0.5)";
                ctx.fillRect((tilePos[0]+1)*gridSize, tilePos[1]*gridSize, gridSize, gridSize);
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,255,0,1)";
                ctx.moveTo(pos[0], pos[1]);
                ctx.lineTo((tilePos[0]+1)*gridSize, (tilePos[1])*gridSize);
                ctx.stroke();
            }

            var vX = -vel[1];
            var vY = -vel[0];
            vel[0] = vX;
            vel[1] = vY;

            ball.setVel(vel);
            ball.setPos(pos);
        }
    },
}
var triangle4 = {
    "draw": function (ctx,x,y) {
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x,y+gridSize);
        ctx.lineTo(x+gridSize,y+gridSize);
        ctx.fill();
    },
    "collideUp": function(ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();
        vel[1] = -vel[1];


        pos[1] = (tilePos[1]+1)*gridSize + settings.game.ballRadius;

        ball.setVel(vel);
        ball.setPos(pos);

    },
    "collideRight": function(ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        vel[0] = -vel[0];
        pos[0] = (tilePos[0])*gridSize - settings.game.ballRadius;

        ball.setVel(vel);
        ball.setPos(pos);
    },
    "collideDown": function (ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        if ( ( Math.abs(((tilePos[0]))*gridSize - pos[0]) + Math.abs( (tilePos[1]+1)*gridSize - pos[1])) < gridSize+settings.game.ballRadius ) {


            if (settings.debug.grid) {
                ctx.fillStyle = "rgba(255,0,255,0.5)";
                ctx.fillRect((tilePos[0]+1)*gridSize, tilePos[1]*gridSize, gridSize, gridSize);
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,255,0,1)";
                ctx.moveTo(pos[0], pos[1]);
                ctx.lineTo((tilePos[0]+1)*gridSize, (tilePos[1])*gridSize);
                ctx.stroke();
            }

            var vX = vel[1];
            var vY = vel[0];
            vel[0] = vX;
            vel[1] = vY;

            ball.setVel(vel);
            ball.setPos(pos);
        }
    },
    "collideLeft": function (ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        if ( ( Math.abs(((tilePos[0]))*gridSize - pos[0]) + Math.abs( (tilePos[1]+1)*gridSize - pos[1])) < gridSize+settings.game.ballRadius ) {


            if (settings.debug.grid) {
                ctx.fillStyle = "rgba(255,0,255,0.5)";
                ctx.fillRect((tilePos[0]+1)*gridSize, tilePos[1]*gridSize, gridSize, gridSize);
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,255,0,1)";
                ctx.moveTo(pos[0], pos[1]);
                ctx.lineTo((tilePos[0]+1)*gridSize, (tilePos[1])*gridSize);
                ctx.stroke();
            }

            var vX = vel[1];
            var vY = vel[0];
            vel[0] = vX;
            vel[1] = vY;

            ball.setVel(vel);
            ball.setPos(pos);
        }
    },
    "collideCenter": function (ball, tilePos) {
        var vel = ball.getVel();
        var pos = ball.getPos();

        if ( ( Math.abs(((tilePos[0]))*gridSize - pos[0]) + Math.abs( (tilePos[1]+1)*gridSize - pos[1])) < gridSize+settings.game.ballRadius ) {


            if (settings.debug.grid) {
                ctx.fillStyle = "rgba(255,0,255,0.5)";
                ctx.fillRect((tilePos[0]+1)*gridSize, tilePos[1]*gridSize, gridSize, gridSize);
                ctx.beginPath();
                ctx.strokeStyle = "rgba(255,255,0,1)";
                ctx.moveTo(pos[0], pos[1]);
                ctx.lineTo((tilePos[0]+1)*gridSize, (tilePos[1])*gridSize);
                ctx.stroke();
            }

            var vX = vel[1];
            var vY = vel[0];
            vel[0] = vX;
            vel[1] = vY;

            ball.setVel(vel);
            ball.setPos(pos);
        }
    },
}

tiles.push(triangle1,triangle2,triangle3,triangle4)