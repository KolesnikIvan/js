// JavaScript source code
function collapseBlock() {
    //let blocks = document.getElementsByClassName('accordion-button collapsed')
    let blocks = document.querySelectorAll('[type=button]')
    for (let bl of blocks){
        bl.addEventListener('click', onAccordionItemClick)
    }
}

function onAccordionItemClick(e) {
    console.log('accordion handler is entered')
    console.log(e.target.parentNode.parentNode.children[1])
    let bl = e.target.parentNode.parentNode.children[1]
    //if (bl.style.height == '') {
    //    bl.style.height = '50'
    //} else {
    //    bl.style.height = ''
    //}
    if (bl.style.display == 'none') {
        bl.style.display = 'inline-block'
    } else {
        bl.style.display = 'none'
    }
    console.log(bl.style.height)
}
window.addEventListener('load', collapseBlock)