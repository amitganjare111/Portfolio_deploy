const Visitor = require ("../Model/VisitorModel");

exports.AddVisitor = async (req, res) => {

    const {name, email, message} = req.body;
    try{
        
        const visitor = await Visitor.create({name, email, message});
       
        res.status(200).json({success:true})

    }catch(err){
        res.status(400).json({
        success:false,
        message: err.message
      })
    }
};