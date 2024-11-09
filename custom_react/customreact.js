function createElement(tag,toappend) {
    const toCreatEle= document.createElement(tag.type)
    toCreatEle.innerHTML = tag.content
    toCreatEle.setAttribute('href', tag.prop.href)
    toCreatEle.setAttribute('target', tag.prop.target)
    toappend.appendChild(toCreatEle)
}

const reactElement = {
    type: 'a',
    prop: {
        href: 'https://google.com',
        target: '_blank'
    },
    content: 'Click here to open'
}
const root = document.querySelector('#root')

createElement(reactElement,root)

