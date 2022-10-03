import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { ApiFetch, TableSorter } from '../Helpers/Helpers';
import { nanoid } from 'nanoid';
import TablleButtonBar from './TableButtonBar';
import TableButtonBar from './TableButtonBar';
import { List } from 'antd-mobile';

const CRUDReference = inject('GlobalStore')(
  observer((props) => {
    const [ObjectTable, SetNewObjectTable] = useState([]);
    const [SelectedKey, SetNewSelectedKey] = useState(null);
    const [SearchString, SetNewSearchString] = useState(null);
    const InputRef = React.createRef();
    const SearchRef = React.createRef();

    const RequestData = () => {
      ApiFetch(
        `api/${props.GlobalStore.GetCurrentTab.GetCurrentMenuElementKey}`,
        'GET',
        undefined,
        (Response) => {
          SetNewObjectTable(
            Response.Data.map((Object) => {
              Object.Key = nanoid();
              Object.Edited = false;
              return Object;
            })
          );
        }
      );
    };
    useEffect(() => {
      RequestData();
    }, [props.GlobalStore.GetCurrentTab.GetCurrentMenuElementKey]);

    return (
      <>
        <header style={{ marginTop: '5px' }}>
          <TableButtonBar
            onAdd={() => {
              AddObject();
            }}
            onDelete={() => {
              ShowDeleteModal();
            }}
          />
        </header>
        <List header="Наименование" style={{ height: 'calc(100vh - 14vh)' }}>
          {ObjectTable}
        </List>
      </>
    );
  })
);

export default CRUDReference;
