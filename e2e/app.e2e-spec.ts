import { SmartHomeFrontendPage } from './app.po';

describe('smart-home-frontend App', function() {
  let page: SmartHomeFrontendPage;

  beforeEach(() => {
    page = new SmartHomeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
