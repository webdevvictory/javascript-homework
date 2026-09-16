import { readFile } from "node:fs/promises";
import { GoogleGenAI } from "@google/genai";

async function getProducts() {
    const filePath = new URL("../fridge.json", import.meta.url);
    const fileData = await readFile(filePath, "utf-8");
    return JSON.parse(fileData);
}

function createBasePromptByRole(user){
    if (user.role === "ADMIN") {
        return `
        Ты - квалифицированный повар, определяющий ингредиенты
        блюда по названию блюда. 
        Тебе дается название желаемого блюда и список
        продуктов, имеющихся в холодильнике. 
        Твоя задача - на основе этих данных составить рекомендации
        для владельца холодильника, какие недостающие продукты надо 
        закупить, чтобы владелец мог приготовить желаемое блюдо.
        Правила:
            -возвращай только список продуктов, которые нужно закупить.
            -не возвращай продукты, не имеющие отношения к данному блюду.
            -не возвращай продукты, которые уже есть в холодильнике.        
        `;
    } else {
        return `
        Ты - квалифицированный повар, определяющий ингредиенты
        блюда по названию блюда. 
        Тебе дается название желаемого блюда и список
        продуктов, имеющихся в холодильнике. 
        Твоя задача - на основе этих данных составить рекомендации
        для владельца холодильника, какие продукты надо 
        использовать из имеющихся в холодильнике, чтобы владелец мог 
        приготовить желаемое блюдо.
        Правила:
            -возвращай только список продуктов, которые нужно использовать
            из числа имеющихся в холодильнике.
            -не возвращай продукты, не имеющие отношения к данному блюду.
            -не возвращай продукты, которых нет в холодильнике.          
        `;
    }
}

function createPrompt(basePrompt, dishTitle, availableProducts) {
    return `
${basePrompt}

Название блюда: ${dishTitle}

Продукты, имеющиеся в холодильнике:
${JSON.stringify(availableProducts, null, 2)}
    `;
}

// Обращение к Gemini из lesson23/task02.js.
async function askAi(prompt) {
    const genAi = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY
    });

    const response = await genAi.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
    });

    return response.text;
}

async function main() {
    const user = {
        name: "John",
        role: "USER"
    };

    const admin = {
        name: "Bill",
        role: "ADMIN"
    };

    // Для проверки USER замени admin на user.
    const authenticatedUser = admin;

    // 1. Получаем продукты из файла.
    const availableProducts = await getProducts();

    // 2. Выбираем инструкцию по уже известной роли.
    const basePrompt = createBasePromptByRole(authenticatedUser);
/*
    // 3. Добавляем блюдо и имеющиеся продукты.
    const prompt = createPrompt(basePrompt, "борщ", availableProducts);

    // 4. Получаем ответ ИИ.
    const aiResponse = await askAi(prompt);
*/
const dishTitle = "борщ";

const prompt = createPrompt(
    basePrompt,
    dishTitle,
    availableProducts
);

const aiResponse = await askAi(prompt);

if (authenticatedUser.role === "ADMIN") {
    console.log(`Для блюда «${dishTitle}» надо докупить следующие продукты:`);
} else {
    console.log(`Для блюда «${dishTitle}» используй следующие продукты из холодильника:`);
}


    // 5. Выводим ответ.
    console.log(aiResponse);
}

main().catch((error) => {
    console.error("Ошибка:", error.message);
    process.exitCode = 1;
});
