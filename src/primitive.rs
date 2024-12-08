use serde::{Deserialize, Serialize};
use tsify_next::Tsify;
use wasm_bindgen::prelude::*;
use web_sys::console;

// @type (n: number) => number
#[wasm_bindgen]
pub fn from_ts_number_into_rust_u32(n: u32) -> u32 {
    console::log_1(&format!("value: {:?}", n).into());
    return n;
}

// @type (n: number) => number
#[wasm_bindgen]
pub fn from_ts_number_into_rust_i32(n: i32) -> i32 {
    console::log_1(&format!("value: {:?}", n).into());
    return n;
}

// @type (n: bigint) => bigint
#[wasm_bindgen]
pub fn from_ts_bigint_into_rust_u64(n: u64) -> u64 {
    console::log_1(&format!("value: {:?}", n).into());
    return n;
}

// @type (n: bigint) => bigint
#[wasm_bindgen]
pub fn from_ts_bigint_into_rust_i64(n: i64) -> i64 {
    console::log_1(&format!("value: {:?}", n).into());
    return n;
}

// @type (n: number) => number
#[wasm_bindgen]
pub fn from_ts_number_into_rust_f32(n: f32) -> f32 {
    console::log_1(&format!("value: {:?}", n).into());
    return n;
}

// @type (s: string) => string
#[wasm_bindgen]
pub fn from_ts_string_into_rust_string(s: String) -> String {
    console::log_1(&format!("value: {:?}", s).into());
    return s;
}

// @type (s: string) => string
#[wasm_bindgen]
pub fn from_ts_string_into_rust_str(s: &str) -> String {
    console::log_1(&format!("value: {:?}", s).into());
    return s.to_string();
}

// @type (b: boolean) => boolean
#[wasm_bindgen]
pub fn from_ts_boolean_into_rust_bool(b: bool) -> bool {
    console::log_1(&format!("value: {:?}", b).into());
    return b;
}

// @type Null = null
#[derive(Tsify, Serialize, Deserialize, Debug)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct Null;

// @type (null: Null) => Null
#[wasm_bindgen]
pub fn from_ts_null_into_rust_unit_struct(_null: Null) -> Null {
    console::log_1(&format!("value: {:?}", _null).into());
    return _null;
}
