# Final words

In this course, we learned the basics of Voronoi Diagrams. The concept is simple yet powerful as Voronoi Diagrams are widely used in many fields.

**Pros**

- Simple concept, easy to understand and to apply.
- Easy to adapt to various problems with customized distance functions.

**Cons**

- Voronoi Diagrams can't deal with real-time distances. A planned emergency response diagram renders useless if traffic jams affect ambulances travel time, as you would have to take all these real-time factors into account from your distance function. This would multiply the overall complexity of the algorithm.
- Resource intensive. Naive implementation is `O(n^2)` complex. Fortune's algorithm is `O(n log(n))` complex.

## Codingame Puzzles
CodinGame.com, the online gaming platform for developers, has several puzzles where you can use Voronoi Diagrams:

- [Tron Battle](https://www.codingame.com/multiplayer/bot-programming/tron-battle)
- [Back to the Code](https://www.codingame.com/multiplayer/bot-programming/back-to-the-code)
- [Hypersonic](https://www.codingame.com/multiplayer/bot-programming/hypersonic)
- [Ghost in the Cell](https://www.codingame.com/multiplayer/bot-programming/ghost-in-the-cell)
- [Game of Drones](https://www.codingame.com/multiplayer/bot-programming/game-of-drones)

Many games’ AI make use of Voronoi Diagrams. Some game AI use cases include maximizing controlled area and knowing which resources can be taken faster than the enemy.

## Other interesting links

Raymond Hill's [Voronoi Implementation](http://www.raymondhill.net/voronoi/rhill-voronoi.html)

Philippe Rivière [The State of D3 Voronoi](https://visionscarto.net/the-state-of-d3-voronoi)

[Official D3 Voronoi Implementation](https://github.com/d3/d3-voronoi)

Wikipedia: [Voronoi Diagram](https://en.wikipedia.org/wiki/Voronoi_diagram)

Wikipedia: [Fortune's Algorithm](https://en.wikipedia.org/wiki/Fortune%27s_algorithm)

Wikipedia: [Delaunay Triangulation](https://en.wikipedia.org/wiki/Delaunay_triangulation) With a hard relationship with Voronoi Diagrams.

## References and Credits
This course make use of external resources:
-  Data-Driven Document Library, [D3js](https://d3js.org/)
-  Philippe Rivière [The State of D3 Voronoi](https://visionscarto.net/the-state-of-d3-voronoi)
-  Raymond Hill's [implementation of the fortune algorithm](https://github.com/gorhill/Javascript-Voronoi)

(BSD License Copyright (c) 2015 Mike Bostock)

(MIT License Copyright (c) Philippe Rivière)

(MIT License Copyright (c) 2010-2013 Raymond Hill)

