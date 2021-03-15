import loginTpl from '../templates/login.art'
import { login as loginService } from "../services/login";

const htmlLogin = loginTpl({})

const login = (router) => {
    return (req, res, next) => {
        res.render(htmlLogin)
        $('#login').on('submit', _handleSubmit(router))
    }
}

const _handleSubmit = (router) => {
    return async(e) => {
        e.preventDefault()
        const data = $('#login').serialize()
        let {jqXHR, result} =  await loginService(data)
        console.log(jqXHR, result);
        const token = await jqXHR.getResponseHeader('X-Access-Token')
            console.log(token);
            localStorage.setItem('crm-token', token)
            if (result.result){
                router.go('/index/users')
            }
    }
}

export default login