// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { OutboundUnion, unionToOutboundUnion, unionListToOutboundUnion } from '../slimevr-protocol/outbound-union';
import { DataFeedRequest, DataFeedRequestT } from '../slimevr-protocol/data-feed/data-feed-request';
import { DataFeedUpdate, DataFeedUpdateT } from '../slimevr-protocol/data-feed/data-feed-update';
import { PollDataFeed, PollDataFeedT } from '../slimevr-protocol/data-feed/poll-data-feed';
import { HeartbeatRequest, HeartbeatRequestT } from '../slimevr-protocol/rpc/heartbeat-request';
import { SettingsResponse, SettingsResponseT } from '../slimevr-protocol/rpc/settings-response';


export class OutboundPacket {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):OutboundPacket {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsOutboundPacket(bb:flatbuffers.ByteBuffer, obj?:OutboundPacket):OutboundPacket {
  return (obj || new OutboundPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsOutboundPacket(bb:flatbuffers.ByteBuffer, obj?:OutboundPacket):OutboundPacket {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new OutboundPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

acknowledgeMe():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

packetType():OutboundUnion {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : OutboundUnion.NONE;
}

packet<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startOutboundPacket(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addAcknowledgeMe(builder:flatbuffers.Builder, acknowledgeMe:boolean) {
  builder.addFieldInt8(0, +acknowledgeMe, +false);
}

static addPacketType(builder:flatbuffers.Builder, packetType:OutboundUnion) {
  builder.addFieldInt8(1, packetType, OutboundUnion.NONE);
}

static addPacket(builder:flatbuffers.Builder, packetOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, packetOffset, 0);
}

static endOutboundPacket(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createOutboundPacket(builder:flatbuffers.Builder, acknowledgeMe:boolean, packetType:OutboundUnion, packetOffset:flatbuffers.Offset):flatbuffers.Offset {
  OutboundPacket.startOutboundPacket(builder);
  OutboundPacket.addAcknowledgeMe(builder, acknowledgeMe);
  OutboundPacket.addPacketType(builder, packetType);
  OutboundPacket.addPacket(builder, packetOffset);
  return OutboundPacket.endOutboundPacket(builder);
}

unpack(): OutboundPacketT {
  return new OutboundPacketT(
    this.acknowledgeMe(),
    this.packetType(),
    (() => {
      let temp = unionToOutboundUnion(this.packetType(), this.packet.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })()
  );
}


unpackTo(_o: OutboundPacketT): void {
  _o.acknowledgeMe = this.acknowledgeMe();
  _o.packetType = this.packetType();
  _o.packet = (() => {
      let temp = unionToOutboundUnion(this.packetType(), this.packet.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
}
}

export class OutboundPacketT {
constructor(
  public acknowledgeMe: boolean = false,
  public packetType: OutboundUnion = OutboundUnion.NONE,
  public packet: DataFeedRequestT|DataFeedUpdateT|HeartbeatRequestT|PollDataFeedT|SettingsResponseT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const packet = builder.createObjectOffset(this.packet);

  return OutboundPacket.createOutboundPacket(builder,
    this.acknowledgeMe,
    this.packetType,
    packet
  );
}
}