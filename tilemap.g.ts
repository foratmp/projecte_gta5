// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101030301010101010101010101010102040404040401010104040101010101010101010404040404040404010101010101010104040404040404040101010104040404040101010101010401010101010101010101010101010104010101010404040404040404040404040101010104010101010104040101010101010101040404040404040404040404040101010101010101010101040404040401010404040101010101010404040404010104040404040404040404040404040101010101010101010101010101040401010101010101010101010101010404010101040404040404040404040404010101010101040401010101010101010101`, img`
2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 . 2 . . 2 2 2 
2 2 2 2 2 2 . . . . . . . . 2 2 
2 2 2 2 2 2 . . . . . . . . 2 2 
2 2 . . . . . 2 2 2 2 2 2 . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . 2 2 2 2 2 . . 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . 2 2 2 2 2 2 . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.chestClosed,sprites.builtin.forestTiles0,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
