const AdminAuth = (req, res, next) => {
    const token = "xyz";

    const isAuthorized = token === "xyz";

    if (!isAuthorized) {
        res.status(404).send({ message: "you are not authorized" });
    }
    else {
        next();
    }

}

const UserAuth = (req,res,next)=>{
    const token = "abc";

    const isAuthorized = token === "abc";

    if(!isAuthorized){
        res.status(404).send({message:"you are not authorized"});
    }
    else{
        next();
    }
}

module.exports = {AdminAuth,UserAuth}