import { Col ,Image,Row} from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import event from '../../assets/event.svg'
const Event=()=>{
    return(
        <Row className='event'>
            <Row gutter={[16,8]}>
                <Col span={24}>
                    <Title className='event-title'>
                    Our Events
                    </Title>
                </Col>
                <Col span={24}>
                    <Title className='event-text'>
                    Over the years, we at paramdu motors have striven to create a fair, engaging and people friendly workplace. We are always on the look-out for people who believe in putting the customer first while constantly adapting to the changing world and pursuing excellence. Sounds like you?
                    </Title>
                </Col>
                <Col span={24}>
                    <Row>
                        {eventdata.map((item)=>(
                            <Col span={8} key={item.id}>
                                {item.image}
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Row>
    )
}
export default Event
const eventdata=[
    {
        id:1,
        image:<Image src={event} preview={false}/>
    },
    {
        id:2,
        image:<Image src={event} preview={false}/>
    },
    {
        id:3,
        image:<Image src={event} preview={false}/>
    },
   
]