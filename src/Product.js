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

  function handleAdd() {
    console.log(product, cost, link);
    const newItems = {
      product: product,
      cost: cost,
      link: link,
    };
    var newList = [...list, newItems];
    setList(newList);
  }
    

  return (
        <div className="product_container">
          <h1><span>2</span>Product/Service</h1>
          <div className="product">

            <div className="product_contents">
              <span>Product/Service</span>
              <div className= "inputBox">
                <input 
                  type="text" 
                  value={product}
                  onChange= {(e)=> setProduct(e.target.value)}
                />
              </div>
            </div>

            <div className="product_contents">
              <span>Cost</span>
              <div className= "inputBox">
                <input 
                  type="text" 
                  value={cost}
                  onChange= {(e)=> setCost(e.target.value)}
                />
              </div>
            </div>

            <div className="product_contents">
              <span>Product Link</span>
              <div className= "inputBox">
                <input 
                  type="text" 
                  value={link}
                  onChange= {(e)=> setLink(e.target.value)}
                />
                </div>
            </div>
          </div>

          <ul>
            {(list.length > 0) &&
             list.slice(0,4).map((item) => (

            <div className="product">

            <div className="product_contents_list">
              <span>Product/Service</span>
              <div className="inputBox">
                <input 
                  type="text" 
                  value={item.product}
                  onChange= {(e)=> setProduct(e.target.value)}
                />
              </div>
            </div>

            <div className="product_contents">
              <span>Cost</span>
              <div className="inputBox">
                <input 
                  type="text" 
                  value={item.cost}
                  onChange= {(e)=> setCost(e.target.value)}/>
                </div>
            </div>

            <div className="product_contents">
              <span>Product Link</span>
              <div className="inputBox">
                <input 
                  type="text" 
                  value={item.link}
                  onChange= {(e)=> setLink(e.target.value)}/>
              </div>
            </div>
          </div>         
          ))}
          </ul>

          <div className="addProducts">
            <Button color="primary" onClick={handleAdd} >
              Add products
              <AddIcon />
            </Button>
          </div>

          <Switch color="primary"></Switch>
          <span>Self Order for review</span>

        </div>
  )
}

export default Product;

