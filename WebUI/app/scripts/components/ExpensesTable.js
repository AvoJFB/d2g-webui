import React, { PropTypes } from 'react';
import update from 'immutability-helper';
import ReactDataGrid from 'react-data-grid';
import { Editors, Toolbar } from 'react-data-grid-addons';
import UserShape from '../shapes/userShape';
import ItemShape from '../shapes/itemShape';

const { AutoComplete: AutoCompleteEditor } = Editors;

const categories = [
  { id: 0, title: 'Toys' },
  { id: 1, title: 'Sports' },
  { id: 2, title: 'Smartphones' },
  { id: 3, title: 'Shoes' },
  { id: 4, title: 'Automobiles' },
  { id: 5, title: 'Clothing' },
  { id: 6, title: 'Electronics' },
];

const stores = [
  { id: 0, title: 'ATB' },
  { id: 1, title: 'Silpo' },
  { id: 2, title: 'Comfy' },
  { id: 3, title: 'Foxtrot' },
  { id: 4, title: 'Eldorado' },
];

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleRowUpdated = this.handleRowUpdated.bind(this);
    this.createRows = this.createRows.bind(this);
    this.handleAddRow = this.handleAddRow.bind(this);
    this.columns = [
      {
        key: 'id',
        name: 'ID',
        width: 50,
      },
      {
        key: 'name',
        name: 'Name',
        editable: true,
        events: {
          onBlur: (e, { rowIdx }) => console.log(this.state.rows[rowIdx]),
        },
      },
      {
        key: 'category',
        name: 'Category',
        editable: true,
        editor: <AutoCompleteEditor options={categories} />,
        events: {
          onBlur: (e, { rowIdx }) => console.log(this.state.rows[rowIdx]),
        },
      },
      {
        key: 'price',
        name: 'Price',
        editable: true,
        events: {
          onBlur: (e, { rowIdx }) => console.log(this.state.rows[rowIdx]),
        },
      },
      {
        key: 'store',
        name: 'Store',
        editable: true,
        editor: <AutoCompleteEditor options={stores} />,
        events: {
          onBlur: (e, { rowIdx }) => console.log(this.state.rows[rowIdx]),
        },
      }];
    this.state = {
      rows: this.createRows(),
    };
  }

  createRows() {
    const rows = [];
    this.props.expenses.lineItems.map(item => (
      rows.push({
        id: item.id,
        name: item.name,
        category: item.category.name,
        store: item.store.name,
        price: `${item.price.cost} ${item.price.currency}`,
      })
    ));
    return rows;
  }

  handleAddRow({ newRowIndex }) {
    const newRow = {
      id: newRowIndex + 1,
      name: 'Product name here',
      category: 'Product category here',
      store: 'Product store here',
      price: 'Product price here',
    };
    console.log(newRow);
    let rows = this.state.rows.slice();
    rows = update(rows, { $push: [newRow] });
    this.setState({ rows });
  }

  handleRowUpdated({ rowIdx, updated }) {
    const rows = this.state.rows;
    Object.assign(rows[rowIdx], updated);
    this.setState({ rows });
  }

  rowGetter = i => this.state.rows[i];

  render() {
    return (
      <div>
        <ReactDataGrid
          enableCellSelect
          columns={this.columns}
          rowGetter={this.rowGetter}
          rowsCount={this.state.rows.length}
          onRowUpdated={this.handleRowUpdated}
          minHeight={600}
          toolbar={<Toolbar onAddRow={this.handleAddRow} />}
        />
      </div>
    );
  }
}

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
