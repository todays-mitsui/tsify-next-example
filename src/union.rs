use serde::{Deserialize, Serialize};
use tsify_next::Tsify;
use wasm_bindgen::prelude::*;
use web_sys::console;

// @type StringLiteralTypeUnion = "Foo" | "Bar" | "Baz";
#[derive(Tsify, Serialize, Deserialize, Debug)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub enum StringLiteralTypeUnion {
    Foo,
    Bar,
    Baz,
}

// @type (item: StringLiteralTypeUnion) => StringLiteralTypeUnion
#[wasm_bindgen]
pub fn from_ts_string_literal_type_union_into_rust_enum(
    item: StringLiteralTypeUnion,
) -> StringLiteralTypeUnion {
    console::log_1(&format!("value: {:?}", item).into());
    return item;
}

// @type
//   ObjectUnion =
//     | { N: number }
//     | { S: string }
//     | { B: boolean }
//     | { Tuple: [number, string, boolean] }
//     | { Named: { n: number; s: string; b: boolean } };
#[derive(Tsify, Serialize, Deserialize, Debug)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub enum ObjectUnion {
    N(u32),
    S(String),
    B(bool),
    Tuple(u32, String, bool),
    Named { n: u32, s: String, b: bool },
}

// @type (item: ObjectUnion) => ObjectUnion
#[wasm_bindgen]
pub fn from_ts_object_union_into_rust_enum(item: ObjectUnion) -> ObjectUnion {
    console::log_1(&format!("value: {:?}", item).into());
    return item;
}
