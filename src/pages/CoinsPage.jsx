import { Typography, Alert, Spin } from "antd";

import CoinsList from "../components/CoinList.jsx";

import { useCoins } from "../hooks/useCoins.js";

const { Title } = Typography;

function CoinsPage() {
  const { data, isLoading, isError, error } = useCoins();

  return (
    <>
      <Title level={2} style={{ marginBottom: 20 }}>
        Топ-50 криптовалют
      </Title>

      {isError ? (
        <Alert
          title="Не вдалося завантажити дані"
          description="Сталася помилка при запиті до CoinGecko API. Можливо, вичерпано ліміт запитів. Спробуйте будь-ласка пізніше."
          type="error"
          showIcon
        />
      ) : (
        <CoinsList data={data} isLoading={isLoading} />
      )}
    </>
  );
}
export default CoinsPage;
