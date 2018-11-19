// JavaScript Document
var ul=$(".choice ul");
var flag=[1,2,3,4,5,1];
var play=null;
var index=0;
var f=-661*5;
var arrL=$(".arrL");
var arrR=$(".arrR");
var count=$(".count");
arrL.click(function(){
		index--;						
		if(index<0){
			index=4;
			ul.css("left",f+"px");
		}
		count.html(flag[index]);
		move(index);
		
	})
arrR.click(function(){
		index++;
		if(index>5){
			index=1;
			ul.css("left","0");
		}
		count.html(flag[index]);
		move(index);
	})
function move(index){
	var a=-(index*661);
	ul.stop().animate({"left":a+"px"},1000)
	}

function autoplay(){
  play=setInterval(function(){				 
		arrR.click();				 				 		 
		},4000)
		
	}
$(".choice").hover(function(){clearInterval(play);},function(){autoplay();})
	
autoplay();