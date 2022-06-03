import { CloseCircleOutlined, DeleteOutlined } from "@ant-design/icons"
import { Modal, Row } from "antd"
import React, { useEffect, useState } from "react"
import { MyWISHLIST } from "../../../utils/constants/appConfigs"
import history from "../../../utils/history"
import { loadState} from "../../../utils/storageUtil"
// import {myBookCar}   from "../../../services/home"
const MyWishList = (props) => {
  const [wishData,setWishData]=useState(loadState(MyWISHLIST)?.data)
  const [isDelet,setDelet]=useState(false)
  const handelCancel = () => {
    props.onMyWishList(false)
  }
  const handelDelete=(e,id)=>{
    e.preventDefault()
    history.push('/home')
    props.deleteWishList(id,setDelet)
    setWishData(
      wishData.filter((item) =>
         item.wish_id !== id
      )
    
    )
    // saveState(DELETEWISHLIST,id)
  }
  useEffect(()=>{
    // setWishData(loadState(MyWISHLIST)?.data)
    if(isDelet){
      props.mywishList()
    }
  },[isDelet,wishData])
  console.log('data',wishData,isDelet)

  return (
    <Modal
      visible={props.myWishList}
      onCancel={handelCancel}
      footer={false}
      closeIcon={<CloseCircleOutlined />}
      width={600}
    >
      <Row>
        <ul className="books">
          {wishData?.length===0 ? <div>
            <h3>You haven't added any cars to your wishlist</h3>
          </div>
        :
        wishData?.map((item, i) => (
          <li key={item.book_id}>
            <img
              src={item.product_thumbnail}
              alt={item.product_name}
              style={{ height: "60px" }}
            />
            <div className="details">
              <div>{item.product_name}</div>
              <span><DeleteOutlined onClick={(e)=>handelDelete(e,item.wish_id)}/></span>
            </div> 
          </li>
        ))
        }
        </ul>
      </Row>
    </Modal>
  )
}
export default MyWishList
