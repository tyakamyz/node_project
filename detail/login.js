<script>
    $(document).ready(function() {
        $("form[name=loginForm]").find('input, select').keypress(function(e) {
            if (e.keyCode == 13){
                jsLogin();
            }
        });
    });

    function jsLogin(){
        //alert($("#pwd").val());
        
        var pwd = $("#pwd").val();
    
        $.ajax({
            url: '/ajaxtest',                //주소
            dataType: 'html',                  //데이터 형식
            type: 'POST',                      //전송 타입
            data: {data:pwd},
            success: function(result) {          //성공했을 때 함수 인자 값으로 결과 값 나옴
                if(result=='Y'){
                    $("#adminDiv").load("/detail/admin.js");
                }else{
                    alert('비밀번호가 일치하지 않습니다.');
                }
                
            }
        });
    }
</script>

<div class="w-100" id="adminDiv">
    <h2 class="mb-5">Login</h2>
    <div class="in-line test">
        <form name="loginForm" onSubmit="return false">
            <input class="login_common login_input" type="password" id="pwd" name="pwd" value="" placeholder="PASSWORD">
            <input class="login_common login_btn" type="button" id="loginBtn" value="JOIN" onClick="javascript:jsLogin();">
        </form>
    </div>
</div>