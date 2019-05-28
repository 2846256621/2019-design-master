$(document).ready(function(){
    var d = "<div class='maple' style='position:absolute;color:#f9fffd'>●<div>";
    setInterval(function () {
        var f = $(document).width(); /*屏幕宽度*/
        var h = $(document).height();
        var e = Math.abs(Math.random() * f - 100); // 的定位left值
        var o = 0.2 + Math.random()*0.8; // 的透明度 0.2~1
        var fon = 25 + Math.random() * 10; // 大小 25~35
        var l = e - 100 + 200 * Math.random(); // 横向位移 左右100px
        var k = 10000 + 5000 * Math.random(); //速度
        var deg = Math.random() * 360; // 的方向  开始前设定好旋转的角度
        $(d).clone().appendTo("#container").css({
            top:0,
            left: e + "px",
            opacity: o,
            transform: "rotate(" + deg + "deg)",
            "font-size": fon,
        }).animate({
            top: h-200 +'px',
            left: l + "px",
            opacity: 0.1,
        }, k, "linear", function () {
            $(this).remove()
        })
    }, 500)
 });