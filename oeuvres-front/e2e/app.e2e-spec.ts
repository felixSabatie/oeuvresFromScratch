import { OeuvresFrontPage } from './app.po';

describe('oeuvres-front App', function() {
  let page: OeuvresFrontPage;

  beforeEach(() => {
    page = new OeuvresFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
