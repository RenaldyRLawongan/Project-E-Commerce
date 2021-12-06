import React from "react";
//import { Link } from "react-router-dom";
import images1 from "../images/cream.jpg";
import images2 from "../images/grey.jpg";
import images3 from "../images/pink.jpg";

const MainCards = () => {
  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
            <label className="font-semibold font-bold text-light-400 px-3 py-2 bg-gray-200 rounded-md">
              <span className="textnew">NEW</span>
              <div className="d-flex flex-row-reverse bd-highlight">
                <i className="far fa-heart"></i>
                <i className="fas fa-list px-3"></i>
              </div>
            </label>
            <div className="product-1 align-items-center p-2 text-center">
              <img
                src={images1}
                className="rounded"
                alt="Cream Sofa"
                width="200"
              />
              <h5>Cream Sofa</h5>
              <div className="mt-3 info">
                <div className="cost mt-3 text-dark">
                  <div className="star mt-3 align-items-center">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                    <span className="ms-5 pe-3">Rp. 12.000</span>
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
            <label className="font-semibold font-bold text-light-400 px-3 py-2 bg-gray-200 rounded-md">
              <span className="textnew">NEW</span>
              <div className="d-flex flex-row-reverse bd-highlight">
                <i className="far fa-heart"></i>
                <i className="fas fa-list px-3"></i>
              </div>
            </label>
            <div className="product-1 align-items-center p-2 text-center">
              <img
                src={images2}
                className="rounded"
                alt="Cream Sofa"
                width="301"
              />
              <h5>Grey Sofa</h5>
              <div className="mt-3 info">
                <div className="cost mt-3 text-dark">
                  <div className="star mt-3 align-items-center">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                    <span className="ms-5 pe-3">Rp. 12.000</span>
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mt-3 shadow-lg p-3 mb-5 bg-body rounded">
            <label className="font-semibold font-bold text-light-400 px-3 py-2 bg-gray-200 rounded-md">
              <span className="textnew">NEW</span>
              <div className="d-flex flex-row-reverse bd-highlight">
                <i className="far fa-heart"></i>
                <i className="fas fa-list px-3"></i>
              </div>
            </label>
            <div className="product-1 align-items-center p-2 text-center">
              <img
                src={images3}
                className="rounded"
                alt="Cream Sofa"
                width="323"
              />
              <h5>Pink Sofa</h5>
              <div className="mt-3 info">
                <div className="cost mt-3 text-dark">
                  <div className="star mt-3 align-items-center">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="far fa-star"></i>
                    <span className="ms-5 pe-3">Rp. 12.000</span>
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
