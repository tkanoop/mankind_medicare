const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const prescriptionSchema = Schema({
    bookingid:{
        type:String,
        

    },


  clientName: {
    type: String,
   
  },
  doctorName: {
    type: String,
    
  },
  
  date: {
    type: String,
    required: true,
  },
  starting_time: {
    type: String,
    
   
  },
  diseaseone:{
    type:String,
   
  },
  diseasetwo:{
    type:String,
    
  },
  medicineone:{
    type:String,
   
  },
  firsttimes:{
    type:String
  },
  firstdays:{
    type:String
  },
  medicinetwo:{
    type:String
  },
  secondtimes:{
    type:String
   

  },
  seconddays:{
    type:String
  }


 
});
module.exports = mongoose.model("Prescription", prescriptionSchema);
