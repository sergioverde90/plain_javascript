
// this is the 'parent' class
var mom = function(){
    return {
        sayHello : function(whom) {
            return "hi from " + whom;
        }
    }
}

    // this is the 'child' class
var soon = function(){
    var that = mom();
    var superSayHello = that.sayHello; // super?
    that.sayHello = function() {
        return superSayHello("mom") + " and soon";
    }
    return that;
}

var soonInstance = soon();
document.writeln(soonInstance.sayHello());