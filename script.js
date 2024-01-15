window.onload = function() { 
    var pack = document.getElementById("pokemon-pack");
    pack.addEventListener("click", openPack); 
    // on a click the element will pop up a messsage alert to show that action

}

// code above is so it runs when it is fully loaded


function randomNumber(min,max) { 
    return Math.ceil(Math.random() * (max - min) + min);
}

function openPack() { 
    // now we are going to make it so the cards dont keep scrolling down the paper rather than have only 16 cars out
    let cardsOpen = document.getElementById("pokemon-cards-opened");
    //clear before another pack
    while (cardsOpen.firstChild ) { 
        cardsOpen.firstChild.remove();
    }
   // alert("card pack open")
 //  alert("card pack open")
for( let i = 0; i< 11; i++) { // this loop runs 11 times from o to i 10



    // take the dev and adds pokemon cars to it 

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("pokemon-card");

    let cardImg = document.createElement("img");
    cardImg.id = i;
// eveytime it runs through the loop it creates a new div element with the class pokemon-card and a new <image> element 
// with the id equal to i.
// alert("card pack open")
//  alert("card pack open")


    let num = 1; 
    if(i == 10) { 
        num = randomNumber(1,16); // last set of rare cards

    }
    else { 
        num = randomNumber(17,102);
    }

    cardImg.src = "./pokemon-cards/base set (" + num.toString() + ").jpg";

    cardDiv.appendChild(cardImg);

    document.getElementById("pokemon-cards-opened").appendChild(cardDiv);
}
}

 
