`hello world`
## my name is syntaxian
i like coding using svelte, rust, and typescript.

web development isnt really my thing but, i really love backend development


```ts
let name = new Username("syntaxian");

function checkUsername(name: string) {
    if (new Username(name).taken == true) return false;
    else true;
}

if (name.taken == true) {
    if (checkUsername("zyntaxian") == true) {
        console.log("Found a username!")
    } else {
        throw Error("Unable to find a username")
    }
}
```