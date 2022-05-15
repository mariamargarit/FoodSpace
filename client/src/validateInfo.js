export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = 'Username required'
    }

    if(!values.password) {
        errors.password = 'Password required'
    } else if(values.password.length < 6){
        errors.password = 'Password needs to be at least 6 characters'
    }

    if(!values.password2) {
        errors.password2 = 'Password required'
    } else if(values.password2 !== values.password){
        errors.password2 = 'Passwords do not match'
    }

    return errors;
}