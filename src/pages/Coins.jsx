import { Typography, Alert, Spin } from "antd";
import CoinsList from "../components/CoinList.jsx";
import { useCoins } from "../hooks/useCoins.js";

const { Title } = Typography;

export default function Coins() {
  const { data, isLoading, isError, error } = useCoins();

  if (isError) {
    return (
      <div style={{ padding: "20px 0" }}>
        <Title level={2}>Топ-50 криптовалют</Title>
        <Alert
          message="Не вдалося завантажити дані"
          description={
            "Сталася помилка при запиті до CoinGecko API. Можливо, вичерпано ліміт запитів. Спробуйте будь-ласка пізніше. "
          }
          type="error"
          showIcon
        />
      </div>
    );
  }
  return (
    <>
      <Title level={2} style={{ marginBottom: 20 }}>
        Топ-50 криптовалют
      </Title>
      <CoinsList data={data} />
    </>
  );
}
