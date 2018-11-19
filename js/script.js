$(function(){
	var lis=$(".a ").children();	   
    lis.mouseover(function(){
	  this.className="togli on";				   
					   
         }).mouseout(function(){
	
	  this.className="togli";	
	
	  })	   
	$(".hidemenv li").mouseover(function(){
		$(this).addClass("key");							   
									   
	}).mouseout(function(){
		$(this).removeClass("key");
		
		})
   
})
