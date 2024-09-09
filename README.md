# classnames-merge-tw

[![Downloads](https://img.shields.io/npm/dt/classnames-merge-tw.svg?style=flat&color=success)](https://www.npmjs.com/package/classnames-merge-tw)
[![Version](https://img.shields.io/npm/v/classnames-merge-tw?style=flat&color=success)](https://www.npmjs.com/package/classnames-merge-tw)
<a href="https://pkg-size.dev/classnames-merge-tw"><img src="https://pkg-size.dev/badge/install/103906" title="Install size for classnames-merge-tw"></a>
<a href="https://pkg-size.dev/classnames-merge-tw"><img src="https://pkg-size.dev/badge/bundle/24854" title="Bundle size for classnames-merge-tw"></a>

### A very light module helps you conditionally join class names for your components, making it easy to manage dynamic class logic across various CSS frameworks and libraries like Bootstrap, Tailwind CSS, Material-UI, Ant Design, and more.

## Install
Install via npm or yarn:
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

### Examples for Other CSS & UI Frameworks
- Bootstrap
```js
const buttonClass = cn('btn', 'btn-primary', { 'active': isActive });
//=> 'btn btn-primary active'
```
- Material-UI
```js
const muiClass = cn('MuiButton-root', { 'MuiButton-disabled': isDisabled });
//=> 'MuiButton-root MuiButton-disabled'
```
- Ant Design
```js
const antClass = cn('ant-btn', 'ant-btn-primary', { 'ant-btn-dangerous': isDanger });
//=> 'ant-btn ant-btn-primary ant-btn-dangerous'
```


//=> 'text-sm text-primary p-4'


License
MIT © Lavisar
