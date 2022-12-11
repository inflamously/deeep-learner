import { isScalar, isVector, Matrix, Scalar, Vector } from "./types";

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

/**
 * Raw error of output node or prediction. 
 * Positive / Negative inputs cancel each other out. 
 * Therefore use MSE for capturing Loss level.
 * MSE = (raw_error) ** 2
 * @param prediction output predicted number from custom function.
 * @param goal target quest or number we want to reach.
 * @returns raw_error or so called delta
 */
export function delta(prediction: Scalar | Vector, goal: Scalar | Vector): Scalar | Vector {
    if (isScalar(prediction) && isScalar(goal)) {
        return prediction - goal
    }

    if (isVector(prediction) && isVector(goal)) {
        return prediction.map((number, index) => number - goal[index])
    }

    throw new Error("Not implemented yet.")
}

/**
 * Amount and direction to update weights.
 * @param delta raw_error to input from delta function
 * @param input custom datapoints from dataset
 * @param alpha used to reduced weight update by downscaling the output of this function 
 * @returns weight_delta or miss from goal for a specific weight.
 */
export function weight_delta(delta: number, input: number, alpha: number | null) {
    return alpha ? delta * (input * alpha) : delta * input;
}

export function element_mult(delta: Scalar | Vector | Matrix, inputs: Scalar | Vector | Matrix, alpha: number) {
    if (isScalar(delta) && isScalar(inputs)) {
        return delta * (inputs * alpha);
    }
    
    if (isScalar(delta) && isVector(inputs)) {
        return inputs.map((input) => delta * (input * alpha)) // We want to scale input down so the AI won't reduce too big or chaotic.
    }

    throw new Error("Not implemented yet.")
}

export function vector_substract(vector_a: Vector, vector_b: Vector) {

}