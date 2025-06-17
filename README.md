# classnames-merge-tw

[![Downloads](https://img.shields.io/npm/dt/classnames-merge-tw.svg?style=flat&color=success)](https://www.npmjs.com/package/classnames-merge-tw)
[![Version](https://img.shields.io/npm/v/classnames-merge-tw?style=flat&color=success)](https://www.npmjs.com/package/classnames-merge-tw)
<a href="https://pkg-size.dev/classnames-merge-tw"><img src="https://pkg-size.dev/badge/install/3900" title="Install size for classnames-merge-tw"></a>

## 🚀 Feature

✅ Accepts strings, arrays, objects, booleans, null, and undefined <br/>
✅ Filters out falsy values <br/>
✅ Automatically resolves conflicting Tailwind classes like p-2 vs p-4 <br/>
✅ Works seamlessly with any styling framework (not just Tailwind)

## 📦 Install

Install via npm or yarn:

```bash
npm install classnames-merge-tw
```

or

```bash
yarn add classnames-merge-tw
```

## 🔧 Usage

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

## 🌈 Tailwind Merge Behavior

Unlike basic className utilities, this package intelligently handles conflicting Tailwind classes.

```ts
cn('p-4', 'p-2', 'bg-red-500', 'bg-blue-500');
//=> 'p-2 bg-blue-500'
//=> Only the last applied utility from each group (padding, background, etc.) is kept — just like tailwind-merge.
```

## 🔍 API

-   cn(...classNames)

### Parameters:

-   classNames: any combination of strings, arrays, booleans, null, undefined, or objects like { 'class': condition }

### Returns:

```ts
cn(true, false, '', null, undefined, 0, NaN);
//=> ''
```

## 🧩 Works with any framework

-   Bootstrap

```ts
cn('btn', 'btn-primary', { active: isActive });
//=> 'btn btn-primary active'
```

-   Material-UI

```ts
cn('MuiButton-root', { 'MuiButton-disabled': isDisabled });
//=> 'MuiButton-root MuiButton-disabled'
```

-   Ant Design

```ts
cn('ant-btn', 'ant-btn-primary', { 'ant-btn-dangerous': isDanger });
//=> 'ant-btn ant-btn-primary ant-btn-dangerous'
```

## ⚠️ Limitations

- Currently, the utility does not support:

Tailwind responsive variants (e.g. md:p-4)

Arbitrary values (e.g. p-[2.5rem])

!important prefixes
These features may be added in future releases.

---
## 📄 License
MIT © Lavisar
