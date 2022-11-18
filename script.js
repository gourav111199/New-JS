// const check = document.querySelector("#check")
// const ans  = (a,b) =>{
//     return a + b
// }
// const c = ans(5,11)
// check.innerHTML=c
// let show = document.querySelector(".show")
// show.classList.toggle("show")


// let show = document.querySelector(".show")
// let button = document.querySelector("button")
// button.addEventListener("click",()=>{
//     if( show.style.background==="green"){
//         show.style.background="red"
//     }else if( show.style.background==="red"){
//         show.style.background="yellow"
//     }else if( show.style.background==="yellow"){
//         show.style.background="green"
//     }else{
//         show.style.background="green"
//     }
// })

// const change = () =>{
//     const bucket = ["gourav","ayush","sachin"]
//     return new Promise((Resolve,reject)=>{
//         if(bucket.includes('gourav')&& bucket.includes('sachin')){
//             Resolve("right")
//         }else{
//             reject("erro")
//         }
//     })
// }

// change().then((e)=>{
//     console.log("eeeeee",e)
// }).catch((b)=>{
//     console.log("error",b)
// })



// let age = prompt("tisisij")

// if(age>10 && age<20){
//     alert("You age is between 10 and 20")
// }else{
//     alert("your age is other")
// }

// const check = document.getElementById("check")
// const ans = setTimeout(() => {
//     alert("this is alert")
//     check.innerHTML="this is timeout"
// },3000);
// const a = prompt("do you want to run")
// if(a=="b"){
//     clearTimeout(ans)
//     console.log("its' claered")
// }


// ################# Promise ##########################


// let a = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("value1")
//     }, 1000);
//   })
//   let b =  new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       // resolve("value1")
//       reject("Reject")
//     },2000);
//   })
//   let c = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("value1")
//     }, 3000);
//   })

//   let ans = Promise.allSettled([a,b,c])
//   ans.then((value)=>{
//       console.log(value)
//   })




// const show =  async () => {
// let a =
//     setTimeout(() => {
//       console.log("value1")
//     }, 1000);
// // await new Promise((r)=>{setTimeout(r,5000)})
//   let  b =  await setTimeout(() => {
//     console.log("value2")
//     // reject("Reject")
//   }, 1000);

 
//   let c = 
//     setTimeout(() => {
//       console.log("value3")
//     }, 2000);
//     return [a,b,c]
// }
//   let ans = show().allSettled([a,b,c])
//   ans.then((value)=>{
//       console.log(value)
//   })

  // let ans = show()
  // ans.then((value)=>{
  //     console.log(value)
  // })
  // .catch(()=>{
  //   console.log("thisiss rej")
  // })
  // let age = prompt("what is your age")
  // const ans = ()=>{
  //   if(age<=18){
  //     alert("you cannot entered")
  //     let d = new Date()
  //     setInterval(()=>{
  //       console.log(d.toLocaleTimeString())
  //     },1000)
     
  //   }else{
  //     alert("you can entered")
  //   }
  // }
  // ans(2)

// let first = document.getElementById("first")

// const b = async(one,two)=>{
//   let first = document.getElementById(one)
//   i = 0
//   // first.innerHTML=two
// while(i!==100){
//   let run = Math.floor(Math.random()*5)
//   i = run+ i
//   if(i>=100){
//     i=100
//   }
//   await new Promise(r=> setTimeout(r,100))
//   first.innerHTML=`${one} ${two} ${i}`
//   // console.log("thi sis one",one,two)
// }
// }

// const c = async ()=>{
//   await new Promise(r=> setTimeout(r,1000))
//   await b("first","Chouhan")
//   await b("second","Chouhan")
//   await b("third","Chouhan")
  
// }
// c()



//   const gourav = async()=>{
//     let delhi = new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         resolve("27")
//       },10000);
//     })
//     let indore = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("30")  
//       }, 1000);
//     })
      //  delhi.then(alert)
      // indore.then(alert)

//      let one = await delhi
//      console.log("fetching delhi weather")
//      let two = await indore
//      console.log("fetching indore weather")
//      return [one,two]
//   }
//  let three =  gourav()
//  console.log(three)

//   gourav().then((check)=>{
//     console.log(check)
//   })
  



// const check = document.getElementById("check")
// let first = "https://jsonplaceholder.typicode.com/posts"
//   const api = async()=>{
//     try{
//       const res = await fetch(first)
//       const rej = await res.json()
//       return rej
//     }
//     catch(error){
//       document.write("THIS IS ERROR")
//     }
//     finally{
//         check.innerHTML="THiSI FINALy"
//     }
//   }
//    api().then((show)=>{

//       console.log(show)
//       // for (const key in show) {
//       //      document.write(`${show[key].title}, id = ${show[key].id}   </br>`)       
//       //   }        
//     })

    // api().then((show)=>{
    //   console.log(show)
    // })
    // .catch((show)=>{
    //   console.log("THI IS ERROR")
    // })




//  const li = document.createElement("li")
//  li.textContent= "thisis is li"
//  console.log(li)
//  document.body.append(li)


 




//   const loadScript = async (src)=>{
//     return new Promise((resolve,reject)=>{
//       let script = document.createElement("script")
//       script.src = src
//       script.onload = () => {
//         resolve(src)
//       }
//       document.head.append(script)
//     })
//   }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// .then((value)=>{
//   console.log(value)
// })
// .catch((reject)=>{
//   console.log("this is")
// })

  // const main2 = async ()=>{
  //   let a =  await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
  //   console.log(a)
  // }
  // main2()









  // const func = async (element,text)=>{
  //   let first = document.getElementById(element)
  //   // first.innerHTML = text
  //   let i = 0
  //   while(i !== 100){
  //       let ran = Math.floor(Math.random()*5)
  //       i = i+ran
  //       if(i>=100){
  //         i = 100
  //       }
  //      await new Promise(r=> setTimeout(r,100))
  //     first.innerHTML = `${text} ${i}%`
      
  //     //  await new Promise(()=>{i  
  //     //   setTimeout((e) => {
  //     //     return e
  //     //   }, 100);
  //     // })
  //     // first.innerHTML = `${text} ${i}%`
  //   }
  // }

  // const ans = async ()=>{
  //   // let first = document.getElementById("first")
  //   await new Promise(r=> setTimeout(r,1000))
  //   await func("first","Installing hacking...")
  //   await func("second","finding you data...")
  //   await func("third","hacking gourav...")
  //   document.getElementById("fourth").innerHTML="Gourav hacked"
  // }

  // ans()



  // let name = prompt("what is your name")
  // let age = prompt("What is you age")
 
  // localStorage.setItem(name,age)
  // console.log(`i am ${name} and i am ${age} year old`)
  // if(name==0){
  //   localStorage.clear()
  // }



  // let check = document.querySelector(".value")
  // let url = "https://jsonplaceholder.typicode.com/posts"
  // const response = fetch(url)
  // response.then((value)=>{
  //     return value.json()
  // }).then((data)=>{
  //   console.log(data)
  //   let show = ""
  //   for (key in data) {
  //     console.log(data[key])
  //       show += `
  //       <div class="card " style="width: 16rem;">
  //   <img width="100px" height:"100px" src="https://images.unsplash.com/photo-1662581871625-7dbd3ac1ca18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" class="card-img-top" alt="...">
  //   <div class="card-body">
  //     <h5 class="card-title">${data[key].title}</h5>
  //     <p class="card-text">${data[key].body}</p>
  //     <a href=${data[key].url}" class="btn btn-primary">Go somewhere</a>
  //   </div>`
  //     }
  //  check.innerHTML = check.innerHTML+show
  // })



  
//   let arr = [
//     "Installing hacking...",
//     "find data...",
//     "hacking Gourav...",
//     "hacked succesefuly..."
//   ]

// const hack = async (time,alement,value)=>{
// let first = document.getElementById(alement);
// // first.innerHTML=arr[value]
// let i = 0
// while(i!=100){
//   let ran = Math.floor(Math.random()*5)
//         i = i + ran
//         if(i>=100){
//           i = 100
//   }
// }
// return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     if(first){
//       first.innerHTML = arr[value] + i
//       resolve()
//     }else{
//       reject()
//     }
//   }, time);
// })
// }


// hack(1000,"first",0)
// .then(()=>{
//   return hack(1000,"second",1)
// })
// .then(()=>{
//   return hack(1000,"third",2)
// })
// .then(()=>{
//   hack(1000,"fourth",3)
// })



// const hack = async (alement,value)=>{
// let first = document.getElementById(alement);
// // first.innerHTML=arr[value]
// let i = 0
//   while(i!=100){
//     let ran = Math.floor(Math.random()*5)
//           i = i + ran
//           if(i>=100){
//             i = 100
//     }
//   }
//   await new Promise((e)=>{setTimeout(e,1000)})
//    first.innerHTML=`${arr[value]} ${i}%`

// }

// const ans = async ()=>{
//     // await new Promise(r=> setTimeout(r,1000))
//     await hack("first",0)
//     await hack("second",1)
//     await hack("third",2)
//     await hack("fourth",3)
// }
// ans()

// class show{
//   constructor(name,age,city){
//   this.name=name
// this.age= age
// this.city= city
// }
//   detail(){
//     console.log(`${this.name} ${this.age}`)
//   }
// }

// class check extends show{
//   // super(name,age,city)

//   add(pin,address){
//     console.log(`${pin} ${address}`)
//   }
// }

// const gourav = new check("GOruav",22,"kukshi")
// gourav.detail()
// gourav.add(454331,"dhar")



// click.addEventListener("click",(e)=>{
//   let insert = document.querySelector("#insert").value
//   // let click = document.querySelector("#click")
//   let count = document.querySelector("#count")
  
//   e.preventDefault()
// //  console.log("todo",JSON.stringify[value])

//   count.innerHTML += [`<h1>${insert}
//   <Button id="clear">delete</Button>
//   </h1>`]

//   insert.value = " "
// })
// let clear = document.querySelector("#clear")
// clear.addEventListener("click",()=>{
//     count.innerHTML = ""
// })


// let a = ()=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(321)
//       // console.log(123)
//     }, 3000);
//   })
// }

// (async()=>{
//   let b =  await a()
//   console.log(b)
//   let c = await a()
//   console.log(c)
// })()
// // f()



// ################ destructuring ###################### 
let arr = [2,5,3,5]
let [one,two,...three] = arr
console.log(one,two,three)

//  let ans = arr.map((a,b)=>{
//     return a
// })

// console.log(ans)
