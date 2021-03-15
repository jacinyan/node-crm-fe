import http from '../utils/http'

export const usersAdd = async (data) => {
    try {
        let {result} = await http({
            url: process.env.HEROKU_END_POINT+'/api/users',
            type: 'POST',
            data,
        })
        return result
    } catch (error) {
        console.log(error);
    }
}  