import React, { useState, useEffect } from 'react';
import Orc from '../api/Orc';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import Avatar from '@material-ui/core/Avatar';
function Searchtable(props) {

  const [dataSource, setdataSource] = useState([]);

  const columns = [
    {
      field: 'thumbnail',
      headerName: 'Profile',
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <Avatar alt="Remy Sharp" src={params.value} />
          </div>
        )
      }
    },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'age', headerName: 'Age', width: 150 },
    { field: 'hair_color', headerName: 'Hair Color', width: 150 },
    { field: 'height', headerName: 'Height', width: 150 },
    { field: 'weight', headerName: 'Weight', width: 150 },
    { field: 'friends', headerName: 'Friends', width: 350 },
    { field: 'professions', headerName: 'Professions', width: 350 },
  ];

  useEffect(() => {
    Orc.getAll().then((res) => {
      setdataSource(res);
    })
  }, [])

  return (
    dataSource ?
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid rows={dataSource} columns={columns} pageSize={20}
          components={{
            Toolbar: GridToolbar
          }} />
      </div>
      : <div>Loading Data</div>
  );
}

export default Searchtable;