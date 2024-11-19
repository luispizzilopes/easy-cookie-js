# easy-cookie-js

A simple and efficient JavaScript library to manage cookies, allowing you to add, get, remove, and manipulate cookies with support for objects and custom configurations.

## Features

- Add simple cookies or cookies with objects.
- Retrieve simple cookies or cookies containing JSON data.
- Remove cookies with or without specific properties.
- Provides error handling and warnings for invalid operations.

## Installation

You can install the package via npm:

```bash
npm install easy-cookie-js

Usage

Add a Simple Cookie

To add a simple string cookie, you can use the addCookie method.

```javascript
import { addCookie } from 'easy-cookie-js'

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

Add an Object Cookie

You can also add a cookie with an object. The object will be serialized into a JSON string.

```javascript
import { addObjectCookie } from 'easy-cookie-js'

const user = {
    id: 1,
    name: 'JohnDoe',
    age: 30
}

const cookie = {
    name: 'user_data',
    value: '',
    expires: 'Thu, 18 Dec 2025 12:00:00 UTC',
};

const success = addObjectCookie(user, cookie);
if (success) {
    console.log('Object cookie added successfully');
} else {
    console.log('Failed to add object cookie');
}


Peço desculpas pela confusão. Aqui está o conteúdo completo do README.md, agora incluindo todos os exemplos de código dentro do formato correto de markdown para README.md:

# Cookie Utility Library

A simple and efficient JavaScript library to manage cookies, allowing you to add, get, remove, and manipulate cookies with support for objects and custom configurations.

## Features

- Add simple cookies or cookies with objects.
- Retrieve simple cookies or cookies containing JSON data.
- Remove cookies with or without specific properties.
- Provides error handling and warnings for invalid operations.

## Installation

You can install the package via npm:

```bash
npm install cookie-utility

Usage
Add a Simple Cookie

To add a simple string cookie, you can use the addCookie method.

import addCookie from 'cookie-utility/addCookie';

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

Add an Object Cookie

You can also add a cookie with an object. The object will be serialized into a JSON string.

import addObjectCookie from 'cookie-utility/addObjectCookie';

const user = {
    id: 1,
    name: 'JohnDoe',
    age: 30
};

const cookie = {
    name: 'user_data',
    value: '',
    expires: 'Thu, 18 Dec 2025 12:00:00 UTC',
};

const success = addObjectCookie(user, cookie);
if (success) {
    console.log('Object cookie added successfully');
} else {
    console.log('Failed to add object cookie');
}

Get a Simple Cookie

To retrieve a simple cookie value, use the getCookie method.