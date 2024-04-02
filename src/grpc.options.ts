// file: grpc-http2 > src > grpc.options.ts
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['math'],
    protoPath: [
      join(__dirname, '../src/proto/app.proto'),
    ],
  },
};