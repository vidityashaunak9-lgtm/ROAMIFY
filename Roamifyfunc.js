const bookbtn=document.querySelectorAll(".button");
const popform=document.getElementById("popupform");
const closebtn=document.getElementById("closebtn");



closebtn.addEventListener("click", ()=>{
    popform.style.display="none";
     document.body.classList.remove("show-popup");

})
window.addEventListener("click", (event) => {
  if (event.target === popform) {
    popform.style.display = "none";
     document.body.classList.remove("show-popup");
  }
});
bookbtn.forEach((bookbtn) => {
    bookbtn.addEventListener("click", () => {
        popform.style.display = "block";
        document.body.classList.add("show-popup");
    });
});


const sloganGroups = [
  [
    "Explore the world with Roamify – your ultimate travel companion.",
    "Discover new destinations, hidden gems, and unforgettable experiences.",
    "Seamless trips, expert tips, and personalized itineraries – Roamify makes travel easy."
  ],
  [
    "Roamify – turning your travel dreams into unforgettable journeys.",

    "Discover the world, one destination at a time with Roamify.",

   "From hidden gems to iconic landmarks – explore it all with Roamify.",
   
  ],
  [
    "Roamify – where every trip becomes a story worth telling.",

    "Your gateway to hassle-free adventures and timeless memories.",

    "Explore beyond boundaries, travel smarter with Roamify.",
],
[
  "Journey made simple, memories made grand.",

  "Roam freely, explore deeply.",

  "Your adventure starts with Roamify.",
]
];


const titleElement = document.querySelector("#title p:nth-child(2)");

let groupIndex = 0;

function changeSlogans() {
  
  titleElement.innerHTML = sloganGroups[groupIndex].join("<br>");
  
  
  groupIndex = (groupIndex + 1) % sloganGroups.length;
}


changeSlogans();

setInterval(changeSlogans, 2000);


 








