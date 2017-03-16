/* eslint no-console: 0 */

// object rest no-unused-vars ignoreRestSiblings
const data = { type: 'coords', x: 1, y: 2 };
const { type, ...coords } = data;

console.log(coords);

