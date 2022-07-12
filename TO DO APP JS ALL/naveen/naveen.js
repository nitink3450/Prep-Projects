//Code below for fetching pop-up just above the contianer and make the behind screen blur
let card1 = document.querySelector("#circle");
var notshow = document.getElementsByClassName("notshow")[0];
card1.addEventListener("click", () => {
  document.getElementsByClassName("pop-up")[0].style.display = "flex";
  notshow.className = "not_show";
});
//Code below for cancel the pop-up
var addCard1 = document.querySelector("#Cancel_List");
addCard1.addEventListener("click", () => {
  document.getElementsByClassName("pop-up")[0].style.display = "none";
  notshow.className = "no_blur";
});
//Code below for adding dynamic cards in the contianer
var arr_card_set = new Set();
var taskList = [];
var title_flag = false;
var value_id;
var subtask = new Map();

var addCard = document.getElementById("Add_card");
addCard.addEventListener("click", () => {
  // document.getElementById('empty-container').style.display='none';
  let card_heading = document.getElementById("input").value;
  createObj(card_heading);
  closepopup();
  notshow.className = "no_blur";
});
function createObj(card_heading) {
  document.getElementById("empty-container").style.display = "none";
  var obj = {
    title: card_heading,
    id: Date.now(),
    subtask,
  };
  arr_card_set.add(obj);
  createcardAndAppend(obj.id);
}
//Code below for removing pop-up just after adding dynamic cards in the contianer
function closepopup() {
  document.getElementsByClassName("pop-up")[0].style.display = "none";
}
//function has been defined to create dynamic card and append it into the container.
function createcardAndAppend() {
  var Copy_Of_Card = document.getElementsByClassName("card")[0].cloneNode(true);
  display(Copy_Of_Card);
}
function display(card) {
  document.getElementById("empty-container").style.display = "none";
  arr_card_set.forEach((Element) => {
    card.id = Element.id;
    card.getElementsByClassName("card-heading")[0].innerHTML = Element.title;
    card
      .getElementsByClassName("card-heading")[0]
      .setAttribute("value", Element.id);
    card.setAttribute("value", Element.id);
    card.style.display = "block";
    card
      .getElementsByClassName("deleteButton")[0]
      .setAttribute("value", Element.id);
    card
      .getElementsByClassName("addButton")[0]
      .setAttribute("value", Element.id);
    card
      .querySelector(".deleteButton")
      .setAttribute("onClick", "deleteCard(this.value)");
    card
      .querySelector(".addButton")
      .setAttribute("onClick", "addSubtask(this.value)");
  });
  if (title_flag) card.style.display = "none";
  else card.style.display = "block";
  document.getElementById("outer-container").appendChild(card);
}
//delete Card from container one by one
function deleteCard(value) {
  var delete_div = document.getElementById(value);
  for (item of arr_card_set) {
    for (prop in obj) {
      if (item.id == value) arr_card_set.delete(item);
      break;
    }
  }
  delete_div.parentNode.removeChild(delete_div);
  if (arr_card_set.size == 0) {
    document.getElementById("empty-container").style.display = "block";
  }
}
//code for input text inside card as items.
let addTodo = document.getElementById("demo11");
addTodo.addEventListener("click", () => {
  var copyOfCard = document
    .getElementsByClassName("innerButton")[0]
    .cloneNode(true);
  var card_item = document.getElementById("input2").value;
  copyOfCard.innerText = card_item;
  copyOfCard.style.display = "block";
  copyOfCard.setAttribute("id", Date.now());
  copyOfCard.setAttribute("value", Date.now());
  copyOfCard.setAttribute("style", "margin-left: 10px;");
  var inner_button = document.createElement("button");
  inner_button.setAttribute("id", `abc-${Date.now()}`);
  // inner_button.setAttribute("class", "mark-as-done-class");
  inner_button.setAttribute("value", Date.now());
  inner_button.setAttribute("onclick", "completedTask(this.value)");
  inner_button.innerText = "done";
  inner_button.setAttribute("class", "completeButton");
  copyOfCard.appendChild(inner_button);
  copyOfCard.setAttribute("onClick", "completedTask(this.value)");
  for (obj of arr_card_set) {
    for (prop in obj) {
      if (obj.id == value_id) {
        obj.subtask.set(card_item, Date.now());
        break;
      }
    }
  }
  document
    .getElementById(value_id)
    .getElementsByClassName("list-item")[0]
    .appendChild(copyOfCard)
    .appendChild(inner_button);
  document.getElementsByClassName("pop-up")[1].style.display = "none";
});
function addSubtask(value) {
  document.getElementsByClassName("pop-up")[1].style.display = "block";
  value_id = value;
}
let closeList = document.getElementById("demo12");
closeList.addEventListener("click", () => {
  document.getElementsByClassName("pop-up")[1].style.display = "none";
});

function completedTask(value) {
  document.getElementById(value).style.textDecoration = "line-through";
  document.getElementById(value).style.color = "pink";
  document.getElementById(`abc-${value}`).remove();
}
//Code for onclick on header of  card the card will open in new page with its header text on the top
function headerFunction(val) {
  var card_header;
  for (let ele of arr_card_set) {
    for (let id in ele) {
      if (ele[id] == val) {
        card_header = ele.title;
        break;
      }
    }
  }
  document.querySelector(".upper-container1").style.display = "none";
  document.querySelector(".upper-container11").style.display = "block";
  for (let ele of arr_card_set) {
    if (ele.id == val) {
      document.getElementById(`${ele.id}`).style.display = "block";
    } else {
      document.getElementById(`${ele.id}`).style.display = "none";
    }
  }
  document.getElementById("Card_heading_separately").innerText = card_header;
  document.getElementById("Card_heading_separately").style.display = "block";
  title_flag = true;
}
//Code for displaying all card after clicking on back arrow
document
  .getElementsByClassName("Displayall")[0]
  .addEventListener("click", () => {
    title_flag = false;
    document.querySelector(".upper-container1").style.display = "block";
    document.querySelector(".upper-container11").style.display = "none";
    for (let ele of arr_card_set) {
      document.getElementById(ele.id).style.display = "block";
    }
    document.getElementById("Card_heading_separately").style.display = "none";
  });