// pizzza order
document.getElementById("btn").addEventListener("click", PlaceOrder);

function PlaceOrder() {
//input
let size = prompt("Enter size of pizza (med,sml,lrg)");
let topping1 = prompt("enter first topping");
let topping2 = prompt("enter second topping"); 
let topping3 = prompt("enter third topping");
//procss
let msg = `your ${size} pizza with ${topping1} and ${topping2} lastly ${topping3} will be sent to your ip shortly`;

//output
alert(msg);
}

document.getElementById("btn1").addEventListener ("click", idiom1);

function idiom1() {
    alert("bullet")
}


document.getElementById("btn1").addEventListener ("click", idiom2);

function idiom2() {
    alert("having fun")
}


document.getElementById("btn1").addEventListener ("click", idiom3);

function idiom3() {
    alert("matters worse")
}


document.getElementById("btn1").addEventListener ("click", idiom4);

function idiom4() {
    alert("good as mine")
}



document.getElementById("btn1").addEventListener ("click", idiom5);

function idiom5() {
    alert("no gain")
}