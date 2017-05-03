# Voronoi Diagrams: Distance Functions

Voronoi Diagrams are heavily dependent of distance functions. Usually [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) is used on diagrams, but on grid-based maps the [Manhattan distance](https://en.wikipedia.org/wiki/Manhattan_distance) is preferred.

On this exercise you'll define the Euclidean distance function for a Voronoi diagram, and visualize the result. Then, run it again with a Manhattan distance function:
@[Distance functions]({"stubs": ["distance.js","distance.html"],"layout": "aside", "command": "echo 'CG> open --static-dir /project/target /distance.html'"})

As you see, a Manhattan distance function gives a very different diagram.
If you maximize the Viewer you'll notice that the rendering of the Voronoi Diagram is really slow. This is because naive algorithm is slow. On the next lesson we will review another algorithm, faster when number of sites are high.