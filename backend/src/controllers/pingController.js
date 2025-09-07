export const pingCheck = async function(req, res){
    return res.status(200).json({
        message : "hi ji"
    })

}