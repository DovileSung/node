import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [bornDate, setBornDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, surname, email, bornDate });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vardas:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Pavardė:
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </label>
      <label>
        El.Paštas:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Gimimo data:
        <input
          type="date"
          value={bornDate}
          onChange={(e) => setBornDate(e.target.value)}
        />
      </label>
      <input type="submit" value="Pateikti" />
    </form>
  );
};
export default RegistrationForm;
