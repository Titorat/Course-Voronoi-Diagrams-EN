/*
 Parameters:
   a: With two components: a[0] and a[1], 'x' and 'y' coordinates
   b: With two components: b[0] and b[1], 'x' and 'y' coordinates
 Returns: Euclidean Distance value.
*/
function distancefunction(a, b) {
  var dx = b[0] - a[0];
  var dy = b[1] - a[1];
  return Math.sqrt(dx * dx + dy * dy); // Euclidean distance formula
}
