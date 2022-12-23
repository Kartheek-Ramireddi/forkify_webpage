let list=document.querySelector("#itemsList");
let tableshow=document.querySelector(".fooditems");
let discost=document.getElementById("hh");
let taxamount=document.getElementById("kk");
let totalamount=document.getElementById("k")
//input Name
let userinput=document.querySelector(".inputvalue1");
//ordersbutton
var ordersbutton=document.querySelector(".orders");
//clickcurrent
var currentscurrents=document.querySelector(".currents")

var removeleftitems=document.querySelector(".ordersremove")
var removeright=document.querySelector(".right");
var removefottertable=document.querySelector(".footertable");
var removeitems=document.querySelector(".foottable")

let discounts=document.querySelector(".kp")
let orderticketstable=document.querySelector(".tablefotterbody");
let orederticks=document.querySelector(".ordertick");

let ordersummer=document.querySelector(".namepricequantity");
var orderNumber=document.querySelector(".count");
let emptyArray=[];
//let arrayEmpty=[];


let amount=0;
let discount;
let total=0;




let showtable;
let tableBody;


ordersbutton.addEventListener('click',ordertable);
ordersbutton.addEventListener('click',ordertable);
ordersbutton.addEventListener('click',ordertable);







//let discounts=document.querySelector(".kp")
//get json data and print UI
function myfunction(){

  //  removeleftitems.style.display="block";

    fetch(`http://localhost:3000/posts`)
    .then (response=>response.json())
    .then(menu=>{
       // list.innerHTML="";
        for(let i in menu){
            list.innerHTML+=`<button class="foodItems" onclick="tablefunction(${i})">
                
                
                
                <h1>${menu[i].name}</h1>
                <h4>${menu[i].price}</h4></button>`
        }
       
       // getfunction()
    })
}
myfunction();

// var currentbutton=document.querySelector(".currentbtn");
//  currentbutton.addEventListener('click',getfunction);

// async function getfunction(){
//     var response=await fetch(`http://localhost:3000/posts`);
//      jsonDataitems=await response .json();
//     console.log(jsonDataitems)
// }
// getfunction();


//discount&&tax&&total

async function tablefunction(i){
   
    showtable=await fetch(`http://localhost:3000/posts`);
     tableBody=await showtable.json();
    console.log(tableBody);
        tableshow.innerHTML+=`<tr>
             <td>${tableBody[i].name}</td>
             <td><input type="text"class="inputquality" onclick="myfunction2(${i})"></input></td>
             <td>${tableBody[i].price}</td>
        </tr>`;
        emptyArray.push({
            "name":tableBody[i].name,
            "price":tableBody[i].price,
            "quantity":1,
        });
        console.log(emptyArray);

    var amount=parseInt(`${tableBody[i].price}`);
    console.log(typeof(amount));
    total+=amount;
    console.log(total);

   dis=Math.round(total*0.03);
        discost.innerHTML=dis;

     total=total-dis;
    console.log(total);
  let tax=Math.round(total*4/100);
  console.log(tax);
     total+=tax;
    taxamount.innerHTML=tax;
    totalamount.innerHTML=total;



    console.log()
    
    
}
tablefunction()

//var x;

// function myfunction2(i){
   
//    // table();
// }

// function table(){
//     sum=0;
//     for(let i in emptyArray){
//         emptyArray.innerHTML+=`<tr>
//         <td class="name-item">${emptyArray[i].name}</td>
//         <td><input type="text"value="${emptyArray[i].quantity}"</td>
//         <td class="cost-item">${emptyArray[i].price * emptyArray[i].quantity}</td>
//         </tr>`;
//         sum+=emptyArray[i].price * emptyArray[i].quantity; 
// }


async function contentlist(){


  let response = await fetch('http://localhost:3000/items',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
          "customername":userinput.value,
          "discountamount":dis,
          "billamount": total,
          "ordersitems":emptyArray

        })

    });
   console.log(response);
}
function ordertable(){
    alert("hii");
    removeleftitems.style.display="none";
    removeright.style.display="none";
    removefottertable.style.display="block";
 
  
}
orederticks.addEventListener('click',gettable);
let usertable;
 async function gettable(){
    let response1=await fetch('http://localhost:3000/items');
     usertable=await response1.json();
    console.log(usertable);
   for(let i=0;i<usertable.length;i++){
    orderticketstable.innerHTML+=`<tr>
       <td>${usertable[i].customername}</td>
       <td>${usertable[i].discountamount}</td>
       <td>${usertable[i].billamount}</td>
       <td><button class="view" onclick="viewsummer(${i})">view summery</button></td>
    </tr>`
   }
   order1();
 }
 gettable();


 //viewsummer
 async function viewsummer(j){
    ordersummer.innerHTML="";
    console.log(usertable[j]);

    
    ordersummer.innerHTML+=`<td> CUSTOMERNAME : ${usertable[j].customername}</td><br></br>`
    ordersummer.innerHTML+=`<td> BILLAMOUNT : ${usertable[j].billamount}</td><br></br>`
    ordersummer.innerHTML+=`<td> discount : ${usertable[j].discountamount}</td><br></br>`

    for(let k=0;k<usertable[j].ordersitems.length;k++){
        ordersummer.innerHTML+=
        `
        <td>ORDERITEMS : ${usertable[j].ordersitems[k].name}</td><br>
     
       `
   }

   orderNumber.addEventListener("click",order1);
async function order1(){
    showtable=await fetch(`http://localhost:3000/posts`);
    tableBody=await showtable.json();

    orderNumber.innerHTML+=tableBody.length;
}



order1();





















 }








































// async function resturent(){
//     let response=await fetch('http://localhost:3000/posts ',{
//        method:"POST",
//        headers:{
//         "content-type":"application/json"
//        },
//        body:JSON.stringify({
//         "name":"ginger eggrice ",
//         "price":"160",
//        })
//     });
//     var jsonData=await response.json();
//     console.log(jsonData);
// }
// resturent();