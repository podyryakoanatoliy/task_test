import React, { useState } from "react";
import { Spin, Alert, Card } from "antd";
import { useCoinChart } from "../hooks/useCoinChart.js";
import ChartHeader from "../components/ChartHeader.jsx";
import CoinRechart from "../components/CoinRechart.jsx";

function ChartPage() {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [isManualLoading, setIsManualLoading] = useState(false);

  const {
    data: prices,
    isLoading,
    isError,
    error,
    refetch,
  } = useCoinChart(selectedCoin);

  const handleManualRefetch = async () => {
    setIsManualLoading(true);
    await refetch();
    setIsManualLoading(false);
  };

  const showLoader = isLoading || isManualLoading;

  return (
    <Card>
      <ChartHeader
        selectedCoin={selectedCoin}
        onCoinChange={setSelectedCoin}
        onRefresh={handleManualRefetch}
        isManualLoading={isManualLoading}
        disabled={showLoader}
      />

      {isError ? (
        <Alert
          title="Помилка отримання даних графіка"
          description={
            error?.message ||
            "Можливо, перевищено ліміти API CoinGecko. Спробуйте будь-ласка пізніше."
          }
          type="error"
          showIcon
          style={{ marginBottom: 20 }}
        />
      ) : (
        <Spin spinning={showLoader} description="Завантаження графіка...">
          <CoinRechart prices={prices} isLoading={isLoading} />
        </Spin>
      )}
    </Card>
  );
}

export default ChartPage;
