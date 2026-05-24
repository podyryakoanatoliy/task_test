import React, { useState } from "react";
import { Typography, Alert } from "antd";

import CoinsList from "../components/CoinList.jsx";
import { useCoins } from "../hooks/useCoins.js";

const { Title } = Typography;

export default function PaginationCoinPage() {
  const [page, setPage] = useState(1);
  const perPage = 20;
  const { data, isLoading, isError, error } = useCoins(perPage, page);

  if (isError) {
    return (
      <div style={{ padding: "20px 0" }}>
        <Title level={2}>Монети з пагінацією</Title>
        <Alert
          title="Помилка завантаження даних"
          description="Сталася помилка при запиті до CoinGecko API. Можливо, вичерпано ліміт запитів. Спробуйте будь-ласка пізніше."
          type="error"
          showIcon
        />
      </div>
    );
  }

  const paginationConfig = {
    current: page,
    pageSize: perPage,
    total: 400,
    onChange: (newPage) => setPage(newPage),
    showSizeChanger: false,
    placement: ["bottomCenter"],
  };

  return (
    <>
      <Title level={2} style={{ marginBottom: 20 }}>
        Криптовалюти (Сторінка {page})
      </Title>
      <CoinsList
        data={data}
        isLoading={isLoading}
        paginationConfig={paginationConfig}
      />
    </>
  );
}
