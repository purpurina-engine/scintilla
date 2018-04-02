import Renderable from "../Renderable";
import ModuleProvider from "../../ModuleProvider";
import TilemapLayer from "./TilemapLayer";
import TilemapAnimator from "./TilemapAnimator";

export default class Tilemap extends Renderable {
    
    constructor(moduleManager, resource)
    {
        super('tilemap', moduleManager);

        //this._type = "tilemap";
        this.resource = resource;
        this.tileWidth = resource.metaData.tileWidth;
        this.tileHeight = resource.metaData.tileHeight;
        this.width = resource.metaData.width;
        this.height = resource.metaData.height;
        this.orientation = resource.metaData.orientation;
        this.pixelsWidth = resource.metaData.pixelsWidth;
        this.pixelsHeight = resource.metaData.pixelsHeight;
        this.animator = undefined;

        this.culling = {
            method : 0,
            start : {x: 0, y: 0},
            end : {x : 0, y : 0}
        }

        this.floorTiles = false;
        this.tilesets = resource.tilesets;
        this.layers = [];

        let animations = false;

        for (let i = 0; i < resource.layers.length; i++)
        {
            let layer = resource.layers.at(i);

            if (layer.hasAnimatedTiles)
                animations = true;

            this.layers.push(new TilemapLayer(this, layer));
        }

        if (animations === true) {
            this.animator = new TilemapAnimator(this, this.layers);
        }

    }   

}

ModuleProvider.register('tilemap', function(moduleManager, tag) {

    let res = null;
    let cache = moduleManager.entity.game.system.cache;

    if (cache !== undefined)
        res = cache.tilemap.get(tag);

    var tilemap = new Tilemap(moduleManager, res);
    tilemap.floorTiles = moduleManager.entity.game.config.floorTiles || false;

    return tilemap;

});