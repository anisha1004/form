import React from 'react'
import "./Product.css"
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Switch from '@material-ui/core/Switch';

function Product()  {

  const [list, setList] = React.useState([]);
  const [product, setProduct] = React.useState('');
  const [cost, setCost] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleAdd(e) {
    e.preventDefault();
    console.log(product, cost, link);
    const newList = {
      product: product,
      cost: cost,
      link: link
    };
    list.push(newList);
    setList(list);
    <ul>
        {list.map((item) => (
          <li key={item.product}>{item.product, item.cost, item.link}</li>
        ))}
    </ul>
  }

  return (
        <div className="product_container">
          <h1><span>2</span>Product/Service</h1>
          <div className="product">

            <div className="product_contents">
              <span>Product/Service</span>
              <input 
                type="text" 
                value={product}
                onChange= {(e)=> setProduct(e.target.value)}
              />
            </div>

            <div className="product_contents">
              <span>Cost</span>
              <input 
                type="text" 
                value={cost}
                onChange= {(e)=> setCost(e.target.value)}/>
            </div>

            <div className="product_contents">
              <span>Product Link</span>
              <input 
                type="text" 
                value={link}
                onChange= {(e)=> setLink(e.target.value)}/>
            </div>
          </div>

          <div className="addProducts">
            <Button color="primary" onClick={handleAdd} >
              Add products
              <AddIcon />
              
                {list.map((item) => (
                  <list
                    product={item.product}
                    cost={item.cost}
                    link={item.link}
                  />
                ))}
                  
            </Button>
          </div>

          <Switch color="primary"></Switch>
          <span>Self Order for review</span>
        </div>
  )
}

export default Product;

