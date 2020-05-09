import React from 'react'

const Recipes = ({ recipes }) => {

    return (
        <div className="col-lg-4 col-sm-12 d-flex">
            <div className="card  mt-4">

                <div className="diet_label"><span className="badge badge-warning text-white"> Diet : {recipes.dietLabels}</span></div>
                <img src={recipes.image} className="card-img-top img-fluid" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{recipes.label}</h5>
                    <div className="calories mt-2 mb-2">
                        <p>Ingredients</p>
                        <ul>
                            {recipes.ingredients.map(ingredient => (
                                <li >{ingredient.text}</li>
                            ))}

                        </ul>

                    </div>
                    <p className="card-text"><small className="text-muted">{recipes.source}</small></p>
                </div>
                <div className="card-footer text-center">
                    <p className="text-muted">Total Weight </p> <span>{recipes.totalWeight} <small>calories</small></span>
                </div>
            </div>
        </div>
    )
}
export default Recipes