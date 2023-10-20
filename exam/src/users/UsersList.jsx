import { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import App from "./RegistrationForm";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((resp) => resp.data)
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>email</th>
            <th>born</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users) => (
            <tr key={user._id}>
              <td>{users._id}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.born}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <Formik
        initialValues={{ name: "", surname: "" }}
        onSubmit={(values) => {
          const newUser = values;
          axios
            .post("http://localhost:3000/", newUser)
            .then(() => {
              setUsers((prevUsers) => [...prevUsers, newUser]);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        <Form>
          <Field name="brand" placeholder="Brand..." />
          <Field name="model" placeholder="Model..." />
          <button type="submit">Add new car</button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
