const btn = document.getElementById('notes');
const list = document.getElementById('list');

const arrayNotes = [];
//generating unique id
function makeid(length) {//lenght= how much lengthed id u required?
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


//add list
btn.addEventListener('click', function () {
  const id = makeid(10);//id unique
  const obj = {
    id: id,
    name: makeid(10),//heading of list
    // subnotes: [],
  };

  arrayNotes.push(obj);

  const li = document.createElement('li');
  li.id = id;
  li.innerHTML =`<div >
                  <h1>${obj.name}</h1>
                  <button id=${id} onclick="addSubsection(this.id)" >Add Subsection </button>
                  <button id=${id} onclick="deleteSegment(this.id)">Delete Item </button>
                  <button id=${id} onclick="newPage(this.id)">Delete Item </button>
                </div>`;

  list.appendChild(li);
});

//add items
function addSubsection(id) {
  const ele = document.getElementById(id);//this is id of first button
  const newelement = document.createElement('li');
  newelement.innerText = 'something';
  ele.appendChild(newelement);
}

//delete list
function deleteSegment(id) {
  const ele = document.getElementById(id);
  list.removeChild(ele);
}

function newPage(id) {
  const splitId = id.split('-')[1];
  const dataOfElement = arrayNotes.find((ele) => ele.id == splitId);
  window.location.href = `google.com?name=${dataOfElement.name}`;
}


/*
list.addEventListener('click', function (event) {
  const targetedElement = event.target;

  const newelement = document.createElement('li');
  newelement.innerText = 'something';
  targetedElement.appendChild(newelement);
});
*/
