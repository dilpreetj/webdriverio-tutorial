import Page from './page';

class WatchesPage extends Page {
  get promoBanner() {
    return $('section.b-promobanner'); // findElement
  }
  get infoTitle() {
    return $('.b-promobanner__info-title');
  }
  get shopButton() {
    return $('.b-promobanner__info-btn');
  }
  get watchesCategoryList() {
    return $$('section[id="s0-29-13-0-1[0]-0-0"] ul li'); // 6 elements
  }

  open() {
    super.open(
      'https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_240853'
    );
  }

  getWatchesCategoryListText() {
    const watchesList = [];
    this.watchesCategoryList.map((element) =>
      watchesList.push(element.getText())
    );
    return watchesList;
  }
}

export default new WatchesPage();
