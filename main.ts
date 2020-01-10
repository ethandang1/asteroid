function Text () {
    game.splash("Avoid the Asteroids to Win")
}
function Countdown () {
    info.startCountdown(10)
}
function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f f f f . 
. . . . f f 5 4 2 2 2 f 2 2 f f 
. . . . f 5 f 4 f 2 2 2 2 2 2 f 
. . . . f 5 f 4 2 2 2 2 f 2 2 f 
. . . . f 5 4 2 2 2 2 2 f 2 2 f 
. . . . f f 4 4 f 2 2 2 2 2 2 f 
. . . . f 5 5 4 4 2 f f 2 2 2 f 
. . . . f f 5 4 4 2 2 2 2 2 f f 
. . . . . f 5 5 4 2 2 2 f 2 2 f 
. . . . . f f 5 f 4 2 2 2 2 f f 
. . . . . . f f f f f f f f f . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 0)
}
function hero () {
    hero2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f f 7 7 7 7 7 f f . . . 
. . . . f 7 7 7 7 7 7 7 f . . . 
. . . . f 7 7 7 7 f 7 7 f f f f 
. . . . f 7 7 7 7 5 7 7 7 7 7 f 
. . . . f 7 7 7 7 5 7 7 7 7 7 f 
. . . . f 7 7 7 7 7 7 7 f f f f 
. . . . f f 7 7 7 7 7 f f . . . 
. . . . . f f f 7 f f f . . . . 
. . . . . . f f 7 f f . . . . . 
. . . . . f f 7 7 7 f f . . . . 
. . . . f f 7 7 f 7 7 f f . . . 
. . . . f 7 7 f f f 7 7 f . . . 
. . . . f f f f . f f f f . . . 
`, SpriteKind.Player)
    hero2.setPosition(78, 97)
    controller.moveSprite(hero2, 100, 100)
}
function overlap () {
    info.stopCountdown()
    game.over(false)
}
function score () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    overlap()
})
info.onCountdownEnd(function () {
    info.stopCountdown()
    game.over(true)
})
let hero2: Sprite = null
let projectile2: Sprite = null
hero()
score()
Countdown()
Text()
game.onUpdateInterval(200, function () {
    projectile()
})
