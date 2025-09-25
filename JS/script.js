// const info =(str="hill")=>{
//     console.log("hello",str)
// }

// info("jas")

// ((str="hill")=>{
//     console.log("hello",str)
// })();

// setTimeout(() => {
// console.log("first")
// }, 1000);

// function selectLanguage(lang="Python"){
//     let data;
//     if(lang=="java"){
//         function javaCompiler(){
//             return "java compiler"
//         }
//         data=javaCompiler()
//     }
//     else if(lang=="cpp"){
//         function cppCompiler(){
//             return "cpp compiler"
//         }
//         data=cppCompiler()
//     }
//     else if(lang=="Python"){
//         function pythonCompiler(){
//             return "Python compiler"
//         }
//         data=pythonCompiler()
//     }else{
//         data="language not supported"
//     }
//     return  data
// }
// console.log(selectLanguage())

// const button=document.getElementById('btn')
// console.log(button)

// function longData(){
//     console.log("start")
//     for(i=0;i<1000000;i++){
//         console.log(i)
//     }
// }

// console.log("end")

// button.addEventListener('click',longData)
// function msg(){
//     console.log("Welcom to js")
// }
// console.log("start")
// setTimeout(msg,1000);
// console.log("end")
// function msg(arg)
// {
// console.log("Hello",arg)
// }
// function msgHandler(arg,clbk){
//     clbk(arg)
// }

// const arr=["rohan","rajveer"]

// arr.forEach(element=>{
//     msgHandler(element,msg)
// })

// const myPromise= new Promise((resolved,reject)=>{
//     const password="safasadassd"
//     if(password.length>8){
//         resolved("Password is accepted")
//     }else{
//         reject("Password is rejeceted")

//     }
// })

// myPromise.then((msg)=>{
//     console.log(msg)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("msg")
// })
// console.log(myPromise)


const button=document.getElementById('btn')


async function fetchData(){
    console.log("entered")
    const response=await fetch("https://fakestoreapi.com/products")
    const jsonData=await response.json()
    console.log(jsonData)

    const div=document.getElementById('hero')
    const img=document.createElement('img')
    const id=document.createElement('span')
    const title=document.createElement('span')
    const price=document.createElement('span')
    const description=document.createElement('span')

    img.src=jsonData[0].image
    img.width=100
    id.textContent=jsonData[0].id
    title.textContent=jsonData[0].title
    price.textContent=jsonData[0].price
    description.textContent=jsonData[0].description
    div.append(img)
    div.append(id)
    div.append(price)
    div.append(description)
    
    div.style.display="flex"
    div.style.justifyContent="center"
    div.style.alignItems="center"
    
}
button.addEventListener("click",fetchData)