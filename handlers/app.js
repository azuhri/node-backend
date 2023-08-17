const testingFunction = async (req , res) => {
    let response = {
        code: 200,
        status: true,
        message: "success get data",
    };
    return res.status(response.code).json(response);
}

module.exports = {
 testingFunction   
}