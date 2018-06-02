import { browser, by, By, element, protractor } from 'protractor';
import { Key } from 'selenium-webdriver';
import { isPending } from 'q';

export class AppPage {

  input = element(by.css('.name'));

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }

  copyToClipboard() {
    browser.sleep(500).then(() => {
      var input = element(by.css('.name'));
      var head = element(by.css('body > app-root > div.outlet > app-home > h2'));
      input.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'v'));
      head.isPresent().then((isPresent) => {
        console.log(isPresent);
      

      });

      browser.sleep(5000);
    });
  }

  print() {
    browser.sleep(5000).then(() => {
      this.input.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'v'));
      const enter = this.input.getAttribute('value');
      console.log(' pasted : ' + enter);
    });
  }

}
