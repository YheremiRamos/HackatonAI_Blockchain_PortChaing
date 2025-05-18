import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [{
    provide: 'NEAR_RPC',
    useValue: 'https://rpc.testnet.near.org',
  }],
  exports: ['NEAR_RPC'],
})
export class NearModule {}