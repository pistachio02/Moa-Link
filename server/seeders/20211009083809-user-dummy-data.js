'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // await queryInterface.bulkInsert('Users', [{
    //   username: '정종화',
    //   email: 'wiaptm0219@gmail.com',
    //   password: '12345',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});
    // await queryInterface.bulkInsert('Users', [{
    //   username: '김코딩',
    //   email: 'kimcoding42@gmail.com',
    //   password: '12345',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});
    // await queryInterface.bulkInsert('Users', [{
    //   username: '박해커',
    //   email: 'parkhacker42@gmail.com',
    //   password: '12345',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});

    // await queryInterface.bulkInsert('Urls', [{
    //   url: 'www.naver.com',
    //   title: '네이버',
    //   description: '네이버',
    //   categoryId: 1,
    //   allUrlId: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});

    // await queryInterface.bulkInsert('Urls', [{
    //   url: 'www.google.com',
    //   title: '구글',
    //   description: '구글',
    //   categoryId: 1,
    //   allUrlId: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});

    // await queryInterface.bulkInsert('Categories', [{
    //   Name: 'Games',
    //   User_Id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});

    // await queryInterface.bulkInsert('Categories', [{
    //   Name: 'Shopping',
    //   User_Id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});

    // await queryInterface.bulkInsert('Categories', [{
    //   Name: 'Works',
    //   User_Id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});

    // await queryInterface.bulkInsert('Categories', [{
    //   Name: 'Music',
    //   User_Id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});

    // await queryInterface.bulkInsert('Categories', [{
    //   Name: 'Etc',
    //   User_Id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});

    // await queryInterface.bulkInsert('Categories', [{
    //   Name: 'Private',
    //   User_Id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});

    // await queryInterface.bulkInsert('AllUrls', [{
    //   Name: 'readAll',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Users', null, {});
  }
};
