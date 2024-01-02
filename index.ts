// test.ts
import { solveCubicEquation, solveQuadraticEquation } from './src/index';

const cubicRoots = solveCubicEquation(1, -6, 11, -6);
const quadraticRoots = solveQuadraticEquation(1, -3, 2);

console.log('Cubic Roots:', cubicRoots);
console.log('Quadratic Roots:', quadraticRoots);
