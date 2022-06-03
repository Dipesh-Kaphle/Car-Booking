import { CloseCircleOutlined } from "@ant-design/icons"
import { Modal } from "antd"
import React from "react"
import { isEmpty } from "../../../utils/commonUtils"
import { MYBOOKING } from "../../../utils/constants/appConfigs"
import { loadState } from "../../../utils/storageUtil"
const MyBookig = (props) => {
  const bookData = loadState(MYBOOKING)
  const handelCancel = () => {
    props.onMybookingCar(false)
  }
  return (
    <Modal
      visible={props.MybookingCar}
      onCancel={handelCancel}
      footer={false}
      closeIcon={<CloseCircleOutlined />}
      width={600}
    >
      <ul className="books">
        {!isEmpty(bookData?.data) ?
        bookData?.data?.map((item, i) => (
          <li key={item.book_id}>
            <img
              src={item.product_thumbnail}
              alt={item.product_name}
              style={{ height: "60px" }}
            />
            <div className="details">
              <div>{item.product_name}</div>
              <span>{item.price}</span>
            </div>
          </li>
        ))
        :(
           <div>
            <h3>You haven't added any cars in booking</h3>
          </div>
        )}
      </ul>
    </Modal>
  )
}
export default MyBookig
