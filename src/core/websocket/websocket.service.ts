import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log('New client connected', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    console.log('message', data);
    this.server.emit('message', data);
    // console.log(client.id);
    // client.broadcast.emit('mensaje', data);
  }

  @SubscribeMessage('ice-candidate')
  handleIceCandidate(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    //console.log(`Client ${client.id} ice-candidate`);
    //this.server.emit('ice-candidate', data);
    // console.log(client.id);
    //data= { type: 'ice-candidate', data};
    this.server.emit('ice-candidate', data);
  }

  @SubscribeMessage('answer')
  handleAnswer(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    console.log(`Client ${client.id} answer`);
    //this.server.emit('answer', data);
    // console.log(client.id);
    client.broadcast.emit('answer', data);
  }

  @SubscribeMessage('offer')
  handleOffer(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    console.log(`Client ${client.id} offer` );
    //this.server.emit('offer', data);
    client.broadcast.emit('offer', data);
  }

  @SubscribeMessage('hangup')
  handleHangup(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    console.log(`Client ${client.id}  hanup`);
    //this.server.emit('hangup', data);
    // console.log(client.id);
    client.broadcast.emit('hangup', data);
  }
}