# Mighty Morphing Svelte Buttons

> ✨ Bootstrapped with Create Snowpack App (CSA) based on this rockin' 5 year-old [demo](https://tympanus.net/Development/ButtonComponentMorph/index.html) by Mary Lou over at Codrops.

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

### npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build

Builds a static copy of your site to the `build/` folder.

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" or "@snowpack/plugin-parcel" to your `snowpack.config.json` config file.

### Q: Why not use crossfade as is?

Great question! Crossfade is pretty rad OOTB but when doing this particular style of transition crossfade has a slight dip in opacity which causes elements to be visible beneath the 'morphing' element. 

### Q: How did you get the code for crossmorph?

I just ran `npm install` on any Svelte project and went into `node_modules > svelte > transition > index.mjs` and grabbed all the needed bits to make the regular `crossfade` transition work as it usually does. Then I hit `ctrl + h` in VS Code and replaced all instances of `crossfade` with `crossmorph` then I stripped out the opacity parameters from the return block of the transition, I wrote almost no code ;)


