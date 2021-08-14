const JobsDB = require("./../models/JobsDB");
const ErrorResponse = require("./../utils/errorResponse");

const registerJob = async (req, res, next) => {
    const { clientId, clientName, jobName,timings,gender,shift, status, location, salary} = req.body;
  
    if (!clientId||!clientName||!jobName||!timings||!gender) {
      //sending error
      return next(new ErrorResponse("please provide an (clientID/ ClientName/ jobname)", 400));
    }
  
    try {
  
      const job = await JobsDB.create({
        clientId,
        clientName,
        jobName,
        timings,
        gender,
        shift,
        status,
        location,
        salary

       
      });
  
      res.status(201).json({
        success: true,
        job
    })

  
    } catch (error) {
      //sending error
      next(error);
    }
  };

  const AllJobs = async(req, res, next) =>{

    try{

        const allJobs = await JobsDB.find( { status : "active" } );


        res.status(200).json({
            success:true,
            allJobs
        })
    }
    catch(error){
      next(error);
    }

}
const AllFemaleJobs = async(req, res, next) =>{

    try{

        const allFemaleJobs = await JobsDB.find( { gender : "female" } );


        res.status(200).json({
            success:true,
            allFemaleJobs
        })
    }
    catch(error){
      next(error);
    }

}
module.exports = {AllFemaleJobs, AllJobs,registerJob};