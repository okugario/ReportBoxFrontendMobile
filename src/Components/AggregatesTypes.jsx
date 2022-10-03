import { Button, List } from 'antd-mobile';
import React from 'react';

export default function () {
  return (
    <>
      <header style={{ marginTop: '5px' }}>
        <Button size="small" color="primary">
          Добавить
        </Button>
        <Button size="small" color="danger" style={{ marginLeft: '5px' }}>
          Удалить
        </Button>
      </header>
      <List header="Наименование" style={{ height: 'calc(100vh - 14vh)' }}>
        <List.Item>Редуктор</List.Item>
        <List.Item>Передний мост</List.Item>
        <List.Item>Заданий мост</List.Item>
        <List.Item>ДВС</List.Item>
        <List.Item>ГМП</List.Item>
      </List>
    </>
  );
}
