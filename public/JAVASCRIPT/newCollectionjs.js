$(document).ready(function(){
	$(window).on('load', function(e){
		e.preventDefault();


	});


	var sliderWrapper = $(".designersWrapper");
	var sliderContainer = sliderWrapper.find(".designerSliderContainer");
	var slides = sliderContainer.find(".designerSlides");
	var slidesImg = sliderContainer.find(".designerSlides img");
	var slidesDesignerName = sliderContainer.find(".designerSlides div");
		// slidesDesignerName.css("width", slides.width());


	// var footerContact = $('.footerContact').outerWidth(true);
	// var footerSocialMedia = $('.footerSocialMedia').outerWidth(true);
	// $('.footerinfo').css('width', footerContact + footerSocialMedia + 1);


	// $(sliderContainer).on("mouseenter", ".designerSlides", function(){
	// 	var slideUp = $(this).find("div");
	// 	slideUp.animate({bottom: "0px", opacity: 1}, 0750);
	//   });
	// $(sliderContainer).on("mouseleave", ".designerSlides", function(){
	// 	var slideDown = $(this).find("div");
	// 	slideDown.animate({bottom: "-30px", opacity: 0}, 0500);
	//   });


	// $(sliderContainer).on("click", ".designerSlides", function(){
	// 	var slideUp = $(this).find("div");
	// 	$(slidesDesignerName).css({bottom: "-30px", opacity: 0})
	// 	slideUp.animate({bottom: "0px", opacity: 1}, 0750);
	//   });




	function sliderFeature(){

		var animationSpeed = 000;
		var sliderSpeed = 3000;
		var currentSlide = 1;
		var sliderWrapper = $(".feature");
		var sliderContainer = sliderWrapper.find(".designerSliderContainer");
		var slides = sliderContainer.find(".designerSlides");
		var slidesImg = sliderContainer.find(".designerSlides img");
		var sliderWidth = sliderWrapper.width();
		var	numOfDesigners = 5;
		var sliderInterval;
		slides.css("width",  sliderWidth);
		sliderContainer.css("width", numOfDesigners * sliderWidth);

		function imgSlider(){
			var sliderInterval = setInterval(function(){
					sliderContainer.animate({"margin-left": "-=" + sliderWidth}, animationSpeed, function(){
							currentSlide = currentSlide + 1;
							if(currentSlide === numOfDesigners){
								currentSlide = 1;
								sliderContainer.css("margin-left", 0);
							}

					});

			}, sliderSpeed);

		}

		imgSlider();
	}

	// sliderFeature();


	function sliderExclusive(){

		var animationSpeed = 1000;
		var sliderSpeed = 3000;
		var currentSlide = 1;
		var sliderWrapper = $(".exclusive");
		var sliderContainer = sliderWrapper.find(".designerSliderContainer");
		var slides = sliderContainer.find(".designerSlides");
		var slidesImg = sliderContainer.find(".designerSlides img");
		var sliderWidth = sliderWrapper.width();
		var	numOfDesigners = 4;
		var sliderInterval;
		slides.css("width",  sliderWidth);
		sliderContainer.css("width", numOfDesigners * sliderWidth);

		function imgSlider(){
			var sliderInterval = setInterval(function(){
					sliderContainer.animate({"margin-left": "-=" + sliderWidth}, animationSpeed, function(){
							currentSlide = currentSlide + 1;
							if(currentSlide === numOfDesigners){
								currentSlide = 1;
								sliderContainer.css("margin-left", 0);
							}

					});

			}, sliderSpeed);

		}

		imgSlider();
	}

	// sliderExclusive();

});
