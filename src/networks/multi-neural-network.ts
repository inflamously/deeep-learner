/**
 * Dataset: [25, 20] // Is F4-ALT Pressed? 
 * Hidden_Weights: [
 *      [0.1, 0.1],
 *      [0.1, 0.1]
 * ]
 * Output_Weights: [
 *      [0.1, 0.1]
 * ]
 * Goal: [1] // True
*/

import { delta, dot_product, dot_product_matrix, element_mult } from "../tools/utilities";

export function keyboard_neural_network(inputs: [number, number], goal: number, epochs=10) {
    let weights_hidden = [
        [ 
            0.1, 0.2         
        ]
    ]

    for (let epoch = 0; epoch < epochs; epoch++) {
        let pred_output = dot_product(inputs, weights_hidden[0])
        if (pred_output) {
            const raw_error = delta(pred_output, goal) as number
            const weights_delta = element_mult(raw_error, inputs, 1e-3) as number[]
            const loss = raw_error ** 2
            weights_hidden[0] = weights_hidden[0].map((weight, index) => weight - weights_delta[index])

            console.log("Pred Output", pred_output, "Goal", goal, "Loss", loss, "Weights Delta", weights_delta)
        }
    }
}

export function keyboard_multi_layer_neural_network(dataset: [number, number], goal: number) {
    let weights_hidden = [
        [ 
            0.1, 0.2         
        ],
        [
            0.1, 0.2
        ]
    ]

    let weights_output = [
        [
            0.1, 0.5
        ]
    ]

    let pred_hidden = dot_product_matrix([dataset], weights_hidden)
    let pred_output = dot_product(pred_hidden[0], weights_output[0])

    console.log("Pred Hidden", pred_hidden, "Pred Output", pred_output, "Goal", goal)
}