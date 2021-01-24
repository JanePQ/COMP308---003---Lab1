
//IIFE - Immedietly Invoked Function Expression
(function(){
    let myFunctionalVariable = 0;

    function start() {
        let myLocalVariable = 0;
        console.log(`App Started...${myFunctionalVariable}`);
    }

    window.addEventListener("load", Start);

})();