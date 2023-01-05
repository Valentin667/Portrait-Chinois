window.addEventListener('scroll', function() {
    console.log("Scrollin'");
  });

var scroll = window.requestAnimationFrame ||
    function(callback){ window.setTimeout(callback, 1000/60)};
            
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }
              
document.addEventListener("DOMContentLoaded", function() {
/* Toutes mes analogies */
    var data = [{"analogies":"un fruit","valeursAnalogies":"UNE PASTEQUE", "justify":"La plus part des personnes qui aiment la pastèque comme moi sont optimistes et ne se plaignent pas. Dans les situations combilquées, je me donnne à fond pour en venir à bout. J'aime aussi aider les autres à trouver le bon chemin. ","img" :'img/Pastèque.jpg', "class":'images-gauche'},

{"analogies":"une pierre précieuse","valeursAnalogies":"L'AMETHYSTE", "justify":"L'Améthyste est une pierre violette et translucide utilisée depuis des millénaires. Cette pierre permet en effet de retrouver un équilibre mental, physique et psychique. C'est un symbole de sagesse et de paix, ces sentiments me représentent bien. ","img" :'img/Amethyste.jpg', "class":'images-droite'},

{"analogies":"un animal","valeursAnalogies":"UN LOUP SOLITAIRE", "justify":" Le loup solitaire est du type à s’affirmé. Il n’a rien à prouver et aime être seul. Si une fête ou un événement ne lui convient pas, il est capable de dire non. Sortir de temps en temps oui, mais nul besoin de faire des rencontres à toutes les occasions. ","img" :'img/Loup.jpg', "class":'images-gauche'},

{"analogies":"un personnage d'anime","valeursAnalogies":"ZENITSU", "justify":"Zenitsu est d'une personnalité lâche dû à une faible estime de lui-même, mais voulait toujours être à la hauteur des attentes des autres, même s'il était constamment effrayé, pleurait et s'enfuyait toujours. Il prétend vouloir vivre une vie modeste où il peut être utile à quelqu'un. Il devient une tout autre personne quand il s'endort lors d'un combat, devenant aussi sûr de lui et déterminé. Ce personnage représente bien mes deux personnalités, parfois calme, sérieux, réservé et parfois de bon humeur, joyeux et enjoué. ","img" :'img/Zenitsu.jpg', "class":'images-droite'},

{"analogies":"un jeu vidéo","valeursAnalogies":"THE LEGEND OF ZELDA BOTW", "justify":"Arrivé au lancement de la console Nintendo Switch, The Legend of Zelda: Breath of the Wild m'a énormément marqué par son vaste monde ouvert. Encourageant une aventure non-linéaire, le jeu a été conçu pour pousser le joueur à explorer le vaste monde dévasté d’Hyrule. Ce jeu représente ma soif de liberté, mon envie de ne plus me sentir contraint et d'être totalement dépendant.","img" :'img/Zelda.jpg', "class":'images-gauche'},

{"analogies":"une musique","valeursAnalogies":"ONIZUKA", "justify":"J'aime beaucoup cette musique, elle permet de me vider l'esprit, me calmer et représente une partie de ma personnalité. Le morceau raconte l’envie de rester solitaire, le besoin d’être solidaire avec ses proches, la fierté d’avoir la même dégaine de rue qu’Onizuka. La mélodie est directement inspiré du manga/animé GTO (Great Teacher Onizuka)","img" :'img/Onizuka.jpg', "class":'images-droite'},

{"analogies":"une couleur","valeursAnalogies":"LE JAUNE", "justify":"Je suis une personne joyeuse et positive, c'est pour cela que cette couleur me représente bien. Associé à la joie, à la bonne humeur, au rayonnement, au bien-être et même à l'idéalisme, le jaune est une couleur vive et stimulante, aussi le symbole de l'amitié et la fraternité. Cette couleur témoigne du besoin de contact avec les autres. Cette teinte représente également la connaissance, le savoir, la science et par extension, la vie, l'énergie, la joie et enfin la puissance.","img" :'img/Jaune.jpg', "class":'images-gauche'}]


/* Création de mes analogies */ 

var numcase = 0
        data.forEach(function afficheNote(variable) {
            if(numcase % 2 == 0) {
                document.querySelector('.liste-analogies').innerHTML += "<section class=\"sec\"><h3> Si j’étais " + "<span>"+ variable.analogies + "</span>" + ", je serais... " + "</h3>" + "<h2>" + variable.valeursAnalogies + "</h2>" +"<div class=\"flex-left\"> <img class="+variable.class+" src= "+variable.img+"><p class= 'texte_d'>"+ variable.justify+"</p></section></div>" ;
            } else {
                document.querySelector('.liste-analogies').innerHTML += "<section class=\"sec\"><h3> Si j’étais " + "<span>"+ variable.analogies + "</span>" + ", je serais... " + "</h3>" + "<h2>" + variable.valeursAnalogies + "</h2> <div class=\"flex-right\"> <img class="+variable.class+" src= "+variable.img+"><p class= 'texte_g'>"+ variable.justify+"</p></section></div>" ;
            } numcase = numcase + 1
})

/* Détection du clic sur le bouton d'envoi du formulaire */
document.querySelector("#envoi").addEventListener('click', function(e){
/* Personnalisation du lien affiché dans la console */
    console.log("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=valentin.jullien&courriel=" + document.querySelector("#courriel").value + "&message=Si j'étais ... " + document.querySelector("#analogie").value + "je serais ..." + document.querySelector("#valeurAnalogie").value);
    /* Envoi des données à l'API à l'adresse ci-dessus */
    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=valentin.jullien&courriel=" + document.querySelector("#courriel").value + "&message=Si j'étais ... " + document.querySelector("#analogie").value + "je serais ..." + document.querySelector("#valeurAnalogie").value).then(function(response) {
        response.json().then(function(data){
            console.log("Réponse reçue : ")
            console.log(data)
            if(data.status = "sucess"){
                document.querySelector("#messageApresEnvoi").innerHTML = "Votre message a bien été reçu";
            }else {
                document.querySelector("#messageApresEnvoi").innerHTML = "Problème : votre message n'a pas été reçu";
            }
        })
      })
      
})


/* Création d'un formulaire pour que les visiteurs puissent créer leur propre analogie */ 

document.querySelector("#analogie").addEventListener('keyup', function(e){
    console.log("Champ analogie modifiée");
    document.querySelector("#analogieSuggérée").innerHTML = document.querySelector("#analogie").value;
})

document.querySelector("#valeurAnalogie").addEventListener('keyup', function(e){
    console.log("Champ valeurAnalogie modifiée");
    document.querySelector("#valeurAnalogieSuggérée").innerHTML = document.querySelector("#valeurAnalogie").value;
})

document.querySelector("#imganalogie").addEventListener('keyup', function(e){
    console.log("Champ imganalogie modifiée");
    document.querySelector("#imganalogieSuggérée").innerHTML = document.querySelector("#imganalogie").value;
})

document.querySelector("#arganalogie").addEventListener('keyup', function(e){
    console.log("Champ arganalogie modifiée");
    document.querySelector("#arganalogieSuggérée").innerHTML = document.querySelector("#arganalogie").value;
})

/* Création d'une section quand on clique sur un bouton */ 
data.forEach(function afficheNote(analogie) {
    document.querySelector("#votreformulaire").addEventListener("click", function(submit) {
       
      setTimeout(function (){
        document.querySelector('#votreformulaire').innerHTML +=  document.querySelector('.liste-analogies').innerHTML += "<section class=\"sec\"><h3> Si j’étais " +  document.querySelector("#analogie").value; + ", je serais... " + "</h3>" + "<h2>" + document.querySelector("#valeurAnalogie").value; + "</h2>" +"<p class= 'texte_d'>"+ document.querySelector("#arganalogie").value; +"</p>"+"<img class="+ document.querySelector("#imganalogie").value; +" src= "+variable.img+">"+ "</section>" });
      console.log()
            })
    }) 
    
    console.log(data);
    
    
    });
    
/* Création d'un volet invisible et visible quand on clique dessus pour afficher les mentions  légales */ 

document.querySelector('.volet-invisible').addEventListener('click', function (click) {
/* Création d'un déroulement */
    document.querySelector('.volet-invisible').animate([{ height: "12em" }], { duration: 800 })
/* Le volet invisible devient visible */
    setTimeout(function () {
        window.scrollTo(0, document.body.clientHeight);
        }, 2);
        //fixation du déroulement(le volet invisible devient 100% visible)
        setTimeout(function () {
            document.querySelector('.volet-invisible').classList.replace('volet-invisible', 'volet-visible')
                ;
        }, 800);
    });



