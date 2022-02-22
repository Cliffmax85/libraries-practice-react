import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import MaterialTable from 'material-table';

function makeTable(object) {
  if (Array.isArray(object)) {
    object = object[0];
  }

  return Object.keys(object).map(key => ({ field: key, title: key }));
}

export default function CustomTable({ data }) {
  return (
    <div>
      <MaterialTable columns={makeTable(data)} data={data} title="Cool Table"
        localization={{
          pagination: {
            nextAriaLable: 'next',
            previousAriaLable: 'prev'
          }
        }}
      />
    </div>
  );
}
