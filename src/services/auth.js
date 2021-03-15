import http from '../utils/http'

export const auth = async () => {
    try {
        let { result } = await http({
            url: process.env.HEROKU_END_POINT+'/api/users/isAuth',
        })
        return result
    } catch (error) {
        console.log(error);
    }
}

