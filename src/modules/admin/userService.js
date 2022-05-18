export class UserService {
    async getUser(login) {
        const res = await fetch(`http://localhost:4545/users?login=${login}`)
        const array = await res.json();
        const [arr] = await array
        return arr
    }
}