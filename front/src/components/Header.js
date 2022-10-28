import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
        <nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <Link to='/'>
                        <img  src="./images/LogoMS.png" width="40%" alt="Martinica Store Logo"></img>
                    </Link>
                </div>
            </div>

            <div className='col-12 col-md-6 mt-2 mt-md-0'>
                <div className="input-group">
                    <input
                    type="text"
                    id="search_field"
                    class="form-control"
                    placeholder='Qué producto busca?'></input>
                    <div class="input-group-append">
				        <button id="search-btn" class="btn">
					        <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true">Buscar</i>
                        </button>
                    </div>
                </div>
            </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
	        <span><button className='btn' id="login_btn">Inicie Sesión</button></span>
                    <Link to="/cart">   
                        <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false" variant="primary"></i>
                    </Link> 
                    <span className="ml-1" id="cart_count">1</span>
                    </div>  

        </nav>

    </Fragment>
  )
}

export default Header