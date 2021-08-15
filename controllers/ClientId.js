const ClientDB = require("../models/ClientId");
const ErrorResponse = require("./../utils/errorResponse");
const registerClient = async (req, res, next) => {
    const { clientId, name, org,phone} = req.body;
  
    if (!clientId||! name||!org||!phone) {
      //sending error
      return next(new ErrorResponse("please provide an (clientID/ ClientName/ jobname)", 400));
    }
  
    try {
  
      const client = await ClientDB.create({
        clientId, name, org,phone

       
      });
  
      res.status(201).json({
        success: true,
        client
    })

  
    } catch (error) {
      //sending error
      next(error);
    }
  };
  module.exports = {registerClient};