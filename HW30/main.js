import axios from "axios";

function validateUser(user) {
    if (!user.name) {
        throw new Error("User name is missing");
    }
    if (!user.email) {
        throw new Error("Email is missing");
    }
    if (typeof user.id !== "number") {
        throw new Error("User id must be a number");
    }
}

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        const users = response.data;

        users.forEach((user) => {
            try {
                validateUser(user);
                console.log(`User is valid: ${user.name}`);
            } catch (error) {
                console.log(`Validation error: ${error.message}`);
            }
        });
    })
    .catch(() => {
        console.log("API error");
    });
