'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('publications', {
        id: {
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID
        },
        profile_id: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            key: 'id',
            model: 'profiles'
          }
        },
        publication_type_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            key: 'id',
            model: 'publicationsTypes'
          }
        },
        city_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            key: 'id',
            model: 'cities'
          }
        },
        title: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        content: {
          type: Sequelize.TEXT
        },
        picture: {
          type: Sequelize.STRING
        },
        image_url: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }, {transaction})
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
      
    }
  },
  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('publications', {transaction})
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}