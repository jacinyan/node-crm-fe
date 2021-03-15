import http from '../utils/http'

export const usersList = async () => {
    try {
        let {result} = await http({
            url: process.env.HEROKU_END_POINT+'/api/users',
        })
        return result
    } catch (error) {
        console.log(error);
    }
}






