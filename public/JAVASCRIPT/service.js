(function() {
  'use strict';

angular.module('DesignerService', ['DesignerValue'])

.factory('DesignerListFactory', function(){
	function DesignerListFactory(array){
		this.designerArray = array/// ends designer array
	};/// ends designerlistFactory function()

	DesignerListFactory.prototype.onlyExclusive = function(){
		this.exclusive = [];
		for(var i = 0; i < this.designerArray.length; i ++){
			this.designer = this.designerArray[i];
			if(this.designer.featureOrExclusive === "exclusive") {
				this.isExclusive = this.designer;
				this.exclusive.push(this.isExclusive);
			}
		}
		this.exclusiveArray = this.exclusive;
		return this.exclusiveArray;
	};

	DesignerListFactory.prototype.onlyFeature = function(){
		this.feature = [];
		for(var i = 0; i < this.designerArray.length; i ++){
			this.designer = this.designerArray[i];
			if(this.designer.featureOrExclusive === "feature") {
				this.isFeature = this.designer;
				this.feature.push(this.isFeature);
			}
		}
		this.featureArray = this.feature;
		return this.featureArray;
	};

	DesignerListFactory.prototype.getDesigner = function(name){
		this.additionalDesignerArray = [];
		this.additionalDesignerGalleryArray;
		this.additionalDesignerArrayAndGallery;
		for(var i = 0; i < this.designerArray.length; i ++){
			this.designerObject = this.designerArray[i];
			if(this.designerObject.name === name) {
				this.additionalDesignerArray.push(this.designerObject);
			}
		}

		for(var i = 0; i < this.additionalDesignerArray.length; i ++){
			this.additionalDesignerGalleryArray = this.additionalDesignerArray[i].gallery;
		}

		this.additionalDesignerArrayAndGallery = [this.additionalDesignerArray, this.additionalDesignerGalleryArray];
		return this.additionalDesignerArrayAndGallery;
	};

	return DesignerListFactory;
})//// ends designerlistfactory

.service('PaginateDesigner', function(DesignerListFactory, CollectionArray){
	var self = this;
	self.PaginateDesignerFunction = function(designer, page){
		self.designerPaginateArray = [];
		self.designerList = new DesignerListFactory(CollectionArray);
		self.designerImages = self.designerList.viewDesignerGallery(designer);
		self.records_per_page = 9;
		for (var i = (page-1) * self.records_per_page; i < (page * self.records_per_page) && i < self.designerImages.length; i++) {
			self.designerPaginateArray.push(self.designerImages[i]);
    	}
  		return self.designerPaginateArray;
	};


	self.ChangeImage = function(array, index){
		self.galleryArray = array;
		self.galleryNewImageObject;
		self.galleryNewImage;
		for(var i = 0; i < self.galleryArray.length; i++){
			self.galleryImages = self.galleryArray[i];
				self.galleryNewImage = self.galleryArray[index].img;
		}

		return self.galleryNewImage;
	}

})


})();

