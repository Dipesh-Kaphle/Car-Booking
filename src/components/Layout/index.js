import { Layout } from "antd"
import React from "react"
import { useLocation } from "react-router-dom"
import FooterBottom from "./Footer/footer"
import FooterCar from "./Footer/footerLess"
import AppHeader from "./Header"
const { Content, Header, Footer } = Layout
const Appdiv = ({ children }) => {
  const pathname = useLocation().pathname

  return (
    <Layout>
      <Layout>
        <Header
          className={
            pathname.includes("/short")
              ? "shortcar"
              : !pathname.includes("/app")
              ? "notauthentation"
              : "authentation"
          }
        >
          <AppHeader />
        </Header>
        <Content style={{ minHeight: "100vh", backgroundColor: "white" }}>
          {children}
        </Content>
        <Footer>
          <FooterCar />
          <FooterBottom />
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Appdiv
