import React from 'react';
import Table  from "react-bootstrap/Table"
import IExpenseItem from '../models/ExpenseItem';

type ExpenseItemListerModel = {
    expenseItems: IExpenseItem[];
}
const ExpenseItemLister= ({expenseItems} : ExpenseItemListerModel) =>{
    const getExpenseItems = () => {
        return expenseItems;
      }
      const formatDate = (dateObjFromServer : Date) => {
    
        const dateObj = new Date(dateObjFromServer);
    
        return dateObj.getDate() + "-" + (dateObj.getMonth() + 1) + "-"
          + dateObj.getFullYear();
      }
    return (
        <div>
    
          <h3>Expenses View</h3>
          <Table responsive="sm" className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Expense Description</th>
                  <th>Payee Name</th>
                  <th>Expense Date</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {
                getExpenseItems().map((item,index) =>{
                    return (<tr>
                        <td>{index+1}</td>
                        <td>{item.expenseDescription}</td>
                        <td>{item.payeeName}</td>
                        <td>{formatDate(item.date)}</td>
                        <td>{item.price}</td>
                    </tr>)
                })
                
}
              </tbody>
            </Table>      
    
        </div>
      )
}

export default ExpenseItemLister;