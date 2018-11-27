window.onload=function(){
    let btn =document.querySelector('#btn');
    let back =document.querySelector('#back');
    btn.addEventListener('touchend',function(){
        window.location.href='order.html';
    })
    back.addEventListener('touchend',function(){
        window.history.back(-1);
    })
}