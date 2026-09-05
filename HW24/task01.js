/*
1.ADV. САМОСТОЯТЕЛЬНО ИЗУЧИТЬ
Переделайте программу так, чтобы она сохраняла данные в CSV файл (такая возможность есть в Экселе)
 в корне проекта вместо JSON файла.

ПРИМЕР CSV ФАЙЛА:

Наименование,Количество
qqq,2
aaa,44.2
zzzz,55

2. Преработайте программу с урока или из п.1 так, чтобы ввод прекращался на слова "exit" или "выход" или "стоп" или 
"stop" (без учета регистра) и сохранялись данные в CSV  (JSON) файл в корне проекта. 

3. Доработайте программу с урока или из п.1 так, чтобы она позволяла пользователю удалять 
продукты из списка по наименованию если мы ввели 0 количество для данного наименования. 
После удаления продукта, программа должна обновлять CSV (JSON) файл 
и выводить обновленный список продуктов.

4. Доработайте программу с урока или из п.1 так, чтобы она позволяла пользователю изменять 
количество продукта в списке по наименованию если мы ввели другое количество для 
данного наименования но отличное от 0б. После изменения количества продукта, программа 
должна обновлять CSV  (JSON) файл и выводить обновленный список продуктов.
*/

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

async function runFridgeApp() {
    const rl = readline.createInterface({ input, output });

    const fridge = [];
    const stopWords = ["exit", "выход", "стоп", "stop"];

    const filePath = path.resolve("fridge.json");

    console.log("Программа для учета продуктов в холодильнике.");
    console.log(
        "Введите продукты в холодильнике. Для завершения введите exit, выход, стоп или stop."
    );

    while (true) {
        const name = await rl.question("Введите наименование продукта: ");
        const trimmedName = name.trim();

        if (stopWords.includes(trimmedName.toLowerCase())) {
            break;
        }

        if (trimmedName === "") {
            console.log(
                "Наименование продукта не может быть пустым. Попробуйте снова."
            );
            continue;
        }

        const productIndex = fridge.findIndex((product) => {
            return product.name.toLowerCase() === trimmedName.toLowerCase();
        });

        const countInput = await rl.question(
            `Введите количество продукта "${trimmedName}": `
        );

        const count = Number(countInput.trim());

        if (Number.isNaN(count)) {
            console.log("Количество должно быть числом.");
            continue;
        }

        // №3. Если продукт существует и введено 0 — удаляем
        if (productIndex !== -1 && count === 0) {
            fridge.splice(productIndex, 1);

            console.log(`Продукт "${trimmedName}" удален.`);

            await writeFile(
                filePath,
                JSON.stringify(fridge, null, 2),
                "utf-8"
            );

            console.log("Обновленный список продуктов:");
            console.table(fridge);

            continue;
        }

        // Если введено 0, но такого продукта нет
        if (productIndex === -1 && count === 0) {
            console.log(`Продукт "${trimmedName}" не найден.`);
            continue;
        }

        // №4. Продукт уже существует — меняем количество
        if (productIndex !== -1 && count !== 0) {
            fridge[productIndex].count = count;

            console.log(
                `Количество продукта "${trimmedName}" изменено на ${count}.`
            );

            await writeFile(
                filePath,
                JSON.stringify(fridge, null, 2),
                "utf-8"
            );

            console.log("Обновленный список продуктов:");
            console.table(fridge);

            continue;
        }

        // Если такого продукта еще нет — добавляем
        fridge.push({
            name: trimmedName,
            count: count,
        });

        console.log("Продукт добавлен:", {
            name: trimmedName,
            count: count,
        });

        await writeFile(
            filePath,
            JSON.stringify(fridge, null, 2),
            "utf-8"
        );

        console.log("Обновленный список продуктов:");
        console.table(fridge);
    }

    rl.close();

    if (fridge.length > 0) {
        try {
            await writeFile(
                filePath,
                JSON.stringify(fridge, null, 2),
                "utf-8"
            );

            console.log(`Данные о продуктах сохранены в файл: ${filePath}`);

            console.log("Считываем данные из файла...");

            const fileData = await readFile(filePath, "utf-8");

            console.log("Данные из файла:", fileData);

            const saveProducts = JSON.parse(fileData);

            console.log("Данные из файла (объект):", saveProducts);

            console.log("Список продуктов в холодильнике:");

            saveProducts.forEach((product) => {
                console.log(`- ${product.name}: ${product.count}`);
            });

            console.table(saveProducts);
        } catch (error) {
            console.error("Ошибка при работе с файлом:", error.message);
        }
    } else {
        
        await writeFile(filePath, JSON.stringify(fridge, null, 2), "utf-8");

        console.log("Список продуктов пуст.");
    }
}

runFridgeApp();