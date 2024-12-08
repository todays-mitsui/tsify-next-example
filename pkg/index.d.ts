/* tslint:disable */
/* eslint-disable */
/**
 * @param {(string)[]} strings
 * @returns {(string)[]}
 */
export function from_ts_array_into_rust_vec(strings: (string)[]): (string)[];
/**
 * @param {Uint8Array} numbers
 * @returns {Uint8Array}
 */
export function from_ts_uint8array_into_rust_vec(numbers: Uint8Array): Uint8Array;
/**
 * @param {Int8Array} numbers
 * @returns {Int8Array}
 */
export function from_ts_int8array_into_rust_vec(numbers: Int8Array): Int8Array;
/**
 * @param {Uint16Array} numbers
 * @returns {Uint16Array}
 */
export function from_ts_uint16array_into_rust_vec(numbers: Uint16Array): Uint16Array;
/**
 * @param {Int16Array} numbers
 * @returns {Int16Array}
 */
export function from_ts_int16array_into_rust_vec(numbers: Int16Array): Int16Array;
/**
 * @param {Uint32Array} numbers
 * @returns {Uint32Array}
 */
export function from_ts_uint32array_into_rust_vec(numbers: Uint32Array): Uint32Array;
/**
 * @param {Int32Array} numbers
 * @returns {Int32Array}
 */
export function from_ts_int32array_into_rust_vec(numbers: Int32Array): Int32Array;
/**
 * @param {BigUint64Array} numbers
 * @returns {BigUint64Array}
 */
export function from_ts_biguint64array_into_rust_vec(numbers: BigUint64Array): BigUint64Array;
/**
 * @param {BigInt64Array} numbers
 * @returns {BigInt64Array}
 */
export function from_ts_bigint64array_into_rust_vec(numbers: BigInt64Array): BigInt64Array;
/**
 * @param {Float32Array} numbers
 * @returns {Float32Array}
 */
export function from_ts_float32array_into_rust_vec(numbers: Float32Array): Float32Array;
/**
 * @param {Float64Array} numbers
 * @returns {Float64Array}
 */
export function from_ts_float64array_into_rust_vec(numbers: Float64Array): Float64Array;
/**
 * @param {MyRecord} record
 * @returns {MyRecord}
 */
export function from_ts_record_into_rust_hash_map(record: MyRecord): MyRecord;
/**
 * @param {MyInterface} obj
 * @returns {MyInterface}
 */
export function from_ts_interface_into_rust_struct(obj: MyInterface): MyInterface;
/**
 * @param {Color} color
 * @returns {Color}
 */
export function from_ts_namespace_into_rust_enum(color: Color): Color;
/**
 * @param {MyTuple} tuple
 * @returns {MyTuple}
 */
export function from_ts_tuple_into_rust_struct(tuple: MyTuple): MyTuple;
/**
 * @param {string | undefined} x
 * @param {string} y
 * @returns {string}
 */
export function from_ts_nullable_string_into_rust_option_string(x: string | undefined, y: string): string;
/**
 * @param {string | undefined} [x]
 * @returns {string | undefined}
 */
export function from_ts_optional_parameter_into_rust_option_string(x?: string): string | undefined;
/**
 * @param {ObjectHasOptionalProperty} obj
 * @returns {ObjectHasOptionalProperty}
 */
export function from_object_has_optional_property_into_rust_struct(obj: ObjectHasOptionalProperty): ObjectHasOptionalProperty;
/**
 * @param {StringLiteralTypeUnion} item
 * @returns {StringLiteralTypeUnion}
 */
export function from_ts_string_literal_type_union_into_rust_enum(item: StringLiteralTypeUnion): StringLiteralTypeUnion;
/**
 * @param {ObjectUnion} item
 * @returns {ObjectUnion}
 */
export function from_ts_object_union_into_rust_enum(item: ObjectUnion): ObjectUnion;
/**
 * @param {Function} f
 * @returns {Function}
 */
export function from_ts_closure_into_js_sys_function(f: Function): Function;
/**
 * @param {number} n
 * @returns {number}
 */
export function from_ts_number_into_rust_u32(n: number): number;
/**
 * @param {number} n
 * @returns {number}
 */
export function from_ts_number_into_rust_i32(n: number): number;
/**
 * @param {bigint} n
 * @returns {bigint}
 */
export function from_ts_number_into_rust_u64(n: bigint): bigint;
/**
 * @param {bigint} n
 * @returns {bigint}
 */
export function from_ts_number_into_rust_i64(n: bigint): bigint;
/**
 * @param {number} n
 * @returns {number}
 */
export function from_ts_number_into_rust_f32(n: number): number;
/**
 * @param {string} s
 * @returns {string}
 */
export function from_ts_string_into_rust_string(s: string): string;
/**
 * @param {string} s
 * @returns {string}
 */
export function from_ts_string_into_rust_str(s: string): string;
/**
 * @param {boolean} b
 * @returns {boolean}
 */
export function from_ts_boolean_into_rust_bool(b: boolean): boolean;
/**
 * @param {Null} _null
 * @returns {Null}
 */
export function from_ts_null_into_rust_unit_struct(_null: Null): Null;
export type MyRecord = Record<string, number>;

export interface MyInterface {
    n: number;
    s: string;
    b: boolean;
}

declare namespace Color {
    export type Red = "Red";
    export type Blue = "Blue";
    export type Green = "Green";
    export type Rgb = { Rgb: [number, number, number] };
    export type Hsv = { Hsv: { hue: number; saturation: number; value: number } };
}

export type Color = "Red" | "Blue" | "Green" | { Rgb: [number, number, number] } | { Hsv: { hue: number; saturation: number; value: number } };

export type MyTuple = [number, string, boolean];

export interface ObjectHasOptionalProperty {
    nullable_property: string | null;
    optional_property?: string;
}

export type StringLiteralTypeUnion = "Foo" | "Bar" | "Baz";

export type ObjectUnion = { N: number } | { S: string } | { B: boolean } | { Tuple: [number, string, boolean] } | { Named: { n: number; s: string; b: boolean } };

export type Null = null;

