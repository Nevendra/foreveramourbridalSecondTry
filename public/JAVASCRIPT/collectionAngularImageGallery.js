(function() {
  'use strict';

angular.module('CollectionImageGallery', ['DesignerService', 'DesignerValue'])

.controller("CollectionImageGalleryController", function(DesignerListFactory, $location, $anchorScroll, PaginateDesigner, CollectionArray, featuresNameArray, exclusiveNameArray) {

	var self = this;
	self.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   	}

	self.scrollToDesigner = function() {
     var newHash = "des" + self.designerId;
      if ($location.hash() !== newHash) {
        $location.hash("des" + self.designerId);
      } else {
        $anchorScroll();
      }
   	}

   	self.styles;
   	self.feature = "feature";
   	self.exclusive = "exclusive";
   	self.featureDesignerNames = featuresNameArray;
   	self.exclusiveDesignerNames = exclusiveNameArray;
	self.designersArray = new DesignerListFactory(CollectionArray);
	self.featureDesignerList = self.designersArray.onlyFeature();
	self.exclusiveDesignerList = self.designersArray.onlyExclusive();
	self.clickedFeature = false;
	self.clickedExclusive = false;
	self.viewFeature = false;
	self.viewExclusive = false;
	self.mainHtml = true;
	self.selectedImage;
	self.clickedThumbNail = false;
	self.feature_page = 1;
	self.exclusive_page = 1;
	self.records_per_page = 9;
	self.featureDesigner;
	self.exclusiveDesigner;
	self.featureSelected = "feature";
	self.exclusiveSelected = "exclusive";
	self.viewGallery = function(designer, page, featureOrExclusive, designerImage, designerAbout) {
		if(featureOrExclusive === "feature"){
			self.viewFeature = true;
			self.featureImages = PaginateDesigner.PaginateDesignerFunction(designer, page);
			self.featureDesignerName = designer;
			self.featureDesignerImage = designerImage;
			self.featureDesignerAbout = designerAbout;
			self.featureFullImages = self.designersArray.viewDesignerGallery(designer);
			self.featurePages = Math.ceil(self.featureFullImages.length / self.records_per_page);
			self.featureDesigner = designer;

		} else if (featureOrExclusive === "exclusive"){
			self.viewExclusive = true;
			self.exclusiveImages = PaginateDesigner.PaginateDesignerFunction(designer, page);
			self.exclusiveDesignerName = designer;
			self.exclusiveDesignerImage = designerImage;
			self.exclusiveDesignerAbout = designerAbout;
			self.exclusiveFullImages = self.designersArray.viewDesignerGallery(designer);
			self.exclusivePages = Math.ceil(self.exclusiveFullImages.length / self.records_per_page);
			self.exclusiveDesigner = designer;
		}
		self.mainHtml = false;
	};

	self.closeDesignerImageGallery = function() {
		self.clickedThumbNail = false
		self.current_page = 1;
		self.designerFullImages;
		self.numPages;
		self.viewFeature = false;
		self.viewExclusive = false;
	};

	self.viewLargeImage = function(image) {
		self.selectedImage = image;
		console.log(self.selectedImage)
		self.clickedThumbNail = true;
	}

	self.closeDesignerImageGallerySelectedImage = function() {
		self.clickedThumbNail = false;
	}

	self.clickedExclusiveOrFeature = function(clicked){
		console.log("hey");
		self.choice = clicked;
		self.scrollTo();
		console.log(self.choice);
		if(self.choice === "feature"){
			self.clickedFeature = true;
			self.clickedExclusive = false;
			self.mainHtml = false;
			self.viewFeature = false;
			self.viewExclusive = false;
			self.selectedImage;
			self.clickedThumbNail = false;
		} else if (self.choice === "exclusive"){
			self.clickedFeature = false;
			self.clickedExclusive = true;
			self.mainHtml = false;
			self.viewFeature = false;
			self.viewExclusive = false;
			self.selectedImage;
			self.clickedThumbNail = false;
		}
	}

	self.prevPage = function(featureOrExclusive, designer, array) {
		if(featureOrExclusive === "feature"){
		    if (self.feature_page > 1) {
		        self.feature_page--;
		        self.featureImages = PaginateDesigner.PaginateDesignerFunction(designer, self.feature_page, array);
		    }

		} else if (featureOrExclusive === "exclusive"){
			if (self.exclusive_page > 1) {
		        self.exclusive_page--;
		        self.exclusiveImages = PaginateDesigner.PaginateDesignerFunction(designer, self.exclusive_page, array);
		    }
		}
		self.thisDesigner = designer;

	}

	self.nextPage = function(featureOrExclusive, designer, array) {
		self.thisDesigner = designer;
	    if(featureOrExclusive === "feature"){
		    if (self.feature_page < self.featurePages) {
		        self.feature_page++;
		        self.featureImages = PaginateDesigner.PaginateDesignerFunction(designer, self.feature_page, array);
		    }

		} else if (featureOrExclusive === "exclusive"){
			if (self.exclusive_page < self.exclusivePages) {
		        self.exclusive_page++;
		        self.exclusiveImages = PaginateDesigner.PaginateDesignerFunction(designer, self.exclusive_page, array);
		    }
		}
	}

})



})();