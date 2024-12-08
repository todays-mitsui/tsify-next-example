use serde::{Deserialize, Serialize};
use tsify_next::Tsify;
use wasm_bindgen::prelude::*;
use web_sys::console;

// @type MyTuple = [number, string, boolean];
#[derive(Tsify, Serialize, Deserialize, Debug)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct MyTuple(u8, String, bool);

// @type (tuple: MyTuple) => MyTuple
#[wasm_bindgen]
pub fn from_ts_tuple_into_rust_struct(tuple: MyTuple) -> MyTuple {
    console::log_1(&format!("value: {:?}", tuple).into());
    return tuple;
}
