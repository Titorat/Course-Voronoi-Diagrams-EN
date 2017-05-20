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
  }
}

function distance(pointA, pointB) {
  // TODO implement the manhattan distance function
  // Both tiles and players have a `x` and a `y` property

  return 0;
}
