import React from 'react';
import { BsGraphUpArrow } from 'react-icons/bs';
import { BsTruck } from 'react-icons/bs';

// Separate Test component definition
const Test = () => {
  return (
    <div className='fs-1 text-success'>
      <BsGraphUpArrow />
    </div>
  );
};
const Test2 = () => {
  return (
    <div className='fs-1 text-success'>
      <BsTruck />
    </div>
  );
};

const Test3 = () => {
  return (
    <div className='fs-1 text-success'>
      <BsGraphUpArrow />
    </div>
  )
}

function Home() {
  return (
    <div className='p-5 bg-light'>
      <div className="container-fluid">
        <div className="row">
          {/* First Block */}
          <div className="col-12 col-lg-12 col-md-4 col-sm-6 p-3">
            <div className="d-flex justify-content-around align-items-center  bg-white border border-secondary shadow-sm ">
              {/* Use the Test component */}
              <Test />
              <div>
                <p>Sales</p>
                <h2>234</h2>
              </div>
            </div>
          </div>

          {/* Second Block */}
          <div className=" col-12 col-lg-12 col-md-4 col-sm-6 p-3">
            <div className="d-flex justify-content-around align-items-center border bg-white border-info shadow-sm ">
              < Test2 />
              <div>
                <p>Delivery</p>
                <h2>134</h2>
              </div>
            </div>
          </div>

          {/* Third Block */}
          <div className="col-12 col-lg-12 col-md-4 col-sm-6 p-3">
            <div className="d-flex justify-content-around align-items-center border  border-secondary bg-white shadow-sm bg-white">
              <Test3 />
              <div>
                <p>Increase</p>
                <h2>20%</h2>
              </div>
            </div>
          </div>

          {/* Fourth Block */}
          <div className=" col-12 col-lg-12 col-md-4 col-sm-6 p-3">
            <div className="d-flex justify-content-around align-items-center border border-secondary bg-white">
              <Test2 />
              <div>
                <p>Delivery</p>
                <h2>434</h2>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
