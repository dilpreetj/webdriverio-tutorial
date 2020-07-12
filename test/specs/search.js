import SearchPage from '../pages/search.page';
import { waitForTextChange } from '../utilities/helper';
import resources from '../resources';

describe('Ebay Product Search', () => {
  it('should open the main url and verify the title', () => {
    SearchPage.open();
    expect(browser).toHaveTitle(resources.homeTitle);
  });

  it('should search for a product and verify the search text value', () => {
    SearchPage.searchInput.addValue('Laptop');
    SearchPage.searchBtn.click();

    expect(SearchPage.searchInput).toHaveValue('Laptop');
  });

  it('should redirect to a new page and verify the title', () => {
    expect(browser).toHaveTitle(resources.laptopTitle);
  });

  it('should update the search category', () => {
    waitForTextChange(SearchPage.category, 'PC Laptops & Netbooks', 10000);
    expect(SearchPage.category).toHaveText('PC Laptops & Netbooks');
  });
});
