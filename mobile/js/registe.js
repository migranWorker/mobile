window.onload=function(){
    let span = document.querySelectorAll('span');
    let inp = document.querySelectorAll('input');
    let btn =document.querySelector('#btn');
    let flag1 = true;
    let flag2 = true;
    let flag3 = true;
    let flag4 = true;
    for(let i=0;i<span.length;i++){
        inp[i].addEventListener('focus',function(){
            this.style.borderColor="#0091d2";
            span[i].style.display='none';   
        })
        inp[i].addEventListener('blur',function(){
            if(this.value==''){
                this.style.borderColor='red';
                span[i].style.display='block';  
                flag1 = false;             
            }
            if(i==0){
                let val = this.value;
                let reg = /^1[358]\d{9}/;
                if(!reg.test(val)){
                    this.style.borderColor='red'; 
                    span[i].style.display='block';   
                    flag2 = false;             

                }
            }
            else if(i==2){
                let val = this.value;
                let reg = /\s/g;
                if(val.length<6 || reg.test(val)){
                    this.style.borderColor='red'; 
                    span[i].style.display='block';
                    flag3 = false;             
                }
            }
            else if(i==3){
                if(this.value != inp[2].value){
                    this.style.borderColor='red'; 
                    span[i].style.display='block'; 
                    flag4=false;
                }
            }else{
                btn.removeAttribute('disabled');
            }
        })
    }
    btn.addEventListener('click',function(){
        for(let i=0;i<inp.length;i++){
            if(inp[i].value == ''){
                alert('请填写正确的信息！');
                return;
            }
        }
        for(let i=0;i<inp.length;i++){
            if(flag1 && flag2 && flag3 && flag4){
                alert('注册成功！');
                window.location.href='login.html';
                break;
            }
        }
    })
}