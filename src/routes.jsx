import {
  HomeOutlined,
  DollarOutlined,
  EuroCircleOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import Home from "./pages/Home.jsx";
import CoinsPage from "./pages/CoinsPage.jsx";
import PaginationCoinPage from "./pages/PaginationCoinPage.jsx";
import ChartPage from "./pages/ChartPage.jsx";

export const routes = [
  { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
  {
    path: "/coins",
    label: "Coin",
    icon: <DollarOutlined />,
    element: <CoinsPage />,
  },
  {
    path: "/coins-paged",
    label: "Coin with pagination",
    icon: <EuroCircleOutlined />,
    element: <PaginationCoinPage />,
  },
  {
    path: "/chart",
    label: "Chart",
    icon: <LineChartOutlined />,
    element: <ChartPage />,
  },
];
