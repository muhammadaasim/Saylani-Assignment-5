/* Saylani JavaScript Assignment 
By Muhammad Aasim */
/* CHAPTER # 1 */
/* TASK 1 */

document.alert("Welcome Dear Valuable customer")

/* TASK 2 */
document.alert("Error! Please enter a valid password.")

/* TASK 3 */
var n = "\n"
var msg = "Welcome to JS Land"
msg += n
msg += "Happy coding"
window.alert(msg)

/* TASK 4 */
window.alert("Welcome to JS Land")
var n = "\n"
var msg = "Happy coding!"
msg += n
msg += "Prevent this page from creating additional dialogs."
window.alert(msg)

/* TASK 5 */
window.alert("Hello...I can run JS through my web browser's console")


/* CHAPTER # 2 */
/* TASK 1 */
var username

/* TASK 2 */
var myName = "Muhammad Aasim"

/* TASK 3 */
var message = "Hello World"
window.alert(message)

/* TASK 4 */
var name = 'Muhammad Aasim'
var age = 20
var prof = 'Computer Science Student'
window.alert(name)
window.alert(age)
window.alert(prof)

/* TASK 5 */
var news = "PIZZA\nPIZZ\nPIZ\nPi\nP"
window.alert(news)


/* TASK 6 */
var email = "muhammadaasimsoomro@gmail.com"
alert("My Email address is" + " " + email)


/* TASK 7 */
var book = "A smarter way to learn Javascript"
alert("I am trying to learn from the Book: " + " " + book)

/* TASK 8 */
var y = "Yah! I can write HTML content through JavaScript"
document.write(y)

/* TASK 9 */
window.alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

/* CHAPTER # 3 */
/* TASK 1 */
var age = 20
alert("I am "  + age   + " years old")

/* TASK 2 */
var visit = 17
alert("You have visited this site " + visit + " times")

/* TASK 3 */
var birthYear = 2000
docume+nt.write("My birth year is " + birthYear )
document.write("<br>")
document.write("Data type of my declared variable is number")

/* TASK 4 */
var visitor = "Aasim"
var prod = "Shirt"
var quant = 2
document.write(visitor + " ordered " + quant + " " + prod +"(s)" + " on XYZ clothing store")

/* CHAPTER # 4 */
/* TASK 1 */
var tree = 43,secondtree = 65,thirdtree = 54;

/* TASK 2 */
/* LEGAL VARIABLE */
var tree
var $heyu
var _attack
var Aasim_28
var _1stmy
/* ILLEGAL VARIABLE */
// var new
// var 2nd
// var grade#1
// var 6th_number
// var testing variable

/* TASK 3 */
/* part a */
document.write('<h1>'+ "Rules for naming JS variables" + '</h1>' );
/* part b */
document.write("<br>")
document.write("Variable names can only contain numbers, $  and __. For example : $my_1stVariable <br>");
document.write("Variables must begin with a letter, $ or __. For example $name, _name or name<br>")
document.write("Variable names are case sensitive<br> ")
document.write(" Variable names should not be JS keywords")

/* CHAPTER # 5 */
/* TASK 1 */
var f = 3
var k = 5
var j = f + k
document.write("sum of " + f + " and" + " " + k + " is " + j)

/* TASK 2 */
var f = 3
var k = 5
var sub = f - k
var mult = f * k
var div = f / k
var mod = f % k
document.write("Two numbers are " + f + " and" + k)
document.write("<br>by subtraction = " + sub )
document.write("<br>by multiplication = " + mult)
document.write("<br>by division = " + div)
document.write("<br>by modulus = " + mod)

/* TASK 3 */
/* part a */
var val 
/* part b */
document.write("Value after variable declaration is : ??")
/* part c */
val = 40
/* part d */
document.write("<br>Initial value : " + val)
/* part e */
val += 1
/* part f */
document.write("<br>Value after increment is: " + val)
/* part g */
val += 7
/* part h */
document.write("<br>Value after addition is :" + val)
/* part i */
val -= 1
/* part j */
document.write("<br>Value after decrement is: " + val)
/* part k */
val /= 3
/* part l */
document.write("<br>Output: 'The remainder is : " + val )

/* TASK 4 */
var ticket = 800
ticket *= 5
document.write("Total cost to buy 5 tickets to a movie is " + ticket + "PKR")

/* TASK 5 */
var no = 4
for(i=1;i<=10;i++){
    document.write( no ," x ", i , "=" + no*i ,"<br>")
}

/* TASK 6 */
/* part a */
var cel = 40
/* part b */
var f = (cel * 9/5) + 32
document.write(cel+"C is " + f+"F")
/* part c */
var far = 90
var c = (far - 32) * 5/9
/* part d */
document.write("<br>",far+"F is " + c+"C")

/* TASK 7 */
document.write('<h1> Shopping Cart </h1>')
var p1 = 650
var q1 = 7
var p2 = 100
var q2 = 3
document.write("<br>Price of item 1 is ",p1)
document.write("<br>quantity of item 1 is ",q1)
document.write("<br>Price of item 2 is ",p2)
document.write("<br>quantity of item 2 is ",q2)
document.write("<br>Shipping Charges 100")
var total = (p1*q1)+(p2*q2)
document.write("<br><br>Total cost of your order is ",total)

/* TASK 8 */
document.write("<h1> Marks Sheet </h1>")
var tmark = 980
var omark = 804
var perc = (omark/tmark)*100
document.write("<br>Total marks: ",tmark)
document.write("<br>Marks obtained: ",omark)
document.write("<br>Percentage: ",perc)

/* TASK 9 */
var cur = (10*104.80) + (25*28)
document.write("<h1> Currency in PKR </h1>")
document.write("<br><br><br>Total currency in PKR: ",cur)

/* TASK 10 */
var num = 20
/*abcd*/
num = ((num + 5) * 10)/2
document.write(num)  

/* TASK 11 */
document.write("<h1>Age Calculator</h1>")
/* a */
var year = 2020
/* b */
var byear = 2000
/* c */
var bday = year-byear
document.write("<br>Current year: ",year)
document.write("<br>Birth Year: ",byear)
document.write("<br>They are ",bday," years old")

/* TASK 12 */
/* a */
document.write("<h1>The Geometrizer</h1>")
var rad = 20
document.write("<br>Radius of a circle: ",rad)
/* b */
var circum = 2*3.142*rad
document.write("<br>The circumference is: ",circum)
/* c */
var area = (3.142*(rad**2))
document.write("<br>The area is: ",area)

/* TASK 13 */
/* a */
document.write("<h1>The Lifetime Supply Calculator</h1>")
var snack = "fries"
var umar = 20
var eumar = 65
var amount = 30
var est = 40*30
document.write("<br>Favourite Snack: ",snack)
document.write("<br>Current age: ",umar)
document.write("<br>Estimated max age: ",eumar)
document.write("<br>Amount of snacks per day: ",amount)
document.write("<br>You will need ",est," ",snack," to last you until the ripe old age of ",eumar)

/* CHAPTER # 6-9 */
/* TASK 1 */
var a = 10
document.write("Result:")
document.write("<br>The value of a is: ",a)
document.write("<br>-------------------------------")
a += 1
document.write("<br><br><br>The value of ++a is: ",a)
document.write("<br>Now the value of a is: ",a)
a += 1
document.write("<br><br><br>The value of ++a is: ",a)
document.write("<br>Now the value of a is: ",a)
a -= 1
document.write("<br><br><br>The value of --a is: ",a)
document.write("<br>Now the value of a is: ",a)
a -= 1
document.write("<br><br><br>The value of --a is: ",a)
document.write("<br>Now the value of a is: ",a)

/* TASK 2 */
var a = 2
var b = 1
document.write("a is ",a)
document.write("<br>b is ",b)
var result = ((a-1)-(b-1))+((b+1)+(b-1))
document.write("<br>result is ",result)

/* TASK 3 */
var user = window.prompt("enter your name :")
document.write("Welcome dear ",user)

/* TASK 5 */
var lumber = window.prompt("enter the number :")
if (lumber == ""){
    var no = 5
    for(i=1;i<=10;i++){
        document.write( no ," x ", i , "=" + no*i ,"<br>")
}
}else{
    for(i=1;i<=10;i++){
        document.write( lumber ," x ", i , "=" + lumber*i ,"<br>")
}
}

/* TASK 6 */
function mf(){
    var a1 = window.prompt("sub 1")
var a2 = window.prompt("sub 2")
var a3 = window.prompt("sub 3")
var a11 = 100
var a22 = 100
var a33 = 100
var a111 = window.prompt("score 1")
var a222 = window.prompt("score 2")
var a333 = window.prompt("score 3")
var p1 = (a111/a11)*100
var p2 = (a222/a22)*100
var p3 = (a333/a33)*100
var tm = a11+a22+a33
var om = a111+a222+a333
    var tbl = document.getElementById("mytable");
    var row = tbl.insertRow();
    var c1 = row.insertCell();
    var c2 = row.insertCell();
    var c3 = row.insertCell();
    var c4 = row.insertCell();
    c1.innerHTML = a1;
    c2.innerHTML = a11
    c3.innerHTML = a111;
    c4.innerHTML = p1;
    var row2 = tbl.insertRow();
    var c1 = row2.insertCell();
    var c2 = row2.insertCell();
    var c3 = row2.insertCell();
    var c4 = row2.insertCell();
    c1.innerHTML = a2;
    c2.innerHTML = a22
    c3.innerHTML = a222;
    c4.innerHTML = p2;
    var row3 = tbl.insertRow();
    var c1 = row3.insertCell();
    var c2 = row3.insertCell();
    var c3 = row3.insertCell();
    var c4 = row3.insertCell();
    c1.innerHTML = a3;
    c2.innerHTML = a33
    c3.innerHTML = a333;
    c4.innerHTML = p3;
    var row4 = tbl.insertRow();
    var c1 = row4.insertCell();
    var c2 = row4.insertCell();
    var c3 = row4.insertCell();
    var c4 = row4.insertCell();
    c1.innerHTML = ""
    c2.innerHTML = a33 + a11 + a22;
    c3.innerHTML = a333 + a222 + a111;
    c4.innerHTML = (p3 + p1 + p2)/3;

}
/* CHAPTER # 10-11 */
/* TASK 1 */
var city = window.prompt("Choose the city:\n1)Karachi\n2)Lahore")
if (city==='Karachi'){
    document.write("Welcome to the city of lights")
}else if(city==='Lahore'){
    document.write("Welcome to the city of happy hearts")
}

/* TASK 2 */
var gender = window.prompt("your gender please :")
if(gender==="male"){
    document.write("Good Morning Sir")
}else if(gender==="female"){
    document.write("Good Morning Ma'am")
}

/* TASK 3 */
var col = window.prompt("colour of signal: ")
if (col ==='Red'){
    document.write("Must stop")
}else if(col ==='Yellow'){
    document.write("Ready to move")
}else if(col ==='Green'){
    document.write("Move now")
}

/* TASK 4 */

var fuel = window.prompt("remaining fuel in litres:")
if (fuel<0.25){
    document.write("Please refuel the fuel in your car")
}else{
    document.write("go on")
}

/* TASK 5 */
/* a */
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
} 
/* b */
var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
/* c */
var c = 12; if (c++ === 13){ alert("condition 1 is true"); }
if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
/* d */
var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
/* e */
if (true){ alert("True"); } if (false){ alert("False"); } 
/* f */
if("car" < "cat"){ alert("car is smaller than cat"); } 

/* TASK 6 */
var a11a = 100
var a22a = 100
var a33a = 100
var a1111 = window.prompt("score 1")
var a2222 = window.prompt("score 2")
var a3333 = window.prompt("score 3")
var n1 = parseInt(a1111)
var n2 = parseInt(a2222)
var n3 = parseInt(a3333)
var p11 = (a1111/a11a)*100
var p22 = (a2222/a22a)*100
var p33 = (a3333/a33a)*100
var tmm = a11a+a22a+a33a
var omm = a1111+a2222+a3333
var perc = (p11+p22+p33)/3
if (perc>=80){
    document.write("<h1> Marks Sheet </h1>")
    document.write("<br>Total marks : ",a11a+a22a+a33a)
    document.write("<br>Marks obtained : ",n1+n2+n3)
    document.write("<br>Percentage : ",perc,"%")
    document.write("<br>Grade : A-one")
    document.write("<br>Remarks : Excellent")
}else if(perc>=70){
    document.write("<h1> Marks Sheet </h1>")
    document.write("<br>Total marks : ",a11a+a22a+a33a)
    document.write("<br>Marks obtained : ",n1+n2+n3)
    document.write("<br>Percentage : ",perc,"%")
    document.write("<br>Grade : A")
    document.write("<br>Remarks : Good")
}else if(perc>=60){
    document.write("<h1> Marks Sheet </h1>")
    document.write("<br>Total marks : ",a11a+a22a+a33a)
    document.write("<br>Marks obtained : ",n1+n2+n3)
    document.write("<br>Percentage : ",perc,"%")
    document.write("<br>Grade : B")
    document.write("<br>Remarks : You need to improve")
}else if(perc<60){
    document.write("<h1> Marks Sheet </h1>")
    document.write("<br>Total marks : ",a11a+a22a+a33a)
    document.write("<br>Marks obtained : ",n1+n2+n3)
    document.write("<br>Percentage : ",perc,"%")
    document.write("<br>Grade : Fail")
    document.write("<br>Remarks : Sorry")
}

/* TASK 7 */
var min=1; 
var max=10;  
var random = Math.floor(Math.random() * (+max - +min)) + +min;
var guess = window.prompt("guess the number :")
if (guess===random){
    document.write("Bingo!Correct answer")
}else{
    document.write("Close enough to the correct answer")
}
/* TASK 8 */
var numbb = window.prompt("number :")
if (numbb%3===0){
    document.write("number is divisible by 3")
}else{
    document.write("not divisible by 3")
}

/* TASK 9 */
var numbbb = window.prompt("number :")
if (numbbb%2===0){
    document.write("number is even")
}else{
    document.write("number is odd")
}

/* TASK 10 */
var t = window.prompt("temperature :")
if (t>40){
    document.write("It is too hot outside")
}else if(t>30){
    document.write("The weather outside is normal")
}else if(t>20){
    document.write("Todays weather is cool.")
}else if(t>10){
    document.write("OMG!todays weather is so cool.")
}

/* TASK 11 */
var firstnum = window.prompt("first no :")
var f1 = parseInt(firstnum)
var secnum = window.prompt("second no :")
var f2 = parseInt(secnum)
var operator = window.prompt("operation :")
if (operator==='+'){
    document.write(firstnum,operator,secnum,"=",f1 + f2)
}else if (operator==='-'){
    document.write(firstnum,operator,secnum,"=",f1 - f2)
}else if (operator==='*'){
    document.write(firstnum,operator,secnum,"=",f1 * f2)
}else if (operator==='/'){
    document.write(firstnum,operator,secnum,"=",f1 / f2)
}else if (operator==='%'){
    document.write(firstnum,operator,secnum,"=",f1 % f2)
}

/* CHAPTER # 12-13 */
/* TASK 2 */
var l1 = window.prompt("number 1 :")
var l2 = window.prompt("number 2 :")
var l11 = parseInt(l1)
var l22 = parseInt(l2)
if (l11>l22){
    document.write(l11)
}else if(l22>l11){
    document.write(l22)
}else if(l11 === l22){
    document.write("equal")
}

/* TASK 3 */
var numbbbb = window.prompt("number : ")
if (numbbbb>0){
    document.write("number is positive")
}else if (numbbbb<0){
    document.write("number is negative")
}else if (numbbbb===0){
    document.write("number is zero")
}  

/* TASK 4 */
var charc = window.prompt("one character :")
if (charc === "A" || charc === "E" || charc === "I" || charc === "O" || charc === "U"){
    document.write("True")
}else{
    document.write("False")
}

/* TASK 5 */
var cp = "Aasim"
var askp = window.prompt("enter your pasword :")
if (askp==""){
    document.write("Please enter your password")
}
else if (askp==cp){
    document.write("Correct! The password you entered matches the original password")
}else if (askp != cp){
    document.write("Incorrect password")
}

/* TASK 6 */
var greeting;
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
}else {
    greeting = "Good evening"; 
}

/* TASK 7 */
var time = window.prompt("enter the time in HM : ")
if (time>=0000 && time <1200){
    document.write("Good morning")
}else if (time>=1200 && time <1700){
    document.write("Good afternoon")
}else if (time>=1700 && time <2100){
    document.write("Good evening")
}else if (time>=2100 && time <2359){
    document.write("Good night")
} 

/* CHAPTER # 14-16 */
/* TASK 1 */
var stud = []
/* TASK 2 */
var objstyd = {}
/* TASK 3 */
var sa = ['Muhamamd', 'Aasim', 'Yousuf']
/* TASK 4 */
var na = [0,3,1]
/* TASK 5 */
var ba = [true,false]
/* TASK 6 */
var ma = ['Aasim',2,true]
/* TASK 7 */
var qualification = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil.','PhD']
/* TASK 8 */
var names = ['Aasim','anas','arsal']
var scores = [420,300,250]
var percstud = [(420/500)*100,(300/500)*100,(250/500)*100]
document.write('Score of ',names[0],' is ',scores[0],'. Percentage: ',percstud[0],'<br>Score of ',names[1],' is ',scores[1],'. Percentage: ',percstud[1],'<br>Score of ',names[2],' is ',scores[2],'. Percentage: ',percstud[2])

/* TASK 9 */
var col = ['red','green','yellow','white','blue']
document.write(col)
/* a */
var add1 = window.prompt("add one colour to the start")
col.unshift(add1)
document.write("<br>After addition of one colour to the start: ",col)
/* b */
var add2 = window.prompt("add one colour to the end")
col.push(add2)
document.write("<br>After addition of one colour to the end: ",col)
/* c */
col.unshift("purple")
col.unshift("violet")
document.write("<br>After addition of two : ",col)
/* d */
col.shift()
document.write("<br>after deletion from first :",col)
/* e */
col.pop()
document.write("<br>after deletion from last :",col)
/* f */
var ind = window.prompt("Give the index position :")
var indd = window.prompt("Give the color name :")
var i111 = parseInt(ind)
col[i111] = indd
document.write("<br>after adding a colour to desired index :",col)
/* g */
var arr = []
var choose = window.prompt("how many do you want to delete :")
var ch1 = parseInt(choose)
for (var i = 0;i<ch1;i++){
    arr.push(prompt('Enter the indexes you want to delete'))
}
arr1 = arr.join(',')
col.splice(arr1[0],1)
col.splice(arr[1],1)
col.splice(arr[2],1)
col.splice(arr[3],1)
col.splice(arr[4],1)
document.write(col)

/* TASK 10 */
var stsc = [42,49,25,32,16]
document.write("Scores of Students : ",stsc)
stsc.sort()
document.write("<br>Ordered Scores of Students : ",stsc)

/* TASK 11 */

var clist = ['Karachi','Lahore','Islamabad','Peshawar']
var sclist = clist.slice(0,2)
document.write("Cities list:<br>",clist)
document.write("<br>Selected cities list:<br>",sclist)

/* TASK 12 */
var arr = ['This', 'is', 'my','cat']
document.write("Array:<br>",arr)
var barr = arr.join(" ")
document.write("<br>String:<br>",barr)

/* TASK 13 */
var queue = []
queue.push("keyboard")
queue.push("mouse")
queue.push("printer")
queue.push("monitor")
document.write("Devices:<br>",queue)
var i = queue.shift()
document.write("<br>Out:<br>",i)
var ii = queue.shift()
document.write("<br>Out:<br>",ii)
var iii = queue.shift()
document.write("<br>Out:<br>",iii)
var iiii = queue.shift()
document.write("<br>Out:<br>",iiii)

/* TASK 14 */
var stack = []
stack.push("keyboard")
stack.push("mouse")
stack.push("printer")
stack.push("monitor")
document.write("Devices:<br>",stack)
var i1 = stack.pop()
document.write("<br>Out:<br>",i1)
var ii1 = stack.pop()
document.write("<br>Out:<br>",ii1)
var iii1 = stack.pop()
document.write("<br>Out:<br>",iii1)
var iiii1 = stack.pop()
document.write("<br>Out:<br>",iiii1)

/* TASK 15 */
var phone = ['Apple','Samsung','Motorola','Nokia','Haier']
document.write(phone[0],"<br>",phone[1],"<br>",phone[2],"<br>",phone[3],"<br>",phone[4])

/* CHAPTER # 17-20 */
/* TASK 1 */
var darr = []

/* TASK 2 */
darr[0] = [0,1,2,3]
darr[1] = [1,0,1,2]
darr[2] = [2,1,0,1]
document.write(darr)

/* TASK 3 */
for (i = 0;i<=10;i++){
    document.write(i,"<br>")
}

/* TASK 4 */
var chose = window.prompt("number : ")
var clen = window.prompt("length : ")
var ichose = parseInt(chose)
var iclen = parseInt(clen)
document.write("Multiplication table of ",ichose)
document.write("<br>Length ",iclen)
for (i=1;i<=iclen;i++){
    document.write("<br>",chose,"*",i," = ",chose*i,"<br>")
}

/* TASK 5 */
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
for (i=0;i<fruits.length;i++){
    document.write(fruits[i],"<br>")
}
for (i=0;i<fruits.length;i++){
    document.write("Element at index ",i," is ",fruits[i],"<br>")
}

/* TASK 6 */
/* a */
ar  = []
for (i=1;i<=15;i++){
    ar.push(i)
}
ar.join(',')
document.write("Counting:<br>",ar)
/* b */
rr = []
for (i=1;i<=10;i++){
    rr.unshift(i)
}
rr.join(',')
document.write("Reverse counting:<br>",rr)
/* c */
er = []
for (i=0;i<=20;i++){
    if(i%2==0){
        er.push(i)
   }
}
er.join(',')
document.write("Even:<br>",er)
/* d */
or = []
for (i=0;i<=20;i++){
    if(i%2!=0){
        or.push(i)
   }
}
or.join(',')
document.write("Odd:<br>",or)

/* e */

sr = []
for (i=1;i<=20;i++){
    if(i%2==0){
        document.write(i,'k',',')
   }
}

/* TASK 7 */
var search = window.prompt("what do you want to order ?")
var x = hey(search)
function hey(cheez){
A = ['cake', 'applepie', 'cookie', 'chips', 'patties']
//search = window.prompt("what do you want to order ?")
for (i=0;i<A.length;i++){
    if (A[i]===cheez){
        return (A[i]+' is available at index '+i+' in our bakery');
    }
}return ('We are sorry . '+cheez+' is not available in our bakery');

}
document.write(x)

/* TASK 8 */
AA= [24, 53, 78, 91, 12]
largest = 0
for (i=0;i<AA.length;i++){
    if (AA[i]>largest){
        largest = AA[i]
    }
}
document.write("Array items: ",AA)
document.write("<br>The largest number is : ",largest)

/* TASK 9 */
AAA= [24, 53, 78, 91, 12]
smallest = AAA[0]
for (i=0;i<AAA.length;i++){
    if (AAA[i]<smallest){
        smallest = AAA[i]
    }
}
document.write("Array items: ",AAA)
document.write("<br>The smallest number is : ",smallest)

/* TASK 10 */
mul = 5
for (i= 1;i<=20;i++){
    document.write(mul * i,",")
}