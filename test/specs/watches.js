import { expect as chaiExpect } from 'chai';
import WatchesPage from '../pages/watches.page';
import { waitAndClick } from '../utilities/helper';
import resources from '../resources';

describe('Watches Page', () => {
  before(() => {
    WatchesPage.open();
    WatchesPage.fashionLink.moveTo();
    // browser.pause(1000); // Implicit Wait
    waitAndClick(WatchesPage.watchesLink, 10000);
  });

  it('should verify the watches category list', () => {
    const watchesCategoryList = WatchesPage.getWatchesCategoryListText();
    chaiExpect(watchesCategoryList).to.deep.equal(
      resources.watchesCategoryList
    );
  });

  it('should show the banner container', () => {
    expect(WatchesPage.promoBanner).toBeDisplayed();
  });

  it('should show the banner title', () => {
    expect(WatchesPage.infoTitle).toHaveTextContaining('shoes');
  });

  it('should contain link on banner button and verify its clickable', () => {
    expect(WatchesPage.shopButton).toHaveLinkContaining('/fashion/');
    expect(WatchesPage.shopButton).toBeClickable();
  });

  it('should click on the shop button and verify the new url', () => {
    WatchesPage.shopButton.click();
    const url = browser.getUrl();
    chaiExpect(url).to.include('/fashion/');
  });
});
