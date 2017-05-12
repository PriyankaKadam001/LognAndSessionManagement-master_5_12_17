import { WorkingPage } from './app.po';

describe('working App', () => {
  let page: WorkingPage;

  beforeEach(() => {
    page = new WorkingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
