import React, { useEffect, useState } from "react";
import "./form.css";

const IframeChild = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");

  const [countryData, setCountryData] = useState([]);
  const [countryIndex, setCountryIndex] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      number,
      email,
      country: country,
      state,
      target: "parentComponent",
    };
    console.log(formData, "from child");
    window.parent.postMessage(formData, "/");
  };

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json"
      );
      const data = await response.json();
      console.log(data);
      setCountryData(data);
    };
    getCountries();
  }, []);

  const handleCountryChange = (event) => {
    const countryIndex = event.target.value;
    setCountryIndex(countryIndex);
    setCountry(countryData[countryIndex]);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };

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
          type="tel"
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
          onChange={(e) => handleCountryChange(e)}
        >
          <option value="">--Select Country--</option>
          {countryData.map((country, index) => {
            return (
              <option key={index} value={index}>
                {country.name}
              </option>
            );
          })}
        </select>
        <select name="state" className="input" onChange={(e) => handleState(e)}>
          {countryData && countryData[countryIndex] ? (
            <>
              <option value="">--Select State--</option>
              {countryData[countryIndex].states.map((state, index) => {
                return (
                  <option key={index} value={state.code}>
                    {state.name}
                  </option>
                );
              })}
            </>
          ) : null}
        </select>
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
