window.onload=function(){
    let item = document.querySelectorAll('.item');
    let time = document.querySelector('#time');
    let alert1 = document.querySelector('#b-alert');
    let back = document.querySelector('#t-back');
    let item1 = document.getElementsByClassName('item1');
    let footer = document.getElementById('footer');
    let btn = document.getElementById('btn');
    let del = footer.getElementsByClassName('delete');
    let money = document.querySelectorAll('.money');
 
    //弹出层
    for(let i= 0;i<item.length;i++){
        item[i].addEventListener('click',function(e){
            e.stopPropagation();
            let span = item[i].querySelectorAll('span');
            time.innerHTML = `今天 ${span[1].innerText}-${span[2].innerText} 原版3D ${span[3].innerText}`;
            alert1.style.visibility = 'visible';
        })
    }
    back.addEventListener('touchstart',function(){
        alert1.style.visibility = 'hidden';
    })
    btn.addEventListener('click',function(){
        if(sessionStorage.getItem('user')){
            let p = footer.getElementsByTagName('p');
            let memoyAll = 0;
            for(let i=0;i<p.length;i++){
                let span = p[i].getElementsByTagName('span');
                memoyAll += parseFloat(span[3].innerText.substring(1));
            }
    
            if(p.length <1){
                alert('请先选择位置！');
            }
            else{
                alert(`付款成功,共支付${memoyAll}！`);
                window.location.href='index.html';
            }
        }else{
            alert('请先登陆！');
            window.location.href = 'login.html';
        }
    })
    //选择座位
    for(let j=0;j<item1.length;j++){
        let set = item1[j].querySelectorAll('i');
        let span = item1[j].querySelector('span');
        for(let i=0;i<set.length;i++){
            set[i].addEventListener('touchstart',function(){
                if(this.classList.contains('green') || this.classList.contains('red')){
                    alert('已经被选啦！');
                }else{
                    this.classList.add('red');
                    let s = `<p class="message">
                        <span>
                            <span>${span.innerText}</span>排
                            <span>${i+1}</span>座
                        </span>
                        <span>${money[0].innerText}</span>
                        <span class="delete">x</span>
                    </p>`;
                    footer.innerHTML = s + footer.innerHTML;
                    for(let i=0;i<del.length;i++){
                        let p = footer.getElementsByClassName('message');
                        del[i].addEventListener('touchstart',function(){
                            if(p.length==1){
                                let span = p[0].getElementsByTagName('span');
                                footer.removeChild(p[0]);
                                let set = item1[span[1].innerText-1].getElementsByTagName('i');
                                set[span[2].innerText-1].classList.remove('red');
                            }else{
                                let span = p[i].getElementsByTagName('span');
                                footer.removeChild(p[i]);
                                let set = item1[span[1].innerText-1].getElementsByTagName('i');
                                set[span[2].innerText-1].classList.remove('red');
                            }
                        })
                    }
                }
            })
        }
    }
  
   
}