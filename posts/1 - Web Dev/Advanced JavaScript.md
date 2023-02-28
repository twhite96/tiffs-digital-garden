---
aliases: [Mathematical Composite Functions, composite function in math]
---

# About Promises

***Kyle Simpson's Comment***


https://www.linkedin.com/feed/update/urn:li:activity:6925833220617818112?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A6925833220617818112%2C6925852064862408704%29

**OP**

https://www.linkedin.com/posts/aamir-muhammad-amin-a80a0421a_javascript-activity-6925833220617818112-wLKg?utm_source=linkedin_share&utm_medium=member_desktop_web


## Currying and function composition in programming/JavaScript
[Curry and Function Composition. Note: This is part of the “Composing… | by Eric Elliott | JavaScript Scene | Medium](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983)

When I was helping my cousin's son with his algebra homework, one of the questions was about creating a [[Mathematical Composite Functions|composite function in math]]. When I looked it up it reminded me so much of *currying*. 

I asked on Twitter if I was the only one who saw the connection and I wasn't:



https://xstate.js.org/docs/

## Iterables

Some things to think about when comparing languages and how learning one can help you better understand another, in this case, how [[Iterators in Python|iterators in Python]] have helped me understand how to use [[Iterators in Python#^88dd30|iterables]] in JavaScript

## Async/Await

```js
const fetch = require("node-fetch");

async function showGitHubUser(handle) {
    const url = `[](https://api.github.com/users/)[https://api.github.com/users/](https://api.github.com/users/)[](https://api.github.com/users/)${handle}`;
    const response = await fetch(url);
    const user = await response.json();
    console.log(user.name);
    console.log(user.location);
}

showGitHubUser("mariusschulz");
```

```js
const fetch = require("node-fetch");

async function showGitHubUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
}

showGitHubUser("mariusschulz")
    .then(user => {
        console.log(user.name);
        console.log(user.location);
    });
```

```js
const fetch = require("node-fetch");

class GitHubApiClient {
    async fetchUser(handle) {
        const url = `https://api.github.com/users/${handle}`;
        const response = await fetch(url);
        return await response.json();
    }
}

(async () => {
    const client = new GitHubApiClient();
    const user = await client.fetchUser("mariusschulz");
    console.log(user.name);
    console.log(user.location);
})();
```

```js
const fetch = require("node-fetch");

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    const json = await response.json();

    if (response.status !== 200)
        throw Error(json.message);

    return json;
}

async function showGitHubUser(handle) {
    try {
        const user = await fetchFromGitHub(`/users/${handle}`);
        console.log(user.name);
        console.log(user.location);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

showGitHubUser("mariusschulz");
```

```js
const fetch = require("node-fetch");

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    return await response.json();
}

async function showUserAndRepos(handle) {
    const userPromise = fetchFromGitHub(`/users/${handle}`);
    const reposPromise = fetchFromGitHub(`/users/${handle}/repos`);

    const user = await userPromise;
    const repos = await reposPromise;

    console.log(user.name);
    console.log(`${repos.length} repos`);
}

showUserAndRepos("mariusschulz");
```

```js
const fetch = require("node-fetch");

async function fetchFromGitHub(endpoint) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url);
    return await response.json();
}

async function fetchUserAndRepos(handle) {
    const [user, repos] = await Promise.all([
        fetchFromGitHub(`/users/${handle}`),
        fetchFromGitHub(`/users/${handle}/repos`)
    ]);

    console.log(user.name);
    console.log(`${repos.length} repos`);
}

fetchUserAndRepos("mariusschulz");
```

```js
const Bluebird = require("bluebird");

async function main() {
    console.log("Working ...");
    await Bluebird.delay(2000);
    console.log("Done.");
}

main();
```

```js
Symbol.asyncIterator = Symbol.asyncIterator || Symbol("asyncIterator");

const delay = (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
});

async function* someGenerator() {
    await delay(1000);
    yield 1;
    await delay(1000);
    yield 2;
    await delay(1000);
    yield 3;
}

async function main() {
    for await (const value of someGenerator()) {
        console.log(value);
    }
}

main();
```
