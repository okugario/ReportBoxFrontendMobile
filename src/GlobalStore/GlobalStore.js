import { makeAutoObservable } from 'mobx';
import SettingTab from '../Classes/SettingsTab';
import ReportTab from '../Classes/ReportTab';
class GlobalStore {
  OpenTabs = [];
  CurrentTabKey = null;

  constructor() {
    makeAutoObservable(this);
  }

  SetNewApplicationMenu(NewOpenTabs) {
    this.OpenTabs = NewOpenTabs;
  }

  SetNewCurrentTabKey(NewKey) {
    this.CurrentTabKey = NewKey;
  }

  AddTab(TabObject) {
    switch (TabObject.Id) {
      case 'Settings':
        this.OpenTabs.push(new SettingTab(TabObject, this.OpenTabs));
        break;
    }
    if (this.OpenTabs.length == 1) {
      this.CurrentTabKey = this.OpenTabs[0].Key;
    }
  }
  get GetCurrentTab() {
    if (this.OpenTabs.length > 0) {
      return this.OpenTabs.find((Tab) => {
        return Tab.Key == this.CurrentTabKey;
      });
    } else {
      return null;
    }
  }
}
const Store = new GlobalStore();
export default Store;
