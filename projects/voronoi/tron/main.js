var canvas = document.getElementById('tron');
var ctx = canvas.getContext("2d");
var players;

var H = 12;

var windowH = document.documentElement.clientHeight;
var windowW = document.documentElement.clientWidth;

ctx.canvas.width  = windowW;
ctx.canvas.height = windowH;

var cellSize = Math.floor(windowH / H);
var W = Math.floor(windowW / cellSize);

console.log(H, W, cellSize);

var tiles = [];
var map = [];

var black = '#000000';

var gameEnded = false;
var interval;

function createPlayer(id, x, y) {
  return {
    id,
    x,
    y,
    color: id ? "#F66" : "#66F"
  }
}

function drawTiles(tiles, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(var t in tiles) {
    var tile = tiles[t];
    ctx.strokeStyle="#AAAAAA";
    ctx.fillStyle=black;
    if (tile.player) {
      ctx.fillRect(tile.x * cellSize, tile.y * cellSize, cellSize, cellSize);
    } else if(tile.site) {
      ctx.fillStyle=tile.site.color;
      ctx.fillRect(tile.x * cellSize, tile.y * cellSize, cellSize, cellSize);
    } else {
      ctx.rect(tile.x * cellSize, tile.y * cellSize, cellSize, cellSize);
    }
  }
  ctx.stroke();
}

function getNeigh(tile) {
  var neigh = [];
  if(tile.y > 0) {
    neigh.push(map[tile.y - 1][tile.x])
  }

  if(tile.x > 0) {
    neigh.push(map[tile.y][tile.x - 1])
  }
  if(tile.x < W - 1) {
    neigh.push(map[tile.y][tile.x + 1])
  }

  if(tile.y < H - 1) {
    neigh.push(map[tile.y + 1][tile.x])
  }
  return neigh.filter(t => !t.player);
}

function move(player) {
  var tile = map[player.y][player.x];
  var neighbours = getNeigh(tile);

  var newTile = neighbours[Math.floor(neighbours.length * Math.random())]
  player.x = newTile.x;
  player.y = newTile.y;
}

function animate() {
  fillVoronoi (tiles, players);
  for(var p in players) {
    var player = players[p];
    move(player);
    var tile = map[player.y][player.x];
    tile.player = player;
  }

  drawTiles(tiles, ctx);
}

function main() {
  console.log(canvas);

  for (var i=0; i<H; i++) {
    map.push([]);
    for (var j=0; j<W; j++) {
      tiles.push({
        x: j,
        y: i,
        player: null,
        site: null
      });
      map[i].push(tiles[tiles.length-1]);
    }
  }
  ctx.stroke();

  players = [createPlayer(0,0,0), createPlayer(1, W-1, H-1)];
  console.log(players);
  console.log(tiles);
  tiles[0].player = players[0];
  tiles[tiles.length - 1].player = players[1];
  drawTiles(tiles, ctx);

  interval = setInterval(function(){
    try {
      animate();
    } catch(e) {
      clearInterval(interval);
    }
  }, 500);
}

main();
