//set alarm button-
let button = document.getElementById('btn1');
button.addEventListener('click', () => {
    button.innerHTML = 'Party Time !!';
   
});
button.addEventListener('mouseleave', () => {
    button.innerHTML = 'Set Alarm';
});

//Clock Time Display function-
const Display = () =>{

    const date =new Date();//accesssed global 24 hrs time
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = document.getElementById('ampm');

    // From 1 to 12 = AM And From 12 to 24 = PM 
    let finalhrs = hour ;
    finalhrs >= 12 ? (ampm.innnerText = 'PM') : (ampm.innnerText = 'AM');
    // 24 hrs Time Converted into 12 hrs(easy to track time)
    finalhrs > 12 ? (finalhrs -= 12) : ((finalhrs = 0) ? (finalhrs = 12) : (finalhrs));

    // accessed time gave to UI clock id sections
    document.getElementById('hour').innerHTML = finalhrs ;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerText = seconds;
}
setInterval(Display, 1000);

function clicked() {

  var utha = document.getElementById("wake").value;
  var hours = new Date().getHours();
  var jeva = document.getElementById("lunch").value;
  var chaha = document.getElementById("nap").value;
  var jhopa = document.getElementById("night").value;
  if (parseInt(utha) === hours) {
    document.getElementById("image_photo").src = "./curtons-img.svg";
    document.getElementById("breakfast-label-id").innerHTML ="GRAB SOME HEALTHY BREAKFAST!!!";
    document.getElementById("morning-label-id").innerHTML = "GOOD MORNING!!";
  }
  if (parseInt(jeva) === hours) {
    document.getElementById("image_photo").src = "./pizza.svg"
    document.getElementById("breakfast-label-id").innerHTML ="LETS HAVE SOME LUNCH !!";
    document.getElementById("morning-label-id").innerHTML = "GOOD AFTERNOON!!";
  }
  if (parseInt(chaha) === hours) {
    document.getElementById("image_photo").src = "./lunch_image.png"
    document.getElementById("breakfast-label-id").innerHTML ="GET SOME TEA";
    document.getElementById("morning-label-id").innerHTML = "GOOD EVENING!!";
  }
  if (parseInt(jhopa) === hours) {
    document.getElementById("image_photo").src = "./goodnight_image.svg"
    document.getElementById("breakfast-label-id").innerHTML = "TIME TO BED";
    document.getElementById("morning-label-id").innerHTML = "GOOD NIGHT!!";
  }

  var container = document.createElement("p");
  document.getElementsByClassName("time-schedule")[0].appendChild(container);
  var timing = document.getElementsByClassName("setting");
  var item1 = document.getElementById("wake");
  var item2 = document.getElementById("lunch");
  var item3 = document.getElementById("nap");
  var item4 = document.getElementById("night");

  timing[0].innerText =
    "Wake Up Time:" + " " + item1.options[item1.selectedIndex].text;
  timing[1].innerText =
    "Lunch Time:" + " " + item2.options[item2.selectedIndex].text;
  timing[2].innerText =
    "Nap Time:" + " " + item3.options[item3.selectedIndex].text;
  timing[3].innerText =
    "Night Time:" + " " + item4.options[item4.selectedIndex].text;

}
