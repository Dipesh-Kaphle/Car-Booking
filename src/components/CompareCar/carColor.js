import React from 'react'
import {Row,Col,Descriptions, Card} from 'antd'
const CarColor=()=>{
    return(
        <Row className='color'>
            <Col span={8}>
                <Descriptions
                title="Colors"
                bordered
                layout='horizontal'
                column={0}
                >
                    <Descriptions.Item 
                    label={
                    <Row style={{display:'flex',alignItems:'center',columnGap:'5px'}}>
                      <Card style={{width:'200px',backgroundColor:'#284C73'}}/>
                       <span>
                       Nexa Blue
                       </span>
                    </Row>
                        } span={1}/>
                    <Descriptions.Item 
                    label=
                    {
                        <Row style={{display:'flex',alignItems:'center',columnGap:'5px'}}>
                          <Card style={{width:'200px',backgroundColor:'#807A75'}}/>
                           <span>
                           Metallic Magma Grey
                           </span>
                        </Row>
                            }
                    span={1}
                    />
                    <Descriptions.Item 
                    label=
                     {
                        <Row style={{display:'flex',alignItems:'center',columnGap:'5px'}}>
                          <Card style={{width:'200px',backgroundColor:'#8E0B0C'}}/>
                           <span>
                           Pearl Phoenix Red
                           </span>
                        </Row>
                            }
                    span={1}
                    />
                    <Descriptions.Item 
                    label= 
                    {
                        <Row style={{display:'flex',alignItems:'center',columnGap:'5px'}}>
                          <Card style={{width:'200px',backgroundColor:'#9D9C9C'}}/>
                           <span>
                           Metallic Premium Silver
                           </span>
                        </Row>
                    }
                    span={1}
                    />
                    <Descriptions.Item 
                     label= 
                     {
                         <Row style={{display:'flex',alignItems:'center',columnGap:'5px'}}>
                           <Card style={{width:'200px',backgroundColor:'#C2C3C3'}}/>
                            <span>
                            Pearl Arctic White
                            </span>
                         </Row>
                     }
                    span={1}
                    />
                </Descriptions>
            </Col>
            <Col span={8}>
                <Descriptions
                bordered
                layout='horizontal'
                column={0}
                style={{marginTop:'45px'}}
                >
                    <Descriptions.Item
                      label= 
                      {
                          <Row style={{display:'flex',alignItems:'center',columnGap:'5px'}}>
                            <Card style={{width:'200px',backgroundColor:'#C3C2C0'}}/>
                             <span>
                             Silky SilverPearl Arctic White
                             </span>
                          </Row>
                      } 
                    span={1}
                    />
                    <Descriptions.Item 
                      label= 
                      {
                          <Row style={{display:'flex',alignItems:'center',columnGap:'5px'}}>
                            <Card style={{width:'200px',backgroundColor:'#F6F5F3'}}/>
                             <span>
                             Solid White
                             </span>
                          </Row>
                      } 
                    span={1}/>
                </Descriptions>
            </Col>
        </Row>
    )
}
export default CarColor