sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(true)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    Level_2()
})
info.onCountdownEnd(function () {
    game.over(false)
})
function Level_2 () {
    info.stopCountdown()
    info.setLife(40)
    game.splash("You are in level 2", "You must beat the BOSS THAT HAS A SWARD AND DOES LOTS OF DAMAGE AND THATS WHY YOU HAVE 40 HEARTS")
    game.splash("You must get the odd yellow block that looks ugly because I dont know how to draw")
    game.splash("Thats how you win")
    tiles.setCurrentTilemap(tilemap`level6`)
    mySprite = sprites.create(img`
        ..................................................
        .............................ffffffffffff.........
        .............................f..........f.........
        .............................f..........f.........
        .........................f...f..f.......f.........
        .........................f...f......f...f.........
        .........................f...f..........f.........
        .........................f...f...fffff..f.........
        .........................f...f...f...f..f.........
        .......................11111.f..........f.........
        ...........................1.ffffffffffff.........
        ...........................1.......f..............
        ...........................ff......f.ffff.........
        ............................ffffffffff..ff........
        ...................................f.....ff.......
        ...................................f..............
        ...................................f..............
        .................................ffff.............
        ................................ff..ff............
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
    mySprite.follow(Character)
}
let mySprite: Sprite = null
let Character: Sprite = null
game.splash("Climb to the top to beat level 1")
game.splash("use button a to jump")
game.splash("use the left and right arrow key to move")
Character = sprites.create(img`
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    .................ffff...................
    ...............fff..ff..................
    ...............f.....ff.................
    ..............fff...f.f.................
    ..............f........f................
    ..............f.fffff..ff...............
    ..............f.........f...............
    ..............fffffffffff...............
    ........................................
    ...................f......ff............
    ...........f.......f......ff............
    ...........fff....fff....fff............
    .............fffffffffffff..............
    ..................fff...................
    ..................fff...................
    ..................fff...................
    ...................f....................
    ...................f....................
    ...................f....................
    ...............fffffff..................
    ..............ffff..fff.................
    ..............fff...ffff................
    ..............ff.....fff................
    .............ff.......fff...............
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Player)
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Character)
Character.ay = 450
Character.setStayInScreen(true)
controller.moveSprite(Character, 100, 0)
tiles.placeOnRandomTile(Character, assets.tile`myTile0`)
info.startCountdown(35)
forever(function () {
    if (controller.A.isPressed()) {
        info.changeScoreBy(1)
        Character.vy = -400
        pause(1400)
        info.setScore(0)
    } else if (info.score() == 1) {
        Character.ay = 450
    }
})
forever(function () {
    music.playMelody("D G D B C E F D ", 120)
})
