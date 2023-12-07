import React, { useEffect, useState } from "react";
import { getAllExpenses } from "../services/ExpenseService";
import ExpenseItemLister from "./ExpenseItemLister";
import IExpenseItem from "./../models/ExpenseItem";
import { ExpensesByPayees } from "./ExpenseByPayees";
import { ExpenseCreator } from "./ExpenseCreator";
import { PendingExpensesByPayees } from "./PendingExpensesByPayees";

const ExpenseTrackerHome = () => {
  const [expenseItems, setexpenseItems] = useState<IExpenseItem[]>([]);
  useEffect(() => {
    const getAllExpenseItemInvoker = async () => {
      let data = await getAllExpenses();
      setexpenseItems(data);
    };
    getAllExpenseItemInvoker();
  }, []);

  return (
    <div>
      <ExpenseCreator/>
      <ExpenseItemLister expenseItems={expenseItems} />
      <ExpensesByPayees expenseItems={expenseItems} />
      <PendingExpensesByPayees expenseItems={expenseItems}/>
    </div>
  );
};

export default ExpenseTrackerHome;
