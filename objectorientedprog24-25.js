//24. Immediately Invoked Function Expression
/*
(function IIFE() {
    console.log("This is an immediately invocted function");
  })(); 
*/  
// this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
//this is a nifty way to call a function directly after the fuction code block  // this saves writing 'functionName'(); somewhere else in the code
// this function below is anonymous meaning it would and could be only called if it is inside another fuction or code block or in this case invoked immediately after the fuction definiton
(function () {
    console.log("This is an Anonymous IIFE (function)");
  })();
//25. 
//This is how to create a module of methods that can be added to any object, becuase the function is anonymous and ut us a IIFE it cant be altered after creating the module and will automaticly add methods with a short syntax
// Syntax to add method to object 'moduleName.MixinName(objectName); --------------- to call method... objectName.methodName();

let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true
        };
      },
      singMixin : function(obj) {
        obj.sing = function() {
          console.log("la La la LAAAA!");
        };
      }
    }
  
  })();
  