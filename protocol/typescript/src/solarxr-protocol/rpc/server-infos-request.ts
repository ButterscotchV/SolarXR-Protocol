// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



/**
 * Allows to ask generic infos about the server,
 * like the local ip address, the version of the server, the java version,
 * the current working dir and other informations we might want to show in the gui
 * for information/debug purposes
 */
export class ServerInfosRequest implements flatbuffers.IUnpackableObject<ServerInfosRequestT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ServerInfosRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsServerInfosRequest(bb:flatbuffers.ByteBuffer, obj?:ServerInfosRequest):ServerInfosRequest {
  return (obj || new ServerInfosRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsServerInfosRequest(bb:flatbuffers.ByteBuffer, obj?:ServerInfosRequest):ServerInfosRequest {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ServerInfosRequest()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static startServerInfosRequest(builder:flatbuffers.Builder) {
  builder.startObject(0);
}

static endServerInfosRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createServerInfosRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  ServerInfosRequest.startServerInfosRequest(builder);
  return ServerInfosRequest.endServerInfosRequest(builder);
}

unpack(): ServerInfosRequestT {
  return new ServerInfosRequestT();
}


unpackTo(_o: ServerInfosRequestT): void {}
}

export class ServerInfosRequestT implements flatbuffers.IGeneratedObject {
constructor(){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return ServerInfosRequest.createServerInfosRequest(builder);
}
}