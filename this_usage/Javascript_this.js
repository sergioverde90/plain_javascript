var fn = function() { 
    console.log(this, arguments);
}

var obj = { name : "prototypal", fn : fn }

var Class = function() { this.name = "pseudoclassical" };
Class.prototype.fn = fn;
var instance = new Class();

fn();                       // FUNCTION INVOCATION PATTERN:     this is linked to the global scope
obj.fn();                   // METHOD INVOCATION PATTERN:       this is linked to the local scope, propagated from caller
instance.fn();              // CONSTRUCTOR INVOCATION PATTERN:  this is linked to the local scope
fn.apply(null, null);       // APPLY INVOCATION PATTERN:        this is linked to the first parameter
fn.apply(obj, null);        // APPLY INVOCATION PATTERN:        this is linked to the first parameter
fn.apply(instance, null);   // APPLY INVOCATION PATTERN:        this is linked to the first parameter