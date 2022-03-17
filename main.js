alert ("Welcome to my JScalculation")

let b1 = prompt("total bill");
let f1 = prompt("number of friend");
let p1 = prompt("percentage");

 let bill = parseInt(b1);
 let friend = parseInt(f1);
 let percent = parseInt(p1);

 let totalpay = bill + (percent/100 * bill)
 let share = totalpay/friend

 console.log(totalpay);
 console.log(share);

num.innerHTML= b1;
frnd.innerHTML= f1;
pct.innerHTML= p1;



// const data = {
//     "total" : {
//         "bill": b1,
//         "friend": f1,
//          "percentage": p1,
//     }

// }
// console.log(data);
