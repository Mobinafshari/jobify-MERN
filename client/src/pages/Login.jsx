import { Link, Form, redirect, useNavigation , useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import { API } from '../API/config';
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await API.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    error?.response?.data?.msg.split(",").map((err) => toast.error(err));
    return error;
  }
};
const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "secret123",
    };
    try {
      await API.post("/auth/login", data);
      toast.success("take a test drive");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type={"email"} name={"email"} />
        <FormRow type={"password"} name={"password"} labelText={"password"} />
        <button className="btn btn-block" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <button className="btn btn-block" onClick={loginDemoUser}>
          explore the app
        </button>
        <p>
          dont have an account?
          <Link className="member-btn" to="/register">
            register now
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
