import React, { useState } from 'react';
import { Paper, Table, TableBody, TableFooter, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRounded from '@material-ui/icons/CancelRounded';
import {FilterType} from './AidsDashboardTypes';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Button from '@material-ui/core/Button';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import {dateToString} from "../../shared/dateUtils";


type Props = {
  aids: List ,
  filter: FilterType,
  date: Date,
}

const AidsTable = (props: Props) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (event, newPage) => {
     setPage(newPage);
   };

  const handleChangeRowsPerPage = (event) => {
   setRowsPerPage(parseInt(event.target.value, 30));
   setPage(0);
  };

  var allAids = []
  var paginatedAids = [];
  if (props.aids) {
    allAids = props.aids.filter(aid => aid.active === (props.filter ? props.filter.active: true))
        .filter(aid => props.filter && props.filter.admin && props.filter.admin.length > 0 ? aid.ambit === props.filter.admin : true)
        .filter(aid => !aid.data_inici || (props.filter && aid.data_inici && aid.data_inici <= props.filter.date))
    ;
    paginatedAids = allAids.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  }

  const exportPdf = () => {
    const doc = new jsPDF()
    doc.autoTable({
      head: [['Codi', 'Descripció', 'Data inici','Data fi','Àmbit','Administració','Activa']],
      body: allAids.map((aid) => [aid.codi, aid.descripcio, aid.data_inici, aid.data_fi, aid.tipus, aid.ambit, aid.active ? 'Si' : 'No']),
      /*didDrawCell: (data) => {
        if (data.section === 'body' && data.column.index === 6) {
          var base64Img = 'data:image/jpeg;base64,iVBORw0KGgoAAAANS...'
          doc.addImage(base64Img, 'JPEG', data.cell.x, data.cell.y, 10, 10)
        }
      },*/
    })

    doc.save('Ajudes.pdf')
  }

  return (
    <Paper elevation={2}>
      <TableContainer component={Paper}>
        <Table size="small" /*className={classes.table}*/ aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Codi</TableCell>
              <TableCell>Descripció</TableCell>
              <TableCell>Data inici</TableCell>
              <TableCell>Data fi</TableCell>
              <TableCell>Àmbit</TableCell>
              <TableCell>Administració</TableCell>
              <TableCell>Activa</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.aids &&
              paginatedAids.map((aid) => (
              <TableRow key={aid.codi}>
                <TableCell component="th" scope="row">{aid.codi}</TableCell>
                <TableCell component="th" scope="row">{aid.descripcio}</TableCell>
                <TableCell component="th" scope="row">{aid.data_inici ? dateToString(aid.data_inici) : '-'}</TableCell>
                <TableCell component="th" scope="row">{aid.data_fi ? dateToString(aid.data_fi) : '-'}</TableCell>
                <TableCell component="th" scope="row">{aid.tipus}</TableCell>
                <TableCell component="th" scope="row">{aid.ambit}</TableCell>
                <TableCell component="th" scope="row">
                {aid.active ? <CheckCircleRoundedIcon fontSize='inherit' style={{ color: 'green' }}/> :  <CancelRounded fontSize='inherit' style={{ color: 'red' }}/>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell scope="row" size="small" align="center" colSpan={7}>
                <Button color="primary" size="small" onClick={() => exportPdf()} startIcon={<PictureAsPdfIcon />}>
                  Descarregar
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[20, 30, 50]}
          component="div"
          count={allAids.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />

      </Paper>

    );
}

export default AidsTable
