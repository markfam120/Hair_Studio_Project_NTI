document.getElementById("contact-Form").addEventListener("submit", async function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {

        Swal.fire({
            icon: "error",
            title: "Name Invalid",
            text: "Please enter your name.",
            confirmButtonText: "OK"
        });

        return;
    }

    if (phone === "") {

        Swal.fire({
            icon: "error",
            title: "Invalid Phone Number",
            text: "Please enter your phone number.",
            confirmButtonText: "OK"
        });

        return;
    }


    if (!/^(02)?{01}[0125][0-9]{8}$/.test(phone)) {

        Swal.fire({
            icon: "error",
            title: "Invalid Phone Number",
            text: "Please enter numbers only.",
            confirmButtonText: "OK"
        });

        return;
    }


    if (phone.length !== 11) {

        Swal.fire({
            icon: "error",
            title: "Invalid Phone Number",
            text: "Phone number must contain 11 digits.",
            confirmButtonText: "OK"
        });

        return;
    }


    if (email === "") {

        Swal.fire({
            icon: "error",
            title: "Email Invalid",
            text: "Please enter your email address.",
            confirmButtonText: "OK"
        });

        return;
    }


    if (address === "") {

        Swal.fire({
            icon: "error",
            title: "Address Invalid",
            text: "Please enter a address.",
            confirmButtonText: "OK"
        });

        return;
    }

    if (message === "") {

        Swal.fire({
            icon: "error",
            title: "Message Invalid",
            text: "Please enter your message.",
            confirmButtonText: "OK"
        });

        return;
    }


     await Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for contacting MELVN.",
        confirmButtonText: "OK"
    });
        document.getElementById("contact-Form").reset();
        window.location.href = "contact-us.html";

});