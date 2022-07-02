 const plusButton = document.getElementById('plus');
 plusButton.addEventListener('click',() =>{
    //blur background-
    let mainContainer = document.getElementById('main-container');
    mainContainer.style.filter ='blur(7px)';
    //add list popup-
    let container2 = document.getElementById('container2');
    container2.style.display='flex';
    //close button of addlist-
    let closeButtonList =document.getElementById('btncls');
    closeButtonList.addEventListener("click",() =>{
        container2.style.display='none';
        mainContainer.style.filter ='blur(0px)';
    });
    //add button of addlist-
    let addButtonList =document.getElementById('btnadd');
    addButtonList.addEventListener('click',() => {
        let newCard =document.createElement('div');
        newCard.setAttribute('id','newCardDiv');
        newCard.style.backgroundColor ="white";
        newCard.style.Color ="black";
        newCard.style.border ="3px solid #ff8585";
        newCard.style.borderRadius ="15px";
        newCard.style.height ="250px";
        newCard.style.width ="150px";

        //access div to put/add/append this card-
        let cardDiv =document.getElementById('cards');
        cardDiv.appendChild(newCard);
        container2.style.display='none';
        mainContainer.style.filter ='blur(0px)';

    });
    
 })