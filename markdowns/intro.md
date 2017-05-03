# What are Voronoi Diagrams?

A Voronoi diagram is a simple concept, and it's based on the minimal distance needed to reach a landmark.
If you need to go to a metro station, the most natural algorithm is going to the nearest one. Simple, isn't it?

*Imagine a city, where a fire is declared. Emergency services need to send a fire truck to this place. If there are N fire stations, what fire truck should be sent?*
![Voronoi Trucks](trucks.gif "Voronoi Trucks")
The nearest fire truck (according to Manhattan distance) is in the light green Voronoi Area, the same area as the fire. No other truck can reach any light green point faster than this truck.

Voronoi diagram is just the generalization of that idea for every point in a map:
>**Voronoi Diagram:** On a plane, for a set of sites (points in that 2D space with similar properties) the Voronoi diagram partitions the space based on the minimal distance to each site.

In pseudo-code this is represented as:
```csharp
 for each (point in plane){
   voronoi[point] = null; //Clear site owner of the point
   for each (site in list_sites){
     double tempdist = distance(point,site);
	 if (voronoi[point] == null || tempdist < distance(point, voronoi[point]) )
	    voronoi[point] = site; //Update site owner if it's nearest.
   }
 }
```
This is a naive implementation. It has an `O(n^2)` complexity, so it's OK for a low number of sites.
There are better algorithms with `O(n log(n))` complexity.

In that pseudo-code we don't declare `distance` function on purpose, as it has a noticeable effect on the resulting Voronoi Diagram, we'll work with distance functions on next lessons.