import { CloseCircleOutlined } from "@ant-design/icons"
import Title from "antd/lib/typography/Title"
import { Row, Col, Modal, Form, Input, Button, Checkbox } from "antd"
import parse from "html-react-parser"

import React, { useState } from "react"
// import { Input } from '../Common/AntdComponents'
const Download = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")
  const [formOpen, setFormOpen] = useState(true)

  const handleCancel = () => {
    props.onDownloadVisiable(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormOpen(false)
    console.log("imhere")
    try {
      let res = await fetch("http://car.kclcolony.com/api/brochure-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          address,
          phone,
        }),
      })

      let resJson = await res.json()

      if (res.status === 200) {
        setName("")
        setEmail("")
        setAddress("")
        setPhone("")
        setMessage(`${resJson.message}`)
      } else {
        setMessage("Some error occured")
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Modal
      visible={props.downloadVisiable}
      footer={null}
      onCancel={handleCancel}
      closeIcon={<CloseCircleOutlined />}
    >
      {message && (
        <div
          className="download-modal customMessage"
          style={{
            padding: "15px",
            backgroundColor: "green",
            color: "white",
            margin: "30px 0",
          }}
        >
          {parse(`${message}`)}
        </div>
      )}

      {formOpen && (
        <div>
          <h3>Please Provide us your information</h3>

          <form action="" onSubmit={handleSubmit} className="downloadBrochure">
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Mobile Number"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="input-group">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </Modal>
  )
}
export default Download
