// automatically generated by the FlatBuffers compiler, do not modify

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class InboundPacket extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_2_0_0(); }
  public static InboundPacket getRootAsInboundPacket(ByteBuffer _bb) { return getRootAsInboundPacket(_bb, new InboundPacket()); }
  public static InboundPacket getRootAsInboundPacket(ByteBuffer _bb, InboundPacket obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public InboundPacket __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public boolean acknowledgeMe() { int o = __offset(4); return o != 0 ? 0!=bb.get(o + bb_pos) : false; }
  public byte packetType() { int o = __offset(6); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public Table packet(Table obj) { int o = __offset(8); return o != 0 ? __union(obj, o + bb_pos) : null; }

  public static int createInboundPacket(FlatBufferBuilder builder,
      boolean acknowledgeMe,
      byte packetType,
      int packetOffset) {
    builder.startTable(3);
    InboundPacket.addPacket(builder, packetOffset);
    InboundPacket.addPacketType(builder, packetType);
    InboundPacket.addAcknowledgeMe(builder, acknowledgeMe);
    return InboundPacket.endInboundPacket(builder);
  }

  public static void startInboundPacket(FlatBufferBuilder builder) { builder.startTable(3); }
  public static void addAcknowledgeMe(FlatBufferBuilder builder, boolean acknowledgeMe) { builder.addBoolean(0, acknowledgeMe, false); }
  public static void addPacketType(FlatBufferBuilder builder, byte packetType) { builder.addByte(1, packetType, 0); }
  public static void addPacket(FlatBufferBuilder builder, int packetOffset) { builder.addOffset(2, packetOffset, 0); }
  public static int endInboundPacket(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public InboundPacket get(int j) { return get(new InboundPacket(), j); }
    public InboundPacket get(InboundPacket obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}
