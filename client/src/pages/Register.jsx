import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import {API} from "../API/config";
import { toast } from "react-toastify";


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await API.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    error?.response?.data?.msg.split(",").map((err) => toast.error(err));
    return error;
  }
};
const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>register</h4>
        <div className="form-row">
          <FormRow
            type={"text"}
            name={"name"}
            labelText={"name"}
          />
          <FormRow
            type={"Text"}
            name={"lastName"}
            labelText={"last name"}
          />
          <FormRow
            type={"Text"}
            name={"location"}
            labelText={"location"}
          />
          <FormRow type={"email"} name={"email"} />
          <FormRow type={"password"} name={"password"} labelText={"password"} />
        </div>
        <button className="btn btn-block" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <p>
          already a member?
          <Link className="member-btn" to="/login">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
