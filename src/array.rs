use wasm_bindgen::prelude::*;
use web_sys::console;

// @type (strings: string[]) => string[]
#[wasm_bindgen]
pub fn from_ts_array_into_rust_vec(strings: Vec<String>) -> Vec<String> {
    console::log_1(&format!("value: {:?}", strings).into());
    return strings;
}

// @type (numbers: Uint8Array) => Uint8Array
#[wasm_bindgen]
pub fn from_ts_uint8array_into_rust_vec(numbers: Vec<u8>) -> Vec<u8> {
    console::log_1(&format!("value: {:?}", numbers).into());
    return numbers;
}

// @type (numbers: Int8Array) => Int8Array
#[wasm_bindgen]
pub fn from_ts_int8array_into_rust_vec(numbers: Vec<i8>) -> Vec<i8> {
    console::log_1(&format!("value: {:?}", numbers).into());
    return numbers;
}

// @type (numbers: Uint16Array) => Uint16Array
#[wasm_bindgen]
pub fn from_ts_uint16array_into_rust_vec(numbers: Vec<u16>) -> Vec<u16> {
    console::log_1(&format!("value: {:?}", numbers).into());
    return numbers;
}

// @type (numbers: Int16Array) => Int16Array
#[wasm_bindgen]
pub fn from_ts_int16array_into_rust_vec(numbers: Vec<i16>) -> Vec<i16> {
    console::log_1(&format!("value: {:?}", numbers).into());
    return numbers;
}

// @type (numbers: Uint32Array) => Uint32Array
#[wasm_bindgen]
pub fn from_ts_uint32array_into_rust_vec(numbers: Vec<u32>) -> Vec<u32> {
    console::log_1(&format!("value: {:?}", numbers).into());
    return numbers;
}

// @type (numbers: Int32Array) => Int32Array
#[wasm_bindgen]
pub fn from_ts_int32array_into_rust_vec(numbers: Vec<i32>) -> Vec<i32> {
    console::log_1(&format!("value: {:?}", numbers).into());
    return numbers;
}

// @type (numbers: BigUint64Array) => BigUint64Array
#[wasm_bindgen]
pub fn from_ts_biguint64array_into_rust_vec(numbers: Vec<u64>) -> Vec<u64> {
    console::log_1(&format!("value: {:?}", numbers).into());
    return numbers;
}

// @type (numbers: BigInt64Array) => BigInt64Array
#[wasm_bindgen]
pub fn from_ts_bigint64array_into_rust_vec(numbers: Vec<i64>) -> Vec<i64> {
    console::log_1(&format!("value: {:?}", numbers).into());
    return numbers;
}

// @type (numbers: Float32Array) => Float32Array
#[wasm_bindgen]
pub fn from_ts_float32array_into_rust_vec(numbers: Vec<f32>) -> Vec<f32> {
    console::log_1(&format!("value: {:?}", numbers).into());
    return numbers;
}

// @type (numbers: Float64Array) => Float64Array
#[wasm_bindgen]
pub fn from_ts_float64array_into_rust_vec(numbers: Vec<f64>) -> Vec<f64> {
    console::log_1(&format!("value: {:?}", numbers).into());
    return numbers;
}
