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
			$(".msgspan").html("<span style='color:red'>�������<span>");
			return false;
		}
		
	}
	$(".mobile").click(function(){
		if(flag%2==0){
		this.innerHTML="�ֻ���̬���¼<i class='tri'></i>";	
		$(".user input").val("            �ֻ���");
		$(".password input").val("            ��̬��      ��ȡ�ֻ���̬��");
		$(".guide")[0].innerHTML="<span style='font-size:11px'>��ʾ�� δע�������˺ŵ��ֻ��ţ���¼ʱ���Զ�ע�������˺ţ��Ҵ�������ͬ�⡶�������û�Э�顷</span>";
		}else{
			this.innerHTML="��ͨ��ʽ��¼<i class='trion'></i>";	
		$(".user input").val("           �ֻ���/�û���/���� ");
		$(".password input").val("           ����");
		$(".guide")[0].innerHTML='<span>��û���˺ţ�</span><a href="#">���ע��</a>';
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
				alert("�ύ�ɹ�");
				$(".user input").val("           �ֻ���/�û���/���� ");
				$(".password input").val("           ����");
	
			}					 
							 
	 })
})