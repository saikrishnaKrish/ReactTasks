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