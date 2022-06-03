import React, { Col,Table,Row } from 'antd'
import Title from 'antd/lib/typography/Title'
const CompareTable=(props)=>{
  const {data}=props
    return(
        <Row className='compareTable'>
            <Col>
              <Title className='title'>
               Specifications
              </Title>
            </Col>
            <Col span={24}>
            <Table
              bordered
              pagination={true}
              showHeader={false}
              dataSource={data?.data?.data}
              columns={columns}
        />
            </Col>
        </Row>
    )
}
export default CompareTable

  const columns = [
    {
      title: 'product_name',
      dataIndex: 'product_name',
      width: '30%',
      editable: true,
      key:'0'
    },
    {
      title: 'price',
      dataIndex: 'price',
      Key:'1'
    },
    {
      title: 'slug',
      dataIndex: 'slug',
      Key:'2'
    },
    
  ];