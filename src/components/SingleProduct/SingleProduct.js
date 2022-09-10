import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import "./SingleProduct.css"
const SingleProduct = (props) => {
    const {title, image} = props.product;
    const {setCartCount} = props
    return (
        <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
            className='col-md-4'>
            <div className="card p-2 border">
                 <img className='w-50 m-auto' src= {image} alt="" />
                 <h4>{title.slice(0, 10)}</h4>
                 <div className="d-flex justify-content-around">
                 <button onClick={setCartCount} className='btn btn-success'>Add To Cart</button>
                 <button className='btn btn-danger'>Delate</button>
                 {/* <button className='btn btn-primary'>Detailes</button>
                  */}
                  <ReactModal product = {props.product}></ReactModal>

                 </div>
            </div>
        </div>
    );
};

export default SingleProduct;