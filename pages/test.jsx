import React, { useState } from "react";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);
  const [country, setCountry] = useState("");

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      console.log("interests", interests, "value", value);
      setInterests([...interests, value]);
    } else {
      setInterests(
        interests.filter((interest) => {
          console.log("interest", interest, "value", value);
          interest !== value;
        })
      );
    }
  };

  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Gender:
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Female
        <input
          type="radio"
          name="gender"
          value="Other"
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Other
      </label>
      <br />
      <label>
        Interests:
        <input
          type="checkbox"
          name="interests"
          value="sports"
          onChange={handleCheckbox}
        />{" "}
        Sports
        <input
          type="checkbox"
          name="interests"
          value="music"
          onChange={handleCheckbox}
        />{" "}
        Music
        <input
          type="checkbox"
          name="interests"
          value="movies"
          onChange={handleCheckbox}
        />{" "}
        Movies
      </label>
      <br />
      <label>
        Country:
        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select a country</option>
          <option value="usa">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="canada">Canada</option>
        </select>
      </label>
      <br />
      <button
        onClick={() => {
          console.log("Form Data: ", {
            name,
            email,
            password,
            gender,
            interests,
            country,
          });
        }}
      >
        Sign Up
      </button>
    </div>
  );
}

export default SignUpForm;
