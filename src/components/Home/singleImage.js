import { Row,Col,Image} from 'antd'
import React from 'react'
import baner from '../../assets/baner.svg'
const SingeImage=()=>{
    return(
        <Row>
            <Col span={24}>
                <Image preview={false} width="100%" src={baner}  style={{ height: "600px", objectFit: "cover" }}/>
            </Col>
        </Row>
    )
}
export default SingeImage;