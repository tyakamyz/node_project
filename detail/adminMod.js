<script>
 $(document).ready(function() {
    var ty_id = $("#ty_id_view").val();
    $("form[name=modForm]").find("[name=ty_id]").val(ty_id);
    
     $.ajax({
            url:'/careerModData',
            type:'post',
            data:{data:ty_id},
            success:function(data){
                $(data).each(function(index,item){
                    $("form[name=modForm]").find("[name=title]").val(item.title);
                    $("form[name=modForm]").find("[name=subtitle]").val(item.subtitle);
                    $("form[name=modForm]").find("[name=start_dt]").val(item.start_dt);
                    $("form[name=modForm]").find("[name=end_dt]").val(item.end_dt);
                    $("form[name=modForm]").find("[name=cont]").val(item.cont);
                });
            }
        });
});

</script>


<div class="w-100">
    <h2 class="mb-5">Admin Add&nbsp;&nbsp;&nbsp;
        <input class="login_common admin_Lbtn" type="button" id="loginBtn" value="SAVE" onClick="javascript:jsCareerMod();">
        <input class="login_common admin_Rbtn" type="button" id="loginBtn" value="BACK" onClick="javascript:jsLoad('adminDetail','/detail/admin.js');">
    </h2>
    <form name="modForm" method="post" action="/careerModReal">
    <input type="hidden" id="ty_id" name="ty_id" value="" />
    <ul class="fa-ul mb-0">
        <li>
            <i class="fa-li fa fa-square"></i><input class="admin_input" type="text" name="title" value="" placeholder="TITLE">
        </li>
        <li>
            <i class="fa-li fa fa-square"></i><input class="admin_input" type="text" name="subtitle" value="" placeholder="SUBTITLE">
        </li>
        <li>
            <i class="fa-li fa fa-square"></i><input class="adminDate_input" type="text" name="start_dt" value="" placeholder="YYYYMM"> ~ <input class="adminDate_input" type="text" name="end_dt" value="" placeholder="YYYYMM">
        </li>
        <li>
            <i class="fa-li fa fa-square"></i><textarea class="admin_input" name="cont" rows="10" placeholder="CONTENT"></textarea>
        </li>
    </ul>
    </form>
</div>