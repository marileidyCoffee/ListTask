
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formulario =()=>{
    return(
        <Formik
            initialValues={{task: ''}}
            validate={values => {
                const errors = {};
                if (!values.task) {
                errors.task = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                <div>
                    <Field type="text" name="task" placeholder='Agregar tarea nueva'/>
                    <ErrorMessage name="task" component="div" className='error'/>
                </div>
                <button type="submit" disabled={isSubmitting} className='btn-ok' > Submit</button>
                </Form>
            )}
        </Formik>     
    )
}

export default Formulario