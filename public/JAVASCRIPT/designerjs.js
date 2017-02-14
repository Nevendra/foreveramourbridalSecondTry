$(document).ready(function(){

	var mainContent = $(".mainContent");
	var designerAbout = mainContent.find(".designerAbout");
	console.log(designerAbout.outerHeight());
	var designerGallery = mainContent.find(".designerGallery");
	console.log(designerGallery.outerHeight());
	var clickedImage = $(".clickedImage");
	var selectedContent = $(".selectedImageContent");
	var theSelectedImage = selectedContent.find(".theSelectedImage");
	var windowWidth = $(window).width();

	if(designerAbout.height() >= designerGallery.height()){
		mainContent.css('height', designerAbout);
	} else {
		mainContent.css('height', designerGallery);
	}


	clickedImage.click(function(){
		var selectedContent = $(".selectedImageContent");
		var theSelectedImage = selectedContent.find(".theSelectedImage");
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

	var designerGallery = $(".designerGallery");
	var galleryBox = designerGallery.find(".galleryBox");

	var page = 1;
	var numOfPages;

	function pagination(page) {
		var current_page = page;
		if(windowWidth < 1000 ) {
			var records_per_page = 6;
			numOfPages = Math.floor(galleryBox.length / 6);
		} else {
			var records_per_page = 9;
			numOfPages = Math.floor(galleryBox.length / 6);
		}
			$(galleryBox).hide();
		for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < galleryBox.length; i++) {
			$(galleryBox[i]).show();
		}
	}

	pagination(page);

	$(".nextMain").click(function(){

		if(page === numOfPages){
			page = 1;
		} else {
			page = page + 1;
		}
		console.log(page);
		pagination(page);
	});

	$(".previousMain").click(function(){

		if(page === 1){
			page = numOfPages;
		} else {
			page = page - 1;
		}
		console.log(page);
		pagination(page);
	})

	$(window).on('resize', function(){
		pagination(page);
	});

});
