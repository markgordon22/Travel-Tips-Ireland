//email was made with the help of emailjs//
function sendMail() {
var params = {
        from_name: "Travel Tips Ireland",
        first_name: document.getElementById("fname").value,
        last_name: document.getElementById("lname").value,
        from: "markgordon97@gmail.com",
        phone_number: document.getElementById("telephone-number").value,
        arrival: document.getElementById("datearrival").value,
        to: document.getElementById("email-address").value,
        message: document.getElementById("msg").value
    };
    
emailjs.send("service_4b99rtc","template_nllrsno",params)
.then()

}