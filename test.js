function reverseSting(str){
    return str.split("").reverse().join("")
}

let val=reverseSting("suppose Today! I am surprised");

console.log(val)




console.log("Before")

function fn(){
    
    console.log("function called")
}
setTimeout(fn,1000)
setTimeout(fn,2000)
console.log("after")





console.log("Before");

                const cb2 = () => {
                    let a=1
                        console.log("Set timeout 1");
                        while(a<10){
                            console.log("first")
                            a++
                        }
                }

const cb1 = () => console.log("hello");

setTimeout(cb2, 1000)

setTimeout(cb1, 2000)

console.log("After");




console.log("Before");  ///sync

const cb2 = () => {
        console.log("Set timeout 1");
        let timeInFuture = Date.now() + 5000;
        while(Date.now() < timeInFuture){

        }
}

const cb1 = () => console.log("hello");

setTimeout(cb2, 1000) //---->1queue

setTimeout(cb1, 2000) //-->2queue

console.log("After");//sync 







// Higher-Order Function example
const withLogger = (func) => {
    return (...args) => {
      console.log(`Calling function with arguments: ${args}`);
      const result = func(...args);
      console.log(`Function returned: ${result}`);
      return result;
    };
  };
  
  // Using the Higher-Order Function
  const add = (a, b) => a + b;
  const loggedAdd = withLogger(add);
  loggedAdd(2, 3);
  


  console.log(y);
var y = 10;


var y = undefined;
  console.log(y);
 y=10;


 function akan(a,b,param1){ //callback function
  console.log(a,b)
  console.log("My name is",param1)
 }
 
 
 function fullName(a,b,akan){
    a=a+b
    b=a-b
    a=a-b

    akan(a,b,"akanksha") //callback
 }


 fullName(2,5,akan)

// reverse of a String
// call apply bind

let str="My name is akanksha" //ahsknaka si eman yM
console.log(str.split("").reverse().join(""))
for(let i=0;i<length;i++){
  if()
  let temp
}

useMemo((productId)=>{
    //make an api call --productId
    //return the result
},[productId])

[
  --productId+
]







