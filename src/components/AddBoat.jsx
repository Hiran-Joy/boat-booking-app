import React from 'react'
import NavigationBar from './NavigationBar'

const AddBoat = () => {
  return (
    <div>
        
      <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Boat ID</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Boat Name</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Category</label>
                        <select name="" id="" className="form-control">
                            <option value="Budget">Budget</option>
                            <option value="Deluxe">Deluxe</option>
                            <option value="Premium">Premium</option>
                            <option value="Luxury">Luxury</option>
                        </select>

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Bedrooms</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Capacity</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">AC Type</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Price Per Night</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Route</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Built Year</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="form-label">Image URL</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Description</label>
                        <textarea className="form-control" rows="3"></textarea>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button className="btn btn-warning">Add Boat</button>
                    </div>
                </div>
            </div>
        </div>
      </div>   </div>
  )
}

export default AddBoat