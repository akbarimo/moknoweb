import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'command', label: 'Command', minWidth: 170, align: 'center' },
  { id: 'commandId', label: 'Command Id', minWidth: 100 },
  {
    id: 'usage',
    label: 'Usage',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'example',
    label: 'Example',
    minWidth: 170,
    align: 'center',
  },
];

function createData(command, commandId, usage, example) {
  return { command, commandId, usage, example };
}

const rows = [
  createData(
    'Ask',
    '2323232345',
    '/ask (question)',
    '/ask how far is the sun?',
  ),
  createData('Ping', '4345344311', '/ping', '/ping'),
  createData(
    'User Info',
    '5845369475',
    '/userinfo (mention)',
    '/userinfo @Eric',
  ),
  createData(
    'User Avatar',
    '7459357168',
    '/useravatar (mention)',
    '/useravatar @Julian',
  ),
  createData('Guild Info', '7563895425', '/guildinfo', '/guildinfo'),
  createData('Guild Icon', '7225396157', '/guildicon', '/guildicon'),
];

const Commands = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                Command
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Information
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Commands;
