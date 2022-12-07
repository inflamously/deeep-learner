export type Matrix = number[][]
export type Vector = number[]
export type Tensor = Matrix | Vector;

export function isMatrix(obj: unknown): obj is Matrix {
    return Array.isArray((obj as number[][])[0]) && !Array.isArray((obj as number[][][])[0][0])
}

export function isVector(obj: unknown): obj is Vector {
    return !isMatrix(obj) && Array.isArray(obj)
}