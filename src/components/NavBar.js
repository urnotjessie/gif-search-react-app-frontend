import React from 'react';

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <div className="container-fluid">
              <div className="navbar-header">
                  <a href="#">Gif-Search</a>
              </div>
              <div className="nav navbar-nav navbar-right">
                  <div class="row justify-content-end">
                    <div class="col-4">
                      <a href="#">Search</a>
                    </div>
                    <div class="col-4">
                        <a href="#">Trending</a>
                    </div>
                    <div class="col-4">
                        
                    </div>
                  </div>
              </div>
          </div>
      </nav>
  );
}

export default NavBar;
