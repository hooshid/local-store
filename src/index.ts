/**
 * Set new key on localStorage
 * @param key
 * @param value
 * @param ttl
 */
export function set(key: string, value: string, ttl?: number | string) {
  // browser support ?
  if (!window.localStorage || !key || !value) {
    return;
  }

  const now = new Date();

  // 365 day
  if (!ttl) {
    ttl = 60 * 60 * 24 * 365;
  } else if (typeof ttl == "string") {
    if (ttl.endsWith("m")) {
      ttl = 60 * parseInt(ttl);
    } else if (ttl.endsWith("h")) {
      ttl = 60 * 60 * parseInt(ttl);
    } else if (ttl.endsWith("d")) {
      ttl = 60 * 60 * 24 * parseInt(ttl);
    } else {
      ttl = parseInt(ttl);
    }
  }

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expire: now.getTime() + ttl * 1000,
  };

  localStorage.setItem(key, JSON.stringify(item));
}

/**
 * Get an item from localStorage
 * @param key
 */
export function get(key: string) {
  // browser support ?
  if (!window.localStorage || !key) {
    return null;
  }

  const itemStr = localStorage.getItem(key);

  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // compare the expire time of the item with the current time
  if (now.getTime() > item.expire) {
    // if the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }

  return item.value as string;
}

/**
 * Remove item from localStorage
 * @param key
 */
export function remove(key: string) {
  localStorage.removeItem(key);
}

/**
 * Remove all localStorage keys with/without prefix
 * @param prefix
 */
export function clearAll(prefix?: string) {
  if (prefix) {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if ((localStorage.key(i) as string).indexOf(prefix) === 0) {
          localStorage.removeItem(localStorage.key(i) as string);
        }
      }
    }
  } else {
    localStorage.clear();
  }
}

/**
 * Check key is exist
 * @param key
 */
export function has(key: string) {
  if (get(key)) {
    return true;
  }

  return false;
}

/**
 * Get Expire Time
 * @param key
 */
function getExpireTime(key) {
    // browser support ?
    if (!window.localStorage) {
        return null;
    }

    const itemStr = localStorage.getItem(key);

    // if the item doesn't exist
    if (!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr);

    return item.expire;
}

/**
 * Get Remain Time
 * @param key
 */
function getRemainTime(key){
    if(getExpireTime(key)) {
        return Math.round((getExpireTime(key) - new Date().getTime()) / 1000)
    } else {
        return null;
    }
}

/**
 * Local storage with expiration
 */
export default {
  set,
  get,
  remove,
  clearAll,
  has,
  getExpireTime,
  getRemainTime,
};
