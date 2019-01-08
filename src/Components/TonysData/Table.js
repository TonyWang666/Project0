import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class Table extends Component{
    render(){
        return(
            <BootstrapTable data = {this.props.data}>
            <TableHeaderColumn>
            ID
            </TableHeaderColumn>
            <TableHeaderColumn>
            Name
            </TableHeaderColumn>
            <TableHeaderColumn>
            Value 
            </TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default Table;