export const gameCreateSchema = {
  name: {
    notEmpty: true,
    isString: {
      errorMessage: 'string field is required'
    },
    isLength: {
      options: {min:3, max : 100},
      errorMessage: 'name must be at least 3 characters long'
    },
    errorMessage: "name field cannot be empty",
    trim: true
  },
  played: {
    notEmpty: true,
    isBoolean: {
      errorMessage: 'boolean field is required'
    },
    errorMessage: "played field cannot be empty",
  },
  purchased: {
    notEmpty: true,
    isDate: { 
      errorMessage: "date field is not correct format yyyy-mm-dd"
    },
    errorMessage: "purchased field cannot be empty",
  },
  finished: {
    notEmpty: false,
    isDate: { 
      errorMessage: "date field is not correct format yyyy-mm-dd"
    },
    optional: {
      options: { checkFalsy: true, nullable: true}
    },
  }
}


export const compareDates = (datePurchased: any, dateFinished: any) => {
  const dateOne = new Date(datePurchased)
  if (!dateFinished){
    return false
  } 
  const dateTwo = new Date(dateFinished)
  return dateOne > dateTwo
}