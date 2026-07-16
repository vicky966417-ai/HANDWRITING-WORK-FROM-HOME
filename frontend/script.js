const form = document.getElementById("registrationForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        fullName: form.elements[0].value,
        mobile: form.elements[1].value,
        houseNo: form.elements[2].value,
        area: form.elements[3].value,
        city: form.elements[4].value,
        district: form.elements[5].value,
        pinCode: form.elements[6].value,
        state: form.elements[7].value,
        fee: document.querySelector('input[name="fee"]:checked')?.value
    };

    try {
        const response = await fetch("https://handwriting-work-from-home.onrender.com/api/register", {
            method: "POST",
            console.log("Sending Data:", formData);
console.log("API URL:", "https://handwriting-work-from-home.onrender.com/api/register");
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert("Registration Submitted Successfully!");
            form.reset();
        } else {
            alert("Registration Failed!");
        }

    } catch (err) {
        alert("Server Connection Error");
        console.error(err);
    }
});
