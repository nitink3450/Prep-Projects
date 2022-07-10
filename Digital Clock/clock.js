//DIGITAL CLOCK FUNCTION-

const Digital_Clock = () => {
  const time =new Date();
  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  
  let meridiem = document.getElementById('meridiem');
  let hour = hrs;
  let ampm = (hour >= 12) ? ('PM') : ('AM');
  if (hrs >=12){
    hrs = hrs-12;
  }
  if(hrs == 0){
    hrs = 12;
  }
  meridiem.innerText= ampm;
   
  document.getElementById('hour').innerText = hrs;
  document.getElementById('minutes').innerText = min;
  document.getElementById('seconds').innerText = sec;
   
}
setInterval(Digital_Clock,1000);

//SET ALARM BUTTON REPLACING TEXTS-
let button = document.getElementById('btn1');
button.addEventListener('click', () => {
    button.innerText = 'Party Time !!';
   
});
button.addEventListener('mouseleave', () => {
    button.innerText = 'Set Alarm';
});


// if (hrs <= 12) 
// {
//   document.getElementById("morning-label-id").innerHTML = "Good Morning!";
//   // document.getElementById("image_photo").src = "./curtons-img.svg";
//   // document.getElementById("breakfast-label-id").innerHTML ="GRAB SOME HEALTHY BREAKFAST!!!";
// }
// if (hrs >= 12 && hrs < 16) 
// {
//   document.getElementById("morning-label-id").innerHTML = "Good Afternoon!";
//   // document.getElementById("image_photo").src = "./pizza.svg"
//   // document.getElementById("breakfast-label-id").innerHTML ="LETS HAVE SOME LUNCH !!";

// }
// if (hrs >= 16 && hrs < 19)
//  {
//   document.getElementById("morning-label-id").innerHTML = "Good Evening";
//   // document.getElementById("image_photo").src = "./lunch_image.png"
//   // document.getElementById("breakfast-label-id").innerHTML ="GET SOME TEA";
// }
// if (hrs >= 19 && hrs <= 23) 
// {
//   document.getElementById("morning-label-id").innerHTML = "Good Night";
//   // document.getElementById("image_photo").src = "./goodnight_image.svg"
//   // document.getElementById("breakfast-label-id").innerHTML = "TIME TO BED";
// }

//AFTER BUTTON PRESSED/SETTING ALARM-
function clicked(){

  //AUTOMATIC GRETTINGS-
const date = new Date();
let hrs = date.getHours();
let wakeUp = parseInt(document.getElementById("wake").value);
let lunchUp = parseInt(document.getElementById("lunch").value);
let napUp = parseInt(document.getElementById("nap").value);
let nightUp = parseInt(document.getElementById("night").value);

  //TO DISPLAY MESSAGE AND IMAGE ON TIME-
  if(wakeUp == hrs)
  {
    document.getElementById("image_photo").src = "./curtons-img.svg";
    document.getElementById("morning-label-id").innerHTML = "Good Morning!";
    document.getElementById("breakfast-label-id").innerHTML ="GRAB SOME HEALTHY BREAKFAST!!!";
  }
  if(lunchUp == hrs)
  {
    document.getElementById("image_photo").src = "./pizza.svg"
    document.getElementById("morning-label-id").innerHTML = "Good Afternoon!";
    document.getElementById("breakfast-label-id").innerHTML ="LETS HAVE SOME LUNCH !!";
  }
  if(napUp == hrs)
  {
    document.getElementById("image_photo").src = "./lunch_image.png"
    document.getElementById("morning-label-id").innerHTML = "Good Evening";
    document.getElementById("breakfast-label-id").innerHTML ="GET SOME TEA";
  }
  if(nightUp == hrs)
  {
    document.getElementById("image_photo").src = "./goodnight_image.svg"
    document.getElementById("morning-label-id").innerHTML = "Good Night";
    document.getElementById("breakfast-label-id").innerHTML = "TIME TO BED";
  }
  
  //TO SET TIMING-
  let timing = document.getElementsByClassName("sets");
  timing[0].innerText ="Wake Up Time:" + " " + wake.options[wake.selectedIndex].text;
  timing[1].innerText ="Lunch Time:" + " " + lunch.options[lunch.selectedIndex].text;
  timing[2].innerText ="Nap Time:" + " " + nap.options[nap.selectedIndex].text;
  timing[3].innerText ="Night Time:" + " " + night.options[night.selectedIndex].text;
 }
