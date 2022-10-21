

/**
 *
 *
 * @export
 * @param {string} email
 * @return {*} 
 */
export default function checkValidDomain(email:string){
    //Function checks that email passed is from a valid domain.
    const email_domain:string[] = ['@cetys.edu.mx','cetys.mx'];
    // check if the string has some of the terms
    if( email_domain.some(term => email.includes(term))){
        console.log(`Email ${email} is of a known domain.`);
        return true
    }

}
