# Voronoi Diagrams: Distance Functions

Voronoi Diagrams are heavily dependent of distance functions. Usually Euclidean distance is used on diagrams, but the Manhattan distance is preferred on grid-based maps. But what is a distance function?

In the real world the distance from a point A to a point B is measured with the length of the imaginary straight line between these two points. That's the *Euclidean* distance. But you can actually measure distances in other ways. For instance, using time. If it takes you `1` hour by car to go from city A to city B, and it takes you `2` hours to go from city A to city C, you will consider city B to be closer, regardless of the geographical distance.

Distance functions are different ways to measure distance: straight line, time, car gas costs, there are many ways to measure distances. In this course we are focusing on two basic distance functions: Euclidean and Manhattan.

# Euclidean Distance
[Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance), also called *L² norm*, measures distance using a straight line in an Euclidean space. In a 2D space it is the same thing as the Pythagorean formula:

```math
\sqrt{dx^2 + dy^2}
```

The square root of the sum of the squared differences of movement on both axis. Here is an implementation of the Euclidean distance function used in a Voronoi Diagram. Try it out, and see that the border between two sites is exactly equidistant to the two points (it's at the middle of the straight line between the two points).

@[Try Euclidean Voronoi Out]({"stubs": ["EuclideanDistance.js"], "command": "echo 'CG> open --static-dir /project/target /EuclideanDistance.html'"})

# Manhattan Distance

[Manhattan distance](https://en.wikipedia.org/wiki/Manhattan_distance), also called *L1 norm*, measures distance on a grid (no diagonal movement is allowed). In a 2D space:

```math
|dx + dy|
```

The absolute value of the sum of the differences of movement on both axis. Here is an implementation of the Manhattan distance function used in a Voronoi Diagram. Try it out, and see that the border between two sites is exactly equidistant (according to the Manhattant distance) to the two points.

@[Try Manhattan Voronoi Out]({"stubs": ["ManhattanDistance.js"], "command": "echo 'CG> open --static-dir /project/target /ManhattanDistance.html'"})

As you see, the Manhattan distance function returns a very different diagram. If you maximize the viewer, you'll notice the rendering of the Voronoi Diagram is quite slow. This is because the naive algorithm is slow. In the next lesson we will review another algorithm which is faster when number of sites are high.
