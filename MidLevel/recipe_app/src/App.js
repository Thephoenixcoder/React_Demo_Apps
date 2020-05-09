import React, { Component } from 'react';
import { FaSearch } from "react-icons/fa";
import Recipes from './Recipes'

let Application_ID = 'd6f68bf6';
let Application_Keys = 'df77b9a9f318509c45d6c6d69645a0de';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],

      searchKey: "",
      loading: false
    }
  }


  componentWillMount() {
    this.getRecipes()
  }

  // get all recipes 
  getRecipes = async (searchKey) => {

    this.setState({ loading: true });
    const response = await fetch(`https://api.edamam.com/search?q=${searchKey}&app_id=${Application_ID}&app_key=${Application_Keys}`);
    const data = await response.json();
    this.setState({
      recipes: data.hits
    })

    console.log(this.state.recipes)
  }

  updateSearch = (e) => {
    this.setState({
      searchKey: e.target.value,
    })
  }

  searchRecipes = e => {
    e.preventDefault();
    this.getRecipes(this.state.searchKey);
    this.setState({
      searchKey: ""
    })
  }



  render() {



    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 ml-auto mr-auto">
            <form onSubmit={this.searchRecipes}>
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" value={this.state.searchKey} onChange={this.updateSearch} />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="submit">
                    <FaSearch />
                  </button>
                </span>
              </div>
            </form>

          </div>
          <div className="row">
            {this.state.recipes.map(recipe => (
              <Recipes recipes={recipe.recipe} key={recipe.recipe.label} />
            ))}
          </div>
        </div>
      </div>
    );
  }




}

export default App;
