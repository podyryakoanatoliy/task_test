import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Select, Button, Space } from "antd";

const countries = [
  { value: "ukraine", label: "Україна" },
  { value: "usa", label: "США" },
  { value: "spain", label: "Іспанія" },
  { value: "germany", label: "Німеччина" },
  { value: "united_kingdom", label: "Велика Британія" },
];

export default function FormWizard({ onFinish }) {
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState(false);
  const values = Form.useWatch([], form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [values, form]);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      requiredMark="optional"
      style={{ maxWidth: 450, margin: "0 auto" }}
    >
      <Form.Item
        name="name"
        label="Ім'я"
        rules={[
          { required: true, message: "Будь ласка, введіть ім'я" },
          { min: 2, message: "Ім'я повинно містити мінімум 2 символи" },
          {
            pattern: /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'’\s-]+$/,
            message:
              "Ім'я містить недопустимі символи (дозволені: літери, пробіли)",
          },
        ]}
      >
        <Input placeholder="Введіть ваше ім'я" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Будь ласка, введіть email" },
          { type: "email", message: "Введіть коректний формат email" },
        ]}
      >
        <Input placeholder="example@mail.com" />
      </Form.Item>

      <Form.Item
        name="country"
        label="Країна"
        rules={[{ required: true, message: "Будь ласка, оберіть країну" }]}
      >
        <Select placeholder="Оберіть країну" options={countries} />
      </Form.Item>

      <Form.Item
        name="age"
        label="Вік"
        rules={[
          { required: true, message: "Будь ласка, введіть вік" },
          {
            type: "number",
            min: 18,
            max: 100,
            message: "Вік має бути від 18 до 100 років",
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} placeholder="18" />
      </Form.Item>
      <Form.Item style={{ marginTop: 32, marginBottom: 0 }}>
        <Button type="primary" htmlType="submit" disabled={!submittable} block>
          Відправити
        </Button>
      </Form.Item>
    </Form>
  );
}
