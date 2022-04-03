// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ImuId } from '../../../slimevr-protocol/datatypes/hardware-info/imu-id';
import { MacAddress, MacAddressT } from '../../../slimevr-protocol/datatypes/hardware-info/mac-address';
import { McuId } from '../../../slimevr-protocol/datatypes/hardware-info/mcu-id';


/**
 * Mostly static info about the device's hardware/firmware.
 */
export class FirmwareInfo {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):FirmwareInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsFirmwareInfo(bb:flatbuffers.ByteBuffer, obj?:FirmwareInfo):FirmwareInfo {
  return (obj || new FirmwareInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsFirmwareInfo(bb:flatbuffers.ByteBuffer, obj?:FirmwareInfo):FirmwareInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new FirmwareInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

mcuId():McuId {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : McuId.Other;
}

/**
 * The Imu types, enumerated in the same order that they are referred to in
 * the firmware.
 */
imuIds(index: number):ImuId|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint16(this.bb!.__vector(this.bb_pos + offset) + index * 2) : 0;
}

imuIdsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

imuIdsArray():Uint16Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Uint16Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

/**
 * A human-friendly name to display as the name of the device.
 */
displayName():string|null
displayName(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
displayName(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * A human-friendly string for the device model.
 */
model():string|null
model(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
model(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * A human-friendly string for the manufacturer of the device.
 */
manufacturer():string|null
manufacturer(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
manufacturer(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * The hardware version of the device. For example, pcb version.
 */
hardwareRevision():string|null
hardwareRevision(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
hardwareRevision(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * The version of the slimevr firmware that the device is running.
 */
firmwareVersion():string|null
firmwareVersion(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
firmwareVersion(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

macAddress(obj?:MacAddress):MacAddress|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new MacAddress()).__init(this.bb_pos + offset, this.bb!) : null;
}

static startFirmwareInfo(builder:flatbuffers.Builder) {
  builder.startObject(8);
}

static addMcuId(builder:flatbuffers.Builder, mcuId:McuId) {
  builder.addFieldInt16(0, mcuId, McuId.Other);
}

static addImuIds(builder:flatbuffers.Builder, imuIdsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, imuIdsOffset, 0);
}

static createImuIdsVector(builder:flatbuffers.Builder, data:ImuId[]):flatbuffers.Offset {
  builder.startVector(2, data.length, 2);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt16(data[i]!);
  }
  return builder.endVector();
}

static startImuIdsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(2, numElems, 2);
}

static addDisplayName(builder:flatbuffers.Builder, displayNameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, displayNameOffset, 0);
}

static addModel(builder:flatbuffers.Builder, modelOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, modelOffset, 0);
}

static addManufacturer(builder:flatbuffers.Builder, manufacturerOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, manufacturerOffset, 0);
}

static addHardwareRevision(builder:flatbuffers.Builder, hardwareRevisionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, hardwareRevisionOffset, 0);
}

static addFirmwareVersion(builder:flatbuffers.Builder, firmwareVersionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, firmwareVersionOffset, 0);
}

static addMacAddress(builder:flatbuffers.Builder, macAddressOffset:flatbuffers.Offset) {
  builder.addFieldStruct(7, macAddressOffset, 0);
}

static endFirmwareInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): FirmwareInfoT {
  return new FirmwareInfoT(
    this.mcuId(),
    this.bb!.createScalarList(this.imuIds.bind(this), this.imuIdsLength()),
    this.displayName(),
    this.model(),
    this.manufacturer(),
    this.hardwareRevision(),
    this.firmwareVersion(),
    (this.macAddress() !== null ? this.macAddress()!.unpack() : null)
  );
}


unpackTo(_o: FirmwareInfoT): void {
  _o.mcuId = this.mcuId();
  _o.imuIds = this.bb!.createScalarList(this.imuIds.bind(this), this.imuIdsLength());
  _o.displayName = this.displayName();
  _o.model = this.model();
  _o.manufacturer = this.manufacturer();
  _o.hardwareRevision = this.hardwareRevision();
  _o.firmwareVersion = this.firmwareVersion();
  _o.macAddress = (this.macAddress() !== null ? this.macAddress()!.unpack() : null);
}
}

export class FirmwareInfoT {
constructor(
  public mcuId: McuId = McuId.Other,
  public imuIds: (ImuId)[] = [],
  public displayName: string|Uint8Array|null = null,
  public model: string|Uint8Array|null = null,
  public manufacturer: string|Uint8Array|null = null,
  public hardwareRevision: string|Uint8Array|null = null,
  public firmwareVersion: string|Uint8Array|null = null,
  public macAddress: MacAddressT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const imuIds = FirmwareInfo.createImuIdsVector(builder, this.imuIds);
  const displayName = (this.displayName !== null ? builder.createString(this.displayName!) : 0);
  const model = (this.model !== null ? builder.createString(this.model!) : 0);
  const manufacturer = (this.manufacturer !== null ? builder.createString(this.manufacturer!) : 0);
  const hardwareRevision = (this.hardwareRevision !== null ? builder.createString(this.hardwareRevision!) : 0);
  const firmwareVersion = (this.firmwareVersion !== null ? builder.createString(this.firmwareVersion!) : 0);

  FirmwareInfo.startFirmwareInfo(builder);
  FirmwareInfo.addMcuId(builder, this.mcuId);
  FirmwareInfo.addImuIds(builder, imuIds);
  FirmwareInfo.addDisplayName(builder, displayName);
  FirmwareInfo.addModel(builder, model);
  FirmwareInfo.addManufacturer(builder, manufacturer);
  FirmwareInfo.addHardwareRevision(builder, hardwareRevision);
  FirmwareInfo.addFirmwareVersion(builder, firmwareVersion);
  FirmwareInfo.addMacAddress(builder, (this.macAddress !== null ? this.macAddress!.pack(builder) : 0));

  return FirmwareInfo.endFirmwareInfo(builder);
}
}