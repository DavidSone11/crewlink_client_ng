/*==========================================================
    Author      : Santosh
    Date Created: 6 Nov 2017
    Description : Global configuration defined here
 ===========================================================*/

 var appConfiguration = {
    title: "Corporate Directory : A MIT PROJECT",
    lang: "en",
    dateFormat: "mm/dd/yy",
    apiBase: 'http://192.168.168.213:3000/api/',
    theme: 'skin-purple',
    layout:""
};

var api = {
    protocol: 'http',
    server: 'localhost',
    port: 8888,
    baseUrl: '/api/v1',
    loginUrl: '/login',
    registerUrl: '/register',
    userPlan: "/userPlan",
    getGlobalSections: "/globalSections",
    getPlanSections: "/userPlanSectionsList"
};


var apiUrl = api.protocol + '://' + api.server + ':' + api.port + api.baseUrl;
var apiLoginUrl = api.protocol + '://' + api.server + ':' + api.port + api.loginUrl;
var apiRegisterUrl = api.protocol + '://' + api.server + ':' + api.port + api.registerUrl;
var apiGetTrainStations = apiUrl + api.getTrainStations;
var apiGetglobalSections = apiUrl + api.getGlobalSections;
var apiGetPlanSections = apiUrl + api.getPlanSections;