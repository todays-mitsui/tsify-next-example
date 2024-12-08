import { describe, test, expect } from "vitest";
import {
	from_ts_number_into_rust_u32,
	from_ts_number_into_rust_i32,
	from_ts_bigint_into_rust_u64,
	from_ts_bigint_into_rust_i64,
	from_ts_number_into_rust_f32,
	from_ts_string_into_rust_string,
	from_ts_string_into_rust_str,
	from_ts_boolean_into_rust_bool,
	from_ts_null_into_rust_unit_struct,
} from "../pkg/index";

describe("function from_ts_number_into_rust_u32(n: number): number", () => {
	test("渡した数がそのまま返る", () => {
		expect(from_ts_number_into_rust_u32(42)).toBe(42);
	});

	test("数値に解釈可能な文字列も渡せる", () => {
		// @ts-expect-error
		expect(from_ts_number_into_rust_u32("42")).toBe(42);
	});

	test("数値に解釈できない文字列を渡すと 0 になる", () => {
		// @ts-expect-error
		expect(from_ts_number_into_rust_u32("foobar")).toBe(0);
	});

	test("u32 の最小値よりも小さいとアンダーフローする", () => {
		expect(from_ts_number_into_rust_u32(-1)).toBe(4_294_967_295);
	});

	test("u32 の最大値よりも大きいとオーバーフローする", () => {
		expect(from_ts_number_into_rust_u32(4_294_967_296)).toBe(0);
	});

	test("小数値を渡すと切り捨てられる", () => {
		expect(from_ts_number_into_rust_u32(3.14)).toBe(3);
	});

	test("BigInt を渡すと例外が投げられる", () => {
		// @ts-expect-error
		expect(() => from_ts_number_into_rust_u32(42n)).toThrow();
	});
});

describe("function from_ts_number_into_rust_i32(n: number): number", () => {
	test("渡した数がそのまま返る", () => {
		expect(from_ts_number_into_rust_i32(42)).toBe(42);
	});

	test("数値に解釈可能な文字列も渡せる", () => {
		// @ts-expect-error
		expect(from_ts_number_into_rust_i32("42")).toBe(42);
		// @ts-expect-error
		expect(from_ts_number_into_rust_i32("-6")).toBe(-6);
	});

	test("数値に解釈できない文字列を渡すと 0 になる", () => {
		// @ts-expect-error
		expect(from_ts_number_into_rust_i32("foobar")).toBe(0);
	});

	test("i32 の最小値よりも小さいとアンダーフローする", () => {
		expect(from_ts_number_into_rust_i32(-2_147_483_649)).toBe(2_147_483_647);
	});

	test("i32 の最大値よりも大きいとオーバーフローする", () => {
		expect(from_ts_number_into_rust_i32(2_147_483_648)).toBe(-2_147_483_648);
	});

	test("小数値を渡すと切り捨てられる", () => {
		expect(from_ts_number_into_rust_i32(3.14)).toBe(3);
		expect(from_ts_number_into_rust_i32(-3.14)).toBe(-3);
	});

	test("BigInt を渡すと例外が投げられる", () => {
		// @ts-expect-error
		expect(() => from_ts_number_into_rust_u32(42n)).toThrow();
	});
});

describe("function from_ts_bigint_into_rust_u64(n: bigint): bigint", () => {
	test("渡した数がそのまま返る", () => {
		expect(from_ts_bigint_into_rust_u64(9_007_199_254_740_991n)).toBe(
			9_007_199_254_740_991n,
		);
	});

	test("number を渡すと例外が投げられる", () => {
		// @ts-expect-error
		expect(() => from_ts_bigint_into_rust_u64(42)).toThrow();
	});

	test("数値に解釈可能な文字列も渡せる", () => {
		// @ts-expect-error
		expect(from_ts_bigint_into_rust_u64("9007199254740991")).toBe(
			9_007_199_254_740_991n,
		);
	});

	test("数値に解釈できない文字列を渡すと例外が投げられる", () => {
		// @ts-expect-error
		expect(() => from_ts_bigint_into_rust_u64("foobar")).toThrow();
	});

	test("u64 の最小値よりも小さいとアンダーフローする", () => {
		expect(from_ts_bigint_into_rust_u64(-1n)).toBe(18_446_744_073_709_551_615n);
	});

	test("u64 の最大値よりも大きいとオーバーフローする", () => {
		expect(from_ts_bigint_into_rust_u64(18_446_744_073_709_551_616n)).toBe(0n);
	});
});

describe("function from_ts_bigint_into_rust_i64(n: bigint): bigint", () => {
	test("渡した数がそのまま返る", () => {
		expect(from_ts_bigint_into_rust_i64(9_007_199_254_740_991n)).toBe(
			9_007_199_254_740_991n,
		);
	});

	test("number を渡すと例外が投げられる", () => {
		// @ts-expect-error
		expect(() => from_ts_bigint_into_rust_i64(-42)).toThrow();
	});

	test("数値に解釈可能な文字列も渡せる", () => {
		// @ts-expect-error
		expect(from_ts_bigint_into_rust_i64("9007199254740991")).toBe(
			9_007_199_254_740_991n,
		);
		// @ts-expect-error
		expect(from_ts_bigint_into_rust_i64("-9007199254740991")).toBe(
			-9_007_199_254_740_991n,
		);
	});

	test("数値に解釈できない文字列を渡すと例外が投げられる", () => {
		// @ts-expect-error
		expect(() => from_ts_bigint_into_rust_i64("foobar")).toThrow();
	});

	test("i64 の最小値よりも小さいとアンダーフローする", () => {
		expect(from_ts_bigint_into_rust_i64(-9_223_372_036_854_775_809n)).toBe(
			9_223_372_036_854_775_807n,
		);
	});

	test("i64 の最大値よりも大きいとオーバーフローする", () => {
		expect(from_ts_bigint_into_rust_i64(9_223_372_036_854_775_808n)).toBe(
			-9_223_372_036_854_775_808n,
		);
	});
});

describe("function from_ts_number_into_rust_f32(n: number): number", () => {
	test("渡した数がそのまま返る", () => {
		expect(from_ts_number_into_rust_f32(3.14)).not.toBe(3.14); // 誤差が含まれるので完全一致はしない
		expect(from_ts_number_into_rust_f32(3.14)).toBeCloseTo(3.14);
	});

	test("数値に解釈可能な文字列も渡せる", () => {
		// @ts-expect-error
		expect(from_ts_number_into_rust_f32("3.14")).not.toBe(3.14); // 誤差が含まれるので完全一致はしない
		// @ts-expect-error
		expect(from_ts_number_into_rust_f32("3.14")).toBeCloseTo(3.14);
	});

	test("数値に解釈できない文字列を渡すと NaN になる", () => {
		// @ts-expect-error
		expect(from_ts_number_into_rust_f32("foobar")).toBe(NaN);
	});

	test("Infinity, -Infinity を渡せる", () => {
		expect(from_ts_number_into_rust_f32(Infinity)).toBe(Infinity);
		expect(from_ts_number_into_rust_f32(-Infinity)).toBe(-Infinity);
	});

	test("BigInt を渡すと例外が投げられる", () => {
		// @ts-expect-error
		expect(() => from_ts_number_into_rust_f32(42n)).toThrow();
	});
});

describe("function from_ts_string_into_rust_string(s: string): string", () => {
	test("渡した文字列がそのまま返る", () => {
		expect(from_ts_string_into_rust_string("foobar")).toBe("foobar");
	});

	describe("string 以外を渡すと例外が投げられる", () => {
		test("number", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_string(42)).toThrow();
		});
		test("bigint", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_string(42n)).toThrow();
		});
		test("boolean", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_string(true)).toThrow();
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_string(false)).toThrow();
		});
		test("Symbol", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_string(Symbol())).toThrow();
		});
		test("null", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_string(null)).toThrow();
		});
		test("undefined", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_string(undefined)).toThrow();
		});
		test("object", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_string({})).toThrow();
		});
	});
});

describe("function from_ts_string_into_rust_str(s: string): string", () => {
	test("渡した文字列がそのまま返る", () => {
		expect(from_ts_string_into_rust_str("foobar")).toBe("foobar");
	});

	describe("string 以外を渡すと例外が投げられる", () => {
		test("number", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_str(42)).toThrow();
		});
		test("bigint", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_str(42n)).toThrow();
		});
		test("boolean", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_str(true)).toThrow();
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_str(false)).toThrow();
		});
		test("Symbol", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_str(Symbol())).toThrow();
		});
		test("null", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_str(null)).toThrow();
		});
		test("undefined", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_str(undefined)).toThrow();
		});
		test("object", () => {
			// @ts-expect-error
			expect(() => from_ts_string_into_rust_str({})).toThrow();
		});
	});
});

describe("function from_ts_boolean_into_rust_bool(b: boolean): boolean", () => {
	test("渡した真偽値がそのまま返る", () => {
		expect(from_ts_boolean_into_rust_bool(true)).toBe(true);
		expect(from_ts_boolean_into_rust_bool(false)).toBe(false);
	});

	test("number を渡すと真偽値として解釈される", () => {
		// @ts-expect-error
		expect(from_ts_boolean_into_rust_bool(42)).toBe(true);
		// @ts-expect-error
		expect(from_ts_boolean_into_rust_bool(0)).toBe(false);
	});

	describe("string, object, null, undefined を渡すと false になる", () => {
		test("string", () => {
			// @ts-expect-error
			expect(from_ts_boolean_into_rust_bool("foobar")).toBe(false);
			// @ts-expect-error
			expect(from_ts_boolean_into_rust_bool("")).toBe(false);
		});
		test("object", () => {
			// @ts-expect-error
			expect(from_ts_boolean_into_rust_bool({})).toBe(false);
			// @ts-expect-error
			expect(from_ts_boolean_into_rust_bool({ foobar: 42 })).toBe(false);
		});
		test("null", () => {
			// @ts-expect-error
			expect(from_ts_boolean_into_rust_bool(null)).toBe(false);
		});
		test("undefined", () => {
			// @ts-expect-error
			expect(from_ts_boolean_into_rust_bool(undefined)).toBe(false);
		});
	});

	describe("bigint, Symbol を渡すと例外が投げられる", () => {
		test("bigint", () => {
			// @ts-expect-error
			expect(() => from_ts_boolean_into_rust_bool(42n)).toThrow();
			// @ts-expect-error
			expect(() => from_ts_boolean_into_rust_bool(0n)).toThrow();
		});
		test("Symbol", () => {
			// @ts-expect-error
			expect(() => from_ts_boolean_into_rust_bool(Symbol())).toThrow();
		});
	});
});

describe("function from_ts_null_into_rust_unit_struct(_null: Null): Null", () => {
	test("null がそのまま返る", () => {
		expect(from_ts_null_into_rust_unit_struct(null)).toBe(null);
	});

	test("undefined を渡すと null に読み替えられる", () => {
		// @ts-expect-error
		expect(from_ts_null_into_rust_unit_struct(undefined)).toBe(null);
	});

	describe("null, undefined 以外を渡すと例外が投げられる", () => {
		test("number", () => {
			// @ts-expect-error
			expect(() => from_ts_null_into_rust_unit_struct(42)).toThrow();
		});
		test("bigint", () => {
			// @ts-expect-error
			expect(() => from_ts_null_into_rust_unit_struct(42n)).toThrow();
		});
		test("string", () => {
			// @ts-expect-error
			expect(() => from_ts_null_into_rust_unit_struct("foobar")).toThrow();
		});
		test("boolean", () => {
			// @ts-expect-error
			expect(() => from_ts_null_into_rust_unit_struct(true)).toThrow();
			// @ts-expect-error
			expect(() => from_ts_null_into_rust_unit_struct(false)).toThrow();
		});
		test("Symbol", () => {
			// @ts-expect-error
			expect(() => from_ts_null_into_rust_unit_struct(Symbol())).toThrow();
		});
		test("object", () => {
			// @ts-expect-error
			expect(() => from_ts_null_into_rust_unit_struct({})).toThrow();
		});
	});
});
