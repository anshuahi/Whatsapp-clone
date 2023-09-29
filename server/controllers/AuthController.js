
import getPrismaInstance from '../utils/PrismaClient.js';

export const checkUser = async (req, resp, next) => {
    try {
        const { email } = req.body;
        if (!email) {
            return resp.json({msg: "Email is required", status: false});
        }
        console.log(req.body, email);
        const prisma = getPrismaInstance();
        const user = await prisma.user.findUnique({where: {email}});
        if(!user) {
            return resp.json({msg: "User not found", status: false});
        }
        else {
            return resp.json({msg: "User not found", status: true, data: user});
        }

    } catch (error) {
        console.log(error);
    }
}
