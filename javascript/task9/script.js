document.addEventListener("DOMContentLoaded", function () {
    // Handle form submission
    const form = document.getElementById("registrationForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            const user = { name, email, contact, address };

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            alert("User registered successfully!");
            form.reset();
        });
    }

    // Display registered users
    const userTableBody = document.getElementById("userTableBody");
    if (userTableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach(user => {
            let row = `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            </tr>`;
            userTableBody.innerHTML += row;
        });
    }
});
