function customRender(ReactElement,container){

    // const domElement = document.createElement(ReactElement.type)
    // domElement.innerHTML =ReactElement.Children
    // domElement.setAttribute('href',ReactElement.props.href)
    // domElement.setAttribute('target',ReactElement.props.target)

    // container.appendChild(domElement)
    
    const domElement=document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.Children
    for (const prop in ReactElement.props) {
        if(prop === 'Children') continue;
        domElement.setAttributes(prop,ReactElement.props[prop])
        
    }
    container.appendChild(domElement)
}

const ReactElement = {
    type:'a',
    props:{
        href:'htpps://Google.com',
        target:'_blank'
    },
    Children:"click me to visit google"
}

const mainContainer=document.querySelector('#root')

customRender(ReactElement,mainContainer)

