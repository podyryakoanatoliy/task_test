import React from "react";
import { Segmented, Button, Typography, Space } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

const { Title } = Typography;

const options = [
  { label: "Bitcoin", value: "bitcoin" },
  { label: "Ethereum", value: "ethereum" },
  { label: "Dogecoin", value: "dogecoin" },
];

export default function ChartHeader({
  selectedCoin,
  onCoinChange,
  onRefresh,
  isManualLoading,
  disabled,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        marginBottom: 24,
      }}
    >
      <Title level={2} style={{ margin: 0 }}>
        Аналітика ціни (7 днів) -{" "}
        {options.find((option) => option.value === selectedCoin)?.label}
      </Title>

      <Space size="medium">
        <Segmented
          options={options}
          value={selectedCoin}
          onChange={onCoinChange}
          disabled={disabled}
        />
        <Button
          type="primary"
          icon={<ReloadOutlined />}
          loading={isManualLoading}
          onClick={onRefresh}
        >
          Оновити
        </Button>
      </Space>
    </div>
  );
}
