import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

kaboom()
setGravity(200)
// load a sprite "bean" from an image
loadSprite("bean", "/bean.png")

// add something to screen
let bean = add([
    sprite("bean"),
    pos(80, 40),
    body(),
    area()
])

onKeyPress("space", () => {
    bean.jump()
})