import React from 'react';
import { List } from 'antd-mobile';
import '../Styles/AdministrationPageMenu.css';
import { ListItem } from 'antd-mobile/es/components/list/list-item';

export default function AdministrationPageMenu() {
  return (
    <>
      <List>
        <ListItem>Типы агрегатов</ListItem>
        <ListItem>Производители</ListItem>
        <ListItem>Типы транспорта</ListItem>
        <ListItem>Состояние агрегатов</ListItem>
        <ListItem>Типы грузов</ListItem>
        <ListItem>Пользователи</ListItem>
        <ListItem>Роли пользователей</ListItem>
        <ListItem>Организации</ListItem>
        <ListItem>Группы</ListItem>
        <ListItem>Терминалы</ListItem>
        <ListItem>Модели</ListItem>
        <ListItem>Транспорт</ListItem>
        <ListItem>Агрегаты</ListItem>
        <ListItem>Ретрансляторы</ListItem>
      </List>
    </>
  );
}
