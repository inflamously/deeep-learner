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

export function keyboard_neural_network(dataset: [number, number], goal: number) {
    let weights_hidden = [
        [ 
            0.1, 0.2         
        ]
    ]

    let pred_output = dot_product(dataset, weights_hidden[0])
    if (pred_output) {
        const loss_delta = delta(pred_output, goal)
        const weights_delta = element_mult(loss_delta, dataset, 1e-2)
        

        console.log("Pred Output", pred_output, "Goal", goal, "Loss", loss_delta, "Weights Delta", weights_delta)
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