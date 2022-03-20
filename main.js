alert("Welcome to my JScalculation")

let b1 = prompt("total bill");
let f1 = prompt("number of friend");
let p1 = prompt("percentage");

let bill = parseInt(b1);
let friend = parseInt(f1);
let percent = parseInt(p1);

let totalpay = bill + (percent / 100 * bill)
let share = totalpay / friend

console.log(totalpay);
console.log(share);

num.innerHTML = b1;
frnd.innerHTML = f1;
pct.innerHTML = p1;
pay.innerHTML = share;


alert("Discount purchase calculation")

let cus = prompt("purchase");
let pur1 = parseInt(cus);

let userpur1 = 2000
let userpur2 = 5000

let tenDC = (10 / 100 * pur1)
let twentyDC = (20 / 100 * pur1)
let thirtyDC = (30 / 100 * pur1)
let newDC1 = (pur1 - tenDC)
let newDC2 = (pur1 - twentyDC)
let newDC3 = (pur1 - thirtyDC)


if (pur1 < userpur1) {
    console.log(pur1)
    console.log("you have a 10% discount")
    console.log(tenDC)
    console.log(newDC1)
    aop.innerHTML= pur1; 
    dis1.innerHTML =tenDC 
    dis2.innerHTML =newDC1 

   
    
} 
else if ((pur1 > userpur1) && (pur1 < userpur2)) {
    console.log(pur1)
    console.log("you have 20% discount")
    console.log(twentyDC)
    console.log(newDC2)
    aop.innerHTML= pur1;  
    dis1.innerHTML =twentyDC
    dis2.innerHTML =newDC2 



}
else if (pur1 >= userpur2) {
    console.log(pur1)
    console.log("you have 30% dicount")
    console.log(thirtyDC)
    console.log(newDC3)
    aop.innerHTML= pur1; 
    dis1.innerHTML =thirtyDC
    dis2.innerHTML =newDC3 

}
