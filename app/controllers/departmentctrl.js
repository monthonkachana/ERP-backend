const { QueryTypes } = require("sequelize");
var db = require("../models");

const dpt = db.departments;
var adddpt = async (req, res) => {
  let data = await dpt.create({
    d_id: "2",
    name: "software depart",
    desc: "software depart have the team of the development including web, app, software",
  });
  let response = {
    data: "departments add",
  };
  return res.status(200).json(response);
};
//add departments in a bulk
var addBulkdp = async (req, res) => {
  let data = await dpt.bulkCreate([
    {
      d_id: "3",
      name: "hr depart",
      desc: "hr depart have the team of the hr management",
    },
    {
      d_id: "4",
      name: "admin depart",
      desc: "admin depart have the admin and ceo and cto who can view everything",
    },
  ]);
  let response = {
    data: "departments in the bulk added",
  };
  return res.status(200).json(response);
};
//total departments details
var totalDeparts = async (req, res) => {
  let data = await db.sequelize.query("select * from departments", {
    type: QueryTypes.SELECT,
  });

  // let response = {
  //     'data': data
  // }
  return res.status(200).json(data);
};
//count total departments
var countDepart = async (req, res) => {
  const { count, rows } = await dpt.findAndCountAll({});
  let response = {
    "Total departments": count,
  };
  res.json(response);
  res.end();
};
module.exports = {
  adddpt,
  addBulkdp,
  totalDeparts,
  countDepart,
};
