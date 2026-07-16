const form = document.getElementById("registrationForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("fullName", form.elements[0].value);
    data.append("mobile", form.elements[1].value);
    data.append("houseNo", form.elements[2].value);
    data.append("area", form.elements[3].value);
    data.append("city", form.elements[4].value);
    data.append("district", form.elements[5].value);
    data.append("pinCode", form.elements[6].value);
    data.append("state", form.elements[7].value);

    const fee = document.querySelector('input[name="fee"]:checked');
    if (fee) {
        data.append("fee", fee.value);
    }

    const file = document.getElementById("paymentScreenshot").files[0];
    if (file) {
        data.append("paymentScreenshot", file);
    }

    try {

        const response = await fetch(
            "https://handwriting-work-from-home.onrender.com/api/register",
            {
                method: "POST",
                body: data
            }
        );

        const result = await response.json();

        alert(result.message);

        form.reset();

    } catch (err) {

        console.error(err);

        alert(err.message);

    }

});
