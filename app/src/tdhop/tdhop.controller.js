angular.module('evtviewer.tdhop')
   .controller('TreDHOPCtrl', ["$scope", "$route", "evtInterface", "$log", "config", function ($scope, $route, evtInterface, $log, config) {
      var vm = this;
      var modello1 = config.tdhopViewerOptions.Model_1.name;
      var modello2 = config.tdhopViewerOptions.Model_2.name;
      //var modello3 = config.tdhopViewerOptions.Model_3.name;
      $scope.change = function () {
         presenter.setInstanceVisibility(HOP_ALL, false, false);
         presenter.setInstanceVisibility('Mesh_2_mesh', true, true);
      }
      $scope.data = {
         model: null,
         availableOptions: [
           {id: 'Mesh_1_mesh', name: modello1+" Cross"},
           {id: 'Mesh_2_mesh', name: modello2+" Cross"},
         ]
      };
      this.isToolHomeAvailable = function () {
         return config.tdhopViewerOptions.toolHome;
      };
      this.isToolZoominAvailable = function () {
         return config.tdhopViewerOptions.toolZoomin;
      };
      this.isToolZoomoutAvailable = function () {
         return config.tdhopViewerOptions.toolZoomout;
      };
      this.isToolLightingAvailable = function () {
         return config.tdhopViewerOptions.toolLighting;
      };
      this.isToolLightControlAvailable = function () {
         return config.tdhopViewerOptions.toolLightControl;
      };
      this.isToolPlaneSectionsAvailable = function () {
         return config.tdhopViewerOptions.toolPlaneSections;
      };
      this.isToolSolidColorAvailable = function () {
         return config.tdhopViewerOptions.toolSolidColor;
      };
      this.isToolCameraAvailable = function () {
         return config.tdhopViewerOptions.toolCamera;
      };
      this.isToolMeasureAvailable = function () {
         return config.tdhopViewerOptions.toolMeasure;
      };
      this.isToolPickPointAvailable = function () {
         return config.tdhopViewerOptions.toolPickPoint;
      };
      this.isToolHotspotAvailable = function () {
         return config.tdhopViewerOptions.toolHotspot;
      };
      this.isToolFullScreenAvailable = function () {
         return config.tdhopViewerOptions.toolFullScreen;
      };
      this.isToolSwitchModelAvailable = function () {
         return config.tdhopViewerOptions.toolSwitchModel;
      };
      this.isToolArrowsAvailable = function () {
         return config.tdhopViewerOptions.toolArrows;
      };
      this.isToolLightControllerAvailable = function () {
         return config.tdhopViewerOptions.toolLightController;
      };
   //}])
   //.controller('runeCtrl',[, function (){

   }]);
