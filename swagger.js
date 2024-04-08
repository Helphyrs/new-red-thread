const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BakeAPI',
      version: '1.0.0',
      description: 'Mon API de gestion de Boulangerie'
    },
    servers: [
      {
        url: 'http://localhost:4001/api'
      }
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID unique du produit',
            },
            name: {
              type: 'string',
              description: 'Nom du produit',
            },
            price: {
              type: 'number',
              format: 'float',
              description: 'Prix du produit',
            },
            status: {
              type: 'string',
              enum: ['vendu', 'invendu'],
              description: 'Statut du produit (vendu ou invendu)',
            },
            userId: {
              type: 'integer',
              description: 'ID de l\'utilisateur associé au produit',
            },
          },
          required: ['name', 'price', 'status', 'userId'],
        }
      }
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./routes/*.js', './controllers/*.js']
}

const swaggerSpec = swaggerJsdoc(options)

module.exports = swaggerSpec
