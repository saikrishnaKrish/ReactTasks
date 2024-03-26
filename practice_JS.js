// function reverseSting(str){
//     return str.split("").reverse().join("")
// }


// let val=reverseSting("suppose Today! I am surprised");

// console.log(val)




// console.log("Before")

// function fn(){
    
//     console.log("function called")
// }
// setTimeout(fn,1000)
// setTimeout(fn,2000)
// console.log("after")





// console.log("Before");

//                 const cb2 = () => {
//                     let a=1
//                         console.log("Set timeout 1");
//                         while(a<10){
//                             console.log("first")
//                             a++
//                         }
//                 }

// const cb1 = () => console.log("hello");

// setTimeout(cb2, 1000)

// setTimeout(cb1, 2000)

// console.log("After");




// console.log("Before");  ///sync

// const cb2 = () => {
//         console.log("Set timeout 1");
//         let timeInFuture = Date.now() + 5000;
//         while(Date.now() < timeInFuture){

//         }
// }

// const cb1 = () => console.log("hello");

// setTimeout(cb2, 1000) //---->1queue

// setTimeout(cb1, 2000) //-->2queue

// console.log("After");//sync 







// // Higher-Order Function example
// const withLogger = (func) => {
//     return (...args) => {
//       console.log(`Calling function with arguments: ${args}`);
//       const result = func(...args);
//       console.log(`Function returned: ${result}`);
//       return result;
//     };
//   };
  
//   // Using the Higher-Order Function
//   const add = (a, b) => a + b;
//   const loggedAdd = withLogger(add);
//   loggedAdd(2, 3);
  


//   console.log(y);
// var y = 10;


// var y = undefined;
//   console.log(y);
//  y=10;


//  function akan(a,b,param1){ //callback function
//   console.log(a,b)
//   console.log("My name is",param1)
//  }
 
 
//  function fullName(a,b,akan){
//     a=a+b
//     b=a-b
//     a=a-b

//     akan(a,b,"akanksha") //callback
//  }


//  fullName(2,5,akan)

// // reverse of a String
// // call apply bind

// let str="My name is akanksha" //ahsknaka si eman yM
// console.log(str.split("").reverse().join(""))
// for(let i=0;i<length;i++){
//   if()
//   let temp
// }

// useMemo((productId)=>{
//     //make an api call --productId
//     //return the result
// },[productId])

// [
//   --productId+
// ]




// let obj=[
//   {
//       "id": "3a7fd76d-5e49-413b-93c2-78ba261ebcb5",
//       "task": "yassd ",
//       "status": "completed"
//   },
//   {
//       "id": "890bef52-7d4b-4427-a7aa-ffae0bb44240",
//       "task": "fmelkfeke",
//       "status": "active"
//   },
//   {
//       "id": "83af689f-aa71-47fd-85b1-79d1c15b2428",
//       "task": "leflkek",
//       "status": "active"
//   }
// ]

// let cid="83af689f-aa71-47fd-85b1-79d1c15b2428"
// let cObj=obj.find((t)=>t.id==cid)
// console.log(cObj)
// let res={...cObj,status:"completed"}
// console.log(res)

// let o1=[...cObj,res]
// console.log(o1)




// const debouncefn = (fn,delay)=>{
//   let timeoutId;
//   return function(...args){
//     const context=this;
//     clearTimeout(timeoutId)
//     timeoutId=setTimeout(()=>{
//         fn.apply(context,args)
//       },delay)
//   }
// }

// const debounceSearchq =  debouncefn(searchFn,3000);
// <input type="text" onChange={debounceSearchq}/>









// // batch timings--
// // how many working days in a week--
// // pay--




// const throttle = (func, delay) => {
//   let lastCallTime = 0;

//   return function(...args) {
//     const context = this;
//     const now = new Date().getTime();

//     if (now - lastCallTime >= delay) {
//       func.apply(context, args);
//       lastCallTime = now;
//     }
//   };
// };

// // Example usage:
// const throttleScroll = throttle(scrollFunction, 300);

// // Attach throttleScroll to window's scroll event
// window.addEventListener('scroll', throttleScroll);



// const debounce = (func, delay) => {
//   let timeoutId;
  
//   return function(...args) {
//     const context = this;
    
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(context, args);
//     }, delay);
//   };
// };

// // Example usage:
// const debounceSearch = debounce(searchFunction, 300);

// // Attach debounceSearch to an input field's onChange event
// <input type="text" onChange={debounceSearch} />




