// const div=document.getElementsByTagName('div')
// console.log(div)
// div[0].innerText="Hello World"
// div[0].style.color="blue"

const container=document.getElementsByClassName('container')
// container[0].innerHTML="<h2>Hello Bhai</h2>"
// console.log(container)


const h1=document.createElement('h1')
h1.innerHTML="CSE"
h1.style.color="brown"
container[0].appendChild(h1)


const img = document.createElement("img")
img.src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/image8-2.jpg"
img.height="200"

container[0].appendChild(img)

const button = document.getElementById("btn")
// console.log(button)
function displayData(){
    document.getElementById('disp').innerHTML="<h2>Data is Loading....</h2>"
    setTimeout(()=>{
        console.log("Hiii.. How are you")
        document.getElementById('disp').innerHTML=""
    },1000)
}

button.addEventListener('click',displayData)