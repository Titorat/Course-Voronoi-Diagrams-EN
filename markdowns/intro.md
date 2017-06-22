# What are Voronoi Diagrams?

A Voronoi diagram is a simple concept, and it's based on the minimal distance needed to reach a landmark.
If you need to go to a metro station, the most natural algorithm is going to the nearest one. Simple, isn't it?

*Imagine a city, where a fire is declared. Emergency services need to send a fire truck to this place. If there are N fire stations, what fire truck should be sent?*
![Voronoi Trucks](/images/trucks.gif "Voronoi Trucks")
The nearest fire truck is in the light green Voronoi Area, the same area as the fire. No other truck can reach any light green point faster than this truck.

Voronoi diagram is just the generalization of that idea for every point in a map:
>**Voronoi Diagram:** On a plane, for a set of sites (points in that 2D space with similar properties) the Voronoi diagram partitions the space based on the minimal distance to each site.

In pseudo-code this is represented as:

```csharp
 for each (point in plane){
   voronoi[point] = null; // Clear site owner of the point
   for each (site in list_sites){
     double tempdist = distance(point,site);
	 if (voronoi[point] == null || tempdist < distance(point, voronoi[point]) )
	    voronoi[point] = site; // Update site owner if it's nearest.
   }
 }
```

This is a naive implementation. Since we check for each pixel what site it is in, for `p` pixels and `s` sites, the time complexity of the algorithm is `O(p * s)`, so it's OK for a low number of sites.
There are better algorithms with `O(n log(n))` time complexity.

In that pseudo-code we don't declare `distance` function on purpose, as it has a noticeable effect on the resulting Voronoi Diagram. We'll work with distance functions on next lessons.

## Use case: Game AI's

In game theory, Voronoi Diagrams are widely used. When N players compete for the same resources, it's vital that game orders are priorized not only by distance, but also for probability of capturing these resource faster than enemies.

On this image:

![Voronoi Game](/images/voronoi.jpg "Voronoi Game")

Players `B` and `C` can be tempted to capture the health pack `4`, but according to the Voronoi Diagram Player `D` will reach it faster. If the three players target the same health pack, it’s almost certain that player `D` will take it.
In that case, the game’s AI must decide if it takes the risk to target an item outside it’s Voronoi Area or to play it safe and target one inside the area.

Voronoi Diagrams are also used to maximize control areas. If the meta game is about maximizing the controlled area and you can move in four directions, a good heuristic can be try to simulate a move in each of these 4 directions, and calculate the resulting Voronoi Diagram. The move that gives the largest Voronoi Area is probably the best move.
Learn more about that heuristic in [Tron Google AI Challenge post-mortem](https://www.a1k0n.net/2010/03/04/google-ai-postmortem.html)

![Voronoi Control](https://www.a1k0n.net/img/voronoi.gif "Voronoi Control")
*Image from https://www.a1k0n.net/img/voronoi.gif*
