$(function(){
	$(".demo-option").click(function(event) {
		/* Act on the event */
		$("#myModal-detail-info").modal();
		$("myModal-detail-info").css({
			zIndex: 1100
		});
	});
	/*  
		模态框关闭按钮code。缺点：没有封装，无法复用
	*/
	$(".closemodal1").click(function(event) {
		/* Act on the event */
		$('#myModal').modal('toggle');
	});
	$(".closemodal2").click(function(event) {
		/* Act on the event */
		$('#myModal-detail-info').modal('toggle');
	});

	/*
		sidebar-menu code
	 */
});
$(function(){
	/* find all class mainmenu and submenu, then all class submenu hide */
	var $mainmenu = $(".mainmenu");
	var $submenu = $(".submenu");
	$submenu.hide();
	$submenu.first().delay(400).slideDown(700);
	$mainmenu.on('click', 'li', function () {
        $(this).next('.submenu').slideToggle().siblings('.submenu').slideUp();
    });
 })