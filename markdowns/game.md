# Game AI's

In game theory Voronoi Diagrams are widely used. When N players compete for the same resources, it's vital that game orders are priorized not only by distance, but also for probability of capturing these resource faster than enemies.

On this image:

<img src="voronoi.jpg" alt="Voronoi Game" width="600" style="max-height: 607px;"/>
* Some sprites from https://cdn-games.codingame.com/hypersonic/players.png *
Players `B` and `C` can be tempted to capture the health pack `4`, but according to the Voronoi Diagram Player `D` will reach it faster. If these three players target the same health pack `4`, it's 100% sure that player `D` will take it.
 So in that case the game AI must decide if it takes the risk to go for an item outside its Voronoi Area or play a safe move and target an item inside its Area.
