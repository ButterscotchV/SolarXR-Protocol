// automatically generated by the FlatBuffers compiler, do not modify

package slimevr_protocol.server;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class TrackerListFeatures extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_2_0_0(); }
  public static TrackerListFeatures getRootAsTrackerListFeatures(ByteBuffer _bb) { return getRootAsTrackerListFeatures(_bb, new TrackerListFeatures()); }
  public static TrackerListFeatures getRootAsTrackerListFeatures(ByteBuffer _bb, TrackerListFeatures obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public TrackerListFeatures __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public int interval() { int o = __offset(4); return o != 0 ? bb.getShort(o + bb_pos) & 0xFFFF : 0; }
  public boolean complete() { int o = __offset(6); return o != 0 ? 0!=bb.get(o + bb_pos) : false; }
  public slimevr_protocol.server.DeviceStatusFeatures deviceFeatures() { return deviceFeatures(new slimevr_protocol.server.DeviceStatusFeatures()); }
  public slimevr_protocol.server.DeviceStatusFeatures deviceFeatures(slimevr_protocol.server.DeviceStatusFeatures obj) { int o = __offset(8); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }

  public static int createTrackerListFeatures(FlatBufferBuilder builder,
      int interval,
      boolean complete,
      int deviceFeaturesOffset) {
    builder.startTable(3);
    TrackerListFeatures.addDeviceFeatures(builder, deviceFeaturesOffset);
    TrackerListFeatures.addInterval(builder, interval);
    TrackerListFeatures.addComplete(builder, complete);
    return TrackerListFeatures.endTrackerListFeatures(builder);
  }

  public static void startTrackerListFeatures(FlatBufferBuilder builder) { builder.startTable(3); }
  public static void addInterval(FlatBufferBuilder builder, int interval) { builder.addShort(0, (short) interval, (short) 0); }
  public static void addComplete(FlatBufferBuilder builder, boolean complete) { builder.addBoolean(1, complete, false); }
  public static void addDeviceFeatures(FlatBufferBuilder builder, int deviceFeaturesOffset) { builder.addOffset(2, deviceFeaturesOffset, 0); }
  public static int endTrackerListFeatures(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public TrackerListFeatures get(int j) { return get(new TrackerListFeatures(), j); }
    public TrackerListFeatures get(TrackerListFeatures obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}
