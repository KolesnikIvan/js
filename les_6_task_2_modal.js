// JavaScript source code
function showModal() {
    console.log('function showModal is entered')
    let md = document.getElementById('modalWindow')
    md.style.visibility = 'visible'
    md.style.backgroundColor = 'white'
    md.style.display = 'inline-block'
}
function createModalWindow() {
    var mWindow = document.createElement('div')
    mWindow.setAttribute('id', 'modalWindow')
    mWindow.setAttribute('style',
        'position: fixed; top: 10%; bottom: 90%; left: 10%; right:90%;' +
        'border:1px solid black;' +
        'visibility: hidden;' + 
        'backgroundColor: white;' + 
        'display: inline-block;')
    mWindow.setAttribute('border', 1)
    mWindow.setAttribute('width', '80%')
    var bigPic = document.createElement('div')
    bigPic.setAttribute('id', 'bigPic')
    bigPic.innerHTML = '<img src="box1.jpg" height="300" border="1"/>'
    mWindow.append(bigPic)

    var picRibbon = document.createElement('div')
    picRibbon.setAttribute('style', 'diplay: table;')//flex; border: 1px solid black;')
    var bLeft = document.createElement('div')
    bLeft.setAttribute('style', 'display: table-cell;')//inline-block;')

    var buttonLeft = document.createElement('button')
    buttonLeft.setAttribute('id', 'leftButton')
    buttonLeft.innerText = "<"
    bLeft.append(buttonLeft)

    var pic1 = document.createElement('div')
    pic1.setAttribute('id', 'pic1')
    pic1.setAttribute('style', 'display: table-cell;')//inline-block;')
    pic1.innerHTML = '<img src="box1.jpg" width="50" border="1"/>'

    var pic2 = document.createElement('div')
    pic2.setAttribute('id', 'pic2')
    pic2.setAttribute('style', 'display: table-cell;')//inline-block;')
    pic2.innerHTML = '<img src="box2.jpg" width="50"/>'// border="1"/>'

    var bRight = document.createElement('div')
    bRight.setAttribute('style', 'display: table-cell;')//inline-block;')
    var buttonRight = document.createElement('button')
    buttonRight.setAttribute('id', 'rightButton')
    buttonRight.innerText = '>'
    bRight.append(buttonRight)
    picRibbon.append(bLeft, pic1, pic2, bRight)
    mWindow.append(picRibbon)

    let buttonX = document.createElement('button')
    buttonX.setAttribute('id', 'buttonX')
    buttonX.innerText = 'Close modal window'
    buttonX.addEventListener('click', closeModalWindow)
    mWindow.append(buttonX)
    document.body.append(mWindow)
    //return mWindow
}
function closeModalWindow() {
    console.log('close modal handler is entered')
    //console.log(mWindow)
    document.getElementById('modalWindow').style.visibility = 'hidden'
}

function ButtonClick(e) {
    //фукнция обработки щелчка по кнопке перехода между картинками
    //кнопок две: вправо и влево
    let borderedPicSource = document.getElementById('pic1').children[0].getAttribute('src')
    let picNumber = borderedPicSource.substring(3, borderedPicSource.indexOf('.', 0))

    console.log('begin')
    console.log(document.getElementById('pic1').children[0].getAttribute('src'))
    console.log(document.getElementById('pic2').children[0].getAttribute('src'))

    if ((e.target.id.includes('left') && picNumber == 1) || (e.target.id.includes('right') && picNumber == 2)) {
        //console.log('boundary')
        document.getElementById('pic1').children[0].setAttribute('src', `box${3}.jpg`)
        document.getElementById('pic2').children[0].setAttribute('src', `box${1}.jpg`)
    } else if (picNumber == 3) {
        if (e.target.id.includes('left')) {
            document.getElementById('pic1').children[0].setAttribute('src', `box${2}.jpg`)
            document.getElementById('pic2').children[0].setAttribute('src', `box${3}.jpg`)
        } else if (e.target.id.includes('right')) {
            document.getElementById('pic1').children[0].setAttribute('src', `box${1}.jpg`)
            document.getElementById('pic2').children[0].setAttribute('src', `box${2}.jpg`)
        }
    } else {
        if (e.target.id.includes('left')) {
            document.getElementById('pic1').children[0].setAttribute('src', `box${+picNumber - 1}.jpg`)
            document.getElementById('pic2').children[0].setAttribute('src', `box${+picNumber - 0}.jpg`)
        } else if (e.target.id.includes('right')) {
            document.getElementById('pic1').children[0].setAttribute('src', `box${+picNumber + 1}.jpg`)
            document.getElementById('pic2').children[0].setAttribute('src', `box${+picNumber + 2}.jpg`)
        }
    }
    console.log('end')
    console.log(document.getElementById('pic1').children[0].getAttribute('src'))
    console.log(document.getElementById('pic2').children[0].getAttribute('src'))

    let bigPic = document.getElementById('bigPic')
    let source = document.getElementById('pic1').children[0].getAttribute('src')
    console.log(`1st icon source is ${source}`)
    bigPic.innerHTML = `<img src="${source}" height="300" border="1"/>`
}

function init() {
    let btns = document.querySelectorAll('[id*=Button]')
    for (bt of btns) {
        bt.addEventListener('click', ButtonClick)
    }
    console.log('button clicks handlers are added')
    //buttonX.addEventListener
}
//document.body.append(modalWindow())
window.addEventListener('load', createModalWindow)
window.addEventListener('load', init)

//document.getElementById('buttonShow').addEventListener('click', showModal)
