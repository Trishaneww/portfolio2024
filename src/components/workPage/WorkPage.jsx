import React from 'react'
import '../navbar/Navbar';
import './WorkPage.scss';

const WorkPage = () => {
  return (
    <div className="workPage">
        <Navbar />
        <div className="workPage-header">
            <p>Projects.</p>
            <p>A collection of tools and sites I've created, designed to be helpful, fun, & sometimes just a little bit weird.</p>
        </div>

        

    </div>
  )
}

export default WorkPage