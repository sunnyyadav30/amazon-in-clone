import {isMobileExist} from './reducer'
import {isEmailExist} from './reducer'

class Validation{
    static checkFullName(fullname){
        const min = 3,max = 25;
        const username = fullname.current.value.trim();
        if (!this.isRequired(username)) {
            return {
                isValid : false,
                message: 'Name cannot be blank.'
            }
        } 
        else if(!this.isBetween(username.length, min, max)) {
            return {
                isValid : false,
                message: `Name must be between ${min} and ${max} characters.`
            }
        } 
        else {
            return{
                isValid : true,
                message : ""
            }
        }
    }

    static checkEmail(emailID){
        const email = emailID.current.value.trim();
        if (!this.isRequired(email)) {
            return {
                isValidEmail : false,
                message : "Email cannot be blank."
            }
        } 
        else if(!this.isEmailValid(email)) {
            return {
                isValidEmail : false,
                message : "Email is not valid."
            }
        } 
        else if(isEmailExist(email)){
            return {
                isValidEmail: false,
                message: "Email Id already exist."
            }
        }
        else{
            return {
                isValidEmail : true,
                message : ""
            }
        }
    }

    static checkPassword(passwordEl){
        const password = passwordEl.current.value.trim();
        if (!this.isRequired(password)) {
            return {
                isValidPassword : false,
                message : "Password cannot be blank."
            }
        } 
        else if(!this.isPasswordSecure(password)) {
            return {
                isValidPassword : false,
                message : "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)"
            }
        } 
        else {
            return {
                isValidPassword : true,
                message : ""
            }
        }
    }

    static checkMobileNumber(mobile){
        if (!this.isRequired(mobile.current.value.trim())) {
            return {
                isValidMobile : false,
                message : "Mobile number cannot be blank."
            }
        }
        else if(isMobileExist(mobile.current.value.trim())){
            return {
                isValidMobile : false,
                message : "Mobile number already exist."
            }
        } 
        else if(mobile.current.value.trim().length === 10){
            return {
                isValidMobile : true,
                message : ""
            }
        }
        else{
            return {
                isValidMobile : false,
                message : "Mobile number must be 10 digits."
            }
        }
    }

    static isRequired(value){
        return value === '' ? false : true;
    }

    static isBetween(length,min,max){
        return length < min || length > max ? false : true
    }

    static isEmailValid(email){
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
    static isPasswordSecure(password){
        const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return regex.test(password);
    }
}

export default Validation