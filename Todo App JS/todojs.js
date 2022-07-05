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
        let deleteImg =document.createElement('img');
        deleteImg.setAttribute('id','deleteImg');
        deleteImg.setAttribute('src','./icons8-delete-65.png');
        newCard.appendChild(deleteImg);
        // let addImg =document.createElement('img');
        // addImg.setAttribute('id','addImg');
        // addImg.setAttribute('src','./icons8-add-50.png');
        // newCard.appendChild(addImg);
        
        //other style attributes r given in a CSS file under id=newCardDiv'
        
        //CREATING HEADING OF TODO LIST-
        let inputTextHead =document.createElement('h2');
        inputTextHead.setAttribute('id','inputTextHeadHeading');
        newCard.appendChild(inputTextHead);

        //GETING/ACCESSING INPUT VALUE-
        let inputValue =document.getElementById('list').value;
        //putting input value as heading to todolist
        inputTextHead.innerHTML = inputValue;

        //CREATING space/div for items -
        let itemsDiv =document.createElement('div');
        itemsDiv.setAttribute('id','itemsdiv');
        newCard.appendChild(itemsDiv);
        itemsDiv.innerHTML='hiiiii';

      

        // access div to put/add/append this card-
        let cardDiv =document.getElementById('cards');
        cardDiv.appendChild(newCard);
        container2.style.display='none';
        mainContainer.style.filter ='blur(0px)';
       })
 })