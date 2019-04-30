(function(){
    function init(){
        let html = document.documentElement;
        if(html.clientWidth >= 750){

        }
        else{
            html.style.fontSize = html.clientWidth/25 + 'px';
        }
    }
    init();
    window.addEventListener("resize",init);
})()