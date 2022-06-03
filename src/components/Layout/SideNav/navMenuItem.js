import React from "react"
import { Menu } from "antd"
import history from "../../../utils/history"
import { useLocation } from "react-router-dom"
import AdminSideBarMenuItem from "../../../utils/constants/adminMenu"

const NavMenuItem = (props) => {
  const pathname = useLocation().pathname

  const menuList = (item) => {
    return (
      <Menu.Item
        className="container-sider-menu"
        onClick={() => {
          history.push(item.to)
        }}
        key={item.to}
        icon={item.menu_icon}
      >
        <span className="container-sider--menuitem---menutext">
          {item.menu_name}
        </span>
      </Menu.Item>
    )
  }

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[pathname ? pathname : "/app/admin"]}
      style={{ height: "100%" }}
    >
      {AdminSideBarMenuItem.map((item) => {
        return menuList(item)
      })}
    </Menu>
  )
}

export default NavMenuItem
