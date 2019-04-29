<script>
 $(document).ready(function() {
     $.ajax({
            url:'/adminList',
            type:'post',
            success:function(data){
                $(data).each(function(index,item){
                    $('#experienceList').append('<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"><div class="resume-content">'
                                               +'<h3 class="mb-0">'+item.title+'</h3>'
                                               +'<div class="subheading mb-3">'+item.subtitle+'</div>'
                                               +'<p>'+item.cont+'</p></div>'
                                               +'<div class="resume-date text-md-right"><span class="text-primary">'+item.start_dt+' - '+item.end_dt+'</span></div></div>');
                });
            }
        });
});
</script>

<div class="w-100">
    <h2 class="mb-5">Project</h2>
    <div id="experienceList" />
</div>