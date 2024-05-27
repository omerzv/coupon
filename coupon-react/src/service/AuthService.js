import axios from "axios";


class AuthService {

    async login(email, password, clientType) {
        var res = "";
        const response = await axios.post("http://localhost:8080/login", null, {
            params: {
                email: email,
                password: password,
                clientType: clientType
            }
        }).then(function (response) {
            res = response.data
        }).catch(function (error) {
            console.log(error)
        });
        return res;
    }

    async CustomerSignIn(customer) {
        const response = await axios.put("http://localhost:8080/signup/customer", customer)
            .then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.log(error)
            });
    }
    async CompanySignIn(company) {
        const response = await axios.put("http://localhost:8080/signup/company", company)
            .then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.log(error)
            });
    }
}

const authService = new AuthService();

export default authService;