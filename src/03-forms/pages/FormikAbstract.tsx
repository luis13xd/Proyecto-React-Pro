import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput, MyCheckbox, MySelect } from "../components";
import "../styles/styles.css";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(10, "Maximo 10 caracteress")
            .required("Requerido"),
          lastName: Yup.string()
            .max(12, "Maximo 12 caracteress")
            .required("Requerido"),
          email: Yup.string()
            .email("Formato de correo invalido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar terminos"),
          jobType: Yup.string()
            .notOneOf(["otro"], "Opción no permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Luis"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Lopez"
            />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="xxx@xd.com"
              type="email"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Select</option>
              <option value="frontend">FrontEnd</option>
              <option value="backend">Backend</option>
              <option value="fullstack">FullStack</option>
              <option value="otro">Otro</option>
            </MySelect>

            <MyCheckbox label="Terms" name="terms" />

            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
