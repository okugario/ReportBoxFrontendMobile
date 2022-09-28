import * as React from 'react';
import { Button, TabBar } from 'antd-mobile';
import '../Styles/HomePage.css';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
} from 'antd-mobile-icons';

export default function HomePage() {
  const tabs = [
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
      icon: () => <MessageOutline />,
    },
  ];

  return (
    <>
      <header className="header">
        <Button color="default" size="small">
          Выход
        </Button>
      </header>
      <div
        style={{
          background: '#f5f5f5',
          height: 'calc(100vh - 14vh)',
          color: 'black',
          fontSize: '28px',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Нет активных вкладок
      </div>
      <TabBar style={{ height: '7vh' }}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </>
  );
}
