
import EntityHierarchy from './EntityHierarchy'
import BoundingBox from '../math/BoundingBox'
import Transform from '../modules/core/Transform'
import ModuleManager from '../modules/ModuleManager';

export default class SceneEntity extends EntityHierarchy
{
    constructor(name, game)
    {
        name = name || 'New SceneEntity';
        super(name, game || null)
        this.transform = new Transform();
        this.type = null;
        this.pool = null;
        this.modules = new ModuleManager(this);
        //this.bounds = new BoundingBox();
        //this._transformDirty = false;
        //this._currentScene = null;
        
        
    }

    get ['position']() { return this.transform.position; }
    set ['position'](value) { this.transform.position = value; this.transform._isDirty = true; }
    set ['position.x'](value) { this.transform.position.x = value; this.transform._isDirty = true;}
    set ['position.y'](value) { this.transform.position.y = value; this.transform._isDirty = true;}

    get ['origin']() { return this.transform.origin; }
    set ['origin'](value) { this.transform.origin = value; this.transform._isDirty = true; }
    set ['origin.x'](value) { this.transform.origin.x = value; this.transform._isDirty = true;}
    set ['origin.y'](value) { this.transform.origin.y = value; this.transform._isDirty = true;}

    get ['scale']() { return this.transform.scale; }
    set ['scale'](value) { this.transform.scale = value; this.transform._isDirty = true; }
    set ['scale.x'](value) { this.transform.scale.x = value; this.transform._isDirty = true;}
    set ['scale.y'](value) { this.transform.scale.y = value; this.transform._isDirty = true;}

    get ['angle']() { return this.transform.angle; }
    set ['angle'](value) { this.transform.angle = value; this.transform._isDirty = true; }
   
    
}