import { Table, Avatar, Space } from "antd";

function CoinList({ data, isLoading }) {
  const formatCap = (value) => {
    if (!value) return "$0";
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toLocaleString()}`;
  };

  const dataSource =
    data?.map((coin) => ({
      key: coin.id,
      rank: coin.market_cap_rank,
      name: coin.name,
      image: coin.image,
      symbol: coin.symbol,
      current_price: coin.current_price,
      price_change_24h: coin.price_change_percentage_24h,
      market_cap_formatted: formatCap(coin.market_cap),
      market_cap_raw: coin.market_cap,
      total_volume_formatted: formatCap(coin.total_volume),
      total_volume_raw: coin.total_volume,
    })) || [];

  const columns = [
    {
      title: "#",
      dataIndex: "rank",
      key: "rank",
      width: 70,
      sorter: (a, b) => a.rank - b.rank,
    },
    {
      title: "Назва",
      key: "name",
      render: (_, record) => (
        <Space>
          <Avatar src={record.image} size="small" />
          <span style={{ fontWeight: 600 }}>{record.name}</span>
          <span
            style={{
              color: "#8c8c8c",
              textTransform: "uppercase",
              fontSize: 12,
            }}
          >
            {record.symbol}
          </span>
        </Space>
      ),
    },
    {
      title: "Ціна",
      dataIndex: "current_price",
      key: "current_price",
      sorter: (a, b) => a.current_price - b.current_price,
      render: (value) => `$${value.toLocaleString()}`,
    },
    {
      title: "24h %",
      dataIndex: "price_change_24h",
      key: "price_change_24h",
      sorter: (a, b) => a.price_change_24h - b.price_change_24h,
      render: (value) => {
        if (!value) return "0.00%";
        const isPositive = value >= 0;
        return (
          <span
            style={{
              color: isPositive ? "#52c41a" : "#ff4d4f",
              fontWeight: 500,
            }}
          >
            {isPositive ? "+" : ""}
            {value.toFixed(2)}%
          </span>
        );
      },
    },
    {
      title: "Market Cap",
      dataIndex: "market_cap_formatted",
      key: "market_cap_formatted",
      sorter: (a, b) => a.market_cap_raw - b.market_cap_raw,
    },
    {
      title: "Обʼєм 24h",
      dataIndex: "total_volume_formatted",
      key: "total_volume_formatted",
      sorter: (a, b) => a.total_volume_raw - b.total_volume_raw,
    },
  ];

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      loading={isLoading}
      pagination={false}
      sticky
      scroll={{ x: "max-content" }}
    />
  );
}

export default CoinList;
