
function customRender(reactElement,container){
    // const DomElement =document.createElement(reactElement.type)
    // DomElement.innerHTML=reactElement.children
    // DomElement.setAttribute('href',reactElement.props.href)
    // DomElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(DomElement)
    const DomElement = document.createElement(reactElement.type);
    DomElement.innerHTML=reactElement.children
    for(const pro in reactElement.props){
        DomElement.setAttribute(pro,reactElement.props[pro])
        
}container.appendChild(DomElement);
}
const reactElement ={
    "type": "a",
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    children:'Click me to visit google'
}
const mainContainer= document.querySelector('#root')

customRender(reactElement,mainContainer)