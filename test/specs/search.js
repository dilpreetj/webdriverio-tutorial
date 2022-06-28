describe('Ebay Product Search', () => {
  it('should open the main url and verify the title', async () => {
    await browser.url('https://www.google.com/');
    expect(browser).toHaveTitle(
      'Google'
    );
  });
});
