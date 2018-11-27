window.onload = function(){
    let footer = document.querySelector('#footer');
    let div = footer.querySelectorAll('div');
    let item = document.querySelectorAll('.item');
    let arr = ['index.html','classify.html','','','mine.html'];
    for(let i=0;i<div.length;i++){
        div[i].addEventListener('touchend',function(){
            if(i==div.length-1){
                if(sessionStorage.getItem('user')){
                    window.location.href='mine.html';
                }else{
                    window.location.href="login.html";
                }
            }else{
                window.location.href = arr[i];
            }
        })
    }
    for(let i=0;i<item.length;i++){
        item[i].addEventListener('touchend',function(){
            let div = item[i].querySelectorAll('div');
            for(let j=0;j<div.length;j++){
                div[j].addEventListener('click',function(){
                    window.location.href='details.html';
                })
            }
        })
    }
}