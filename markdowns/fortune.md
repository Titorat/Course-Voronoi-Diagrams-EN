# Fortune's Algorithm

The naive implementation for calculating Voronoi Diagrams is `O(n^2)` complex. On bigger diagrams with hundreds or thousands of sites a better algorithm is preferred. Fortune's algorithm improves the diagram creation by using a _sweep line_ or _beach line_, moving through the map, storing a priority queue and using a binary search tree during the process.
The algorithm itself it's out of scope due to its complexity, but in this demo you can visualize how Fortune's algorithm works, and how the sweep line advances:

@[Fortune's Algorithm]({"stubs": ["fortune.html","rhill-voronoi.js"],"layout": "aside", "command": "echo 'CG> open --static-dir /project/target /fortune.html'"})

Fortune's algorithm is `O(n log(n))` complex.

You have more information (pseudocode, implementations in different languages) in this link https://en.wikipedia.org/wiki/Fortune%27s_algorithm.

