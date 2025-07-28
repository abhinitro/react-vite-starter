import { useState } from "react";

const About = () => {

  const [object, setObject] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const rest = { ...object };
    rest[name] = value;
    setObject(rest);
    Object.keys(object).forEach((key) => {
      if (object[key] === "") {
        setError((prev) => ({ ...prev, [key]: `${key} is required` }));
      } else {
        setError((prev) => ({ ...prev, [key]: "" }));
      }
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    Object.keys(object).forEach((key) => {
      if (object[key] === "") {
        setError((prev) => ({ ...prev, [key]: `${key} is required` }));
      } else {
        setError((prev) => ({ ...prev, [key]: "" }));
      }
    });

    console.log(object);
  }





  return <div>

    <form onSubmit={(e) => handleSubmit(e)}>

      <input name="firstName" placeholder="first name" value={object.firstName} onChange={(e) => handleChange(e)}></input><p className="error">{error.firstName}</p><br />
      <input name="lastName" placeholder="last name" value={object.lastName} onChange={(e) => handleChange(e)}></input><p className="error">{error.lastName}</p><br />
      <input name="email" placeholder="email" value={object.email} onChange={(e) => handleChange(e)}></input><p className="error">{error.email}</p><br />
      <input name="password" placeholder="password" value={object.password} onChange={(e) => handleChange(e)}></input><p className="error">{error.password}</p><br />
      <input name="confirmPassword" placeholder="confirm password" value={object.confirmPassword} onChange={(e) => handleChange(e)}></input><p className="error">{error.confirmPassword}</p><br />
      <input type="submit" value="Submit"></input><br />
      <input type="reset" value="Reset"></input><br />



    </form>


  </div>;
}
export default About;   