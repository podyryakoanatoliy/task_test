import { HomeOutlined, DollarOutlined } from "@ant-design/icons";
import Home from "./pages/Home.jsx";
import Coins from "./pages/Coins.jsx";

export const routes = [
  { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
  {
    path: "/coins",
    label: "Coin",
    icon: <DollarOutlined />,
    element: <Coins />,
  },
];
