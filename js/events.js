//define functions here

$(document).ready(function(){

// call functions here

});
 function getIt() {
   $('p').on('click', function(){
     alert("Hey!");
   })
 }
 function frameIt() {
   $('img').on('load', function(){
     $(this).addClass('tasty');
   })
 }
 function submitIt(){
   $('form').on('submit', function(){
     alert("Your form is going to be submitted now.");
   })
 }
 function pressIt(){
   $('input').on('keydown', function(){
     if(parseInt(e.which)==71){
       alert("Your form is going to be submitted now.")
     }
   })
 }
