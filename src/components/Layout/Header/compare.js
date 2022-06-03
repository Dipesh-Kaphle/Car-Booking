import { Row,Col} from 'antd';
import React from 'react';


const CompareCar=()=>{
    return(
        <Row className='headercontent' >
           <Col span={24}>
               <Row justify='center' className='header-title'>
               Compare Cars
               </Row>
               
           </Col>
           <Col span={24}>
               <Row justify='center' className='header-text'>
               Use our compare cars fearures to <br/> compare two cars of your choice.
               </Row>
             
           </Col>
        </Row>
    )
}
export default CompareCar