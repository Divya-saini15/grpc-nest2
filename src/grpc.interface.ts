// file: grpc-http2 > src > grpc.interface.ts
import { Observable } from 'rxjs';
// import { IUserDetails, IUserDto } from './user.interface';

export interface SummatorServiceClient {
  sum(data: { numbers: number[] }): Observable<{ sum: number }>;
}