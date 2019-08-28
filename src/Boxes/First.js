import React from 'react';
function First(){
    return(
    <div className="first box" id="box1">
    <div className="card px-3 py-5">
      <h3 class="text-center text-success">Select the meal</h3>
      <form action="" onSubmit={(e) => this.next(e, 1)}>
        <div className="form-group">
          <label for=""> Select the Meal</label>
          <select className="form-control" id="meal" required onChange={this.setData} >
            <option value="" default hidden>Select Meal</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>

          </select>
        </div>
        <div className="form-group">
          <label for="">Select number of peoples</label>
          <input type="number" className="form-control" required name="" id="people" max="10" onKeyUp={this.setData} />
        </div>
        <div className="pre-next-button mt-5">
          <input type="submit" value="Next" className="bg-primary px-4 py-3" />


        </div>

      </form>
    </div>

  </div>
)
    }
export default First;