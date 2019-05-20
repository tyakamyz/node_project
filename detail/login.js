<script>
 $(document).ready(function() {
    $("form[name=loginForm]").find('input, select').keypress(function(e) {
        if (e.keyCode == 13){
            jsLogin();
        }
    });
});
</script>

<div class="w-100">
    <h2 class="mb-5">Login</h2>
    <div class="in-line test">
        <form name="loginForm" onSubmit="return false">
            <input class="login_common login_input" type="password" id="pwd" name="pwd" value="" placeholder="PASSWORD">
            <input class="login_common login_btn" type="button" id="loginBtn" value="LOGIN" onClick="javascript:jsLogin();">
        </form>
    </div>
</div>