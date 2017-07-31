import { NgUdemy1Page } from './app.po';

describe('ng-udemy1 App', () => {
  let page: NgUdemy1Page;

  beforeEach(() => {
    page = new NgUdemy1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
