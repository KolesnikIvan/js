/*1. ������ ����������� � �������� �� �������. 
 * ������� � alert ��������������� ����������� 
 * � �������� �� ����������. 
 * ���������: ������ ��� �� �������: 
 * Tf = (9 / 5) * Tc + 32, 
 * ��� Tf � ����������� �� ����������, 
 * Tc � ����������� �� �������*/
// JavaScript source code

function farenheit(tc) {
    return 9/5 * tc + 32
}


temperatureCelsius = 15
temperatureFarenht = farenheit(temperatureCelsius)
console.log(temperatureFarenht)
