import {
  useActionData,
  Link,
  Form,
  redirect,
  useNavigation,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const actionData = useActionData();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        {actionData?.error && <p className="error">{actionData.error}</p>}
        <FormRow
          type="text"
          name="name"
          labelText="First Name"
          placeholder="Enter your first name"
          title="First Name"
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          placeholder="Enter your last name"
          title="Last Name"
        />
        <FormRow
          type="text"
          name="location"
          labelText="Location"
          placeholder="Enter your location"
          title="Location"
        />
        <FormRow
          type="email"
          name="email"
          labelText="Email"
          placeholder="Enter your email"
          title="Email"
        />
        <FormRow
          type="password"
          name="password"
          labelText="Password"
          placeholder="Enter your password"
          title="Password"
        />
        <SubmitBtn />
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
