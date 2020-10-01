# Mighty Morphing Svelte Buttons

![Mighty Morphing Power Rangeee-eers](https://mighty-morphing-buttons.web.app/its-morphing-time.jpg)

> ✨ Bootstrapped with Create Snowpack App (CSA) based on this rockin' 5 year-old [demo](https://tympanus.net/Development/ButtonComponentMorph/index.html) by Mary Lou over at Codrops... but done entirely in Svelte!

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

### npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build

Builds a static copy of your site to the `build/` folder.

### Q: Why not use crossfade as is?

Great question! Crossfade is pretty rad OOTB but when doing this particular style of transition crossfade has a slight dip in opacity which causes elements to be visible beneath the 'morphing' element. 

### Q: How did you get the code for crossmorph?

I just ran `npm install` on any Svelte project and went into `node_modules > svelte > transition > index.mjs` and grabbed all the needed bits to make the regular `crossfade` transition work as it usually does. Then I hit `ctrl + h` in VS Code and replaced all instances of `crossfade` with `crossmorph` then I stripped out the opacity parameters from the return block of the transition, I wrote almost no code ;)

### Q: Can you make this into a component?

I have no plans to do so, but maybe someone can/will? I have a problem with trying to add too many options when I make components, I don't think infecting others with my analysis paralysis is a good idea.
