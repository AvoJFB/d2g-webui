import React, { PropTypes } from 'react';
import update from 'immutability-helper';
import ReactDataGrid from 'react-data-grid';
import { Toolbar } from 'react-data-grid-addons';
import UserShape from '../shapes/userShape';
import ItemShape from '../shapes/itemShape';

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);
    this.createRows = this.createRows.bind(this);
    this.handleAddRow = this.handleAddRow.bind(this);
    this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this);
    this.columns = [
      { key: 'id', name: 'ID', width: 50 },
      { key: 'name', name: 'Name', editable: true },
      { key: 'category', name: 'Category', editable: true },
      { key: 'price', name: 'Price', editable: true }];
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
        price: `${item.price.cost} ${item.price.currency}`,
      })
    ));
    return rows;
  }

  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    const rows = this.state.rows;
    for (let i = fromRow; i <= toRow; i += 1) {
      const rowToUpdate = rows[i];
      rows[i] = update(rowToUpdate, { $merge: updated });
    }
    this.setState({ rows });
  }

  handleAddRow({ newRowIndex }) {
    const newRow = {
      id: newRowIndex + 1,
      name: 'Product name here',
      category: 'Product category here',
      price: 'Product price here',
    };

    let rows = this.state.rows.slice();
    rows = update(rows, { $push: [newRow] });
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
          onGridRowsUpdated={this.handleGridRowsUpdated}
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
