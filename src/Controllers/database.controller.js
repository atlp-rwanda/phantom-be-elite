import pool from "../Database/database"

export const database = async (req, res) => {
    pool.query(`Select * from  Posts`,(err,result)=>{
        if(!err){
            res.send(result.rows)
        }else{
            return res.status(200).send({
                success: true,
            });
        }
    })
};