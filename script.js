
AOS.init({

    duration: 1000,

});



const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById(" email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "amanchoure7415@gmail.com",
        Password: "32E02B4CE6DD59CE00943231B9B6DD3FEE40",
        To: 'amanchoure7415@gmail.com',
        From: "amanchoure7415@gmail.com",
        Subject: subject.value,
        Body: mess.value
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successrfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // checkInputs();
    sendEmail();
});