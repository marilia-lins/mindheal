window.onscroll = function (){
    let top = document.documentElement.scrollTop
    let height = document.documentElement.scrollHeight
    let client = document.documentElement.clientHeight
    let calc = height - client
    let scroll = (top * 100)/ calc
    document.getElementById('progress').style.width = `${scroll}%`

    let btn = document.getElementById('scroll-top')
    if(top > 250){
        btn.style.display = 'grid'
    } else {
        btn.style.display = 'none'
    }

    btn.addEventListener('click', ()=> {
        document.documentElement.scrollTop = 0
    })

    if(top > 0){
        document.getElementById('nav-bar').classList.add('sticky')
    } else {
        document.getElementById('nav-bar').classList.remove('sticky')
    }
}

