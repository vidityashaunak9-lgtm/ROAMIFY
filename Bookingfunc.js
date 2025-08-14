

let name = window.prompt("Enter Your Name:--");

let number;
do {
    number = window.prompt("Enter Your Number (10 digits):---");
    if (!/^\d{10}$/.test(number)) {
        alert("❌ Please enter a valid 10-digit number 📞");
    }
} while (!/^\d{10}$/.test(number));

alert(`✅ Welcome ${name}! 🎉\nYour number ${number} is registered successfully.`);


 console.log(name);

 alert(`Welcome ${name}! 🎉\nYour number ${number} is registered successfully.`);

 const person=document.getElementById("persons");

 document.querySelector(".trip-form").addEventListener("submit",()=>{
    event.preventDefault();
     let persons = parseInt(person.value);

    if (persons > 10 || persons <= 0) {
        alert("Not possible! Please enter between 1 and 10 persons.");
    } else {
        alert(`✈️ Our team will contact you for Trip booking 🧳\n👥 ${persons} persons confirmation\n🙏 Thank you, ${name}! 🌍`);

    }
 });