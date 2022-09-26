import * as Joi from 'joi';

const schemaObject = Joi.object({
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
  POSTGRES_PORT: Joi.number().required(),
});

export default schemaObject;
