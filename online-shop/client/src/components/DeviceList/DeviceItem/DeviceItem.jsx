import React from "react";
import { Card, Col, Image} from "react-bootstrap";
import star from "../../../assets/mini-star.jpg"

const DeviceItem = ({device}) => {
    return (
        <Col md={3} className="mt-3">
            <Card style={{width:150, cursor:'pointer'}}
            border="light">
                <Image width={150} height={150} ></Image>
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