// dom - document --> html deerh buh code 
/*console.log(document) ; 
// document.getElementsByTagName ()--> tag nereer handah
var h1 = document.getElementsByTagName('h1') [0] ;
console.log(h1) ;
// .innerText = "solih text bicne" --> tag dotorh text solino
h1.innerText="Sain bnu" ;
// .style.styleName = "style utga" --> tag-d utga avna
h1.style.color="lightblue" ;
var h2 = document.getElementsByTagName('h1') [1] ;
console.log(h1) ;
h2.innerText = "uglunii mend" ;
//h2.style.color= "pink" ;

var p = document.getElementsByTagName('p') [0];
console.log(p) ; 
function clic (){
    p.innerText = "daragdlaa" ;
    p.style.color = "aquamarine" ; 
} */

var ageInput = document.getElementsByTagName('input') [0] ;
var birthYear= document.getElementsByTagName('h4') [0] ;
var currentYear = 2023, myYear ;
console.log(ageInput);
console.log(birthYear);

function age (){
    myYear= currentYear - ageInput.value ;
    console.log(ageInput.value);
    birthYear.innerText = "Таны төрсөн он : " + myYear ;
}