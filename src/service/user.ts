import { getManager } from "typeorm";
import User from "../entity/user";

class UserService {
    async register(params: User) {
        const articleRepository = getManager().getRepository(User);
        return await articleRepository.save(params);
    }
}

export default new UserService();
