function input_group_file(){
	$(":text").click(function(){
		if($(this).siblings(":file").size() > 0){
			$(this).siblings("label").click();
		};
	});
	$(":file").change(function(){
		$file_name = $(this).val().replace(/\\/g, '/').replace(/.*\//, '');;
		$(this).siblings(":text").val($file_name);
	});
}