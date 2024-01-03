"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solveQuadraticEquation = exports.solveCubicEquation = void 0;
// src/index.ts
function solveCubicEquation(a, b, c, d) {
    const discriminant = 18 * a * b * c * d - 4 * b ** 3 * d + b ** 2 * c ** 2 - 4 * a * c ** 3 - 27 * a ** 2 * d ** 2;
    if (discriminant > 0) {
        const root1 = -1 / (3 * a) * (b + Math.cbrt(discriminant) + b ** 2 / Math.cbrt(discriminant) - 2 * c / Math.cbrt(discriminant));
        return [root1];
    }
    else if (discriminant === 0) {
        const root1 = -1 / (3 * a) * (b + Math.cbrt(2 * b ** 3 - 9 * a * b * c + 27 * a ** 2 * d) + 2 * c / Math.cbrt(2 * b ** 3 - 9 * a * b * c + 27 * a ** 2 * d));
        const root2 = -1 / (3 * a) * (b - (Math.cbrt(2 * b ** 3 - 9 * a * b * c + 27 * a ** 2 * d) + 2 * c) / Math.cbrt(2 * b ** 3 - 9 * a * b * c + 27 * a ** 2 * d));
        return [root1, root2];
    }
    else {
        const k = (b ** 2 - 3 * a * c) / (9 * a ** 2);
        const m = (2 * b ** 3 - 9 * a * b * c + 27 * a ** 2 * d) / (54 * a ** 3);
        const n = k ** 3 + m ** 2;
        if (n >= 0) {
            const p = Math.cbrt(-m + Math.sqrt(n));
            const q = Math.cbrt(-m - Math.sqrt(n));
            const root1 = -1 / (3 * a) * (b + p + q);
            return [root1];
        }
        else {
            const p = Math.cbrt(Math.sqrt(-n));
            const q = Math.atan2(Math.sqrt(-n), -m) / 3;
            const r = 2 * Math.PI / 3;
            const root1 = -1 / (3 * a) * (b + 2 * p * Math.cos(q));
            const root2 = -1 / (3 * a) * (b - p * (Math.cos(q) + Math.sqrt(3) * Math.sin(q)));
            const root3 = -1 / (3 * a) * (b - p * (Math.cos(q) - Math.sqrt(3) * Math.sin(q)));
            return [root1, root2, root3];
        }
    }
}
exports.solveCubicEquation = solveCubicEquation;
// src/index.ts
function solveQuadraticEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    }
    else if (discriminant === 0) {
        const root1 = -b / (2 * a);
        return [root1];
    }
    else {
        return [];
    }
}
exports.solveQuadraticEquation = solveQuadraticEquation;
