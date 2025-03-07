import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormikForm = () => (
  <Formik
    initialValues={{ username: '', email: '', password: '' }}
    onSubmit={(values) => console.log(values)}
  >
    <Form>
      <Field type="text" name="username" />
      <ErrorMessage name="username" />
      <Field type="email" name="email" />
      <ErrorMessage name="email" />
      <Field type="password" name="password" />
      <ErrorMessage name="password" />
      <button type="submit">Register</button>
    </Form>
  </Formik>
);

export default FormikForm;
