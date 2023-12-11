// const { expect } = require("chai");
// const { DataTypes } = require("sequelize");
// const { createSequelize, defineModel } = require("sequelize-test-helpers");
// const UserModel = require("../app/models/user.model");
// const sequelize = createSequelize();
// const User = defineModel(sequelize, UserModel);

// describe("User Model Tests", function () {
//   it("should create a new user", async function () {
//     const newUser = await User.create({
//       username: "testuser",
//       email: "testuser@example.com",
//       password: "securepassword",
//       age: 25,
//       contact: "12345678901",
//     });
//     const fetchedUser = await User.findOne({
//       where: { email: "testuser@example.com" },
//     });

//     expect(fetchedUser).to.not.be.null;
//     expect(fetchedUser.username).to.equal("testuser");
//     expect(fetchedUser.email).to.equal("testuser@example.com");
//     expect(fetchedUser.age).to.equal(25);
//     expect(fetchedUser.contact).to.equal("12345678901");
//   });
// });
