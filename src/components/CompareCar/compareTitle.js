import { Col, Row } from "antd"
import Title from "antd/lib/typography/Title"
import React from "react"

import parse from "html-react-parser"

const CompareTitle = (props) => {
  console.log(props)
  const { data } = props
  return (
    <Row className="compare-title">
      <h3>
        Comparing {data?.data?.data?.[0]?.product_name} with{" "}
        {data?.data?.data?.[1]?.product_name}
      </h3>

      <table className="compareCarsHari">
        <tbody>
          <tr className="compareRow">
            <td className="compareData">
              <img
                alt="Image Detail"
                style={{
                  width: "500px",
                  height: "250px",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                src={data?.data?.data?.[0]?.product_thumbnail}
              />
            </td>
            <td className="compareData">
              <img
                alt="Image Detail"
                style={{
                  width: "500px",
                  height: "250px",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                src={data?.data?.data?.[1]?.product_thumbnail}
              />
            </td>
          </tr>
          <tr>
            <td className="compareData">
              <h3>{data?.data?.data?.[0]?.product_name}</h3>
            </td>
            <td className="compareData">
              <h3>{data?.data?.data?.[1]?.product_name}</h3>
            </td>
          </tr>

          <tr className="compareRow">
            <td className="compareData">
              {parse(`${data?.data?.data?.[0]?.description}`)}
            </td>
            <td className="compareData">
              {parse(`${data?.data?.data?.[1]?.description}`)}
            </td>
          </tr>
        </tbody>
      </table>
    </Row>
  )
}
export default CompareTitle
