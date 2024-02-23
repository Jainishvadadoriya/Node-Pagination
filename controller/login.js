var registermodel = require('../model/register');


exports.insert = async (req, res) => {
   var data = await registermodel.create(req.body)

   res.status(200).json({
      status: "datainsert",
      data

   })
}

exports.get_data = async (req, res) => {

   var page_no = req.query.page_no;
   var limit = 3;
   if (page_no == undefined) {
      page_no = 1;
   }

   var start = (page_no - 1) * limit;
   var data = await registermodel.find().skip(start).limit(limit);
   var data_count= await registermodel.find().count();

   var total_page = Math.ceil(data_count/limit);


   res.status(200).json({
      status: "get data",
      data,
      total_page,
      page_no

   })
}

exports.login = async (req, res) => {
   var data = await registermodel.find({ email: req.body.email })
   if (data.length == 1) {
      if (data[0].password == req.body.password) {
         res.status(200).json({
            status: "login",
         })
      } else {
         res.status(200).json({
            status: "check password",
         })
      }
   }
   else {
      res.status(200).json({
         status: "check password",
      })
   }

}