import { Transport } from '@nestjs/microservices';

export const kafkaConfiguration = {
  name: process.env.KAFKA_CLIENT_NAME,
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:29092'],
    },
    consumer: {
      groupId: 'this-id-is-unique',
    },
  },
};
