const userManager = createUserManager();

const form = document.querySelector("#registration-form");
const nameInput = document.querySelector("#name-input");
const ageInput = document.querySelector("#age-input");
const message = document.querySelector("#message");
const usersList = document.querySelector("#users-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    try {
        const name = nameInput.value;
        const age = ageInput.value;

        if (age === "") {
            throw new Error("Age is required");
        }

        const ageNumber = Number(age);

        if (!Number.isInteger(ageNumber) || ageNumber < 0 || ageNumber > 120) {
            throw new Error("Invalid age");
        }

        const user = createUser({name, age: ageNumber});

        userManager.addUser(user);
        console.log(`User ${user.name} successfully registered`);

        const users = userManager.getUsers();

        usersList.replaceChildren();

        users.forEach(function ({name, age}) {
            const li = document.createElement("li");
            li.textContent = `${name}, ${age} years old`;
            usersList.append(li);
        });

        message.textContent = "User successfully registered";
        nameInput.value = "";
        ageInput.value = "";

    } catch (error) {
        console.error(error.message);
        message.textContent = error.message;
    } finally {
        console.log("Registration attempt completed");
    }


});