use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use tsify_next::Tsify;
use wasm_bindgen::prelude::*;
use web_sys::console;

// @type Record = Record<string, number>;
#[derive(Tsify, Serialize, Deserialize, Debug)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct MyMap(HashMap<String, u32>);

// @type (map: MyMap) => MyMap
#[wasm_bindgen]
pub fn from_ts_map_into_rust_hash_map(map: MyMap) -> MyMap {
    console::log_1(&format!("value: {:?}", map).into());
    return map;
}
