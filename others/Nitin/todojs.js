//accessing for global -
let mainContainer = document.getElementById('main-container');//task list and add list
let cards = document.getElementById('cards');//empty div to append cards
let container2 = document.getElementById('container2');//add new list
let plusButton = document.getElementById('plus');//add list top
let closeButtonList =document.getElementById('btncls');//add list close btn
let addButtonList =document.getElementById('btnadd');//add list add btn
let inputValue =document.getElementById('list');//add list input value 
let container3 = document.getElementById('container3');//add new items
let closeButtonList1 =document.getElementById('btncls1');//add items close btn
// let addButtonList1 =document.getElementById('btnadd1');//add items add btn
// let inputValue1 =document.getElementById('list1');//add items input value 
let message1=document.getElementById('no-item-div');
let conatiner4=document.getElementById('container4');
let cardNewPage = document.getElementById('cardNewPage');
let backbtn=document.getElementsByClassName('fa-circle-arrow-left')[0];
let message2=document.getElementById('no-item-div1');

//by clicking displaying popup of add new list and background blur-
 plusButton.addEventListener('click',() =>{
    //blur background-
    mainContainer.style.filter ='blur(5px)';
    //add list popup-
    container2.style.display='flex';
    // console.log('plusButton pressed');
 });

//close button of addlist-
closeButtonList.addEventListener("click",() =>{
    container2.style.display='none';
    mainContainer.style.filter ='blur(0px)';
    // console.log('closeButtonList pressed');
});

//to hide and show no items message=
function mess(){
    (cards.innerText==='')? message1.style.display='flex':message1.style.display='none';
    // (cardNewPage.innerText ==='')?message2.style.display='flex':message2.style.display='none'
}

//add button of addlist-
addButtonList.addEventListener('click',() =>{
    container2.style.display='none';
    mainContainer.style.filter ='blur(0px)';
    // console.log('addButtonList pressed');
    (inputValue.value==='')? alert('Enter Title First'):acceptData();
    mess();
    inputValue.value='';
})

//creating obj to store obj(cards details)-
 let obj={};
  let acceptData = () =>{
    const NewinputValue = inputValue.value.charAt(0).toUpperCase() + inputValue.value.slice(1);
    obj.text = NewinputValue ;
    // console.log(data);
    createCard();
  }

//creating template for card-
let createCard = () =>{
cards.innerHTML += `
                    <div id ='newCardDiv'>
                        <h2 onClick="openNewPage(this)" id='inputTextHeadHeading'>${obj.text}</h2>
                        
                        <div class="itemsdiv" id="liDiv"></div>
                        <span>
                             <i onClick="delNewItems(this)" id="delImg" class="fa-solid fa-trash"></i>
                             <i onClick="addNewItems(this)" id="addImg" class="fa-solid fa-square-plus"></i>
                        </span>
                                 
                    </div>
 `;
} 
//deleting cards-
let delNewItems = (e) =>{
    e.parentElement.parentElement.remove();
// console.log('delNewItems pressed');
mess();
}

var tasksDiv;
//adding items-(near of delete btn)
 let addNewItems = (e) =>{
    //blur background-
    mainContainer.style.filter ='blur(5px)';
    //add list popup-
    container3.style.display='flex';
    // console.log('addNewItems pressed');
    tasksDiv=e.parentElement.previousElementSibling;
    // console.log(tasksDiv);
    conatiner4.style.filter ='blur(5px)';
    
 }

 //add button of addItem(near close)-
let addButtonList1 = () =>{
    container3.style.display='none';
    mainContainer.style.filter ='blur(0px)';
    // console.log('addItemBtn pressed');
    let inputValue1 =document.getElementById('list1').value;
    let childDiv=document.createElement('div');
    let li_elements= document.createElement('li');
    li_elements.className='line-height';
    let markdone=document.createElement('button');
    const NewinputValue1 = inputValue1.charAt(0).toUpperCase() + inputValue1.slice(1);
    li_elements.innerText = NewinputValue1;//add items input value
    li_elements.appendChild(markdone)
    markdone.innerText='✔';
    markdone.className='done';
    markdone.addEventListener('click',(e)=>{
        e.target.parentNode.style.textDecoration='line-through';
        li_elements.removeChild(markdone)
    })
    childDiv.appendChild(li_elements);
    tasksDiv.append(childDiv);
    conatiner4.style.filter ='blur(0px)';
    inputValue1='';
}

//cls button of addItem-
closeButtonList1.addEventListener("click",() =>{
    container3.style.display='none';
    mainContainer.style.filter ='blur(0px)';
    // console.log('clsItemBtn pressed');
});

let openNewPage=(e)=>{
    mainContainer.style.display='none';
    conatiner4.style.display='flex';
    let newCardi= e.parentNode;
    cards.removeChild(newCardi)
    cardNewPage.appendChild(newCardi);
    backbtn.addEventListener('click',()=>{
        mainContainer.style.display='block';
        conatiner4.style.display='none';
        cardNewPage.removeChild(newCardi);
        cards.appendChild(newCardi);
        // (cards.innerText==='')? message1.style.display='flex':message1.style.display='none';
    })
}
































// let data1={};
// let acceptData1 = () =>{
//     // let li=document.createElement('li');
//     // li.innerHTML = inputValue1.value;
//     // let itemDiv = document.getElementById('itemsdiv');//to store the items
//     // itemDiv.appendChild(li);
//     data1['li'] = inputValue1.value ;
//     console.log(data1);
//     createUl();
// }


// let createUl = () =>{
//     let itemDiv = document.getElementById(`li-${data.text}`);//to store the items
//     itemDiv.innerHTML += `
//        <li>${data1.li}</li>
//     `;
//     console.log(itemDiv)
// }
































































//add button of addlist-
// addButtonList.addEventListener('click',() => {
//     let newCard =document.createElement('div');
//     newCard.setAttribute('id','newCardDiv');
    //other style attributes r given in a CSS file under id=newCardDiv'
    
    //CREATING HEADING OF TODO LIST-
    // let inputTextHead =document.createElement('h2');
    // inputTextHead.setAttribute('id','inputTextHeadHeading');
    // newCard.appendChild(inputTextHead);

    //GETING/ACCESSING INPUT VALUE-
    
    //putting input value as heading to todolist
    // inputTextHead.innerHTML = inputValue;

    //CREATING space/div for items -
    // let itemsDiv =document.createElement('div');
    // itemsDiv.setAttribute('id','itemsdiv');
    // newCard.appendChild(itemsDiv);
    // itemsDiv.innerHTML='hiiiii';

    //creating a delete and add button img-
    /*let deleteImg =document.createElement('img');//for delete img
    deleteImg.setAttribute('id','deleteImg');
    deleteImg.setAttribute('src','./icons8-delete-65.png');
    newCard.appendChild(deleteImg);
    let addImg =document.createElement('img');//for add img
    addImg.setAttribute('id','addImg');
    addImg.setAttribute('src','./icons8-add-50.png');
    newCard.appendChild(addImg);*/

    // access main - html div to put/add/append this card-
    // let cardDiv =document.getElementById('cards');
    // cardDiv.appendChild(newCard);
    
    //by clicking add button simultaneously popup and blurness will dissapear-
    // container2.style.display='none';
    // mainContainer.style.filter ='blur(0px)'; 

    //empty message dissapear
    // let emptyMessage = document.getElementById('empty-list');
    
// })
//deleting the cards-
/*let deleteCard = document.querySelector('#deleteImg');
deleteCard.addEventListener('click',() =>{
    cardDiv.removeChild(newCard);
})*/



