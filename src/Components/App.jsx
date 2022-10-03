import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import GlobalStore from '../GlobalStore/GlobalStore';
import { observer, Provider } from 'mobx-react';
import { Button, TabBar } from 'antd-mobile';
import '../Styles/App.css';
import './AggregatesTypes';
import AggregatesTypes from './AggregatesTypes';
import { ApiFetch } from '../Helpers/Helpers';
const App = observer(() => {
  const RequestApplicationMenu = () => {
    ApiFetch(
      'api/configuration/GetApplicationMenu',
      'GET',
      undefined,
      (Response) => {
        GlobalStore.SetNewApplicationMenu(Response.Data);
      }
    );
  };
  useEffect(() => {
    RequestApplicationMenu();
  }, []);
  return (
    <Provider GlobalStore={GlobalStore}>
      <header className="header">
        <Button color="default" size="small">
          Выход
        </Button>
      </header>
      <div>
        {GlobalStore.OpenTabs.map((MenuElement) => {
          return (
            <Button
              key={MenuElement.Id}
              onClick={() => {
                GlobalStore.AddTab(MenuElement);
              }}
            >
              {MenuElement.Caption}
            </Button>
          );
        })}
      </div>
      <TabBar
        activeKey={GlobalStore.CurrentTabKey}
        style={{ height: '7vh' }}
        onChange={(Key) => {
          GlobalStore.SetNewCurrentTabKey(Key);
        }}
      >
        {GlobalStore.OpenTabs.map((Tab) => {
          return <TabBar.Item key={Tab.Id} title={Tab.Caption} />;
        })}
      </TabBar>
    </Provider>
  );
});
ReactDOM.render(<App />, document.getElementById('App'));
