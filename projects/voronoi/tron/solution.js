// Color each point

function fillVoronoi (tiles, players) {
  /*
    Modify the `site` property of *each* tile according to be a *reference* to one of the players
    given as parameter. The tile must be in that player's Voronoi site.
    ex:
      tiles[0].site = players[0];
      tiles[1].site = players[1];
    Then return the tiles array
  */
  // TODO
  for(var t in tiles) {
    var tile = tiles[t];
    tile.site = null;
    for (s in players){
      var site = players[s];
      var tempdist = distance(tile,site);
      if (tile.site === null || tempdist < distance(tile, tile.site) ){
        tile.site = site; // Update site owner if it's nearest.
      }
    }
  }
}

function distance(pointA, pointB) {
  // TODO implement the manhattan distance function
  // Both tiles and players have a `x` and a `y` property

  //return 0;

  return Math.abs(pointA.x - pointB.x) + Math.abs(pointB.y - pointA.y);
}
