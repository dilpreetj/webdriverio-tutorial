import WatchesPage from '../pages/watches.page';

describe('Watches Page', () => {
  it('should show the banner container', () => {
    WatchesPage.open();
    expect(WatchesPage.promoBanner).toBeDisplayed();
  });

  it('should show the banner title', () => {
    expect(WatchesPage.infoTitle).toHaveTextContaining('off on select watches');
  });

  it('should contain link on banner button and verify its clickable', () => {
    expect(WatchesPage.shopButton).toHaveLinkContaining('/fashion/');
    expect(WatchesPage.shopButton).toBeClickable();
  });

  it('should click on the shop button and verify the new url', () => {
    WatchesPage.shopButton.click();
    expect(browser).toHaveUrl(
      'https://www.ebay.com/e/fashion/watches-sfc-4th-of-july-062920'
    );
  });
});
