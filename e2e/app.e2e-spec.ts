import { Ng4RedditAppPage } from './app.po';

describe('ng4-reddit-app App', () => {
  let page: Ng4RedditAppPage;

  beforeEach(() => {
    page = new Ng4RedditAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
