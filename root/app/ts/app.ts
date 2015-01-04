/// <reference path="../vendor/DefinitelyTyped\angularjs/angular.d.ts" />
{%if (importedModules.indexOf('ngRoute') !== -1) {%}/// <reference path="../vendor/DefinitelyTyped\angularjs/angular-route.d.ts" />{%}%}
{%if (importedModules.indexOf('ngResource') !== -1) {%}/// <reference path="../vendor/DefinitelyTyped\angularjs/angular-resource.d.ts" />{%}%}
{%if (importedModules.indexOf('ngAnimate') !== -1) {%}/// <reference path="../vendor/DefinitelyTyped\angularjs/angular-animate.d.ts" />{%}%}
{%if (importedModules.indexOf('ngCookies') !== -1) {%}/// <reference path="../vendor/DefinitelyTyped\angularjs/angular-cookies.d.ts" />{%}%}
{%if (importedModules.indexOf('ngSanitize') !== -1) {%}/// <reference path="../vendor/DefinitelyTyped\angularjs/angular-sanitize.d.ts" />{%}%}
{%if (importedModules.indexOf('ui.router') !== -1) {%}/// <reference path="../vendor/DefinitelyTyped\angular-ui/angular-ui-router.d.ts" />{%}%}
{%if (importedModules.indexOf('pascalprecht.translate') !== -1) {%}/// <reference path="../vendor/DefinitelyTyped\angular-translate/angular-translate.d.ts" />{%}%}

/// <reference path="controllers/mainCtrl.ts" />

module app {
    'use strict';
    angular.module('{%= name %}', {%= importedModules %});

    angular.module('{%= name %}')
      .controller('mainCtrl',appCtrl.MainCtrl);

    {%if (importedModules.indexOf('ui.router') !== -1 && importedModules.indexOf('pascalprecht.translate') === -1) {%}
    angular.module('{%= name %}').config(['$stateProvider','$urlRouterProvider',function($stateProvider : IStateProvider, $urlRouterProvider : IUrlRouterProvider) {

      'use strict';

    }]);
    {%}%}

    {%if (importedModules.indexOf('pascalprecht.translate') !== -1 && importedModules.indexOf('ui.router') === -1) {%}
    angular.module('{%= name %}').config(['$translateProvider',function($translateProvider : ITranslateProvider) {

      'use strict';

    }]);
    {%}%}

    {%if (importedModules.indexOf('ui.router') !== -1 && importedModules.indexOf('pascalprecht.translate') !== -1) {%}
    angular.module('{%= name %}').config(['$stateProvider','$urlRouterProvider','$translateProvider',function($stateProvider : IStateProvider, $urlRouterProvider : IUrlRouterProvider, $translateProvider : ITranslateProvider) {

      'use strict';

    }]);
    {%}%}
}