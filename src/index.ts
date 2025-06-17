type ClassNamesArg =
	| string
	| null
	| undefined
	| boolean
	| { [key: string]: boolean | undefined | null }
	| ClassNamesArg[];

const flatten = (args: ClassNamesArg[]): string[] => {
	const result: string[] = [];

	for (const arg of args) {
		if (!arg) continue;

		if (typeof arg === 'string') {
			result.push(arg);
		} else if (Array.isArray(arg)) {
			result.push(...flatten(arg));
		} else if (typeof arg === 'object') {
			for (const key in arg) {
				if (arg[key]) result.push(key);
			}
		}
	}

	return result;
};

// Tailwind utility conflict groups
const tailwindConflictGroups = [
	'm',
	'mx',
	'my',
	'mt',
	'mr',
	'mb',
	'ml',
	'p',
	'px',
	'py',
	'pt',
	'pr',
	'pb',
	'pl',
	'text',
	'bg',
	'border',
	'rounded',
	'w',
	'h',
	'gap',
	'grid-cols',
	'col-span',
	'row-span',
	'z',
	'flex',
	'justify',
	'items',
	'content',
	'self',
	'place',
	'overflow',
	'truncate',
	'whitespace',
	'shadow',
];

// Extract base utility group from className
const extractBaseGroup = (className: string): string | null => {
	const arbitraryMatch =
		className.match(/^[a-z-]+:\[.*\]$/) || className.match(/^\[.*\]$/);
	if (arbitraryMatch) return null;

	const base = className.replace(/^!/, ''); // Strip !important
	const variants = base.split(':');
	const utility = variants[variants.length - 1];

	for (const group of tailwindConflictGroups) {
		if (
			utility === group ||
			utility.startsWith(group + '-') ||
			utility.startsWith(group + '[')
		) {
			return group;
		}
	}

	return null;
};

// Create a unique key based on variant and group
const extractConflictKey = (className: string): string | null => {
	const important = className.startsWith('!');
	const raw = className.replace(/^!/, '');
	const parts = raw.split(':');
	const base = parts.pop()!;
	const variants = parts.join(':');
	const group = extractBaseGroup(className);
	if (!group) return null;
	return (important ? '!' : '') + variants + ':' + group;
};

export const cn = (...args: ClassNamesArg[]): string => {
	const classList = flatten(args);
	const final: string[] = [];
	const seen = new Map<string, string>();

	for (const cls of classList) {
		const conflictKey = extractConflictKey(cls);
		if (conflictKey) {
			seen.set(conflictKey, cls);
		} else {
			final.push(cls);
		}
	}

	return [...final, ...seen.values()].join(' ');
};
