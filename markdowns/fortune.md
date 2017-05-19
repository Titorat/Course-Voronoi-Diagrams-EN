# Fortune's Algorithm

The naive implementation for calculating Voronoi Diagrams is `O(n^2)` complex. On bigger diagrams, with hundreds or thousands of sites, a better algorithm is preferred.

Fortune's algorithm improves the diagram creation by using two lines moving through the map, iteratively building the Voronoi sites. Under the hood, they store a priority queue and use a binary search tree during the process.
The algorithm is out of scope due to its complexity but in this demo you can visualize how Fortune's algorithm works and how the lines advances:

@[Fortune's Algorithm]({"stubs": ["blank"], "command": "echo 'CG> open --static-dir /project/target /fortune.html'"})

The *sweep line* (the light blue line on the viewer) is a straight horizontal line and moves through the plane, from top to bottom. Points below the sweep line are still left to be processed.

The *beach line* (the red/green line on the viewer) is a series of parabolas. A parabola has a site's center as its focus and points inside the parabola are sure to belong to the site, while points outside the parabola are still uncertain. Points above the beach line have been incorporated within the Voronoi Diagram. Points between the sweep and beach lines are still uncertain.

Fortune's algorithm is `O(n log(n))` complex. If you open the demo in fullscreen you can see the size doesn't impact performance as much as the naive algorithm. The full source for this implementation of the Fortune's algorithm by Raymond Hill is [available here](https://github.com/gorhill/Javascript-Voronoi/blob/master/rhill-voronoi-core.js).

[Here](https://en.wikipedia.org/wiki/Fortune%27s_algorithm) is some more information regarding psudocode and implementations in different languages.
