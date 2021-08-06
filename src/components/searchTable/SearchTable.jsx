import React, { useState, useEffect } from 'react';
import Orc from '../api/Orc';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Popper from "@material-ui/core/Popper";
function Searchtable(props) {

  const [dataSource, setdataSource] = useState([]);
  const useStyles = makeStyles(() => ({
    root: {
      alignItems: "center",
      lineHeight: "24px",
      width: "100%",
      height: "100%",
      position: "relative",
      display: "flex",
      "& .cellValue": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }
  }));
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
    { field: 'friends', headerName: 'Friends', width: 200, renderCell: renderCellExpand },
    { field: 'professions', headerName: 'Professions', width: 200, renderCell: renderCellExpand },
  ];
  const GridCellExpand = React.memo(function GridCellExpand(props) {
    const { width, value } = props;
    const wrapper = React.useRef(null);
    const cellDiv = React.useRef(null);
    const cellValue = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const [showFullCell, setShowFullCell] = React.useState(false);
    const [showPopper, setShowPopper] = React.useState(false);
  
    const handleMouseEnter = () => {
      const isCurrentlyOverflown = isOverflown(cellValue.current);
      setShowPopper(isCurrentlyOverflown);
      setAnchorEl(cellDiv.current);
      setShowFullCell(true);
    };
  
    const handleMouseLeave = () => {
      setShowFullCell(false);
    };
  
    React.useEffect(() => {
      if (!showFullCell) {
        return undefined;
      }
  
      function handleKeyDown(nativeEvent) {
        if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
          setShowFullCell(false);
        }
      }
  
      document.addEventListener("keydown", handleKeyDown);
  
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [setShowFullCell, showFullCell]);
  
    return (
      <div
        ref={wrapper}
        className={classes.root}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={cellDiv}
          style={{
            height: 1,
            width,
            display: "block",
            position: "absolute",
            top: 0
          }}
        />
        <div ref={cellValue} className="cellValue">
          {value}
        </div>
        {showPopper && (
          <Popper
            open={showFullCell && anchorEl !== null}
            anchorEl={anchorEl}
            style={{ width, marginLeft: -17 }}
          >
            <Paper
              elevation={1}
              style={{ minHeight: wrapper.current.offsetHeight - 3 }}
            >
              <Typography variant="body2" style={{ padding: 8 }}>
                {value}
              </Typography>
            </Paper>
          </Popper>
        )}
      </div>
    );
  });
  


  useEffect(() => {
    Orc.getAll().then((res) => {
      setdataSource(res);
    })
  }, [])
  
  function isOverflown(element) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }
  function renderCellExpand(params) {
    return (
      <GridCellExpand
        value={params.value ? params.value.toString() : ""}
        width={params.colDef.width}
      />
    );
  }

  return (
    dataSource ?
      <div style={{ height: 600, width: '100%', flexGrow: 1 }}>
        <DataGrid rows={dataSource} columns={columns} pageSize={20}
          components={{
            Toolbar: GridToolbar
          }} />
      </div>
      : <div>Loading Data</div>
  );
}

export default Searchtable;