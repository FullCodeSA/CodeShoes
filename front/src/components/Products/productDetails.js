import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from "../layout/MetaData"
import { useParams } from 'react-router-dom'
import { getProductDetails, clearErrors } from '../../actions/productActions'
import { useAlert } from 'react-alert'
import { Carousel } from 'react-bootstrap'
import { Card } from 'react-bootstrap'


export const ProductDetails = () => {
    const { loading, product, error } = useSelector(state => state.productDetails)
    const { id } = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();
    const [quantity, setQuantity] = useState(1)
    const consumir = {
        "_id": "6358aebcd72d6232da3150b2",
        "nombre": "Tenis Lysenda Azul",
        "precio": 119900,
        "descripcion": "Zapatos deportivos ideales para los atletas. Con propiedades que amortiguan el impacto de tus pisadas y te da mayor comodidad en la práctica de running y otros deportes.",
        "calificacion": 4.9,
        "imagen": [
            {
                "public_id": "productos/dsvbpny402gelwugv2l",
                "url": "./img/Tenis_5.png",
                "_id": "6358aebcd72d6232da3150b3",

            }
        ],
        "vendedor": "Juan Herrera",
        "categoria": "Calzado",
        "inventario": 40,
        "numCalificaciones": 32,
        "opiniones": [
        ],
        "fechaCreacion": "2022-10-27T14:30:20.676Z",
        "__v": 0
    };


    useEffect(() => {
        dispatch(getProductDetails(id))
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error, id])

    const increaseQty = () => {
        const contador = document.querySelector('.count')

        if (contador.valueAsNumber >= consumir.inventario) return;

        const qty = contador.valueAsNumber + 1;
        setQuantity(qty)
    }

    const decreaseQty = () => {
        const contador = document.querySelector('.count')

        if (contador.valueAsNumber <= 1) return;

        const qty = contador.valueAsNumber - 1;
        setQuantity(qty)
    }

    return (
        <Fragment>
            {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                <Fragment>
                    <MetaData title={consumir.nombre}></MetaData>

                    <Card className='col-12  mt-1'>

                        <div className='row d-flex justify-content-around'>

                            <div className='col-12 col-lg-6 img-fluid' id="imagen_producto">

                                {/*imagen */}

                                <Carousel pause='hover'>
                                    {consumir.imagen && consumir.imagen.map(img => (
                                        <Carousel.Item key={img.public_id}>
                                            <img className="d-block w-100" src={"../" + img.url} alt={consumir.nombre}></img>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                                <div className='col-12 col-lg-3 mt-5'></div>


                                {/*Descripcion */}
                                <Card>

                                    <div class="card" >
                                        <div class="card-header">
                                            <h4 className="mt-2">Descripción</h4>
                                        </div>
                                        <div class="card-body">
                                            <blockquote class="blockquote mb-0">
                                                <p>{consumir.descripcion}</p>
                                            </blockquote>
                                        </div>
                                    </div>


                                </Card>
                            </div>

                            {/*datos */}
                            <div className='col-12 col-lg-6 mt-1'>
                                
                                    <div class="card" >
                                        <div class="card-header">
                                            <h2 align="center">{consumir.nombre}</h2>
                                            <br></br>
                                            <p id="consumir_id" align="center">ID - {consumir._id}</p>
                                        </div>

                                        <div class="card-body">

                                            <div className='rating-outer'>
                                                <div className="rating-inner" style={{ width: `${(consumir.calificacion / 5) * 100}%` }}></div>
                                            </div>

                                            <span id="No_de_reviews">   {consumir.numCalificaciones} - Reviews</span>
                                            <hr />
                                            <h2 id="precio_consumiro">${consumir.precio}</h2>
                                            <div className="stockCounter d-inline">
                                                <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                                                <input type="number" className="form-control count d-inline" value={quantity} readOnly />
                                                <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                                            </div>

                                            <button type="button" id="carrito_btn" className="btn btn-primary d-inline ml-4" disabled={consumir.inventario === 0}>Agregar al Carrito</button>
                                            <br/><br/>
                                            <p>Estado: <span id="stock_stado" className={consumir.inventario > 0 ? 'greenColor' : 'redColor'}>{consumir.inventario > 0 ? "Stock disponible" : "Stock agotado"}</span></p>
                                            <p id="vendedor">Vendido por: <strong>{consumir.vendedor}</strong></p>
                                            <button id="btn_review" type="button" className="btn btn-primary mt-4"data-toggle="modal" data-target="#ratingModal">Deja tu Opinion</button>
                                            <div className="alert alert-danger mt-5" type="alert">Inicia Sesión para dejar tu review</div>

                                            {/*Mensaje emergente para dejar opinion y calificacion*/}
                                            <div className="row mt-2 mb-5">
                                                <div className="rating w-50">
                                                    <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog"
                                                        aria-labelledby='ratingModalLabel' aria-hidden="true">
                                                        <div className="modal-dialog" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="ratingModalLabel">Enviar Review</h5>
                                                                    <button type="button" className='close' data-dismiss="modal" aria-label='Close'>
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <ul className="stars">
                                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                                    </ul>

                                                                    <textarea name="review" id="review" className="form-control mt3"></textarea>

                                                                    <button className="btn my-3 float-right review-btn px-4 text-white"
                                                                        data-dismiss="modal" aria-label="Close">Enviar</button>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                

                            </div>
                        </div>
                    </Card>
                </Fragment>
            )}
        </Fragment>

    )
}