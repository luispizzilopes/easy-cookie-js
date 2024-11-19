# easy-cookie-js

`easy-cookie-js` is a JavaScript library designed to simplify the process of handling browser cookies. This library provides methods to add, retrieve, and remove cookies, including support for JSON objects.

## Version

npm package 1.0.4

## Features

- Add simple cookies or cookies with objects.
- Retrieve simple cookies or cookies containing JSON data.
- Remove cookies with or without specific properties.
- Provides error handling and warnings for invalid operations.

## Installation

Install the package using npm:

```bash
npm install easy-cookie-js
```

## Usage

**Add a Simple Cookie**

To add a simple string cookie, you can use the addCookie method.

```javascript
import { addCookie } from 'easy-cookie-js';

const cookie = {
    name: 'user',
    value: 'JohnDoe',
    expires: 'Thu, 18 Dec 2025 12:00:00 UTC',
};

const success = addCookie(cookie);
if (success) {
    console.log('Cookie added successfully');
} else {
    console.log('Failed to add cookie');
}
```

**Add an Object Cookie**

You can also add a cookie with an object. The object will be serialized into a JSON string.

```javascript
import { addObjectCookie } from 'easy-cookie-js';

const user = {
    id: 1,
    name: 'JohnDoe',
    age: 30
};

const cookie = {
    name: 'user_data',
    expires: 'Thu, 18 Dec 2025 12:00:00 UTC',
};

const success = addObjectCookie(user, cookie);
if (success) {
    console.log('Object cookie added successfully');
} else {
    console.log('Failed to add object cookie');
}
```

**Get a Simple Cookie**

To retrieve a simple cookie value, use the getCookie method.

```javascript
import { getCookie } from 'easy-cookie-js';

const userCookie = getCookie('user');
console.log(userCookie);
```

**Remove a Cookie**

To remove a cookie, you can use the removeCookie method.

```javascript
import { removeCookie } from 'easy-cookie-js';

const success = removeCookie('user');
if (success) {
    console.log('Cookie removed successfully');
} else {
    console.log('Failed to remove cookie');
}
```
## Author

- [@luispizzilopes](https://www.github.com/luispizzilopes)

