import { isVector, Matrix, Vector } from "./types";

export function weighted_sum(a: Vector, b: Vector): number {
    if (a.length <= 0 || b.length <= 0 || a.length != b.length) {
        throw new Error(`Matrix sizes mismatch, A: $1x${a.length}, B: $1x${b.length}`)
    }

    return a.map((value, index) => value * b[index]).reduce((previousValue, nextValue) => previousValue + nextValue);
}

export function dot_product(a: Vector, b: Vector): number | null {
    return isVector(a) && isVector(b) ? weighted_sum(a, b) : null
}

export function dot_product_matrix(a: Matrix, b: Matrix): Matrix {
    let result: Matrix = []

    if (a.length <= 0 || b.length <= 0 || a[0].length <= 0 || b[0].length <= 0 || a[0].length != b.length) {
        throw new Error(`Matrix sizes mismatch, A: ${a.length}x${a[0].length}, B: ${b.length}x${b[0].length}`)
    }

    for (let row = 0; row < a.length; row++) {
        result[row] = []
        for (let col_b = 0; col_b < b[0].length; col_b++) {
            let dotproduct = 0
            for (let col_a = 0; col_a < a[0].length; col_a++) {
                dotproduct += a[row][col_a] * b[col_a][col_b]
            }
            result[row].push(dotproduct)
        }
    }

    return result;
}

export function delta(prediction: number, output: number) {
    return (prediction - output)
}

export function weight_delta(delta: number, input: number, alpha: number | null) {
    return alpha ? delta * (input * alpha) : delta * input;
}