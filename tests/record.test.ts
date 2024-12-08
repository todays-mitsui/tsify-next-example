import { describe, test, expect } from "vitest";
import { from_ts_record_into_rust_hash_map } from "../pkg/index";

describe("function from_ts_record_into_rust_hash_map(record: MyRecord): MyRecord", () => {
	test("任意の Record<string, number> を渡せる", () => {
		expect(from_ts_record_into_rust_hash_map({ a: 97, b: 98, c: 99 })).toEqual({
			a: 97,
			b: 98,
			c: 99,
		});
	});
});
