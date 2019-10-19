import React from "react";

import styled from "styled-components";
import { ProductConsumer } from "../../context";

const ProductFilter = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          price,
          minPrice,
          maxPrice,
          company,
          shipping,
          handleChange,
          storeProducts
        } = value;

        //get the company category
        let companyArray = storeProducts.map(item => item.company);
        companyArray = ["all", ...companyArray];

        let companies = new Set();
        companyArray.map(item => companies.add(item));
        companies = [...companies];
        //console.log(companies);

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* text search */}
                <div>
                  <label htmlFor="search">search product</label>
                  <input
                    type="text"
                    id="search" //id for label
                    name="search"
                    value={search}
                    onChange={handleChange}
                    className="filter-item"
                  />
                </div>
                {/* end of text search */}

                {/* category (company) search */}
                <div>
                  <label htmlFor="company">company</label>
                  <select
                    name="company"
                    id="company"
                    value={company}
                    onChange={handleChange}
                    className="filter-item"
                  >
                    {companies.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* end of category (company) search */}

                {/* price range */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price: <span>$ {price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={minPrice}
                    max={maxPrice}
                    value={price}
                    onChange={handleChange}
                    className="filter-price"
                  />
                </div>
                {/* end of price range */}

                {/* free shipping */}
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    checked={shipping && true}
                    onChange={handleChange}
                  />
                </div>
                {/* end of free shipping */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;

  label {
    font-weight: bold;
    text-transform: capitalize;
  }

  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 1px solid var(--darkGrey);
  }
`;

export default ProductFilter;
