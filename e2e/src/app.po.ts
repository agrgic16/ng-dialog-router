import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  navigateToDialog0() {
    return browser.get(`${browser.baseUrl}/home/0`);
  }

  getDialog0TitleText() {
    return element(by.css('h3')).getText() as Promise<string>;
  }
}
