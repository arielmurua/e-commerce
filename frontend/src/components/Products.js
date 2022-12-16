import React from 'react'
import './Products.css'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className='products-wrapper'>
      {/* <div className='products-side-nav'>
        side navigation
      </div> */}
      <div className='products-container'>
        <div className='products-filter-menu'>
          <label htmlFor='order-asc'>ASC</label>
            <input type={"checkbox"} name="order-asc" value={"ASC"}></input>
          <label htmlFor='order-desc'>DESC</label>
            <input type={"checkbox"} name="order-desc" value={"DESC"}></input>    
          <select className='products-order'>
            <option selected disabled defaultValue={null}>
              Select order 
            </option>
            <option>
              Option 1
            </option>
            <option>
              Option 2
            </option>
            <option>
              Option 3
            </option>
            <option>
              Option 4
            </option>
          </select>
        </div>
        <div className='products-categories-filter'>
          <select className='products-categories'>
            <option selected disabled defaultValue={null}>
              Categories
            </option>
            <option>
              CAT 1
            </option>
            <option>
              CAT 2
            </option>
            <option>
              CAT 3
            </option>
            <option>
              CAT 4
            </option>
          </select> 
        </div>
        <div className='products-pagination'>
          <button type={"button"}>
            <p>{"<"}</p>
          </button>
          <button type={"button"}>
            <p>{"1"}</p>
          </button>
          <button type={"button"}>
            <p>{"2"}</p>
          </button>
          <button type={"button"}>
            <p>{"3"}</p>
          </button>
          <button type={"button"}>
            <p>{">"}</p>
          </button>
        </div>
        <div className='products-list'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        <div className='products-pagination'>
          <button type={"button"}>
            <p>{"<"}</p>
          </button>
          <button type={"button"}>
            <p>{"1"}</p>
          </button>
          <button type={"button"}>
            <p>{"2"}</p>
          </button>
          <button type={"button"}>
            <p>{"3"}</p>
          </button>
          <button type={"button"}>
            <p>{">"}</p>
          </button>
        </div> 
      </div>
    </div>
  )
}

export default Products