import { expect as chaiExpect, assert } from 'chai';
import 'chai/register-should';

xdescribe('Watches Page', () => {
  it('should show the banner container', () => {
    browser.url(
      'https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535'
    );
    const promoBanner = $('section.b-promobanner');
    expect(promoBanner).toBeDisplayed();
  });

  it('should show the banner title', () => {
    const infoTitle = $('.b-promobanner__info-title');
    const infoTitleText = infoTitle.getText();

    expect(infoTitle).toHaveTextContaining('watches');
    chaiExpect(infoTitleText).to.not.be.empty;
    infoTitle.should.not.be.empty;
    // assert.isEmpty(infoTitleText);
  });

  it('should contain link on banner button and verify its clickable', () => {
    const shopButton = $('.b-promobanner__info-btn');
    const tag = shopButton.getTagName();

    expect(shopButton).toHaveLinkContaining('/fashion/');
    expect(shopButton).toBeClickable();
    chaiExpect(tag).to.equal('a');
    tag.should.be.equal('a');
  });

  it('should click on the shop button and verify the new url', () => {
    const shopButton = $('.b-promobanner__info-btn');
    shopButton.click();

    const url = browser.getUrl();
    chaiExpect(url).to.include('/fashion/');
  });
});
