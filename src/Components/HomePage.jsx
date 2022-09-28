import * as React from 'react';
import { Button } from 'antd-mobile';
export default function HomePage(prop) {
  return (
    <>
      <header
        style={{
          background: '#001529',
          color: '#fff',
          textAlign: 'end',
          height: '50px',
        }}
      >
        <Button
          color="default"
          size="small"
          style={{ marginTop: '10px', marginRight: '10px' }}
        >
          Выход
        </Button>
      </header>
      <div
        style={{
          background: '#f5f5f5',
          height: '600px',
          color: 'black',
          fontSize: '30px',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Нет активных вкладок
      </div>
    </>
  );
}
