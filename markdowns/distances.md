# Voronoi Diagrams: Distance Functions

Voronoi Diagrams are heavily dependent of distance functions. Usually [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is used on diagrams, but the [Manhattan distance](https://en.wikipedia.org/wiki/Manhattan_distance) is preferred on grid-based maps.

In this exercise, you’ll define the Euclidean distance function for a Voronoi diagram and visualize the result. Afterwards, run it again with a Manhattan distance function:
@[Distance functions]({"stubs": ["distance.js"],"layout": "aside", "command": "echo 'CG> open --static-dir /project/target /distance.html'"})

As you see, the Manhattan distance function returns a very different diagram. If you maximize the viewer, you'll notice the rendering of the Voronoi Diagram is quite slow. This is because the naive algorithm is slow. In the next lesson we will review another algorithm which is faster when number of sites are high.
