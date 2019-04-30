window.onload = function(){
    let footer = document.querySelector('#footer');
    let div = footer.querySelectorAll('div');
    let arr = ['index.html','classify.html','recommend.html','vip.html','mine.html'];
    for(let i=0;i<div.length;i++){
        div[i].addEventListener('touchend',function(){
                window.location.href = arr[i];
        })
    }
}