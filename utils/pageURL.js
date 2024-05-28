const baseURL = 'https://automationexercise.com'
const baseAPIurl = 'https://automationexercise.com/api'

const pageURL = {
    loginURL: baseURL + '/login',
    productsURL: baseURL + '/products',
    contactUsURL: baseURL + '/contact_us',
    postCreateAccountURL: baseAPIurl + '/createAccount',
    getUserURL: baseAPIurl + 'getUserDetailByEmail?email=katarzynahajzer90@gmail.com',
    deleteUserURL: baseAPIurl + '/deleteAccount?email=katarzynahajzer90@gmail.com?password=123'
}
module.exports = { pageURL }