//accessing add list button main-
const addList = document.getElementById("addList");//addlist btn
const popup = document.querySelector(".popup-wrap");//blank div to append popup
//by clicking add popup will show of add new list-

//process 1
addList.addEventListener("click", () => {
  //creating add new list pop up template(popupbox)-
  const popupbox = document.createElement("div");//div to append card
  const popHeading = document.createElement("p");//card heading
  const popInput = document.createElement("input");//popup input
  const addBtn = document.createElement("div");//for-add btn
  const closeBtn = document.createElement("div");//for-cls btn
  //accessing whole main container when we press add btn it will blur background(container)-
  document.querySelector(".container").classList.add("blur");
  popup.appendChild(popupbox);//appended into blank div
  popupbox.className = "popup-box";
  popHeading.innerText = "Add new List";//innertext changed for list ,we can use it for item aslo
  popInput.type = "text";
  popInput.placeholder = "Add New List Name Here";
  popInput.style.textAlign= 'center';
  addBtn.className = "popup-box-button";
  closeBtn.className = "popup-box-button";
  addBtn.innerText = "Add";
  //warning To make sure that user enter list name before pressing add btn-
  const warning=document.createElement("p");
  warning.innerText="Enter List Name To Add!!";
  warning.style.display="none";
  closeBtn.innerText = "Close";
  //appending all children to one div-
  popupbox.appendChild(popHeading);
  popupbox.appendChild(popInput);
  popupbox.appendChild(addBtn);
  popupbox.appendChild(closeBtn);
  popupbox.appendChild(warning);
  //warning message-
  addBtn.addEventListener("click", () => {
    if (popInput.value=== "") {
        warning.style.fontSize="0.7rem"
        warning.style.display="block";
    }
    else{
      document.getElementById("intro-text").style.display="none";//no items in the list
      //creating card template here-
      const box = document.createElement("div");
      const boxHeading = document.createElement("span");//heading
      const add = document.createElement("i");
      const deleteBtn = document.createElement("i");
      const btnContainer = document.createElement("div");//to add 2 btns
      btnContainer.className = "button-container";
      add.className = "fa-solid fa-circle-plus";
      deleteBtn.className = "fa-solid fa-trash-can";
      boxHeading.id="box-heading";
      box.className = "box";
      const container2=document.querySelector(".container-2");
      //appending all children to one div-
      container2.appendChild(box);
      box.appendChild(boxHeading);
      box.appendChild(btnContainer);
      btnContainer.appendChild(add);
      btnContainer.appendChild(deleteBtn);
      boxHeading.innerText = popInput.value;
      //creating new page here for indivisual card-
      boxHeading.addEventListener('click',()=>{
        const heading=document.getElementById("heading");// in container 3
        heading.innerText=boxHeading.innerText;
        const container=document.querySelector(".container");
        const container3=document.querySelector(".container-3");
        //to show only container 3 and hide all others containers-
        container.style.visibility="hidden";
        container3.style.visibility="visible";
        const backBtn=document.getElementById("backbtn");
        //appendin whole card of conatainer into container 3
        container3.appendChild(box);
        deleteBtn.addEventListener('click',()=>{
          document.querySelector(".container-3").removeChild(box);
          document.querySelector(".container").style.visibility="visible";
          document.querySelector(".container-3").style.visibility="hidden";
        })
        backBtn.addEventListener('click',()=>{
          container3.removeChild(box);//line 73
          container2.appendChild(box);
          document.querySelector(".container").style.visibility="visible";
          document.querySelector(".container-3").style.visibility="hidden";
        })
      })
      //after clicking add list(input) btn -
      boxHeading.style.borderBottom = "1px solid black";
      popup.removeChild(popupbox);
      document.querySelector(".container").classList.remove("blur");//blur will dissapear
      deleteBtn.addEventListener("click", () => {//deletin the whole card
        document.querySelector(".container-2").removeChild(box);
        if(document.querySelector(".container-2").innerText===""){
          document.querySelector("#intro-text").style.display="block";
        }
      });

      //process 2 (repeating process 1)
      //again creating template for add new add items-
      add.addEventListener("click", () => {
        const popupbox = document.createElement("div");
        const popHeading = document.createElement("p");
        const popInput = document.createElement("input");
        const addBtn = document.createElement("div");
        const closeBtn = document.createElement("div");
        popup.appendChild(popupbox);
        popupbox.className = "popup-box";
        popHeading.innerText = "Add new Items";
        popInput.type = "text";
        popInput.style.textAlign = "center";
        popInput.placeholder = "Add New Items Here";
        addBtn.className = "popup-box-button";
        closeBtn.className = "popup-box-button";
        addBtn.innerText = "Add";
        closeBtn.innerText = "Close";
        document.querySelector(".container").classList.add("blur");
        popupbox.appendChild(popHeading);
        popupbox.appendChild(popInput);
        popupbox.appendChild(addBtn);
        popupbox.appendChild(closeBtn);
        addBtn.addEventListener("click", () => {

        //if user write items name as input-
          if (popInput.value !== "") {
            // creating space/div to appends that list items on card
            const task = document.createElement("div");
            const taskText = document.createElement("span");
            const doneButton = document.createElement("button");
            taskText.className = "task-text";
            doneButton.className = "done-button";
            task.className = "task";
            taskText.innerText = popInput.value;
            doneButton.innerText = "mark done";
            document.querySelector(".container").classList.remove("blur");
            box.appendChild(task);
            task.appendChild(taskText);
            task.appendChild(doneButton);
            popup.removeChild(popupbox);
            doneButton.addEventListener("click", () => {
              taskText.style.textDecoration = "line-through";
              task.removeChild(doneButton);
            });
          }
        });
        closeBtn.addEventListener("click", () => {
          popup.removeChild(popupbox);
          document.querySelector(".container").classList.remove("blur");
        });
      });
    }
  });
  closeBtn.addEventListener("click", () => {
    popup.removeChild(popupbox);
    document.querySelector(".container").classList.remove("blur");
  });
});