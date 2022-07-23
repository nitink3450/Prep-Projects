var addButton = document.getElementById("add") 
var rootPop = document.getElementsByClassName("root-popup")[0] ;
const oldPage = document.getElementsByClassName("old-page")[0]
const newPage = document.getElementsByClassName("new-page")[0]
const  dropZone = document.getElementsByClassName("flex-container")[0] 
const newPopup = document.getElementsByClassName("new-popup")[0]
var currentElement  ;
const showNewPopup = (e) => {//7
   newPopup.style.display = "flex" 
   currentElement = e//parentnode card is passed in e
}
const addNewItem = () =>{
    let newValue = document.getElementById("head1").value
    let div = document.createElement("div")
    div.innerText = newValue 
    let button = document.createElement("button")
    button.innerText = "Done" 
    button.addEventListener("click" , (e) => {
        e.target.style.display = "none"
        e.target.parentNode.style.textDecoration = "line-through" 
    })
    div.append(button)
    currentElement.append(div) 
    newPopup.style.display = "none" 
}

const showNewPage = (card) =>{//5
    oldPage.style.display = "none"
    console.log(card)
    newPage.append(card)
    newPage.style.display = "block"
}
// card 
const createCard = (heading) => {//3
    var cardElement = document.createElement("div")
    cardElement.className = "card" 
    let h4 = document.createElement("h4")
    h4.innerText = heading 
    h4.addEventListener("click" , (e)=>{//4
        showNewPage(e.target.parentNode) 
    })
    let hr = document.createElement("hr")
    let deleteCardBtn = document.createElement("span") 
    deleteCardBtn.className = "delete material-icons"
    deleteCardBtn.innerText = "delete" 
    let add = document.createElement("span")
    add.className = "material-icons"
    add.innerText = "add" 
    add.addEventListener("click" , (e) =>{//6
        showNewPopup(e.target.parentNode)//parentnod is card here
    })
    deleteCardBtn.addEventListener("click" , (e) =>{//8
        deleteCard(e)
    })
    cardElement.append(h4)
    cardElement.append(hr)
    cardElement.append(deleteCardBtn)
    cardElement.append(add) 
    dropZone.append(cardElement) 
    rootPop.style.display = "none" 
}
addButton.addEventListener("click" , () => {//1
    rootPop.style.display = "flex" ;
})

const deleteCard = (e) =>{ //9
   e.target.parentNode.style.display = "none" 
}

const addCard = () => {
    let inputValue = document.getElementById("head").value ;//2.onclick
    createCard(inputValue)
}


//<div class="itemsdiv" id="liDiv"></div>