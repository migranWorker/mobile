window.onload=function(){
    let input = document.querySelectorAll('input');
    let span = document.querySelectorAll('span');      
    let btn = document.querySelector('button');
    let back = document.querySelector('.left');
    for(let i= 0;i<input.length;i++){
        input[i].addEventListener('focus',function(){
            this.style.borderColor="#0091d2";
            span[i].style.display='none';                 
        })
        input[i].addEventListener('blur',function(){
            if(this.value==''){
                this.style.borderColor='red';
                span[i].style.display='block';                 
            }
            if(i==0){
                let val = this.value;
                let reg = /^1[358]\d{9}/;
                if(!reg.test(val)){
                    this.style.borderColor='red'; 
                    span[i].style.display='block';                 
                }
            }
            if(i==1){
                let val = this.value;
                let reg = /\s/g;
                if(val.length<6 || reg.test(val)){
                    this.style.borderColor='red'; 
                    span[i].style.display='block';    
                }
            }
        })
    }
    back.addEventListener('touchstart',function(){
        window.location.href='mine.html';
    })
    btn.addEventListener('touchstart',function(){
      
    })
}