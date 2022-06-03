import React, { useState, useContext } from "react"
import { Image, Dropdown, Menu, Typography } from "antd"
import logo from "../../../assets/logo.svg"
import { DownOutlined, UserOutlined } from "@ant-design/icons"
import HeaderContent from "./headerContent"
import history from "../../../utils/history"
import { useLocation } from "react-router-dom"
import BlogHeader from "./blogHeader"
import SuggestHeader from "./suggestHeader"
import ValuationHeader from "./valuationHeader"
import { isAuthenticated } from "../../../utils/authUtil"
import AuthModal from "../../Authentation"
import {
  cars,
  carValutaion,
  navMenu1,
  user,
} from "../../../utils/constants/headerdata"
import CompareCar from "./compare"
import { AuthContext } from "../../Context/AuthContext"
import MyBookig from "./mybooking"
import MyWishList from "./wishlists"

const AppHeader = (props) => {
  console.log('propsheader',props)
  const [registerVisiable, setRegisterVisiable] = useState(false)
  const [loginVisiable, setLoginVisiable] = useState(false)
  const [modalvisiable, setModalVisiable] = useState(false)
  const pathname = useLocation().pathname
  const { logout,deleteWishList ,mywishList} = useContext(AuthContext)
  const [MybookingCar, setMybookingCar] = useState(false)
  const [myWishList, setMyWishList] = useState(false)
  const handelRegister = (e) => {
    if (e === 2) {
      setRegisterVisiable(true)
      setLoginVisiable(false)
      setModalVisiable(true)
    } else {
      setLoginVisiable(true)
      setRegisterVisiable(false)
      setModalVisiable(true)
    }
  }
  const handelCarRedirect = (e, to) => {
    history.push(to)
  }
  const handelLogOut = (e, id) => {
    if (id === 7) {
      logout()
    } else if (id === 2) {
      setMybookingCar(true)
    } else if (id === 4) {
      setMyWishList(true)
    }
  }
  const navMenu = [
    {
      id: 1,
      label: "Cars",
      icon: <DownOutlined style={{ fontSize: "10px", lineHeight: "35px" }} />,
      to: "/app/admin",
      menu: (
        <Menu>
          {cars.map((item) => (
            <Menu.Item
              key={item.id}
              onClick={(e) => handelCarRedirect(e, item?.to)}
            >
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      ),
    },
  ]
  const menuUser = (
    <Menu>
      {user.map((item) => (
        <Menu.Item key={item.id} onClick={() => handelRegister(item.id)}>
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  )
  const menuAuthUser = (
    <Menu>
      {carValutaion.map((item) => (
        <Menu.Item key={item.id} onClick={(e) => handelLogOut(e, item.id)}>
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  )
  const handelLogo = () => {
    history.push("/home")
  }
  const handelMenuItem = (item) => {
    history.push(item.to)
  }
  return (
    <>
      <div className={"header_main"}>
        <Image
          src={logo}
          alt="image not found "
          preview={false}
          onClick={(e) => handelLogo(e)}
        />
        {MybookingCar && (
          <MyBookig
            onMybookingCar={(e) => setMybookingCar(e)}
            MybookingCar={MybookingCar}
          />
        )}
        {myWishList   && (
          <MyWishList
            onMyWishList={(e) => setMyWishList(e)}
            myWishList={myWishList}
            deleteWishList={deleteWishList}
            mywishList={mywishList}
          />
        )}
        <div className="header-right">
          <div className="active-menu-item">
            {navMenu.map((item) => {
              return (
                <div
                  // onClick={(e) => handleWithOutLoggedIn(e, item.id)}
                  className="active-menu"
                  id={item.id}
                  key={item.id}
                >
                  <Dropdown
                    overlay={item?.menu}
                    arrow={true}
                    placement="bottomCenter"
                  >
                    <div className="header-name">
                      {item.label}
                      {item.icon}
                    </div>
                  </Dropdown>
                </div>
              )
            })}
            <div className="active-menu-item">
              {navMenu1.map((item) => (
                <div key={item.id}>
                  <div
                    className="header-name"
                    onClick={() => handelMenuItem(item)}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {!isAuthenticated() && (
            <div className="signup">
              <Dropdown
                overlay={menuUser}
                arrow={true}
                placement="bottomCenter"
              >
                {/* <UserOutlined  style={{color:'white',}}/>
                 */}
                <Typography.Text style={{ color: "white" }}>
                  Sign Up
                </Typography.Text>
              </Dropdown>
            </div>
          )}
          {isAuthenticated() && (
            <div className="">
              <Dropdown
                overlay={menuAuthUser}
                arrow={true}
                placement="bottomCenter"
              >
                <UserOutlined style={{ color: "white" }} />
              </Dropdown>
            </div>
          )}
        </div>
        <div className="sider"></div>
      </div>
      <div>
        {pathname.includes("/blog/post") && <BlogHeader />}
        {!pathname.includes("/app") && !pathname.includes("/short") && (
          <HeaderContent />
        )}
        {pathname.includes("/suggest/car") && <SuggestHeader />}
        {(pathname.includes("/app/car/valuation") ||
          pathname.includes("/app/valuation")) && <ValuationHeader />}
        {pathname.includes("/app/compare") && <CompareCar />}
      </div>
      {modalvisiable && (
        <AuthModal
          onRegister={(e) => setRegisterVisiable(e)}
          registerVisiable={registerVisiable}
          onLogin={(e) => setLoginVisiable(e)}
          loginVisiable={loginVisiable}
          onModalVisiable={(e) => setModalVisiable(e)}
          modalVisiable={modalvisiable}
        />
      )}
    </>
  )
}
export default AppHeader
