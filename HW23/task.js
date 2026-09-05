/*
HW_23_TEXT
1.Из полученного ответа извлеките 
и распечатайте данные про коды ответа и их расшифровку.
2*** Подсчитайте, сколько раз в ответе упоминаются методы REST (GET, POST и т.д.).
и распечатайте результат. Используйте методы строк и массивов.
*/

import { GoogleGenAI } from "@google/genai";

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
    const prompt =
        "Напиши что такое REST API и как его использовать в JavaScript";

    const aiResponse = await askAi(prompt);

    console.log("AI Response:", aiResponse);


    // #1
    const lines = aiResponse.split("\n");

    const codes = lines.filter(line => {
        return (
            line.includes("200") ||
            line.includes("201") ||
            line.includes("400") ||
            line.includes("401") ||
            line.includes("404") ||
            line.includes("500")
        );
    });

    console.log("Коды ответов:");
    console.log(codes.join("\n"));


    // # 2
    const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

    for (let i = 0; i < methods.length; i++) {
        const parts = aiResponse.split(methods[i]);
        const count = parts.length - 1;

        console.log(`${methods[i]}: ${count}`);
    }
}

main();