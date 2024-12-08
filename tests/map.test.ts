import { describe, test, expect } from "vitest";
import { from_ts_map_into_rust_hash_map } from "../js_mode/pkg/index";

describe("function from_ts_map_into_rust_hash_map(record: MyMap): MyMap", () => {
	test("Map<string, number> を渡せる", () => {
		const map = new Map<string, number>([
			["a", 97],
			["b", 98],
			["c", 99],
		]);
		expect(from_ts_map_into_rust_hash_map(map)).toEqual(map);
	});

	test("Record<string, number> も渡せる", () => {
		const record = { a: 97, b: 98, c: 99 };
		const map = new Map<string, number>([
			["a", 97],
			["b", 98],
			["c", 99],
		]);
		// @ts-expect-error
		expect(from_ts_map_into_rust_hash_map(record)).toEqual(map);
	});
});
