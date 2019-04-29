<script>
 $(document).ready(function() {
     $.ajax({
            url:'/adminList',
            type:'post',
            success:function(data){
                $(data).each(function(index,item){
                    $('#adminList').append('<li><a href="javascript:void(0);" onClick="jsAdminMod('+item.ty_id+');"><i class="fa-li fa fa-user-cog"></i>'+item.title+'</li>');
                });
            }
        });
});

</script>

<div class="w-100">
    <h2 class="mb-5">Admin List&nbsp;&nbsp;&nbsp;
        <input class="login_common admin_Lbtn" type="button" id="loginBtn" value="NEW" onClick="javascript:jsLoad('adminDetail','/detail/adminAdd.js');">
        <input class="login_common admin_Rbtn" type="button" id="loginBtn" value="BACK" onClick="javascript:jsLoad('adminDetail','/detail/login.js');">
    </h2>
    <ul class="fa-ul mb-0" id="adminList">
    </ul>
</div>