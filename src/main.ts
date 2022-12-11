import { keyboard_neural_network } from "./networks/multi-neural-network";

(() => {
    console.log("Deeep-learner v1.0");

    // console.log(isMatrix([[2,4], [3,5]]))
    // console.log([[2,4], [3,5]][0][0])
    // R2xC2 * R2xC4
    // const x = dot_product(
    // [[2,2], [3,3]],
    // [
    //     [2, 4, 6, 8],
    //     [4, 1, 2, 3]
    // ])

    keyboard_neural_network([25, 20], 1)
})()