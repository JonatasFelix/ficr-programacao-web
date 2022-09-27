import * as EmailValidator from 'email-validator';

const EmailChecker = (email) => {
    return EmailValidator.validate(email);
};

export default EmailChecker;