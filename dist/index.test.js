"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_1 = require("../src/index");
(0, vitest_1.describe)('cn utility function', () => {
    (0, vitest_1.it)('filters out falsy values', () => {
        (0, vitest_1.expect)((0, index_1.cn)(false, null, undefined, '', 0, NaN)).toBe('');
    });
    (0, vitest_1.it)('joins strings correctly', () => {
        (0, vitest_1.expect)((0, index_1.cn)('a', 'b', 'c')).toBe('a b c');
    });
    (0, vitest_1.it)('handles conditional objects', () => {
        (0, vitest_1.expect)((0, index_1.cn)({ foo: true, bar: false, baz: true })).toBe('foo baz');
    });
    (0, vitest_1.it)('handles arrays and nested arrays', () => {
        (0, vitest_1.expect)((0, index_1.cn)(['a', ['b', false, ['c']]])).toBe('a b c');
    });
    (0, vitest_1.it)('merges mixed types', () => {
        (0, vitest_1.expect)((0, index_1.cn)('btn', ['btn-primary', { active: true, disabled: false }])).toBe('btn btn-primary active');
    });
    (0, vitest_1.it)('deduplicates tailwind classes by group', () => {
        (0, vitest_1.expect)((0, index_1.cn)('p-2', 'p-4')).toBe('p-4');
        (0, vitest_1.expect)((0, index_1.cn)('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
    });
    (0, vitest_1.it)('keeps unique non-conflicting tailwind classes', () => {
        (0, vitest_1.expect)((0, index_1.cn)('p-2', 'm-4', 'bg-red-500')).toBe('p-2 m-4 bg-red-500');
    });
    (0, vitest_1.it)('handles responsive variants independently', () => {
        (0, vitest_1.expect)((0, index_1.cn)('p-2', 'md:p-4', 'md:p-6')).toBe('p-2 md:p-6');
    });
    (0, vitest_1.it)('handles hover/focus variants independently', () => {
        (0, vitest_1.expect)((0, index_1.cn)('hover:bg-red-500', 'hover:bg-blue-500')).toBe('hover:bg-blue-500');
        (0, vitest_1.expect)((0, index_1.cn)('focus:bg-green-400', 'focus:bg-green-700')).toBe('focus:bg-green-700');
    });
    (0, vitest_1.it)('handles multiple variants with same group', () => {
        (0, vitest_1.expect)((0, index_1.cn)('md:hover:bg-red-400', 'md:hover:bg-blue-400')).toBe('md:hover:bg-blue-400');
    });
    (0, vitest_1.it)('handles arbitrary values and merges them properly', () => {
        (0, vitest_1.expect)((0, index_1.cn)('p-[10px]', 'p-[20px]')).toBe('p-[20px]');
        (0, vitest_1.expect)((0, index_1.cn)('md:p-[10px]', 'md:p-[5px]')).toBe('md:p-[5px]');
    });
    (0, vitest_1.it)('preserves class names not in tailwindConflictGroups', () => {
        (0, vitest_1.expect)((0, index_1.cn)('custom-class', 'custom-class-2')).toBe('custom-class custom-class-2');
    });
});
