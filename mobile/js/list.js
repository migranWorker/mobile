window.onload=function(){
    let item = document.querySelectorAll('.item');
    let back = document.querySelector('#back');
    for(let i=0;i<item.length;i++){
        item[i].addEventListener('click',function(){
            window.location.href='details.html';
        })
    }
    back.addEventListener('touchend',function(){
        window.history.back(-1);
    })
}