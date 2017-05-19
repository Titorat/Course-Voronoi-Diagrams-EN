# Fortune's Algorithm

The naive implementation for calculating Voronoi Diagrams is `O(n^2)` complex. On bigger diagrams, with hundreds or thousands of sites, a better algorithm is preferred.

Fortune's algorithm improves the diagram creation by using a _sweep line_ and a _beach line_ moving through the map, iteratively building the Voronoi sites. Under the hood, they store a priority queue and using a binary search tree during the process.
The algorithm is out of scope due to its complexity but in this demo you can visualize how Fortune's algorithm works and how the sweep line advances.:

@[Fortune's Algorithm]({"stubs": ["rhill-voronoi.js"], "command": "echo 'CG> open --static-dir /project/target /fortune.html'"})

The *sweep line* (the light blue line on the viewer) is horizontal and moves through the plane, from top to bottom. Points above the sweep line have been incorporated within the Voronoi Diagram, points below the sweep line are still left to be processed.

The *beach line* (the red/green line on the viewer) is a series of parabolas defined the points of the plane that we are already *sure* belong to a certain site. These parabolas have the site's center as focus.

Fortune's algorithm is `O(n log(n))` complex.

[Here](https://en.wikipedia.org/wiki/Fortune%27s_algorithm) is some more information regarding psudocode and implementations in different languages.
