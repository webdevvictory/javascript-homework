const input = document.getElementById("productInput");
const button = document.getElementById("addButton");
const productList = document.getElementById("productList");

function addProduct() {
    const product = input.value;

    if (product.trim() === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = product;

    li.addEventListener("click", function () {
        li.classList.toggle("bought");
    });

    productList.append(li);

    input.value = "";

    input.focus();
}

button.addEventListener("click", addProduct);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addProduct();
    }
});