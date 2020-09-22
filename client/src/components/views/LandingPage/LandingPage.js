import React, { useState } from 'react'
import { Col, Row , Button } from 'antd'
import Mapservice from "./mapservice/mapservice"
import CheckBox from "./checkbox/checkbox"
import CheckBox_2 from "./checkbox/checkbox_2"
import { Test } from './Test'




function LandingPage() {
    const [continents, setcontinents] = useState(["hi","bye"])
    return (
        <div style = {{ width: '75%', margin: '3rem auto' }}>
            
           
            <br/>    
            <br/>

           <Row gutter={[64,64]}>
                <Col lg={12} xs={24}>
                    {/* CheckBox */}
                    <CheckBox list={continents}/>
                </Col>
                <Col lg={12} xs={24}>
                    {/* CheckBox */}
                    <CheckBox_2 list={continents}/>
                </Col>
            </Row>
            <Row gutter={[64,32]} style={{ marginTop: '3rem auto'}}>
                <Col lg={12} xs={24}>
                     
                    <Mapservice test={Test} style={{ margin: '3rem auto'}}/>
                    
                </Col>
                <Col lg={12} xs={24}>
                    {/* CheckBox */}
                    <div style={{width:'550px' , height: '400px' , border: '1px solid gray' ,display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Button type='danger' shape='round'>특이사항 보기</Button>
                    </div>
                </Col>
            </Row>
            
    
        </div>
    )
}

export default LandingPage
