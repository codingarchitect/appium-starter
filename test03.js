var yiewd = require("yiewd");
var appDriver =yiewd.remote({
    hostname: '127.0.0.1',
    port: 4723,
})

var config = {};

config.android19Hybrid = {
   automationName: 'Appium',
   browserName: '',
   platformName: 'Android',
   platformVersion: '4.4.2',// API level integer, or a version string like '4.4.2'
   autoWebview: true,
   deviceName:'613fea29',
   app: 'C:\\sendhil\\src\\appium-starter\\android-debug.apk'
};

appDriver.run(function*() {
  // 'this' is appDriver
  var session = yield this.init(config.android19Hybrid);
  var txtZip = yield this.elementByName('userName');
  this.quit();
});
