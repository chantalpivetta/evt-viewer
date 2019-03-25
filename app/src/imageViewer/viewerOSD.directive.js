"use strict";

   var module = angular.module("evtviewer.openseadragon", ["evtviewer.imageViewer",'evtviewer.openseadragonService', "evtviewer.interface"]);
  

   module.directive("osd", ['$timeout', 'imageViewerHandler', "evtInterface","osd", function ($timeout, imageViewerHandler, evtInterface, osd) {
      return {
         
        restrict: "E",
         
         scope: {
            options: "=",
            name: "=",
            tilesource: "=",
            prefixUrl: "=",
         },
         
        //  controller: ["$scope", function ($scope) {
        //     $scope.osd = null;
        //  }],

         controller: "imageViewerCtrl",

         template: "<div id='osd-img' class='box-image box-body Edition noBottomMenu'></div>",

         transclude: true,
         //templateUrl: 'src/imageViewer/imageViewer.directive.tmpl.html',

         link: function (scope, element, attrs) {

            console.log("funzione link della direttiva seadragon");
            console.log("test provider: ", osd.test('PROVIDER FUNGE?!'));
                      

            $timeout(function () {

               console.log("scope in timeout osd directive", scope);
               console.log("imageviewer in timeout osd build", osd.build(attrs.name));
               //var _options = scope.$parent.options; 
                var _options = osd.build(attrs.name); 
               
               console.log("options in timeout osd directive", _options);
               //var viewer = OpenSeadragon(scope.$parent.$parent.options);
               console.log('div OSD', document.getElementById('osd-img'));
               var viewer = null;
               try{
                viewer = new OpenSeadragon.Viewer(_options);
              }
               catch (err){

              console.log("viewer in timeout osd directive errore", err);

             }

             console.log("viewer in timeout osd directive OK", viewer);

               scope.osd = viewer;
               scope.$parent[attrs.name] = viewer;
               scope.coeff = osd.getCoeff();
               console.log('image coeff', scope.coeff);

               imageViewerHandler.setViewer(viewer);
               imageViewerHandler.setScope(scope);

               scope.osd.addOnceHandler("open", imageViewerHandler.openPage,evtInterface.getState('currentPage').slice(-1),1);
               //scope.osd.addHandler("home", imageViewerHandler.home);

               //scope.osd.addHandler('navigator-scroll', imageViewerHandler.navigatorScroll);

               //scope.osd.addHandler('pan', imageViewerHandler.pan);

                scope.$watch(function() {
                    return evtInterface.getState('currentPage');
                }, function(newItem, oldItem) {
                  if (oldItem !== newItem) {
                    console.log("aggiorno contenuto viewer per pagina del testo");
                    var doctype="page"
                    if(doctype==="scroll")
                      imageViewerHandler.updateViewerBounds(newItem);
                    else if(doctype==="page")
                      imageViewerHandler.updateViewerPage(newItem.slice(-1)-1);
                    else
                      console.error('problema con la paginazione!!!');
                  }
                }, true);
            

            }, 10);



            //When element is destroyed, destroy the viewer
            element.on('$destroy', function () {
               //if @nam eis set, remove it from parent scope, and remove event handlers
               if (attrs.name) {
                  //Remove from parent scope
                  scope.$parent[attrs.name] = null;
               }

               //Destroy mouse handler
               //scope.mouse.destroy();
               //optionsWatcher();
               //Remove event handlers
               scope.osd.removeHandler("open", imageViewerHandler.open);
               scope.osd.removeHandler("open", imageViewerHandler.openPage);
               scope.osd.removeHandler("home", imageViewerHandler.home);
               scope.osd.removeHandler("navigator-scroll", imageViewerHandler.navigatorScroll);
               scope.osd.removeHandler("pan", imageViewerHandler.pan);



               //Destroy the viewer
               scope.osd.destroy();
            });



            /* to extend the behavior of the viewer 
                    if (attrs.tilesource) {
                      opts.tileSources = [attrs.tilesource];
                    }
                    if (attrs.prefixUrl) {
                      opts.prefixUrl = attrs.prefixUrl;
                    }

                    function _bootstrap() {
                      if (scope.osd) {
                        scope.osd.destroy();
                        scope.osd = null;
                      }
                      //Create options object
                      var opts = angular.extend({}, scope.options, {
                        id: "openseadragon-" + Math.random(),
                        element: element[0],
                      });
                      //Create the viewer
                      scope.osd = OpenSeadragon(opts);
                      //Create a wrapper
                      var wrapper = {
                        mouse: {
                          position: null,
                          imageCoord: null,
                          viewportCoord: null,
                        },
                        zoom: 0,
                        viewport: {}
                      }

                      for(var key in scope.osd) {
                        wrapper[key] = scope.osd[key];
                      }

                      if (attrs.name) {
                        //Make the OSD available to parent scope
                        scope.$parent[attrs.name] = wrapper;
                        //Define event handlers
                        zoomHandler = function (e) {
                          $timeout(function() {
                            scope.$apply(function () {
                              wrapper.zoom = e.zoom;
                            });
                          },0);
                        }
                        updateViewportHandler = function (e) {
                          scope.$apply(function () {
                            wrapper.viewportInfo = {
                              bounds: scope.osd.viewport.getBounds(false),
                              center: scope.osd.viewport.getCenter(false),
                              rotation: scope.osd.viewport.getRotation(),
                              zoom: scope.osd.viewport.getZoom(false),
                            };
                          });
                        }

                        //Assign event handlers
                        scope.osd.addHandler("zoom", zoomHandler);
                        scope.osd.addHandler("update-viewport", updateViewportHandler);

                        //Add a mouse handler
                        scope.mouse = new OpenSeadragon.MouseTracker({
                          element: scope.osd.canvas,
                          enterHandler: function (e) {
                            if (scope.osd.viewport) {
                              var coord = OpenSeadragon.getElementPosition(scope.osd.canvas);
                              var pos = e.position.plus(coord);
                              var mouse = {
                                position: pos,
                                imageCoord: scope.osd.viewport.windowToImageCoordinates(pos),
                                viewportCoord: scope.osd.viewport.windowToViewportCoordinates(pos),
                              }
                              scope.$apply(function () {
                                wrapper.mouse = mouse;
                              });
                            }
                          },
                          moveHandler: function (e) {
                            if (scope.osd.viewport) {
                              var coord = OpenSeadragon.getElementPosition(scope.osd.canvas);
                              var pos = e.position.plus(coord);
                              var mouse = {
                                position: pos,
                                imageCoord: scope.osd.viewport.windowToImageCoordinates(pos),
                                viewportCoord: scope.osd.viewport.windowToViewportCoordinates(pos),
                              }
                              scope.$apply(function () {
                                wrapper.mouse = mouse;
                              });
                            }
                          },
                          exitHandler: function (e) {
                            scope.$apply(function () {
                              wrapper.mouse.position = null;
                              wrapper.mouse.imageCoord = null;
                              wrapper.mouse.viewportCoord = null;
                            });
                          },
                        });
                        scope.mouse.setTracking(true);
                      }

                    }
                    _bootstrap();
                    var optionsWatcher = scope.$watch('options', _bootstrap);

                    //if @name is set, put the wrapper in the scope and handle the events
                    var zoomHandler = null;
                    var updateViewportHandler = null;

            */

         },
      };
   }]);

