const { After, Before, BeforeStep} = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const dns = require("dns");
const  fs = require('fs');


Before(async function() {
  dns.setDefaultResultOrder("ipv4first");
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

var screenshotNumber = 0;

BeforeStep(async function(test) {
  const featurePath = test.pickle.uri.split('/').pop().split('\\').pop().split('.')[0];
  const screenshotsPath = process.cwd().replace('/kraken-tests/v5.81.1', '').replace('\\kraken-tests\\v5.81.1', '') + '/screenshots/' + featurePath;

  if (!fs.existsSync(screenshotsPath)) {
    fs.mkdirSync(screenshotsPath,{recursive: true,});
  }

  await this.driver.saveScreenshot(screenshotsPath+'/before_' + screenshotNumber + '.png');

  screenshotNumber +=1;
});
