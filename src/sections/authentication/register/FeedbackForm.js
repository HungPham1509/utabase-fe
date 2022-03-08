import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function FeedbackForm() {
    const navigate = useNavigate();

    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('必須'),
        title: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('必須'),
        email: Yup.string().email('Email must be a valid email address').required('必須'),
        description: Yup.string().required('必須')
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            title: '',
            email: '',
            description: ''
        },
        validationSchema: RegisterSchema,
        onSubmit: () => {
            navigate('/dashboard/app', { replace: true });
        }
    });

    const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

    return (
        <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <TextField
                            fullWidth
                            label="お名前"
                            {...getFieldProps('firstName')}
                            error={Boolean(touched.firstName && errors.firstName)}
                            helperText={touched.firstName && errors.firstName}
                        />

                        <TextField
                            fullWidth
                            label="タイトル"
                            {...getFieldProps('title')}
                            error={Boolean(touched.title && errors.title)}
                            helperText={touched.title && errors.title}
                        />
                    </Stack>

                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="メール"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />

                    <TextField
                        fullWidth
                        label="コメント"
                        {...getFieldProps('description')}
                        error={Boolean(touched.description && errors.description)}
                        helperText={touched.description && errors.description}
                    />

                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        loading={isSubmitting}
                    >
                        送信
                    </LoadingButton>
                </Stack>
            </Form>
        </FormikProvider>
    );
}
