(function() {
  'use strict';

angular.module('CollectionImageGallery', ['DesignerService', 'DesignerValue'])

.controller("CollectionImageGalleryController", function(DesignerListFactory, $location, $anchorScroll, PaginateDesigner, CollectionArray) {

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
	self.designersArray = new DesignerListFactory(CollectionArray);
	self.featureDesignerList = self.designersArray.onlyFeature();
	self.exclusiveDesignerList = self.designersArray.onlyExclusive();

	self.justinAlexander = self.designersArray.getDesigner("Justin Alexander");
	self.nicoleSpose = self.designersArray.getDesigner("Nicole Spose");
	self.eddieK = self.designersArray.getDesigner("Eddy K");
	self.rosaClara = self.designersArray.getDesigner("Rosa Clará");
	self.venus = self.designersArray.getDesigner("Venus");
	self.judeJowilson = self.designersArray.getDesigner("Jude Jowilson");
	self.additionalDesigner = self.designersArray.getDesigner("Additional Designers");



	self.clickedFeature = false;
	self.clickedExclusive = false;
	self.viewFeature = false;
	self.viewExclusive = false;
	self.mainHtml = true;
	self.selectedImage;
	self.selectedArray;
	self.selectedIndex;
	self.clickedThumbNail = false;
	self.feature_page = 1;
	self.exclusive_page = 1;
	self.records_per_page = 9;

	self.closeDesignerImageGallery = function() {
		self.clickedThumbNail = false
		self.current_page = 1;
		self.designerFullImages;
		self.numPages;
		self.viewFeature = false;
		self.viewExclusive = false;
	};

	self.viewLargeImage = function(image, array, index) {
		self.selectedImage = image;
		self.selectedArray = array;
		self.selectedIndex = index;
		self.clickedThumbNail = true;
	}

	self.closeDesignerImageGallerySelectedImage = function() {
		self.clickedThumbNail = false;
	}

	self.prevPage = function(array) {
		self.currentArray = array;
		if(self.selectedIndex === 0){
			self.selectedIndex = self.currentArray.length - 1;
		} else {
			self.selectedIndex = self.selectedIndex - 1;
		}
		    // if (self.feature_page < self.featurePages){
		    //     self.feature_page++;
		    //     self.featureImages = PaginateDesigner.PaginateDesignerFunction(array);
		    // }
		self.selectedImage = PaginateDesigner.ChangeImage(self.currentArray, self.selectedIndex);

	}

	self.nextPage = function(array) {
		self.currentArray = array;
		if(self.selectedIndex === self.currentArray.length - 1){
			self.selectedIndex = 0;
		} else {
			self.selectedIndex = self.selectedIndex + 1;
		}
		    // if (self.feature_page < self.featurePages){
		    //     self.feature_page++;
		    //     self.featureImages = PaginateDesigner.PaginateDesignerFunction(array);
		    // }
		self.selectedImage = PaginateDesigner.ChangeImage(self.currentArray, self.selectedIndex);
	}

})



})();