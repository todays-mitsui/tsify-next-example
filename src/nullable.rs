use serde::{Deserialize, Serialize};
use tsify_next::Tsify;
use wasm_bindgen::prelude::*;
use web_sys::console;

// @type (x: string | undefined, y: string) => string
#[wasm_bindgen]
pub fn from_ts_nullable_string_into_rust_option_string(x: Option<String>, y: String) -> String {
    console::log_1(&format!("value: {:?}", x).into());
    console::log_1(&format!("value: {:?}", y).into());
    x.unwrap_or(y)
}

// @type (x?: string) => string | undefined
#[wasm_bindgen]
pub fn from_ts_optional_parameter_into_rust_option_string(x: Option<String>) -> Option<String> {
    console::log_1(&format!("value: {:?}", x).into());
    return x;
}

// @type
// interface ObjectHasOptionalProperty {
//   nullable_property: string | null;
//   optional_property?: string;
// }
#[derive(Tsify, Serialize, Deserialize, Debug)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct ObjectHasOptionalProperty {
    pub nullable_property: Option<String>,

    #[tsify(optional)]
    pub optional_property: Option<String>,
}

// @type (obj: ObjectHasOptionalProperty) => ObjectHasOptionalProperty
#[wasm_bindgen]
pub fn from_object_has_optional_property_into_rust_struct(
    obj: ObjectHasOptionalProperty,
) -> ObjectHasOptionalProperty {
    console::log_1(&format!("value: {:?}", obj).into());
    return obj;
}
