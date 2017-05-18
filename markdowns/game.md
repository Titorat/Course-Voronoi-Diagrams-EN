# Game AI's

In game theory, Voronoi Diagrams are widely used. When N players compete for the same resources, it's vital that game orders are priorized not only by distance, but also for probability of capturing these resource faster than enemies.

On this image:

![Voronoi Game](voronoi.jpg "Voronoi Game")

_Some sprites from https://cdn-games.codingame.com/hypersonic/players.png_

Players `B` and `C` can be tempted to capture the health pack `4`, but according to the Voronoi Diagram Player `D` will reach it faster. If the three players target the same health pack, it’s almost certain that player `D` will take it.
In that case, the game’s AI must decide if it takes the risk to target an item outside it’s Voronoi Area or to play it safe and target one inside the area.

Voronoi Diagrams are also used to maximize control areas. If the meta game is about maximizing the controlled area and you can move in four directions, a good heuristic can be try to simulate a move in each of these 4 directions, and calculate the resulting Voronoi Diagram. The move that gives the largest Voronoi Area is probably the best move.
 Learn more about that heuristic in [Tron Google AI Challenge post-mortem](https://www.a1k0n.net/2010/03/04/google-ai-postmortem.html)

 ![Voronoi Control](https://www.a1k0n.net/img/voronoi.gif "Voronoi Control")
 *Image from https://www.a1k0n.net/img/voronoi.gif*

