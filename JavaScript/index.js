window.onload = ()=>{
    const center =document.getElementById("center");
    const imgs = document.getElementsByClassName("bg-img");
    const little_circles = document.getElementsByClassName("little-circle");
    const covers = document.getElementsByClassName("cover");
    const nav_img = document.getElementsByClassName("nav-img");
    const title = document.getElementById('title');
    center.style.animation = "circle linear 1s";
    show();
    function show() {
        let time = .5;
        for(let i = 0;i<little_circles.length;i++){
            little_circles[i].style.left = 12* i +'%';
            if(i < little_circles.length -1){
                little_circles[i].onmouseover = function(){
                    covers[i].style.display = "block";
                };
                little_circles[i].onmouseout = function(){
                    covers[i].style.display = "none";
                };
            }
            little_circles[i].onclick = function () {
                center.style.background =  'url('+ nav_img[i].src + ') center center no-repeat';
                center.style.backgroundSize= "100% 100%";
                center.style.animation = `img linear ${time}s`;
                setTimeout((center)=>{
                    center.style.animation = "";
                },(time+0.1)*1000,center);
                if(i < (little_circles.length-2))
                    setTimeout(function(){
                        localStorage.setItem('pageTo',`${i}`);
                        window.location.href="./pages/main.html";
                    },1000);
            };
        }
    }

    let num = 0;
    setInterval(function () {
        num = num % imgs.length;
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity = '0';
        }
        imgs[num].style.transition = "opacity 1s";
        imgs[num].style.opacity = '1';
        if(num %2 === 1)
            title.style.color = "#fcfcfc";
        else
            title.style.color = "black";
        num++;
    },4000);

};