//VERSION CLASICA
(function(){
    console.log("Hola mundo CLASICA");
})();

//pasando parametros
(function(c){
    console.log("Hola mundo 2");
    c.log("Gudiel");
})(console);

//LA CROCKFORD
((function(){
    console.log("Hola mundo CROCKFORD");
})());

//UNARIA
+function(){
    console.log("Hola mundo UNARIA");
}();

//FACEBOOK
!function(){
    console.log("Hola mundo FACEBOOK");
}();