import React from "react";
import { Form } from "react-bootstrap";

export default function Input(props) {
  const { label, error, onChange, name, type } = props;

  return (
    <div>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          isInvalid={error ? true : false}
          name={name}
          onChange={onChange}
          type={type}
        />
        <div className="invalid-feedback">{error}</div>
      </Form.Group>
    </div>
  );
}
