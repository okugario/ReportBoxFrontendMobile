import { BaseTab } from './BaseTab';
import React from 'react';

export default class SettingTab extends BaseTab {
  constructor(TabObject, OpenTabs) {
    super(TabObject, OpenTabs);
    this.Menu = this.SetComponents();
  }
  SetComponents() {
    return this.Menu.map((MenuElement) => {
      switch (MenuElement.key) {
        default:
          MenuElement.component = React.lazy(() =>
            import('../Components/ComponentNotFound')
          );
          break;
        case 'UnitTypes':
          MenuElement.component = React.lazy(() =>
            import('../Components/CRUDReference')
          );
      }

      return MenuElement;
    });
  }
}
