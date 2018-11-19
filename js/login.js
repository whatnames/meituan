// JavaScript Document
$(function(){
	var flag=0;
	function testReg(name,Reg){;
		var objvalue=$(name).val();
		if(Reg.test(objvalue)){
			$(".msg").css("visibility","hidden");
			return true;
		}else{
			$(".msg").css("visibility","visible");
			$(".msgspan").html("<span style='color:red'>输入错误<span>");
			return false;
		}
		
	}
	$(".mobile").click(function(){
		if(flag%2==0){
		this.innerHTML="手机动态码登录<i class='tri'></i>";	
		$(".user input").val("            手机号");
		$(".password input").val("            动态码      获取手机动态码");
		$(".guide")[0].innerHTML="<span style='font-size:11px'>提示： 未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意《美团网用户协议》</span>";
		}else{
			this.innerHTML="普通方式登录<i class='trion'></i>";	
		$(".user input").val("           手机号/用户名/邮箱 ");
		$(".password input").val("           密码");
		$(".guide")[0].innerHTML='<span>还没有账号？</span><a href="#">免费注册</a>';
		}
		flag++;
		
	})
	function testUser(){
		
		return testReg("#userinput",/^[a-z0-9_-]{3,16}$/);
		
	}
	function testPassword(){
		
		return testReg(".passwordinput",	/^[a-z0-9_-]{6,18}$/);
		
	}
	function alltest(){
		return testUser()&& testPassword();
		
	}
	$("#userinput").blur(function(){testUser();})
	$(".passwordinput").blur(function(){testPassword();})
	$(".login-button").click(function(){
			if(alltest()){
				alert("提交成功");
				$(".user input").val("           手机号/用户名/邮箱 ");
				$(".password input").val("           密码");
	
			}					 
							 
	 })
})
