/*
HW_26_TEXT
Используя два информационных ресурса (API) - https://jsonplaceholder.typicode.com/users и https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true
1. Получить список пользователей (users) с ресурса https://jsonplaceholder.typicode.com/users
2. Для каждого пользователя получить его географические координаты (latitude и longitude)  
3. Используя эти координаты, получить текущую погоду для каждого пользователя с ресурса https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true
4. Определить пользователя с самой высокой температурой и вывести его имя, телефон  
 и температуру в консоль.
 
 Решите задачу с использованием
 5.fetch  
 6.axios (для одного из запросов).
 
*/

import axios from "axios";

async function run() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    let hottestUser = null;

    let maxTemperature = -Infinity;

    for (const user of users) {
      const latitude = user.address.geo.lat;
      const longitude = user.address.geo.lng;

      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

      const weatherResponse = await axios.get(weatherUrl);

      const weather = weatherResponse.data;

      const temperature = weather.current_weather.temperature;

      if (temperature > maxTemperature) {
        maxTemperature = temperature;
        hottestUser = user;
      }
    }

    console.log("Имя:", hottestUser.name);
    console.log("Телефон:", hottestUser.phone);
    console.log("Температура:", maxTemperature);
  } catch (error) {
    console.error("Ошибка:", error.message);
  }
}

run();
