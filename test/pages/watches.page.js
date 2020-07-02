import Page from './page';

class WatchesPage extends Page {
  get promoBanner() {
    return $('section.b-promobanner');
  }
  get infoTitle() {
    return $('.b-promobanner__info-title');
  }
  get shopButton() {
    return $('.b-promobanner__info-btn');
  }

  open() {
    super.open(
      'https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_240853'
    );
  }
}

export default new WatchesPage();
