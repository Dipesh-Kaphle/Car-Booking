import {
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
  ShopOutlined,
  StockOutlined,
} from "@ant-design/icons"

const AdminSideBarMenuItem = [
  {
    id: 1,
    menu_icon: <HomeOutlined className="admin-icon" />,
    menu_name: "Home",
    to: "/app/admin",
  },
  {
    id: 2,
    menu_icon: <ShopOutlined className="admin-icon" />,
    menu_name: "Job Applicants",
    to: "/app/admin/applicant",
  },
  {
    id: 3,
    menu_icon: <UserOutlined className="admin-icon" />,
    menu_name: "Employer",
    to: "/app/admin/employees",
  },
  {
    id: 4,
    menu_icon: <StockOutlined className="admin-icon" />,
    menu_name: "Subscription ",
    to: "/app/admin/subscription",
  },
  {
    id: 5,
    menu_icon: <ShopOutlined className="admin-icon" />,
    menu_name: "Job List",
    to: "/app/admin/myjobs",
  },
  {
    id: 6,
    menu_icon: <SettingOutlined className="admin-icon" />,
    menu_name: "Settings",
    to: "/app/admin/settings",
  },
]

export default AdminSideBarMenuItem
