import { Global, Module } from '@nestjs/common';
import { WebsocketGateway } from './websocket.service';

@Global()
@Module({
  providers: [WebsocketGateway],
  exports: [WebsocketGateway],
})
export class WebsocketModule {}
