import { Box, Button, TextField,useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useTranslation } from "react-i18next";
import { tokens } from "../../theme";




const Form = () => {
  const theme=useTheme();
  const colors =tokens(theme.palette.mode)
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { t, i18n } = useTranslation();
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required(`${t('required')}`),
    lastName: yup.string().required(`${t('required')}`),
    email: yup.string().email("invalid email").required(`${t('required')}`),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required(`${t('required')}`),
    address1: yup.string().required(`${t('required')}`),
    address2: yup.string().required(`${t('required')}`),
  });

  return (
    <Box m="20px">
      <Header title={t("Profile Form")} subtitle={t("Create a New User Profile")} />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("First Name")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={i18n.language==='ar'? { gridColumn: "span 2",
                '& label': {
                  transformOrigin: "right !important",
                  left: "inherit !important",
                  right: "1.75rem !important",
                  fontSize: "small",
                  color: "#807D7B",
                  fontWeight: 400,
                  overflow: "unset",
              },"& 	.Mui-error":{
                textAlign:'right'        
             }
              }: {gridColumn: "span 2",}}
                
              
              />
              <TextField
             
                fullWidth
                variant="filled"
                type="text"
                label={t("Last Name")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={i18n.language==='ar'? { gridColumn: "span 2",
                '& label': {
                  transformOrigin: "right !important",
                  left: "inherit !important",
                  right: "1.75rem !important",
                  fontSize: "small",
                  color: "#807D7B",
                  fontWeight: 400,
                  overflow: "unset",
              },"& 	.Mui-error":{
                textAlign:'right'        
             }
              }: {gridColumn: "span 2",}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Email")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name={t("email")}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={i18n.language==='ar'? { gridColumn: "span 4",
                direction:'ltr',
                '& label': {
                  transformOrigin: "right !important",
                  left: "inherit !important",
                  right: "1.75rem !important",
                  fontSize: "small",
                  color: "#807D7B",
                  fontWeight: 400,
                  overflow: "unset",
              },"& 	.Mui-error":{
                textAlign:'right'        
             }
              }: {gridColumn: "span 2",}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Contact Number")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name={t("contact")}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={i18n.language==='ar'? { gridColumn: "span 4",
                direction:'ltr',
                '& label': {
                  transformOrigin: "right !important",
                  left: "inherit !important",
                  right: "1.75rem !important",
                  fontSize: "small",
                  color: "#807D7B",
                  fontWeight: 400,
                  overflow: "unset",
              },
              "& 	.Mui-error":{
                textAlign:'right'        
             }
              }: {gridColumn: "span 2",}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Address 1")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={i18n.language==='ar'? { gridColumn: "span 4",
                '& label': {
                  transformOrigin: "right !important",
                  left: "inherit !important",
                  right: "1.75rem !important",
                  fontSize: "small",
                  color: "#807D7B",
                  fontWeight: 400,
                  overflow: "unset",
              },"& 	.Mui-error":{
                textAlign:'right'        
             }
              }: {gridColumn: "span 2",}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label={t("Address 2")}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={i18n.language==='ar'? { gridColumn: "span 4",
                '& label': {
                  transformOrigin: "right !important",
                  left: "inherit !important",
                  right: "1.75rem !important",
                  fontSize: "small",
                  color: "#807D7B",
                  fontWeight: 400,
                  overflow: "unset",
              },"& 	.Mui-error":{
                 textAlign:'right'        
              }
              }: {gridColumn: "span 2",}}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              
            }}
          >
            
            {t("Create New User")}
          </Button>
        </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;