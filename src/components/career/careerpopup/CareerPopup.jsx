import React from 'react';
import '../careerpopup/CareerPopup.scss'
import { AwesomeButton } from 'react-awesome-button';

const CareerPopup = ({ togglePopup }) => {
  return (
    <div className="career-popup-overlay" onClick={togglePopup}>
      <div className="career-popup" onClick={(e) => e.stopPropagation()}>
        <h2>Apply for a Position</h2>
        <br />
        <form  method="POST" action="https://formsubmit.co/jinishcena@gmail.com" enctype="multipart/form-data" >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="Position">Select the JobRole</label>
          <select id="jobrole" name="Position">
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Team Leader">Team Lead</option>
                <option value="Content Writer">Content Writer</option>
                <option value="Web Developer">Web Developer</option>
                <option value="intern-Digital Marketing">internship-Digital Marketing</option>
                <option value="intern-Team Leader">internship-Team Lead</option>
                <option value="intern-Content Writer">internship-Content Writer</option>
                
          </select>
          </div>

          <div className="form-group1">
            <label htmlFor="pdfFile">Upload Resume (PDF):</label>
            <input type="file" id="pdfFile" name="attachment" accept="application/pdf" className='upload' required />
          </div>
          <AwesomeButton type='primary' >submit</AwesomeButton>
          {/* <button type="submit" className="submit-btn">Submit</button> */}
        </form>
      </div>
    </div>
  );
}

export default CareerPopup;
