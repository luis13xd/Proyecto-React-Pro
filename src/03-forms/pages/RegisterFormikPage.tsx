import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
              .min(2, "Mínimo 2 caracteres")
              .max(10, "Máximo 10 caracteres")
              .required("Requerido"),
            email: Yup.string()
              .email("Correo inválido")
              .required("Requerido"),
            password: Yup.string()
              .min(6, "Mínimo 6 caracteres")
              .required("Requerido"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
              .required("Requerido"),
          })
        }
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput
              label="Nombre"
              name="name"
              placeholder="Luis"
              type="text"
            />

            <MyTextInput
              label="Correo electrónico"
              name="email"
              placeholder="correo@ejemplo.com"
              type="email"
            />

            <MyTextInput
              label="Contraseña"
              name="password"
              placeholder="******"
              type="password"
            />

            <MyTextInput
              label="Confirmar contraseña"
              name="confirmPassword"
              placeholder="******"
              type="password"
            />

            <button type="submit">Registrar</button>

            <button type="button" onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
