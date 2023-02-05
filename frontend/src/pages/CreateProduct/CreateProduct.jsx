import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../actions/product';
import { errorToast, isEmpty, success } from '../../helpers/validator';
import './CreateProduct.css';
const CreateProduct = () => {
  let productName,
    productCode,
    image,
    unitPrice,
    totalPrice = useRef();
  const dispatch = useDispatch();
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
      createProduct(
        product_name,
        product_code,
        product_image,
        total_price,
        unit_price
      )
    ).then(() => {
      success('Created');
      productName.value = '';
      productCode.value = '';
      image.value = '';
      totalPrice.value = '';
      unitPrice.value = '';
    });
  };
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
