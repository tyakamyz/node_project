<div class="w-100">
    <h2 class="mb-5">Admin Add&nbsp;&nbsp;&nbsp;
        <input class="login_common admin_Lbtn" type="button" id="loginBtn" value="SAVE" onClick="javascript:jsCareerAdd();">
        <input class="login_common admin_Rbtn" type="button" id="loginBtn" value="BACK" onClick="javascript:jsLoad('adminDetail','/detail/admin.js');">
    </h2>
    <form name="addForm" method="post">
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