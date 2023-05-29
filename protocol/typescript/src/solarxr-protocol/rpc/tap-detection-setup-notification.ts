// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TrackerId, TrackerIdT } from '../../solarxr-protocol/datatypes/tracker-id.js';


/**
 * See TapDetectionSettings::setup_mode
 */
export class TapDetectionSetupNotification implements flatbuffers.IUnpackableObject<TapDetectionSetupNotificationT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TapDetectionSetupNotification {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTapDetectionSetupNotification(bb:flatbuffers.ByteBuffer, obj?:TapDetectionSetupNotification):TapDetectionSetupNotification {
  return (obj || new TapDetectionSetupNotification()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTapDetectionSetupNotification(bb:flatbuffers.ByteBuffer, obj?:TapDetectionSetupNotification):TapDetectionSetupNotification {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TapDetectionSetupNotification()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

trackerId(obj?:TrackerId):TrackerId|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new TrackerId()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startTapDetectionSetupNotification(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addTrackerId(builder:flatbuffers.Builder, trackerIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, trackerIdOffset, 0);
}

static endTapDetectionSetupNotification(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTapDetectionSetupNotification(builder:flatbuffers.Builder, trackerIdOffset:flatbuffers.Offset):flatbuffers.Offset {
  TapDetectionSetupNotification.startTapDetectionSetupNotification(builder);
  TapDetectionSetupNotification.addTrackerId(builder, trackerIdOffset);
  return TapDetectionSetupNotification.endTapDetectionSetupNotification(builder);
}

unpack(): TapDetectionSetupNotificationT {
  return new TapDetectionSetupNotificationT(
    (this.trackerId() !== null ? this.trackerId()!.unpack() : null)
  );
}


unpackTo(_o: TapDetectionSetupNotificationT): void {
  _o.trackerId = (this.trackerId() !== null ? this.trackerId()!.unpack() : null);
}
}

export class TapDetectionSetupNotificationT implements flatbuffers.IGeneratedObject {
constructor(
  public trackerId: TrackerIdT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const trackerId = (this.trackerId !== null ? this.trackerId!.pack(builder) : 0);

  return TapDetectionSetupNotification.createTapDetectionSetupNotification(builder,
    trackerId
  );
}
}