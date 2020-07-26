This repo is just to test out phaser's lifecycles for phaser. 

I haven't really found a very good tutorial on what EXACTLY happens when you add/stop/start/remove scenes from Phaser.
This is to see what events ACTUALLY fire when the scene changes state.
I don't expect anyone else to see this, its mainly for me so I can learn how phaser works better.

To run this:
 - clone/download it
 - run "npm install"
 - run "npm run dev" - this will bundle it with source maps, and start the local dev server with webpack 4.
 - open a browser, go to localhost:8080.

When you open the browser and navigate to locahost:8080, you should see a black canvas. Open up the console with F12, and you'll see all the results.
There are a lot of messages, but its mainly just to check what events get fired/functions get called in order.
