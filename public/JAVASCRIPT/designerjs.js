$(document).ready(function(){

	var mainContent = $(".mainContent");
	var designerAbout = $(".designerAbout").outerHeight();
	var designerGallery = $(".designerGallery").outerHeight();
	var clickedImage = $(".clickedImage");
	var selectedContent = $(".selectedImageContent");
	var theSelectedImage = selectedContent.find(".theSelectedImage");


	clickedImage.click(function(){
		var selectedContent = $(".selectedImageContent");
		var theSelectedImage = selectedContent.find(".theSelectedImage");
		console.log(theSelectedImage.width());
	})

	$(".additionalDesigner").click(function(){
		 $(".additionalNav").animate({ "left": "0px"}, 1000 );
		 $(this).fadeOut(1000);
		// $(".additionalNav").slideToggle();

	});

	$(".closeAdditionalNav").click(function(){
		$(".additionalNav").animate({ "left": "-150px"}, 1000 );
		$(".additionalDesigner").fadeIn(1000);
	});

});
