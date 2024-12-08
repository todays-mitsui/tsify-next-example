use wasm_bindgen::prelude::*;
use web_sys::console;

// @type (f: Function) => Function
#[wasm_bindgen]
pub fn from_ts_closure_into_js_sys_function(f: js_sys::Function) -> js_sys::Function {
    console::log_1(&format!("value: {:?}", f).into());
    return f;
}
