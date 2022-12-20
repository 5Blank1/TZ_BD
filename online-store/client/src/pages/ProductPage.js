import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneProduct} from "../http/productAPI";
const ProductPage = () => {


    const [product, setProduct] = useState({info:[]})
    const {id} = useParams()
    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    } , [])

    const  addToBasket = (product) => {
        this._basketproduct.push(product)
        alert(product)
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md = {4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + product.img} />
                </Col>
                <Col md = {4}>
                    <Row className={" ms-5 d-flex flex-column align-items-center"}>
                        <h2>{product.name}</h2>
                        </Row>
                        <Row className={" d-flex flex-column align-items-center"}>
                        <div>
                            <Card
                                className="ms-5 d-flex flex-column align-items-center justify-content-center"
                                style={{width:250, height:200 , fontSize: 32 , border:'5px solid grey'}}
                            >
                                <h3>От: {product.price} руб</h3>
                                <Button variant={"outline-warning"} onClick={() => addToBasket(product)}>Добавить в корзину</Button>
                            </Card>
                        </div>
                    </Row>
                </Col>
                <Col md = {4}>
                    <Row className="d-flex flex-column m-5">
                        {product.info.map(info =>
                            <Row key = {info.id} style = {{padding: 10}}>
                                <Row className="justify-content-center">{info.title}:</Row>
                                    {info.description}
                            </Row>
                        )}
                    </Row>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {product.info.map((info , index ) =>
                    <Row key = {info.id} style = {{background: index % 2 === 0 ? 'lightgray' : 'transparent' , padding: 10}}>
                        {info.title}:{info.characteristic}
                    </Row>
                )}
            </Row>
        </Container>

        // <Container className="mt-3">
        //     <Row>
        //         <Col md={4}>
        //             <Image width={300} height={300} src={process.env.REACT_APP_API_URL + product.img}/>
        //         </Col>
        //         <Col md={4}>
        //             <Row className="d-flex flex-column align-items-center">
        //                 <h2>{product.name}</h2>
        //                 <div
        //                     className="d-flex align-items-center justify-content-center"
        //                 >
        //                 </div>
        //             </Row>
        //         </Col>
        //         <Col md={4}>
        //             <Card
        //                 className="d-flex flex-column align-items-center justify-content-around"
        //                 style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
        //             >
        //                 <h3>От: {product.price} руб.</h3>
        //                 <Button variant={"outline-dark"}>Добавить в корзину</Button>
        //             </Card>
        //         </Col>
        //     </Row>
        //     <Row className="d-flex flex-column m-3">
        //         <h1>Характеристики</h1>
        //         {product.info.map((info, index) =>
        //             <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
        //                 {info.title}: {info.description}
        //             </Row>
        //         )}
        //     </Row>
        // </Container>
    );
};

export default ProductPage;