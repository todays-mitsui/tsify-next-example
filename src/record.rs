use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use tsify_next::Tsify;
use wasm_bindgen::prelude::*;
use web_sys::console;

// @type Record = Record<string, number>;
#[derive(Tsify, Serialize, Deserialize, Debug)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct MyRecord(HashMap<String, u32>);

// @type (record: MyRecord) => MyRecord
#[wasm_bindgen]
pub fn from_ts_record_into_rust_hash_map(record: MyRecord) -> MyRecord {
    console::log_1(&format!("value: {:?}", record).into());
    return record;
}
