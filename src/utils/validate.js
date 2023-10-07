export const ValidateForm = (Fullname,email, password) => {
    const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const validatePassword =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const validateName = /^[^a-zA-Z]+/.test(Fullname)
    
    if(!validateName) return 'Please Enter the valid Name'
    if(!validateEmail) return 'Please Enter the valid Email'
    if(!validatePassword) return 'InCorrect Password'

    return null;

}
