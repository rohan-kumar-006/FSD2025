const parent = document.getElementById('parent')
// console.log(parent)

const root=ReactDOM.createRoot(parent)
const h2=React.createElement("h2",{style:{color:"blue", backgroundColor:"pink"}},"ABES Enginnering College")
const li1=React.createElement("li",{},"Mango")
const li2=React.createElement("li",{},"Appale")
const li3=React.createElement("li",{},"Guava")

const ul=React.createElement("ul",{},[li1,li2,li3])

const h21=<h2>Hello</h2>
root.render(h21)