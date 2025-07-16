import {
  Formik,
  Field,
  Form,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: '',
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
          terms: Yup.boolean()
            .oneOf([true], 'Debe aceptar terminos'),
            jobType: Yup.string()
            .notOneOf(['otro'], 'Opción no permitida')
            .required('Requerido'),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select" >
              <option value="">Select</option>
              <option value="frontend">FrontEnd</option>
              <option value="backend">Backend</option>
              <option value="fullstack">FullStack</option>
              <option value="otro">Otro</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms
            </label>
            
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
