use serde::{Deserialize, Serialize};
use tsify_next::Tsify;
use wasm_bindgen::prelude::*;
use web_sys::console;

// declare namespace Color {
//   export type Red = "Red";
//   export type Blue = "Blue";
//   export type Green = "Green";
//   export type Rgb = { Rgb: [number, number, number] };
//   export type Hsv = { Hsv: { hue: number; saturation: number; value: number } };
// }
// export type Color =
//   | "Red"
//   | "Blue"
//   | "Green"
//   | { Rgb: [number, number, number] }
//   | { Hsv: { hue: number; saturation: number; value: number } };
#[derive(Tsify, Serialize, Deserialize, Debug)]
#[tsify(namespace, into_wasm_abi, from_wasm_abi)]
pub enum Color {
    Red,
    Blue,
    Green,
    Rgb(u8, u8, u8),
    Hsv {
        hue: f64,
        saturation: f64,
        value: f64,
    },
}
