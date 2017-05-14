import { TheSagaydachniyPage } from './app.po';

describe('the-sagaydachniy App', () => {
  let page: TheSagaydachniyPage;

  beforeEach(() => {
    page = new TheSagaydachniyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
