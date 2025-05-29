var num1 = 10, num2 = 5;
var sum = num1 + num2;
document.write("Sum: " + sum + "<br>");

var diff = num1 - num2;
document.write("Subtraction: " + diff + "<br>");

var product = num1 * num2;
document.write("Multiplication: " + product + "<br>");

var division = num1 / num2;
document.write("Division: " + division + "<br>");

var modulus = num1 % num2;
document.write("Modulus: " + modulus + "<br><br>");

var value;
document.write("Value after variable declaration is: " + value + "<br>");
value = 5;
document.write("Initial value: " + value + "<br>");
value++;
document.write("Value after increment is: " + value + "<br>");
value += 7;
document.write("Value after addition is: " + value + "<br>");
value--;
document.write("Value after decrement is: " + value + "<br>");
var remainder = value % 3;
document.write("The remainder is: " + remainder + "<br><br>");

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets is: " + totalCost + " PKR<br><br>");

var tableNum = 4;
document.write("Table of " + tableNum + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
document.write("<br>");

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

fahrenheit = 70;
celsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsius + "°C<br><br>");

var price1 = 650, price2 = 100;
var qty1 = 3, qty2 = 7;
var shipping = 100;
var total = (price1 * qty1) + (price2 * qty2) + shipping;
document.write("Total cost of your order is: " + total + " PKR<br><br>");

var totalMarks = 980, marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Marks Sheet<br>Total marks: " + totalMarks + "<br>Marks obtained: " + marksObtained + "<br>Percentage: " + percentage + "%<br><br>");

var usd = 10, sar = 25;
var totalPKR = (usd * 104.80) + (sar * 28);
document.write("Total Currency in PKR: " + totalPKR + "<br><br>");

var num = 10;
var result = ((num + 5) * 10) / 2;
document.write("Result: " + result + "<br><br>");

var currentYear = 2024, birthYear = 2000;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age2 + " or " + age1 + " years old<br><br>");

var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br><br>");

var snack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;
document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge);
