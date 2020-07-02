import SearchPage from '../pages/search.page';

describe('Ebay Product Search', () => {
  it('should open the main url and verify the title', () => {
    SearchPage.open();
    expect(browser).toHaveTitle(
      'Electronics, Cars, Fashion, Collectibles & More | eBay'
    );
  });

  it('should search for a product and verify the search text value', () => {
    SearchPage.searchInput.addValue('Laptop');
    SearchPage.searchBtn.click();

    expect(SearchPage.searchInput).toHaveValue('Laptop');
  });

  it('should redirect to a new page and verify the title', () => {
    expect(browser).toHaveTitle('Laptop | eBay');
  });

  it('should update the search category', () => {
    expect(SearchPage.category).toHaveText('PC Laptops & Netbooks');
  });
});
