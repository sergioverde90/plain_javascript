var Mom = function(name) {
    this.name = name;
}

Mom.prototype.sayHello = function() {
    return "hi from mom " + this.name;
}

var momInstance = new Mom("Clare");

// Inherit from mom
function Child(momName, name) {
    this.childName = name;
}

Child.prototype = new Mom("Jane"); // like extends. can be replaced with apply(this, [momName]); 

var childInstance = new Child("Jane", "Tarzan");

document.writeln(momInstance.sayHello());
document.writeln(childInstance instanceof Mom);
document.writeln(childInstance.sayHello());
document.writeln(childInstance.constructor);