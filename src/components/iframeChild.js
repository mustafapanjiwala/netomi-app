import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./form.css";

const IframeChild = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState([]);
  const [countryCode, setCountryCode] = useState("");
  const [st, setSt] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with inputValue here
  };

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json"
      );
      const data = await response.json();
      setCountry(data);
    };
    getCountries();
  }, []);

  const handleCountry = (event) => {
    const getCountryCode = event.target.value;
    setCountryCode(getCountryCode);
  };
  const handleState = (event) => {
    //Do something
  };

  useEffect(() => {
    const getState = async () => {
      const resState = await fetch(
        "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json"
      );
      const stateData = await resState.json();
      setSt(resState);
      console.log(stateData);
    };
    getState();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="form-control">
        <h3>Can you please provide your potential details</h3>
        <p className="label">Name:</p>
        <input
          type="p"
          placeholder="Enter Name"
          className="input"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="label">Date of birth: </p>
        <input
          type="date"
          value={startDate}
          className="input"
          onChange={(e) => setStartDate(e.target.value)}
          placeholderp="Select a date"
        />
        <p className="label">Contact Number: </p>
        <input
          type="number"
          className="input"
          placeholder="Enter Contact Number"
          name="Contact Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <p className="label">Country:</p>
        <select
          name="country"
          className="input"
          onChange={(e) => handleCountry(e)}
        >
          <option value="">--Select Country--</option>
          {country.map((country, index) => {
            return (
              <option key={index} value={country.code2}>
                {country.name}
              </option>
            );
          })}
        </select>
        {/* <select
          name="state"
          className="input"
          onChange={(e) => handleState(e)}
        >
          <option value="">--Select State--</option>
          {st.map((st, index) => {
            return (
              <option key={index} value={state}>
                {st.name}
              </option>
            );
          })}
        </select> */}
        <p className="label">Email: </p>
        <input
          type="email"
          className="input"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </>
  );
};

export default IframeChild;
