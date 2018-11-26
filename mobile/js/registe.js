window.onload=function(){
    let span = document.querySelectorAll('span');
    let inp = document.querySelectorAll('input');
    for(let i=0;i<span.length;i++){
        inp[i].addEventListener('focus',function(){
            this.style.borderColor="#0091d2";
            span[i].style.display='none';  
        })
        inp[i].addEventListener('blur',function(){
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
            if(i==2){
                let val = this.value;
                let reg = /\s/g;
                if(val.length<6 || reg.test(val)){
                    this.style.borderColor='red'; 
                    span[i].style.display='block';    
                }
            }
            if(i==3){
                if(this.value != inp[2].value){
                    this.style.borderColor='red'; 
                    span[i].style.display='block'; 
                }
            }
        })
    }
}