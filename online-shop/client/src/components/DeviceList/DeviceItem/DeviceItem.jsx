import React from "react";
import { Card, Col, Image} from "react-bootstrap";
import star from "../../../assets/mini-star.jpg"
import {useNavigate} from "react-router-dom"
import { DEVICE_ROUTE } from "../../../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    console.log(navigate);
    return (
        <Col md={3} className="mt-4" onClick={()=>navigate(DEVICE_ROUTE + "/" + device.id)}>
            <Card style={{width:150, cursor:'pointer'}}
            border="light">
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}></Image>
                <div className="mt-1 d-flex text-black-50 align-items-center justify-content-between">
                        <div>Samsung...</div>
                        <div className="d-flex align-items-center">
                            <div className="mr-1">{device.rating}</div>
                            <Image width={18} height={18} src={star}></Image>

                        </div>
                        
                </div>
                <div>{device.name}</div>
            </Card>

        </Col>
    );
};

export default DeviceItem;