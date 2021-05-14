h01=document.getElementById("h01")
h01.style.backgroundColor="red"
window.addEventListener('keydown',keydown)
let b=localStorage.getItem('top')
b=parseInt(b,10)
let tt=0
h01.style.position='fixed'
function keydown(e){
    let keyid=e.code
    if(keyid==='ArrowDown'){
        if(h01.style.top.slice(0,1)==0){
            h01.style.top='0px'
        }
        let a=h01.style.top.slice(0,h01.style.top.length-2)
        a=parseInt(h01.style.top,10)
        
        a+=10
        b=a
        console.log(a)
    }
    if(keyid==='ArrowUp'){
        if(h01.style.top.slice(0,1)==0){
            h01.style.top='0px'
        }
        let a=h01.style.top.slice(0,h01.style.top.length-2)
        a=parseInt(h01.style.top,10)
        
        a-=10
        b=a
        console.log(a)
    }
}
function tick(){
    tt+=10
    
    localStorage.setItem('top',b)
    b=localStorage.getItem('top')
    b=parseInt(b,10)
    
    h01.style.top=b+'px'
}
setInterval(tick,10)