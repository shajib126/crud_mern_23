import cogoToast from 'cogo-toast';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, readProduct } from '../../actions/product';
import './ProductList.css';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(state => state.product);
  const deleteHandle = id => {
    dispatch(deleteProduct(id)).then(() => {
      cogoToast.info('product deleted');
      dispatch(readProduct());
    });
  };

  useEffect(() => {
    if (error) {
      cogoToast.error(error);
    }
    console.log(product);
  }, [dispatch]);
  return (
    <div className="productlist">
      <p>scroll to check all product</p>
      <table className="table">
        <thead>
          <tr>
            <th>NO.</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Product Code</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <img src={item.image} alt={item.productName} />
              </td>
              <td>{item.productName}</td>
              <td>{item.productCode}</td>
              <td>{item.unitPrice}৳</td>
              <td>{item.totalPrice}৳</td>
              <td className="edit">
                <span class="material-symbols-outlined">edit</span>
                <Link to={`/products/${item._id}`}>Edit</Link>
              </td>
              <td>
                
                <button className="del" onClick={() => deleteHandle(item._id)}>
                <span class="material-symbols-outlined">delete</span>
                  Del
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
