describe('Watches Page', () => {
  it('should show the banner container', () => {
    browser.url(
      'https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535'
    );
    const promoBanner = $('section.b-promobanner');
    expect(promoBanner).toBeDisplayed();
  });

  it('should show the banner title', () => {
    const infoTitle = $('.b-promobanner__info-title');
    expect(infoTitle).toHaveTextContaining('off on select watches');
  });

  it('should contain link on banner button and verify its clickable', () => {
    const shopButton = $('.b-promobanner__info-btn');
    expect(shopButton).toHaveLinkContaining('/fashion/');
    expect(shopButton).toBeClickable();
  });

  it('should click on the shop button and verify the new url', () => {
    const shopButton = $('.b-promobanner__info-btn');
    shopButton.click();
    expect(browser).toHaveUrl(
      'https://www.ebay.com/e/fashion/watches-sfc-4th-of-july-062920'
    );
  });
});
