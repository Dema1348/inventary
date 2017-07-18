import { Component } from '@angular/core';

import { ActivesPage } from '../actives/actives';
import { ConfigPage } from '../config/config';
import { FindPage } from '../find/find';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ActivesPage;
  tab2Root = FindPage;
  tab3Root = ConfigPage;

  constructor() {

  }
}
