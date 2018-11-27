window.onload = function(){
    let footer = document.querySelector('#footer');
    let div = footer.querySelectorAll('div');
    let list = document.querySelectorAll('.list');
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
    for(let i =0;i<list.length;i++){
        list[i].addEventListener('touchend',function(){
            let div = list[i].querySelectorAll('div');
            for(let j=0;j<div.length;j++){
                div[j].addEventListener('click',function(){
                    window.location.href = 'details.html';
                })
            }
        })
    }
}