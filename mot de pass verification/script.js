//Definire les variables
var myInput = document.getElementById('psw');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');

//lorsque l'utilisateur clique sur le champ du mot de passe,afficher la boite message
myInput.onfocus = function(){
    document.getElementById("message").style.display = "block"
}

//lorsque l'utilisateur clique en dehors du champ du mot de passe , masquer la boite message

myInput.onblur = function(){
    document.getElementById("message").style.display = "none"
}

//lorsque l'utilisateur commence a taper quelque chose dans le champ mot de passe

myInput.onkeyup = function(){
    //valider les lettres minuscule
    var lowerCaseLetters = /[a-z]/g
    if(myInput.value.match(lowerCaseLetters)){
    //si le mot de passe contien une lettre minuscule,enlever la classe "invalid"et ajoute la classe "valid"
    
      letter.classList.remove('invalid');
      letter.classList.add('valid');  
    }else{
        //si non , enlever la classe valid et ajoute la classe invalide
        letter.classList.remove('valid');
        letter.classList.add('invalid');   
    }
}
myInput.onkeyup = function(){
        //valider les lettres majuscules
        var upperCaseLetters = /[A-Z]/g
        if(myInput.value.match(upperCaseLetters)){
        //si le mot de passe contien une lettre majuscules,enlever la classe "invalid"et ajoute la classe "valid"
    
          capital.classList.remove('invalid');
          capital.classList.add('valid');  
        }else{
            //si non , enlever la classe valid et ajoute la classe invalide
        capital.classList.remove('valid');
        capital.classList.add('invalid');   
        }
      }
      myInput.onkeyup = function(){    
        //valider les nombre
        var number = /[0-9]/g
        if(myInput.value.match(number)){
        //si le mot de passe contien un chiffre,enlever la classe "invalid"et ajoute la classe "valid"
    
          capital.classList.remove('invalid');
          capital.classList.add('valid');  
        }else{
            //si non , enlever la classe valid et ajoute la classe invalide
            capital.classList.remove('valid');
            capital.classList.add('invalid');
}
}