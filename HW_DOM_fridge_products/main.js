const app = document.querySelector("#app");

function createUI(app) {
  const title = document.createElement("h1");
  title.textContent = "Список продуктов";
  app.append(title);

  const form = document.createElement("form");

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Введите продукт";

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Добавить";

  form.append(input, button);

  const list = document.createElement("ul");
  app.append(form, list);

  return { form, input, list };
}

const { form, input, list } = createUI(app);

function isDuplicate(items, productName) {
  return Array.from(items).some(function (item) {
    return (
        item.textContent.trim().toLowerCase() ===
        productName.trim().toLowerCase()
    );
  });
}

function handleSubmit(e) {
  e.preventDefault();

  const productName = input.value.trim();

  if (!productName) {
    return;
  }

  const items = list.querySelectorAll("li");
  const duplicate = isDuplicate(items, productName);

  if (duplicate) {
    input.focus();
    return;
  }

  const li = document.createElement("li");
  li.textContent = productName;
  list.append(li);

  input.value = "";
  input.focus();
}

form.addEventListener("submit", handleSubmit);
