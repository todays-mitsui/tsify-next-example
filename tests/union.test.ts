import { describe, test, expect } from "vitest";
import {
	from_ts_string_literal_type_union_into_rust_enum,
	from_ts_object_union_into_rust_enum,
} from "../pkg/index";

describe("function from_ts_string_literal_type_union_into_rust_enum(item: StringLiteralTypeUnion): StringLiteralTypeUnion", () => {
	test("渡した文字列がそのまま返る", () => {
		expect(from_ts_string_literal_type_union_into_rust_enum("Foo")).toBe("Foo");
		expect(from_ts_string_literal_type_union_into_rust_enum("Bar")).toBe("Bar");
		expect(from_ts_string_literal_type_union_into_rust_enum("Baz")).toBe("Baz");
	});

	test("ユニオンに含まれていない型を渡すと例外が投げられる", () => {
		expect(() =>
			// @ts-expect-error
			from_ts_string_literal_type_union_into_rust_enum("Qux"),
		).toThrow();
	});
});

describe("function from_ts_object_union_into_rust_enum(item: ObjectUnion): ObjectUnion", () => {
	test("渡したオブジェクトがそのまま返る", () => {
		expect(from_ts_object_union_into_rust_enum({ N: 42 })).toEqual({ N: 42 });
		expect(from_ts_object_union_into_rust_enum({ S: "foobar" })).toEqual({
			S: "foobar",
		});
		expect(from_ts_object_union_into_rust_enum({ B: true })).toEqual({
			B: true,
		});
		expect(
			from_ts_object_union_into_rust_enum({ Tuple: [42, "foobar", true] }),
		).toEqual({ Tuple: [42, "foobar", true] });
		expect(
			from_ts_object_union_into_rust_enum({
				Named: { n: 42, s: "foobar", b: true },
			}),
		).toEqual({ Named: { n: 42, s: "foobar", b: true } });
	});

	test("ユニオンに含まれていない型を渡すと例外が投げられる", () => {
		// @ts-expect-error
		expect(() => from_ts_object_union_into_rust_enum({})).toThrow();
	});
});
