import React, { useState, useEffect } from 'react'
import { Col, Row  } from 'antd'
import Mapservice from "./mapservice/mapservice"
import CheckBox from "./checkbox/checkbox"
import CheckBox_2 from "./checkbox/checkbox_2"
import SelectBox1 from "./SelectBox/SelectBox1"
import SelectBox2 from "./SelectBox/SelectBox2"
import HospitalList from './hospitalList/hospitalList'
import Manual from './Manual/Manual'
import { location , part } from './Data'
import Axios from 'axios'

function LandingPage(props) {
    
    const [lat, setlat] = useState(0)
    const [lng, setlng] = useState(0)
    const [hospital, sethospital] = useState([])
    const [Filters, setFilters] = useState({
        location: [],
        part: []
    })

    useEffect(() => {
        Axios.post('/api/hospital/info')
            .then(response => {
                if (response.data.success) {
                    sethospital(response.data.hospital)
                } else {
                    alert('Map - Error')
                }
            })
    }, [])
    
    const refreshFunction = (lat,lng) => {
        setlat(lat)
        setlng(lng)
    }
    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        const variables = {
            filters: newFilters
        }
        
        Axios.post('/api/hospital/info', variables)
            .then(response => {
                if (response.data.success) {
                    
                    sethospital(response.data.hospital)
                } else {
                    alert('해당 기능에 Error가 발생하였습니다')
                }
            })

        setFilters(newFilters)
    }
    return (
        <div className='landing'>
            
        <br/>   
        <div className='manual'>
            <Manual/>
        </div> 
        <br/>

        <div className='mobile_board'>
            <div className='center' style={{width: '100%'}}>
                <SelectBox1 list={location} handleFilters={filters => handleFilters(filters, "location_")} />
                <SelectBox2 list={part} handleFilters={filters => handleFilters(filters, "part_")}/>
            </div>
        </div>

        
            
            
        <div className='web_board'>
           <Row gutter={[64,32]}>
                <Col  lg={12} md={24} xs={24}>
                
                    <CheckBox list={location} handleFilters={filters => handleFilters(filters, "location_")}/>
                </Col>
                <Col  lg={12} md={24} xs={24}>
                    
                    <CheckBox_2 list={part} handleFilters={filters => handleFilters(filters, "part_")}/>
                </Col>
            </Row>
        </div>
        <br/>
        <div className='center'>   
            <Row className='row' gutter={[64,32]} style={{ marginTop: '5px'}}>
                <Col lg={12} md={24} xs={24}>
                     
                    <Mapservice lat={lat} lng={lng} test={hospital} style={{ margin: '3rem auto'}}/>
                   
                </Col> 
                

                
                <Col lg={12} md={24} xs={24}>
                    
                    <div className='hospital' >
                        <div style={{height: '100%'}}>
                        {props.user && <HospitalList user={props.user} test={hospital} refreshFunction={refreshFunction}/>}
                        </div>
                       
                    </div>
                </Col>
                
            </Row>
        </div>
           
    
        </div>
    )
}

export default LandingPage
