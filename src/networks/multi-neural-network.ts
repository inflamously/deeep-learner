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

import { dot_product, dot_product_matrix } from "../tools/utilities";

export function keyboard_neural_network(dataset: [number, number], goal: number) {
    let weights_hidden = [
        [ 
            0.1, 0.4          
        ],
        [
            0.1, 0.4
        ]
    ]

    let weights_output = [
        [
            0.1, 0.025
        ]
    ]

    let pred_hidden = dot_product_matrix([dataset], weights_hidden)
    let pred_output = dot_product(pred_hidden[0], weights_output[0])

    console.log("Pred Hidden", pred_hidden, "Pred Output", pred_output)
}