import React from 'react';

const Home = () => {
  return (
    <div className="home-form">
      <form>
        <label for="form-search"></label>
        <input type="text" id="form-search" placeholder="Search Google or type URL" />
      </form>
    </div>
  )
}

export default Home;
