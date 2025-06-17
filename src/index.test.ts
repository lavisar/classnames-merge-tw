import { describe, it, expect } from 'vitest';
import { cn } from '../src/index';

describe('cn utility function', () => {
	it('filters out falsy values', () => {
		expect(cn(false, null, undefined, '', 0 as any, NaN as any)).toBe('');
	});

	it('joins strings correctly', () => {
		expect(cn('a', 'b', 'c')).toBe('a b c');
	});

	it('handles conditional objects', () => {
		expect(cn({ foo: true, bar: false, baz: true })).toBe('foo baz');
	});

	it('handles arrays and nested arrays', () => {
		expect(cn(['a', ['b', false, ['c']]])).toBe('a b c');
	});

	it('merges mixed types', () => {
		expect(
			cn('btn', ['btn-primary', { active: true, disabled: false }])
		).toBe('btn btn-primary active');
	});

	it('deduplicates tailwind classes by group', () => {
		expect(cn('p-2', 'p-4')).toBe('p-4');
		expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
	});

	it('keeps unique non-conflicting tailwind classes', () => {
		expect(cn('p-2', 'm-4', 'bg-red-500')).toBe('p-2 m-4 bg-red-500');
	});

	it('handles responsive variants independently', () => {
		expect(cn('p-2', 'md:p-4', 'md:p-6')).toBe('p-2 md:p-6');
	});

	it('handles hover/focus variants independently', () => {
		expect(cn('hover:bg-red-500', 'hover:bg-blue-500')).toBe(
			'hover:bg-blue-500'
		);
		expect(cn('focus:bg-green-400', 'focus:bg-green-700')).toBe(
			'focus:bg-green-700'
		);
	});

	it('handles multiple variants with same group', () => {
		expect(cn('md:hover:bg-red-400', 'md:hover:bg-blue-400')).toBe(
			'md:hover:bg-blue-400'
		);
	});

	it('handles arbitrary values and merges them properly', () => {
		expect(cn('p-[10px]', 'p-[20px]')).toBe('p-[20px]');
		expect(cn('md:p-[10px]', 'md:p-[5px]')).toBe('md:p-[5px]');
	});

	it('preserves class names not in tailwindConflictGroups', () => {
		expect(cn('custom-class', 'custom-class-2')).toBe(
			'custom-class custom-class-2'
		);
	});
});
