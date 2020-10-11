# Blubba

Compile JavaScript Code Into Diamondfire Templates

> ## File Locations
>
> - Compiler: `lib/index.js`
> - CLI: `bin/index.js`

## Installation

`npm i blubba --save-dev`

## Usage

> Please Note: Blubba doesn't run your code, it only compiles it into a Diamondfire template

```js
const blubba = require("blubba");

blubba.on("JOIN", () => {
  blubba.player_action.SENDMESSAGE("Hello World");
});

module.exports = blubba.blocks;
```
