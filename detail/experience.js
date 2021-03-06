<script>
 $(document).ready(function() {
     $.ajax({
            url:'/adminList',
            type:'post',
            success:function(data){
                $(data).each(function(index,item){
                    $('#experienceList').append('<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"><div class="resume-content" style="max-width: 850px;">'
                                               +'<h3 class="mb-0">'+item.title+'</h3>'
                                               +'<div class="subheading mb-3">'+item.subtitle+'</div>'
                                               /*+'<p>'+item.cont+'</p>*/
                                               +'<pre class="preText">'+item.cont+'</pre>'
                                               +'</div>'
                                               +'<div class="resume-date text-md-right"><span class="text-primary">'+item.start_dt+' - '+item.end_dt+'</span><br><br>'
                                               /*+'<a href="/downloadfile?ty_id='+item.ty_id+'"><span><img src="./../img/pdf_icon.png" style="height: 100px;"></span><br>'*/
                                               +'<a href="javascript:jsPDFViewer(\''+item.file_name+'\');"><span><img src="./../img/pdf_icon.png" style="height: 100px;"></span><br>'
                                               +'<span>PDF로 자세히보기</span></a>'
                                               +'</div></div>');
                });
            }
        });
});
</script>

<div class="w-100">
    <h2 class="mb-5">Project</h2>
    <div id="experienceList" />
    <input type="hidden" id="filePath" value="" />
</div>