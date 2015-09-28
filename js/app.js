requirejs.config({
  "baseUrl": "js/vendors",
  "paths": {
    "app": "../app",
    "jquery": 'jquery.min',
    'bootstrap': 'bootstrap.min'
  },
  "shim": {
    "bootstrap": ["jquery"]
  }
});

require(['app/main']);
