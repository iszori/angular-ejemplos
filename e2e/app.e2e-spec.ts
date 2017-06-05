import { CdmccxPage } from './app.po';

describe('cdmccx App', function() {
  let page: CdmccxPage;

  beforeEach(() => {
    page = new CdmccxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
