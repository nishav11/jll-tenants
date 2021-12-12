import React from 'react';
import { withRouter } from "react-router-dom";
import { lighten, makeStyles } from "@material-ui/core";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {    
Paper, 
Table, 
TableBody, 
TableCell, 
TableContainer,
TableHead, 
TablePagination, 
TableRow,
IconButton,
Tooltip
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      boxShadow: "none",
    },
    table: {
      minWidth: 750,
      maxWidth: 750,
    },
    tablehead: {
      background: "#fcfcfc",
      borderTopWidth: "1px",
      borderBottomWidth: "1px",
      borderLeftWidth: "0px",
      borderRightWidth: "0px",
      borderStyle: "solid",
      borderColor: "#efefef",
    },
    tableheadcell: {
      color: "#4C3F91",
      fontWeight: 600,
      fontSize: '16px'
    },
    tabletextcell: {
      color: "#777777",
    },
    flex: {
        display: "flex !important",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    visibilityIcon: {
        cursor:'pointer'
      },
    tablePagination: {},
  }));
  

  const headCells = [
    { id: "id", numeric: false, disablePadding: false, label: "ID" },
    { id: "name", numeric: false, disablePadding: false, label: "Name" },
    {
      id: "status",
      numeric: false,
      disablePadding: false,
      label: "Status",
    }
  ];
  
  const EnhancedTableHead = (props:any) => {
    const { classes } = props;
    return (
      <TableHead className={classes.tablehead}>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id} align={headCell.numeric ? "right" : "left"} padding={headCell.disablePadding ? "none" : "normal"} className={classes.tableheadcell}>
              {headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };  
  

const TenantsTable = (props:any) => {

  const {data} = props
  const classes = useStyles();
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleViewContact = (tenant:any) => {
      props.history.push(`tenant/${tenant.id}`)   
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <EnhancedTableHead classes={classes}/>
        <TableBody>
          {data && data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row:any) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                     <TableCell component="th" scope="row" padding="normal">
                        {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row" padding="normal">
                        {row.name}
                    </TableCell>
                    <TableCell component="th"  scope="row" padding="normal" className={classes.flex}>
                       {row.status}
                       <div className={classes.visibilityIcon} onClick={() => handleViewContact(row)}>
                       <Tooltip title="View">
                            <IconButton>
                                <VisibilityIcon style={{ color: "#55B3B1", fontSize: 20 }} />
                             </IconButton>
                        </Tooltip>
                        </div>
                   </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={data?.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>

  );
}

export default withRouter(TenantsTable)
