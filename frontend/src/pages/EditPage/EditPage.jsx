import cogoToast from 'cogo-toast';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct, readProductById } from '../../actions/product';
import { errorToast, isEmpty, success } from '../../helpers/validator';

const EditPage = () => {
  let productName,
    productCode,
    image,
    unitPrice,
    totalPrice = useRef();
  const { id } = useParams();

  const dispatch = useDispatch();
  const { loading, singleProduct,error } = useSelector(state => state.productById);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const product_name = productName.value;
    const product_code = productCode.value;
    const product_image = image.value;
    const total_price = totalPrice.value;
    const unit_price = unitPrice.value;
    if (
      isEmpty(
        product_name ||
          product_code ||
          product_image ||
          total_price ||
          unit_price
      )
    ) {
      errorToast('all field are required');
    }
    dispatch(
      editProduct(
        id,
        product_name,
        product_code,
        product_image,
        total_price,
        unit_price
      )
    ).then(() => {
      
    }).then(()=>{
      navigate('/products')
      success('updated');
    })
  };
  const readData = async()=>{
    await dispatch(readProductById(id));
   
  }
  useEffect(() => {
    readData()      
  }, [dispatch]);

  //useEffect 
  useEffect(()=>{
    productName.value = singleProduct?.product?.productName;
    productCode.value = singleProduct?.product?.productCode;
    image.value = singleProduct?.product?.image;
    totalPrice.value = singleProduct?.product?.totalPrice;
    unitPrice.value = singleProduct?.product?.unitPrice;
  },[singleProduct])
  return (
    <div className="create">
     
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Product Name</label>
        <input ref={input => (productName = input)} type="text" />
        <label htmlFor="">#Product Code</label>
        <input ref={input => (productCode = input)} type="text" />
        <label>Image</label>
        <input ref={input => (image = input)} type="text" />
        <label htmlFor="">Unit Price</label>
        <input ref={input => (unitPrice = input)} type="text" />
        <label htmlFor="">Total Price</label>
        <input ref={input => (totalPrice = input)} type="text" />
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default EditPage;
