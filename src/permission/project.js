import { ROLE } from "../../data"

const canViewProject = (user, project)=>{
    return (
        user.ROLE ===ROLE.ADMIN ||
        project.userId === user.id
    )

}


module.exports={
    canViewProject
}