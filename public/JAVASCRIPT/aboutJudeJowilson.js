

$( document ).ready(function() {
  	var judeImageDiv = $(".judeImage");
	var judeLookBook = judeImageDiv.find(".lookBook");
	var windowWidth = $(window).width();
	$(window).on('load resize', function() {  

		if(windowWidth > 500){
			judeLookBook.css('width', judeImageDiv.width() - 255);
		} else {
			judeLookBook.css('width', judeImageDiv.width() - 100);
		}
	});

});
