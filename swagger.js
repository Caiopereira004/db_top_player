import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API do Projeto",
      version: "1.0.0",
      description: "Documentação da API"
    }
  },
  apis: ["./src/routes/*.js"] // onde estão suas rotas
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;