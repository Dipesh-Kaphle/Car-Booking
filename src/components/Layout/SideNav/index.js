import React from "react"
import { Layout } from "antd"
import useSize from "../../../windowSize"
import NavMenuItem from "./navMenuItem"
import { useLocation } from "react-router-dom"

const { Sider } = Layout
const SideNav = (props) => {
  const { innerWidth } = useSize()
  const pathname = useLocation().pathname

  return (
    <Sider
      className="container-sider"
      trigger={null}
      width={260}
      collapsible
      collapsed={
        innerWidth < 700 ||
        pathname.includes("app/admin/applicant/profile") ||
        pathname.includes("/app/admin/employer/profile")
          ? true
          : false
      }
    >
      <NavMenuItem />
    </Sider>
  )
}

export default SideNav
