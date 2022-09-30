import { makeAutoObservable } from 'mobx';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
} from 'antd-mobile-icons';
import React from 'react';
class GlobalStore {
  OpenTabs = [
    {
      key: 'home',
      title: 'Отчёты',
      icon: <AppOutline />,
    },
    {
      key: 'todo',
      title: 'Действия',
      icon: <UnorderedListOutline />,
    },
    {
      key: 'message',
      title: 'Администрирование',
      icon: <MessageOutline />,
    },
  ];
  CurrentTabKey = null;

  constructor() {
    makeAutoObservable(this);
  }

  SetNewCurrentTabKey(NewKey) {
    this.CurrentTabKey = NewKey;
  }
}
const Store = new GlobalStore();
export default Store;
