import type { Expect, Equal } from "type-testing";

type IsSanta<T> = T extends "🎅🏼" ? true : false;

type FindSanta<
	T extends Array<unknown>,
	Acc extends Array<number> = [],
> = T extends [infer First, ...infer Rest]
	? IsSanta<First> extends true
		? Acc["length"]
		: FindSanta<Rest, [...Acc, 0]>
	: never;

type Forest0 = ["🎅🏼", "🎄", "🎄", "🎄"];
type test_0_actual = FindSanta<Forest0>;
//   ^?
type test_0_expected = 0;
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;
//   ^?
