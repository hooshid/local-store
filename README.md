# local-store
Helpers to make local storage easier to use and just like cookie, having expire time.

<a href="https://github.com/hooshid/local-store/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/@hooshid/local-store.svg" alt="License">
</a>
<a href="https://www.npmjs.com/package/@hooshid/local-store">
    <img src="https://img.shields.io/npm/v/@hooshid/local-store.svg" alt="Version">
</a>
<a href="https://www.npmjs.com/package/@hooshid/local-store">
    <img src="https://img.shields.io/npm/dt/@hooshid/local-store.svg" alt="Downloads">
</a>
<a href="https://www.npmjs.com/package/@hooshid/local-store">
    <img src="https://img.shields.io/npm/dm/@hooshid/local-store.svg" alt="Downloads">
</a>

## Usage

```js
import localStore from '@hooshid/local-store'
```

## Methods

- `set` — Add item to local storage.
- `get` — Get item from local storage
- `remove` — Remove item from local storage.
- `clearAll` — Removes all or just Prefixed items from local storage.
- `has` — Check item exist in local storage.

### Set

Set an item in local storage.

```js
set(key: string, value: string, ttl?: number | string): void
```

- `key` - The key of the item to set.
- `value` - The value to set.
- `ttl` - The time life in seconds format for living cache in localStorage.
- `ttl` - The time life in default is one year, if you want set time life you should set in seconds or set like below format.

```bash
m for minute
h for hour
d for day
```

#### examples
* 60m -> 60 minute
* 1h -> 1 hour (equal to 60m)
* 24h -> 24 hours (equal to 1d)
* 1d -> 1 day
* 30d -> 30 days

just use 1 above method and don't mixed (1d12h does not work -> 36h work fine!)

### Get

Get an item from local storage.

```js
get(key: string): string | null
```

- `key` — The key of the item to get.

### Remove

Remove item from local storage.

```js
remove(key: string): void
```

- `key` — The key of the item to remove.

### Clear All

Removes all or just Prefixed items from local storage.

```js
clearAll(prefix?: string): void
```

- `prefix` — if prefix provided, only keys start with prefix cleared and if prefix undefined all keys cleared.

### Has

Check key is exist

```js
has(key: string): boolean
```

- `key` — The key of the item.

## Todo
* method for clear expired caches
* output js script and define types separately