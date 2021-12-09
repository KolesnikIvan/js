/*1. Задать температуру в градусах по Цельсию. 
 * Вывести в alert соответствующую температуру 
 * в градусах по Фаренгейту. 
 * Подсказка: расчёт идёт по формуле: 
 * Tf = (9 / 5) * Tc + 32, 
 * где Tf – температура по Фаренгейту, 
 * Tc – температура по Цельсию*/
// JavaScript source code

function farenheit(tc) {
    return 9/5 * tc + 32
}


temperatureCelsius = 15
temperatureFarenht = farenheit(temperatureCelsius)
console.log(temperatureFarenht)
