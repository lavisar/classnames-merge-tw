# classnames-merge-tw

[![Downloads](https://img.shields.io/npm/dt/classnames-merge-tw.svg?style=flat&color=success)](https://www.npmjs.com/package/classnames-merge-tw)
[![Version](https://img.shields.io/npm/v/classnames-merge-tw?style=flat&color=success)](https://www.npmjs.com/package/classnames-merge-tw)
<a href="https://pkg-size.dev/classnames-merge-tw"><img src="https://pkg-size.dev/badge/install/103906" title="Install size for classnames-merge-tw"></a>
<a href="https://pkg-size.dev/classnames-merge-tw"><img src="https://pkg-size.dev/badge/bundle/24854" title="Bundle size for classnames-merge-tw"></a>

-   A lightweight utility for conditionally constructing className strings, ideal for TailwindCSS users.
-   This module allows you to easily combine class names based on conditions, supporting strings, arrays, and objects for flexibility.

## Install

```bash
npm install classnames-merge-tw
```

or

```bash
yarn add classnames-merge-tw
```

## Usage

```typescript
import { cn } from 'classnames-merge-tw';

// Strings
cn('btn', true && 'btn-primary', false && 'btn-disabled');
//=> 'btn btn-primary'

// Objects
cn({ btn: true, 'btn-disabled': false });
//=> 'btn'

// Arrays
cn(['btn', false && 'hidden', 'btn-active']);
//=> 'btn btn-active'

// Complex combinations
cn('text-lg', ['font-bold', { 'text-gray-500': isDisabled }], someClass);
//=> 'text-lg font-bold text-gray-500'
```

## API

-   cn(...classNames)
-   The cn function takes multiple arguments which can be strings, objects, arrays, booleans, or null/undefined values. It filters out falsey values, leaving only valid class names.

## Parameters:

-   classNames: Mixed – Any combination of strings, objects, or arrays.
-   Returns a single, space-separated string with the valid class names.

```js
cn(true, false, '', null, undefined, 0, NaN);
```

//=> ''

### Example Usage in TailwindCSS

-   This utility is particularly useful when working with TailwindCSS, allowing you to conditionally apply classes based on state.

```js
cn('text-sm', isActive && 'text-primary', 'p-4');
```

//=> 'text-sm text-primary p-4'
Benchmarks
For performance snapshots, check out the benchmarks directory!

Tailwind Autocompletion Support in VSCode
To enable class name autocompletion when using TailwindCSS with classnames-merge-tw, follow these steps for Visual Studio Code:

License
MIT © Lavisar
