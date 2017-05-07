import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import UserShape from '../shapes/userShape';
import ItemShape from '../shapes/itemShape';

const products = [{
  id: 1,
  name: 'Product1',
  price: 120,
}, {
  id: 2,
  name: 'Product2',
  price: 80,
}];

function onAfterSaveCell(row, cellName, cellValue) {
  console.log(`Changed row: ${JSON.stringify(row)}`);
}

function onBeforeSaveCell(row, cellName, cellValue) {
  return true;
}

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  beforeSaveCell: onBeforeSaveCell,
  afterSaveCell: onAfterSaveCell,
};

const jobTypes = ['ATB', 'Silpo'];


const selectRow = {
  mode: 'checkbox', // radio or checkbox
};
const options = {
  onAddRow: row => console.log(`Added row: ${JSON.stringify(row)}`),
  onDeleteRow: row => console.log(`Deleted row: ${JSON.stringify(row)}`),
};

const ExpensesTable = () => (
  <BootstrapTable
    data={products}
    hover
    cellEdit={cellEditProp}
    insertRow
    deleteRow
    selectRow={selectRow}
    options={options}
  >
    <TableHeaderColumn isKey dataField="id">Product ID</TableHeaderColumn>
    <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
    <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
    <TableHeaderColumn
      dataField="store"
      editable={{ type: 'select', options: { values: jobTypes } }}
    >Store Name</TableHeaderColumn>
  </BootstrapTable>
);

ExpensesTable.propTypes = {
  expenses: React.PropTypes.shape({
    owner: React.PropTypes.shape(UserShape),
    periodStart: React.PropTypes.string,
    periodEnd: React.PropTypes.string,
    totalIncome: React.PropTypes.number,
    totalExpense: React.PropTypes.number,
    lineItems: React.PropTypes.arrayOf(React.PropTypes.shape(ItemShape)),
  }),
};

export default ExpensesTable;
