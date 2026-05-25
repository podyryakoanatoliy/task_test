import React from "react";
import { Table, Button, Result } from "antd";

const countryLabels = {
  ukraine: "Україна",
  usa: "США",
  spain: "Іспанія",
  germany: "Німеччина",
  united_kingdom: "Велика Британія",
};

export default function InformationResult({ data, onReset }) {
  const dataSource = [
    { key: "1", label: "Ім'я", value: data.name },
    { key: "2", label: "Email", value: data.email },
    {
      key: "3",
      label: "Країна",
      value: countryLabels[data.country] || data.country,
    },
    { key: "4", label: "Вік", value: data.age },
  ];

  const columns = [
    { title: "Поле", dataIndex: "label", key: "label", width: "40%" },
    {
      title: "Значення",
      dataIndex: "value",
      key: "value",
      render: (text) => <strong>{text}</strong>,
    },
  ];

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <Result
        status="success"
        title="Форму успішно відправлено!"
        subTitle="Перевірте введені вами дані нижче:"
      />

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        bordered
        style={{ marginBottom: 24 }}
      />

      <div style={{ textAlign: "center" }}>
        <Button type="default" onClick={onReset} size="large">
          Почати заново
        </Button>
      </div>
    </div>
  );
}
