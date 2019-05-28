const rotation1 = document.getElementById("second_right");
const rotation1_img = rotation1.getElementsByTagName("img");
const rotation2 = document.getElementById("second_bottom");
const rotation2_img = rotation2.getElementsByTagName("img");
let count=1;
let count_next=count+1;
	rotation1_img[0].src = "../image/bg-img/"+ count +".jpg";

	rotation2_img[0].src = "../image/bg-img/"+ count_next+".jpg";
	let Time = setInterval(function(){
 		rotation1_img[0].src = "../image/bg-img/"+ ++count +".jpg";
        count_next=count+1;
 		 if(count_next === 8){
 		 	rotation2_img[0].src = "../image/bg-img/1.jpg";
 		 }else{
 			rotation2_img[0].src = "../image/bg-img/"+ count_next +".jpg";
 		}
 		if(count === 9){
 			count=0;
 			count_next=count+1;
 		}
 },4000);

let arr_poet=[ 	["春风得意马蹄疾","一日看尽长安花"],
			 	["孤灯不明思欲绝","卷帷望月空长叹"],
			 	["长安一片月","万户捣衣声"],
			 	["长安大道连狭斜","青牛白马七香车"],
				["李白一斗诗百篇","长安市上酒家眠"]
			];
let second_left = document.getElementById("second_left");
let span_left = second_left.getElementsByTagName("span")[0];
let span_right = second_left.getElementsByTagName("span")[1];
let count_poet = 0;
	span_left.innerHTML = arr_poet[0][0];
	span_right.innerHTML = arr_poet[0][1];
	let time_poet =  setInterval(function(){
		count_poet++;
		span_left.innerHTML = arr_poet[count_poet][0];
		span_right.innerHTML = arr_poet[count_poet][1];

		if( count_poet === arr_poet.length-1){
			count_poet = 0;
		}
},4000);

	
