let nextUserId = 1;

function createUser({name, age, ...rest} = {}) {
    if (typeof name !== "string" || !name.trim()) {
        throw new Error("Name is required");
    }
    if (age === undefined || age === null || age === "") {
        throw new Error("Age is required");
    }
    if (!Number.isInteger(age) || age < 0 || age > 120) {
        throw new Error("Invalid age");
    }

    return {
        ...rest,
        id: nextUserId++,
        name: name.trim(),
        age,
    };
}

