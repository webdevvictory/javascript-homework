const app = document.querySelector("#app");

const products = [
    {
        id: 1,
        name: "Молоко",
        category: "Молочные продукты",
        bought: false
    },
    {
        id: 2,
        name: "Хлеб",
        category: "Выпечка",
        bought: true
    },
    {
        id: 3,
        name: "Сыр",
        category: "Молочные продукты",
        bought: false
    },
    {
        id: 4,
        name: "Яблоки",
        category: "Фрукты",
        bought: false
    }
];

const list = document.createElement("ul");
app.append(list);

function renderProducts(productsToRender) {
    list.innerHTML = "";
    productsToRender.forEach(function (product) {
        const li = document.createElement("li");
        li.dataset.id = product.id;
        li.textContent = product.name;

        if (product.bought) {
            li.classList.add("bought");
        }

        list.append(li);
    });
}

function addProduct(name, category) {
    if (products.some(product => product.name.toLowerCase() === name.toLowerCase())) {
        return;
    }

    const newProduct = {
        id: products.length + 1,
        name,
        category,
        bought: false
    };

    products.push(newProduct);
    renderProducts(products);
}

function createUI(app) {
    const nameInput = document.createElement("input");
    nameInput.placeholder = "Название";

    const categoryInput = document.createElement("input");
    categoryInput.placeholder = "Категория";

    const addButton = document.createElement("button");
    addButton.type = "submit";
    addButton.textContent = "Добавить";

    const form = document.createElement("form");

    form.append(nameInput, categoryInput, addButton);
    app.append(form);

    return {form, nameInput, categoryInput};
}

const {form, nameInput, categoryInput} = createUI(app);

function handleSubmit(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const category = categoryInput.value.trim();

    addProduct(name, category);

    nameInput.value = "";
    categoryInput.value = "";
}

form.addEventListener("submit", handleSubmit);
