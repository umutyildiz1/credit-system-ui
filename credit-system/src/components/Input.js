import React from "react";
import { Form } from "react-bootstrap";

export default function Input(props) {
  const { label, error, onChange, name, type ,placeholder} = props;

  return (
    <div>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          isInvalid={error ? true : false}
          name={name}
          onChange={onChange}
          type={type}
          placeholder = {placeholder}
        />
      </Form.Group>
    </div>
  );
}
