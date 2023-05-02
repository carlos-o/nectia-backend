
export const userCreateSchema = {
  name: {
    notEmpty: true,
    isString: {
      errorMessage: 'string field is required'
    },
    isLength: {
      options: {min:3, max : 30},
      errorMessage: 'name must be at least 3 characters long'
    },
    errorMessage: "name field cannot be empty",
    trim: true
  },
  lastName: {
    notEmpty: true,
    isString: {
      errorMessage: 'string field is required'
    },
    isLength: {
      options: {min:3, max : 30},
      errorMessage: 'lastName must be at least 3 characters long'
    },
    errorMessage: "lastName field cannot be empty",
    trim: true
  },
  email: {
    notEmpty: true,
    isEmail: {errorMessage: "Please enter a valid email address"},
    trim: true,
    isLength: {
      options: {max : 255},
      errorMessage: 'Invalid email'
    },
    errorMessage: "Email field is required",
  },
  password: {
    notEmpty: true,
    trim: true,
    isString: {
      errorMessage: 'string field is required'
    },
    matches: {
      options: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      errorMessage: "password at least one letter, one number and one special character"
    },
    isLength: {
      options: { min: 8 },
      errorMessage: 'Password should be at least 8 chars',
    },
    errorMessage: "password field is required",
  }
}
