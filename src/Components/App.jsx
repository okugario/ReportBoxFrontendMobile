import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStore from '../GlobalStore/GlobalStore';
import { observer, Provider } from 'mobx-react';
import { Button, TabBar } from 'antd-mobile';
import '../Styles/App.css';
const App = observer(() => {
  return (
    <Provider GlobalStore={GlobalStore}>
      <header className="header">
        <Button color="default" size="small">
          Выход
        </Button>
      </header>
      <div className="middle">Нет активных вкладок</div>
      <TabBar
        activeKey={GlobalStore.CurrentTabKey}
        style={{ height: '7vh' }}
        onChange={(Key) => {
          GlobalStore.SetNewCurrentTabKey(Key);
        }}
      >
        {GlobalStore.OpenTabs.map((item) => {
          return (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          );
        })}
      </TabBar>
    </Provider>
  );
});
ReactDOM.render(<App />, document.getElementById('root'));
