// this is the 'parent' class
var mom = function(){
    return {
        sayHello : function(whom) {
            return "hi from " + whom;
        }
    }
}

// this is the 'child' class
var son = function(){
    var that = mom();
    var superSayHello = that.sayHello; // super?
    that.sayHello = function() {
        return superSayHello("mom") + " and son";
    }
    return that;
}

var sonInstance = son();
document.writeln(sonInstance.sayHello());
