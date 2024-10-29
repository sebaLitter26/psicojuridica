import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
import { PrismaModule } from './prisma/prisma.module';
import { WebsocketModule } from './websocket/websocket.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';

@Module({
  imports: [
    //GraphqlModule, PrismaModule, WhatsappModule, 
    WebsocketModule],
})
export class CoreModule {}
