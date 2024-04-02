// file: grpc-http2 > src > app.controller.ts
import { Body, Controller, Get, OnModuleInit} from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { SummatorServiceClient } from './grpc.interface';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;

  private mathService: SummatorServiceClient;

  onModuleInit() {
    this.mathService = 
      this.client.getService<SummatorServiceClient>('MathService');
  }

  @Get('add')
  add(): Observable<{ sum: number }> {
    return this.mathService.sum({ numbers: [10, 2, 3, 4, 5] });
  }
}