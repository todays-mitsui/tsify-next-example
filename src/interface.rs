use serde::{Deserialize, Serialize};
use tsify_next::Tsify;
use wasm_bindgen::prelude::*;
use web_sys::console;

// @type MyInterface = { n: number; s: string; b: boolean; };
#[derive(Tsify, Serialize, Deserialize, Debug)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct MyInterface {
    n: u8,
    s: String,
    b: bool,
}

// @type (obj: MyInterface) => MyInterface
#[wasm_bindgen]
pub fn from_ts_interface_into_rust_struct(obj: MyInterface) -> MyInterface {
    console::log_1(&format!("value: {:?}", obj).into());
    return obj;
}
