import { Row,Col} from 'antd';
import React from 'react';


const BlogHeader=()=>{
    return(
        <Row className='headercontent' >
           <Col span={24}>
               <Row justify='center' className='header-title'>
                 From The Blog
               </Row>
               
           </Col>
           <Col span={24}>
               <Row justify='center' className='header-text'>
                 Useful tips, advice and information for  all type of drivers
               </Row>
             
           </Col>
        </Row>
    )
}
export default BlogHeader