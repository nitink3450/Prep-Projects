let addlistbtn = document.querySelector(".add-list1");

let popuplist = () => {
  let popupdiv1 = document.createElement("div");
  let heading1 = ducument.createElement("h4");
  let input1 = ducument.createElement("input");
  let addbtn1 = ducument.createElement("button");
  let clsbtn1 = ducument.createElement("button");
  heading1.innerText = "Add new list";
  input1.setAttribute("type", "text");
  input1.setAttribute("placeholder", "write item name here");
  addbtn1.innerText = "Add";
  clsbtn1.innerText = "Close";
};
addlistbtn.addEventListener("click", () => {
  popuplist();
});
