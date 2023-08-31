import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceApi";
import Pages from "../components/Pages/Pages";

const Shop = observer(()=>{
    const {device} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
        fetchBrands().then(data=>device.setBrands(data))
    },[device])

    useEffect(()=>{
        console.log(device.selectedType.id,device.selectedBrand.id,device.page, device.limit);
        fetchDevices(device.selectedType.id,device.selectedBrand.id,device.page, device.limit).then(data=>{
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    },[device,device.selectedType.id,device.selectedBrand.id,device.page, device.limit])

    return(
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    )
})

export default Shop