import { describe, test, expect } from "vitest";
import { from_ts_closure_into_js_sys_function } from "../pkg/index";

describe("function from_ts_closure_into_js_sys_function(f: js_sys::Function) -> js_sys::Function", () => {
	test("組み込み関数を渡せる", () => {
		expect(from_ts_closure_into_js_sys_function(Math.abs)).toEqual(Math.abs);
	});

	test("ユーザー定義関数を渡せる", () => {
		function foo_function() {}
		expect(from_ts_closure_into_js_sys_function(foo_function)).toEqual(
			foo_function,
		);
	});

	test("アロー関数を渡せる", () => {
		const foo_function = () => {};
		expect(from_ts_closure_into_js_sys_function(foo_function)).toEqual(
			foo_function,
		);
	});

	describe("関数以外を渡しても例外は投げられない", () => {
		test("number", () => {
			// @ts-expect-error
			expect(() => from_ts_closure_into_js_sys_function(42)).not.toThrow();
		});
		test("bigint", () => {
			// @ts-expect-error
			expect(() => from_ts_closure_into_js_sys_function(42n)).not.toThrow();
		});
		test("boolean", () => {
			// @ts-expect-error
			expect(() => from_ts_closure_into_js_sys_function(true)).not.toThrow();
			// @ts-expect-error
			expect(() => from_ts_closure_into_js_sys_function(false)).not.toThrow();
		});
		test("Symbol", () => {
			expect(() =>
				// @ts-expect-error
				from_ts_closure_into_js_sys_function(Symbol()),
			).not.toThrow();
		});
		test("null", () => {
			// @ts-expect-error
			expect(() => from_ts_closure_into_js_sys_function(null)).not.toThrow();
		});
		test("undefined", () => {
			expect(() =>
				// @ts-expect-error
				from_ts_closure_into_js_sys_function(undefined),
			).not.toThrow();
		});
		test("object", () => {
			// @ts-expect-error
			expect(() => from_ts_closure_into_js_sys_function({})).not.toThrow();
		});
	});
});
