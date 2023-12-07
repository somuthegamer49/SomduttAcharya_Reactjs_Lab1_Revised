import { Button, Modal, Form } from "react-bootstrap";

import { ChangeEvent, ChangeEventHandler, useState } from "react";

const ExpenseCreator = () => {
  const [show, setShow] = useState(false);
  const [payeeName, setpayeeName] = useState("");
  const [expenseDesc, setexpenseDesc] = useState("");
  const [price, setprice] = useState<Number>();
  const [expenseDate, setexpenseDate] = useState<Date>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const funcDesc = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== null) {
      setexpenseDesc(e.target.value);
    }
  };
  const funcPayeeName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== null) {
      setpayeeName(e.target.value);
    }
  };
  const funcPrice = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) !== null) {
      setprice(Number(e.target.value));
    }
  };
  const funcDate = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== null) {
      setexpenseDate(new Date(e.target.value));
    }
  };
  const postData = (e:any) => {
    e.preventDefault();
    if (
      payeeName !== null &&
      expenseDesc !== null &&
      price !== null &&
      expenseDate !== null
    ) {
      fetch("http://localhost:4000/expenses", {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
          expenseDescription: expenseDesc,
          payeeName: payeeName,
          price: price,
          date: expenseDate
        }),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    }
  };
  const createExpenseModalBody = () => {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="expenseDescription">
          <Form.Label>Expense Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter expense description"
            onChange={(e) => funcDesc(e as any)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="payeeName">
          <Form.Label>Payee Name</Form.Label>

          <Form.Select
            aria-label="Default select example"
            onChange={(e) => funcPayeeName(e as any)}
          >
            <option>Open this select menu</option>
            <option value="Rahul">Rahul</option>
            <option value="Ramesh">Ramesh</option>
            <option value="Ankit">Ankit</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter expense price"
            onChange={(e) => funcPrice(e as any)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="expenseDate">
          <Form.Label>Expense Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter expense price"
            onSelect={(e) => funcDate(e as any)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={postData}>
          New Expense
        </Button>

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Form>
    );
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        New Expense Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>

        <Modal.Body>{createExpenseModalBody()}</Modal.Body>
      </Modal>
    </div>
  );
};

export { ExpenseCreator };
