function ProgressFood() {
    let top = document.getElementById("top");
    let left = document.getElementById("left");
    let top_width = 0;
    let left_height = 0;
    top.style.width = top_width + "px";
    top.style.height = left_height + "px";

    //if(top_width<=1400){
    let Time1 = setInterval(function () {
        top_width += 10;
        top.style.width = top_width + "px";
        if (top_width > 1250) {
            clearInterval(Time1);
        }
    }, 10);
    //}


    //if(left_height<=600){
    let Time2 = setInterval(function () {
        left_height += 10;
        left.style.height = left_height + "px";
        if (left_height > 1500) {
            clearInterval(Time2);
        }
    }, 12);
    //}


}

ProgressFood();


let pics = document.getElementsByClassName('left');
let btnL = document.getElementsByClassName('icon-yuanjiantou1')[0];
let btnR = document.getElementsByClassName('icon-yuanjiantou')[0];
let spans = document.getElementsByClassName('text1');

let count = 0;

btnL.onclick = function changePic() {
    xiaoshi();
    count += 1;
    if (count === 1) {
        for (let i = 0; i < 3; i++) {
            pics[i].classList.add('tran');
            setTimeout(() => {
                pics[i].style.backgroundImage = 'url("../image/food-images/food-bg.jpg")';
                spans[0].innerHTML = `蜂蜜凉粽子：唐代段成式所著的《酉阳杂俎》中记载：“庚家粽子，白莹如玉”。早在唐中宗年间，它是盛行一时的“烧尾宴”上的一道佳肴，那时叫“赐绯含香粽子”。唐代诗人元稹曾作诗赞曰：“彩缕碧筠粽，香粳白立团”。`;
            }, 1000);
            setTimeout(() => {
                pics[i].classList.remove('tran');
            }, 2000)
        }
    }
    if (count === 2) {
        for (let i = 0; i < 3; i++) {
            pics[i].classList.add('tran');
            setTimeout(() => {
                pics[i].style.backgroundImage = 'url("../image/food-images/food2.jpg")';
                spans[0].innerHTML = `凉鱼： 
                凉鱼的做法和搅团相似，首先面粉精选关中特产黄苞谷（玉米），磨成苞谷面，用盆子加苞谷面加水，搅拌成玉米糊糊，可以粘稠些，一定不能有疙瘩，另外，也可以给玉米粉里加上少量面粉来做，吃的时候比玉米粉的口感会细一些。`;
            }, 1000);
            setTimeout(() => {
                pics[i].classList.remove('tran');
            }, 2000)
        }
    }
    if (count === 3) {
        for (let i = 0; i < 3; i++) {
            pics[i].classList.add('tran');
            setTimeout(() => {
                pics[i].style.backgroundImage = 'url("../image/food-images/food1.jpg")';
                spans[0].innerHTML = `蛋黄夹馍：
                跟普通夹馍名字差距不大，但是内容确是天差地别。普通的夹馍是夹得土豆丝、海带丝等各种素菜，顶多加个卤鸡蛋和豆干。但是蛋菜夹馍的料非常丰盛，不光有咸蛋黄、煎鸡蛋、花生、还有玫瑰菜和秘制酱料，看起来也是非常的诱人。`;

            }, 1000);
            setTimeout(() => {
                pics[i].classList.remove('tran');
            }, 2000)
        }
    }
    if (count === 4) {
        for (let i = 0; i < 3; i++) {
            pics[i].classList.add('tran');
            setTimeout(() => {
                pics[i].style.backgroundImage = 'url("../image/food-images/timg.jpg")';
                spans[0].innerHTML = `肉夹馍：
                    传统的西安肉夹馍有着精细的制作过程，每个可口味美的肉夹馍都是由几十种调料精心配制而成。由于选料精细，火功到家，加上使用秘制老汤，因此制作出来的腊汁肉色泽红润，气味芬芳，肉质软糯，糜而不烂。肉夹馍，实际上是腊汁肉和白吉馍两种食物的绝妙搭配组合。`;
            }, 1000);
            setTimeout(() => {
                pics[i].classList.remove('tran');
            }, 2000)
        }
        count = 0;
    }
    setTimeout(()=>{
        let Radius = document.getElementsByClassName('radius');
        for (let i = 0; i < 2; i++) {
            Radius[i].style.display = 'block';
        }
    },1600);
};


btnR.onclick = function changePic1() {
    xiaoshi();
    // qiehuan();
    count++;
    if (count === 1) {
        for (let i = 0; i < 3; i++) {
            pics[i].classList.add('tran');
            setTimeout(() => {
                pics[i].style.backgroundImage = 'url("../image/food-images/food-bg.jpg")';
                spans[0].innerHTML = `蜂蜜凉粽子：
唐代段成式所著的《酉阳杂俎》中记载：“庚家粽子，白莹如玉”。早在唐中宗年间，它是盛行一时的“烧尾宴”上的一道佳肴，那时叫“赐绯含香粽子”。唐代诗人元稹曾作诗赞曰：“彩缕碧筠粽，香粳白立团”。`;
            }, 1000);
            setTimeout(() => {
                pics[i].classList.remove('tran');
            }, 2000)

        }
    }
    if (count === 2) {
        for (let i = 0; i < 3; i++) {
            pics[i].classList.add('tran');
            setTimeout(() => {
                pics[i].style.backgroundImage = 'url("../image/food-images/food2.jpg")';
                spans[0].innerHTML = `凉鱼： 
                凉鱼的做法和搅团相似，首先面粉精选关中特产黄苞谷（玉米），磨成苞谷面，用盆子加苞谷面加水，搅拌成玉米糊糊，可以粘稠些，一定不能有疙瘩，另外，也可以给玉米粉里加上少量面粉来做，吃的时候比玉米粉的口感会细一些。`
            }, 1000);
            setTimeout(() => {
                pics[i].classList.remove('tran');
            }, 2000)
        }
    }
    if (count === 3) {
        for (let i = 0; i < 3; i++) {
            pics[i].classList.add('tran');
            setTimeout(() => {
                pics[i].style.backgroundImage = 'url("../image/food-images/food1.jpg")';
                spans[0].innerHTML = `蛋黄夹馍：
跟普通夹馍名字差距不大，但是内容确是天差地别。普通的夹馍是夹得土豆丝、海带丝等各种素菜，顶多加个卤鸡蛋和豆干。但是蛋菜夹馍的料非常丰盛，不光有咸蛋黄、煎鸡蛋、花生、还有玫瑰菜和秘制酱料，看起来也是非常的诱人。`

            }, 1000);
            setTimeout(() => {
                pics[i].classList.remove('tran');
            }, 2000)
        }
    }
    if (count === 4) {
        for (let i = 0; i < 3; i++) {
            pics[i].classList.add('tran');
            setTimeout(() => {
                pics[i].style.backgroundImage = 'url("../image/food-images/timg.jpg")';
                spans[0].innerHTML = "肉夹馍：" +
                    "传统的西安肉夹馍有着精细的制作过程，每个可口味美的肉夹馍都是由几十种调料精心配制而成。由于选料精细，火功到家，加上使用秘制老汤，因此制作出来的腊汁肉色泽红润，气味芬芳，肉质软糯，糜而不烂。肉夹馍，实际上是腊汁肉和白吉馍两种食物的绝妙搭配组合。";
            }, 1000);
            setTimeout(() => {
                pics[i].classList.remove('tran');
            }, 2000)
        }
        count = 0;
    }
    setTimeout(()=>{
        let Radius = document.getElementsByClassName('radius');
        for (let i = 0; i < 2; i++) {
            Radius[i].style.display = 'block';
        }
    },1600);
};



function xiaoshi() {
    let Radius = document.getElementsByClassName('radius');
    for (let i = 0; i < 2; i++) {
        Radius[i].style.display = 'none';
    }
}
