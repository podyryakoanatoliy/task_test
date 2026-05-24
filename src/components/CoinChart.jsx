import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Alert, Empty } from "antd";

function CoinRechart({ prices, isLoading }) {
  const chartData =
    prices?.map(([timestamp, price]) => {
      const date = new Date(timestamp);
      return {
        date: date.toLocaleDateString("uk-UA", {
          day: "2-digit",
          month: "2-digit",
        }),
        price: Number(price.toFixed(2)),
        fullTime: date.toLocaleString("uk-UA"),
      };
    }) || [];

  if (isLoading) {
    return (
      <div
        style={{
          height: 400,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    );
  }

  if (chartData.length === 0) {
    return (
      <div style={{ marginTop: 10 }}>
        <Alert
          title="Дані відсутні або порожні"
          description="Сервер повернув порожній масив історичних даних для цієї монети."
          type="warning"
          showIcon
        />
      </div>
    );
  }

  return (
    <div style={{ width: "100%", height: 400, marginTop: 10 }}>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1677ff" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#1677ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" minTickGap={40} tickLine={false} />
          <YAxis
            domain={["dataMin", "dataMax"]}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => [`$${value.toLocaleString()}`, "Ціна"]}
            labelFormatter={(_, items) => items[0]?.payload?.fullTime || ""}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#1677ff"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CoinRechart;
