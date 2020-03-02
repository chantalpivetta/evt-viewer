'use strict';

import '../styles/main.scss';

require('../../bower_components/angular/angular.js');
require('../../bower_components/json3/lib/json3.min.js');
require('../../bower_components/angular-animate/angular-animate.js');
require('../../bower_components/angular-cookies/angular-cookies.js');
require('../../bower_components/angular-messages/angular-messages.js');
require('../../bower_components/angular-resource/angular-resource.js');
require('../../bower_components/angular-route/angular-route.js');
require('../../bower_components/angular-sanitize/angular-sanitize.js');
require('../../bower_components/angular-xml/angular-xml.js');
require('../../bower_components/angular-touch/angular-touch.js');
require('../../bower_components/angular-pretty-xml/src/angular-pretty-xml.js');
// require('../../bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js');
require('../../bower_components/angular-translate/angular-translate.js');
require('../../bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js');
require('../../bower_components/angular-loading-bar/build/loading-bar.js');
require('../../bower_components/ngprogress/build/ngprogress.min.js');
// require('../../bower_components/angularjs-slider/dist/rzslider.js');
// require('../../bower_components/angular-xslt/src/ng-xslt.js');
require('../../bower_components/angular-simple-logger/dist/angular-simple-logger.js');
require('../../bower_components/leaflet/dist/leaflet-src.js');
require('../../bower_components/ui-leaflet/dist/ui-leaflet.js');
// require('./tmpl/templates.js');

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

require('./core/core.js');
require('./core/GLOBALDEFAULTCONF.constant.js');
require('./core/utils.provider.js');
require('./core/config.provider.js');
require('./core/log.enhance.js');
require('./core/eventDispatcher.service.js');
require('./core/compile.directive.js');
require('./core/filters.js');
require('./core/XPATH.constant.js');
require('./dataHandler/dataHandler.js');
require('./dataHandler/baseData.service.js');
require('./dataHandler/parsedData.service.js');
require('./dataHandler/parser.service.js');
require('./dataHandler/criticalApparatusParser.service.js');
require('./dataHandler/criticalApparatus.service.js');
require('./dataHandler/namedEntitiesParser.service.js');
require('./dataHandler/primarySourcesParser.service.js');
require('./dataHandler/projectInfoParser.service.js');
require('./dataHandler/criticalParser.service.js');
require('./dataHandler/sourcesParser.service.js');
require('./dataHandler/sourcesApparatus.service.js');
require('./dataHandler/analoguesParser.service.js');
require('./dataHandler/analoguesApparatus.service.js');
require('./dataHandler/criticalElementsParser.service.js');
require('./dataHandler/versionApparatus.service.js');
require('./dataHandler/bibliographyParser.service.js');
require('./dataHandler/hotspotParser.service.js');
require('./dataHandler/glyphParser.service.js');
require('./dataHandler/depaParser.service.js');
require('./dataHandler/search/objectBuilder.service.js');
require('./dataHandler/search/search.service.js');
require('./dataHandler/search/searchInterface.service.js');
require('./dataHandler/search/searchDocument.service.js');
require('./dataHandler/search/searchParser.service.js');
require('./dataHandler/search/searchParagraphLineParser.service.js');
require('./dataHandler/search/searchLbParser.service.js');
require('./dataHandler/search/diplomaticEditionHandler.service.js');
require('./dataHandler/search/interpretativeEditionHandler.service.js');
require('./dataHandler/search/diplomaticParagraphLineHandler.service.js');
require('./dataHandler/search/diplomaticLbHandler.service.js');
require('./dataHandler/search/virtualKeyboard.service.js');
require('./bibliography/bibliography.js');
require('./bibliography/scrollif.directive.js');
require('./bibliography/highlight.service.js');
require('./bibliography/bibliography.provider.js');
require('./bibliography/bibliography.controller.js');
require('./bibliography/bibliography.directive.js');
require('./bibliography/biblElem.controller.js');
require('./bibliography/biblElem.directive.js');
require('./interface/interface.js');
require('./interface/interface.configuration.js');
require('./interface/interface.controller.js');
require('./interface/interface.service.js');
require('./reference/ref.js');
require('./reference/ref.configuration.js');
require('./reference/ref.provider.js');
require('./reference/ref.controller.js');
require('./reference/ref.directive.js');
require('./communication/communication.js');
require('./communication/communication.service.js');
require('./translation/translation.js');
require('./translation/translation.service.js');
require('./UItools/UItools.service.js');
require('./UItools/imageTextLinking.service.js');
require('./UItools/pinnedElements.service.js');
require('./box/box.js');
require('./box/box.configuration.js');
require('./box/box.provider.js');
require('./box/box.directive.js');
require('./select/select.js');
require('./select/select.configuration.js');
require('./select/select.provider.js');
require('./select/select.controller.js');
require('./select/select.directive.js');
require('./buttonSwitch/buttonSwitch.js');
require('./buttonSwitch/buttonSwitch.provider.js');
require('./buttonSwitch/buttonSwitch.directive.js');
require('./popover/popover.js');
require('./popover/popover.configuration.js');
require('./popover/popover.provider.js');
require('./popover/popover.controller.js');
require('./popover/popover.directive.js');
require('./list/list.js');
require('./list/list.provider.js');
require('./list/list.directive.js');
require('./namedEntity/namedEntity.js');
require('./namedEntity/namedEntity.configuration.js');
require('./namedEntity/namedEntity.provider.js');
require('./namedEntity/namedEntity.directive.js');
require('./namedEntity/namedEntityRef.provider.js');
require('./namedEntity/namedEntityRef.directive.js');
require('./namedEntity/genericEntity.service.js');
require('./criticalApparatusEntry/criticalApparatusEntry.js');
require('./criticalApparatusEntry/criticalApparatusEntry.configuration.js');
require('./criticalApparatusEntry/criticalApparatusEntry.provider.js');
require('./criticalApparatusEntry/criticalApparatusEntry.controller.js');
require('./criticalApparatusEntry/criticalApparatusEntry.directive.js');
require('./criticalApparatusEntry/criticalApparatusEntry.witnessRef.directive.js');
require('./reading/reading.js');
require('./reading/reading.configuration.js');
require('./reading/reading.provider.js');
require('./reading/reading.controller.js');
require('./reading/reading.directive.js');
require('./dialog/dialog.js');
require('./dialog/dialog.configuration.js');
require('./dialog/dialog.provider.js');
require('./dialog/dialog.directive.js');
require('./tabsContainer/tabsContainer.js');
require('./tabsContainer/tabsContainer.provider.js');
require('./tabsContainer/tabsContainer.controller.js');
require('./tabsContainer/tabsContainer.directive.js');
require('./toc/toc.js');
require('./toc/toc.provider.js');
require('./toc/toc.controller.js');
require('./toc/toc.directive.js');
require('./quote/quote.js');
require('./quote/quote.configuration.js');
require('./quote/quote.provider.js');
require('./quote/quote.controller.js');
require('./quote/quote.directive.js');
require('./sourcesApparatusEntry/sourcesApparatusEntry.js');
require('./sourcesApparatusEntry/sourcesApparatusEntry.configuration.js');
require('./sourcesApparatusEntry/sourcesApparatusEntry.provider.js');
require('./sourcesApparatusEntry/sourcesApparatusEntry.controller.js');
require('./sourcesApparatusEntry/sourcesApparatusEntry.directive.js');
require('./sourcesApparatusEntry/sourceRef.directive.js');
require('./sourcesApparatusEntry/sourceSeg.provider.js');
require('./sourcesApparatusEntry/sourceSeg.controller.js');
require('./sourcesApparatusEntry/sourceSeg.directive.js');
require('./analogue/analogue.js');
require('./analogue/analogue.configuration.js');
require('./analogue/analogue.provider.js');
require('./analogue/analogue.controller.js');
require('./analogue/analogue.directive.js');
require('./analoguesApparatusEntry/analoguesApparatusEntry.js');
require('./analoguesApparatusEntry/analoguesApparatusEntry.configuration.js');
require('./analoguesApparatusEntry/analoguesApparatusEntry.provider.js');
require('./analoguesApparatusEntry/analoguesApparatusEntry.controller.js');
require('./analoguesApparatusEntry/analoguesApparatusEntry.directive.js');
require('./apparatuses/apparatuses.js');
require('./apparatuses/apparatuses.configuration.js');
require('./apparatuses/apparatuses.provider.js');
require('./apparatuses/apparatuses.controller.js');
require('./apparatuses/apparatuses.directive.js');
require('./versionReading/versionReading.js');
require('./versionReading/versionReading.provider.js');
require('./versionReading/versionReading.controller.js');
require('./versionReading/versionReading.directive.js');
require('./versionApparatusEntry/versionApparatusEntry.js');
require('./versionApparatusEntry/versionApparatusEntry.provider.js');
require('./versionApparatusEntry/versionApparatusEntry.controller.js');
require('./versionApparatusEntry/versionApparatusEntry.directive.js');
require('./versionApparatusEntry/versionRef.provider.js');
require('./versionApparatusEntry/versionRef.directive.js');
require('./imageViewer/imageViewer.js');
require('./imageViewer/viewerOSD.directive.js');
require('./imageViewer/imageViewer.controller.js');
require('./imageViewer/imageViewer.service.js');
require('./imageViewer/imageViewer.provider.js');
require('./imageViewer/imageViewer.configuration.js');
require('./imageViewer/viewerOSD.service.js');
require('./imageViewer/scrollmap.service.js');
require('./imageViewer/overlayHandler.service.js');
require('./search/search.js');
require('./search/searchBox.directive.js');
require('./search/searchBox.controller.js');
require('./search/searchBox.provider.js');
require('./search/searchBox.configuration.js');
require('./search/searchResults.directive.js');
require('./search/searchResults.controller.js');
require('./search/searchResults.provider.js');
require('./dataHandler/search/searchIndex.service.js');
require('./dataHandler/search/searchQuery.service.js');
require('./dataHandler/search/searchResults.service.js');
require('./search/virtualKeyboard.directive.js');
require('./search/virtualKeyboard.provider.js');
require('./navBar/navBar.js');
require('./navBar/navBar.configuration.js');
require('./navBar/navBar.provider.js');
require('./navBar/navBar.controller.js');
require('./navBar/navBar.directive.js');
require('./visColl/visColl.js');
require('./visColl/visColl.configuration.js');
require('./visColl/visColl.provider.js');
require('./visColl/visColl.controller.js');
require('./visColl/visColl.directive.js');

angular.module('evtviewer', [
	'ngAnimate',
	'ngCookies',
	'ngMessages',
	'ngResource',
	'ngSanitize',
	'ngTouch',
	'ngRoute',
	// 'rzModule',
	'xml',
	// 'ngXslt',
	'prettyXml',
	// 'infinite-scroll',
	'pascalprecht.translate',
	'evtviewer.core',
	'evtviewer.communication',
	'evtviewer.translation',
	'evtviewer.dataHandler',
	'evtviewer.interface',
	'evtviewer.box',
	'evtviewer.select',
	'evtviewer.buttonSwitch',
	'evtviewer.popover',
	'evtviewer.namedEntity',
	'evtviewer.criticalApparatusEntry',
	'evtviewer.reading',
	'evtviewer.dialog',
	'evtviewer.bibliography',
	'evtviewer.reference',
	'evtviewer.list',
	'evtviewer.quote',
	'evtviewer.tabsContainer',
	'evtviewer.sourcesApparatusEntry',
	'evtviewer.analogue',
	'evtviewer.analoguesApparatusEntry',
	'evtviewer.apparatuses',
	'evtviewer.versionReading',
	'evtviewer.versionApparatusEntry',
	'evtviewer.UItools',
	'evtviewer.navBar',
	'evtviewer.visColl',
	'evtviewer.search',
	'evtviewer.imageViewer',
	'evtviewer.toc',
	'ui-leaflet'
]);
