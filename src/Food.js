import React, { Component } from 'react';
import './Food.css';
export default class Food extends Component {
  constructor() {
    super();
    this.state = {
      values: [
        {
          "id": 1,
          "name": "Chicken Burger",
          "restaurant": "Mc Donalds",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 2,
          "name": "Ham Burger",
          "restaurant": "Mc Donalds",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 3,
          "name": "Cheese Burger",
          "restaurant": "Mc Donalds",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 4,
          "name": "Fries",
          "restaurant": "Mc Donalds",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 5,
          "name": "Egg Muffin",
          "restaurant": "Mc Donalds",
          "availableMeals": ["breakfast"]
        },
        {
          "id": 6,
          "name": "Burrito",
          "restaurant": "Taco Bell",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 7,
          "name": "Tacos",
          "restaurant": "Taco Bell",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 8,
          "name": "Quesadilla",
          "restaurant": "Taco Bell",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 9,
          "name": "Steak",
          "restaurant": "BBQ Hut",
          "availableMeals": ["dinner"]
        },
        {
          "id": 10,
          "name": "Yakitori",
          "restaurant": "BBQ Hut",
          "availableMeals": ["dinner"]
        },
        {
          "id": 11,
          "name": "Nankotsu",
          "restaurant": "BBQ Hut",
          "availableMeals": ["dinner"]
        },
        {
          "id": 12,
          "name": "Piman",
          "restaurant": "BBQ Hut",
          "availableMeals": ["dinner"]
        },
        {
          "id": 13,
          "name": "Vegan Bento",
          "restaurant": "Vege Deli",
          "availableMeals": ["lunch"]
        },
        {
          "id": 14,
          "name": "Coleslaw Sandwich",
          "restaurant": "Vege Deli",
          "availableMeals": ["breakfast"]
        },
        {
          "id": 15,
          "name": "Grilled Sandwich",
          "restaurant": "Vege Deli",
          "availableMeals": ["breakfast"]
        },
        {
          "id": 16,
          "name": "Veg. Salad",
          "restaurant": "Vege Deli",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 17,
          "name": "Fruit Salad",
          "restaurant": "Vege Deli",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 18,
          "name": "Corn Soup",
          "restaurant": "Vege Deli",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 19,
          "name": "Tomato Soup",
          "restaurant": "Vege Deli",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 20,
          "name": "Minestrone Soup",
          "restaurant": "Vege Deli",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 21,
          "name": "Pepperoni Pizza",
          "restaurant": "Pizzeria",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 22,
          "name": "Pepperoni Pizza",
          "restaurant": "Pizzeria",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 23,
          "name": "Hawaiian Pizza",
          "restaurant": "Pizzeria",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 24,
          "name": "Seafood Pizza",
          "restaurant": "Pizzeria",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 25,
          "name": "Deep Dish Pizza",
          "restaurant": "Pizzeria",
          "availableMeals": ["dinner"]
        },
        {
          "id": 26,
          "name": "Chow Mein",
          "restaurant": "Panda Express",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 27,
          "name": "Mapo Tofu",
          "restaurant": "Panda Express",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 28,
          "name": "Kung Pao",
          "restaurant": "Panda Express",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 29,
          "name": "Wontons",
          "restaurant": "Panda Express",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 30,
          "name": "Garlic Bread",
          "restaurant": "Olive Garden",
          "availableMeals": ["breakfast", "lunch", "dinner"]
        },
        {
          "id": 31,
          "name": "Ravioli",
          "restaurant": "Olive Garden",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 32,
          "name": "Rigatoni Spaghetti",
          "restaurant": "Olive Garden",
          "availableMeals": ["lunch", "dinner"]
        },
        {
          "id": 33,
          "name": "Fettucine Pasta",
          "restaurant": "Olive Garden",
          "availableMeals": ["lunch", "dinner"]
        }
      ],

      meal: "ddd",
      people: "",
      restaurent: "",
      dishes: [
        {
          meal: "",
          quantity: ""
        }
      ]

    }
  }

// function to set the selected dish name 
  setDishname = (e, id) => {
    var oldDish = this.state.dishes;
    oldDish[id].meal = e.target.value;
    this.setState({
      dishes: oldDish
    })

  }

  // function to set the selected dish value
  setDishValue = (e, id) => {

    var oldDish = this.state.dishes;
    oldDish[id].quantity = e.target.value;
    this.setState({
      dishes: oldDish
    })
  }

//display next step 
  next = (e, i) => {
    e.preventDefault();
    var box = `box${i}`;
    var nextbox = `box${i + 1}`;
    document.getElementById(box).style.display = "none";
    document.getElementById(nextbox).style.display = "block";

  }

  // go to previous steps
  previous = (i) => {
    var box = `box${i}`;
    var nextbox = `box${i - 1}`;
    document.getElementById(box).style.display = "none";
    document.getElementById(nextbox).style.display = "block";

  }
// function to set the values on change
  setData = (e) => {
    console.log("fired");
    console.log();
    this.setState({
      [e.target.id]: e.target.value
    })
    console.table(this.state.order);
  }

  // function to add more dishes
  handleAdd = () => {
    this.setState({
      dishes: this.state.dishes.concat([
        {
          meal: "",
          quantity: ""
        }
      ])
    })
  }


  render() {
    console.table(this.state);
    return (
      <div classNameName="hello">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-sm-8">
              <div className="steps-box" id="steps-box">
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
                <div className="second mt-4 box" id="box2">
                  <div className="card py-4 px-4">


                    <h1 className="text-center">Please Select a Reastaurent</h1>
                    <form action="" onSubmit={(e) => this.next(e, 2)}>
                      <div className="form-group">
                        <select className="form-control" required id="restaurent" onChange={this.setData}>
                          <option value="" default hidden>Select restaurant</option>
                          {this.state.values.map((v, i) => {
                            if (v.availableMeals.includes(this.state.meal)) {
                              return (
                                <option value={v.restaurant}>{v.restaurant}</option>
                              )
                            }
                          })}
                        </select>
                      </div>
                      
                      <div className="pre-next-button mt-5">
                        <ul className="d-flex justify-content-between step">
                          <li className="bg-warning" onClick={() => this.previous(2)}>Previous</li>
                          <input type="submit" value="Next" className="bg-primary px-4 py-3" />

                        </ul>
                      </div>


                    </form>
                  </div>

                </div>
                <div className="third mt-4 box" id="box3">
                  <div className="card">
                    <h3>Select the Dish</h3>
                    <form action=""  onSubmit={(e) => this.next(e, 3)}>
                      <div className="form-group">
                        <label for=""> </label>
                        {this.state.dishes.map((v, i) => {
                          return (
                            <div className="row mt-3">
                              <div className="col-sm-7">
                                <select className="form-control" id="meal" required id="dish" onChange={(e) => this.setDishname(e, i)}>
                                  {this.state.values.map((v, i) => {
                                    if (v.restaurant.includes(this.state.restaurent)) {
                                      return (
                                        <option value={v.name}>{v.name}</option>
                                      )
                                    }
                                  })}
                                </select>
                              </div>
                              <div className="col-sm-5">

                                <input type="number" required placeholder="servings" id="quantity" onChange={(e) => this.setDishValue(e, i)} max={this.state.people} className="form-control" />
                              </div>
                            </div>
                          )
                        })}

                        <div className="btn btn-success" onClick={() => { this.handleAdd() }}>One More</div>
                      
                        <div className="pre-next-button mt-5">
                    <ul className="d-flex justify-content-between step">
                      <li className="bg-warning px-3 py-2" onClick={() => this.previous(3)}>Previous</li>
                      <input type="submit" value="Next" className="bg-primary px-4 py-3" />
                    </ul>
                  </div>
                      </div>
                    </form>
                  </div>
                  

                </div>
                <div className="fourth mt-4 box" id="box4">
                  <div className="bill" id="bill">
                    <div class="row">
                      <div class="col-sm-6">
                        Meal
     </div>
                      <div class="col-sm-6">
                       {this.state.meal}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        Peoples
     </div>
                      <div class="col-sm-6">
                       {this.state.people}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        Restourent
     </div>
                      <div class="col-sm-6">
                     {this.state.restaurent}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        DIsh name
     </div>
                      <div class="col-sm-6">
                        {this.state.dishes.map((v,i)=>{
                          return(
                            <li>{v.meal} with {v.quantity}</li>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}
