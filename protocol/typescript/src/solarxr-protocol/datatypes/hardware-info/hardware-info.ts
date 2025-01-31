// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Ipv4Address, Ipv4AddressT } from '../../../solarxr-protocol/datatypes/ipv4-address.js';
import { BoardType } from '../../../solarxr-protocol/datatypes/hardware-info/board-type.js';
import { HardwareAddress, HardwareAddressT } from '../../../solarxr-protocol/datatypes/hardware-info/hardware-address.js';
import { McuType } from '../../../solarxr-protocol/datatypes/hardware-info/mcu-type.js';


/**
 * Mostly static info about the device's hardware/firmware.
 */
export class HardwareInfo implements flatbuffers.IUnpackableObject<HardwareInfoT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):HardwareInfo {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsHardwareInfo(bb:flatbuffers.ByteBuffer, obj?:HardwareInfo):HardwareInfo {
  return (obj || new HardwareInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsHardwareInfo(bb:flatbuffers.ByteBuffer, obj?:HardwareInfo):HardwareInfo {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new HardwareInfo()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

mcuId():McuType {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : McuType.Other;
}

/**
 * A human-friendly name to display as the name of the device.
 */
displayName():string|null
displayName(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
displayName(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * A human-friendly string for the device model.
 */
model():string|null
model(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
model(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * A human-friendly string for the manufacturer of the device.
 */
manufacturer():string|null
manufacturer(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
manufacturer(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * The hardware version of the device. For example, pcb version.
 */
hardwareRevision():string|null
hardwareRevision(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
hardwareRevision(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * The version of the slimevr firmware that the device is running.
 */
firmwareVersion():string|null
firmwareVersion(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
firmwareVersion(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

hardwareAddress(obj?:HardwareAddress):HardwareAddress|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? (obj || new HardwareAddress()).__init(this.bb_pos + offset, this.bb!) : null;
}

ipAddress(obj?:Ipv4Address):Ipv4Address|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new Ipv4Address()).__init(this.bb_pos + offset, this.bb!) : null;
}

/**
 * A board type string that can be used to name a board. if possible you should use official board type
 */
boardType():string|null
boardType(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
boardType(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * An enum listing all the board types supported by the firmware
 */
officialBoardType():BoardType {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : BoardType.UNKNOWN;
}

/**
 * A unique identifier for the device. Depending on the type of device it can be the MAC address,
 * the IP address, or some other unique identifier like what USB device it is.
 */
hardwareIdentifier():string|null
hardwareIdentifier(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
hardwareIdentifier(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * The version of the protocol it's using to communicate with server
 */
networkProtocolVersion():number|null {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : null;
}

static startHardwareInfo(builder:flatbuffers.Builder) {
  builder.startObject(12);
}

static addMcuId(builder:flatbuffers.Builder, mcuId:McuType) {
  builder.addFieldInt16(0, mcuId, McuType.Other);
}

static addDisplayName(builder:flatbuffers.Builder, displayNameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, displayNameOffset, 0);
}

static addModel(builder:flatbuffers.Builder, modelOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, modelOffset, 0);
}

static addManufacturer(builder:flatbuffers.Builder, manufacturerOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, manufacturerOffset, 0);
}

static addHardwareRevision(builder:flatbuffers.Builder, hardwareRevisionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, hardwareRevisionOffset, 0);
}

static addFirmwareVersion(builder:flatbuffers.Builder, firmwareVersionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, firmwareVersionOffset, 0);
}

static addHardwareAddress(builder:flatbuffers.Builder, hardwareAddressOffset:flatbuffers.Offset) {
  builder.addFieldStruct(6, hardwareAddressOffset, 0);
}

static addIpAddress(builder:flatbuffers.Builder, ipAddressOffset:flatbuffers.Offset) {
  builder.addFieldStruct(7, ipAddressOffset, 0);
}

static addBoardType(builder:flatbuffers.Builder, boardTypeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, boardTypeOffset, 0);
}

static addOfficialBoardType(builder:flatbuffers.Builder, officialBoardType:BoardType) {
  builder.addFieldInt16(9, officialBoardType, BoardType.UNKNOWN);
}

static addHardwareIdentifier(builder:flatbuffers.Builder, hardwareIdentifierOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, hardwareIdentifierOffset, 0);
}

static addNetworkProtocolVersion(builder:flatbuffers.Builder, networkProtocolVersion:number) {
  builder.addFieldInt16(11, networkProtocolVersion, 0);
}

static endHardwareInfo(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}


unpack(): HardwareInfoT {
  return new HardwareInfoT(
    this.mcuId(),
    this.displayName(),
    this.model(),
    this.manufacturer(),
    this.hardwareRevision(),
    this.firmwareVersion(),
    (this.hardwareAddress() !== null ? this.hardwareAddress()!.unpack() : null),
    (this.ipAddress() !== null ? this.ipAddress()!.unpack() : null),
    this.boardType(),
    this.officialBoardType(),
    this.hardwareIdentifier(),
    this.networkProtocolVersion()
  );
}


unpackTo(_o: HardwareInfoT): void {
  _o.mcuId = this.mcuId();
  _o.displayName = this.displayName();
  _o.model = this.model();
  _o.manufacturer = this.manufacturer();
  _o.hardwareRevision = this.hardwareRevision();
  _o.firmwareVersion = this.firmwareVersion();
  _o.hardwareAddress = (this.hardwareAddress() !== null ? this.hardwareAddress()!.unpack() : null);
  _o.ipAddress = (this.ipAddress() !== null ? this.ipAddress()!.unpack() : null);
  _o.boardType = this.boardType();
  _o.officialBoardType = this.officialBoardType();
  _o.hardwareIdentifier = this.hardwareIdentifier();
  _o.networkProtocolVersion = this.networkProtocolVersion();
}
}

export class HardwareInfoT implements flatbuffers.IGeneratedObject {
constructor(
  public mcuId: McuType = McuType.Other,
  public displayName: string|Uint8Array|null = null,
  public model: string|Uint8Array|null = null,
  public manufacturer: string|Uint8Array|null = null,
  public hardwareRevision: string|Uint8Array|null = null,
  public firmwareVersion: string|Uint8Array|null = null,
  public hardwareAddress: HardwareAddressT|null = null,
  public ipAddress: Ipv4AddressT|null = null,
  public boardType: string|Uint8Array|null = null,
  public officialBoardType: BoardType = BoardType.UNKNOWN,
  public hardwareIdentifier: string|Uint8Array|null = null,
  public networkProtocolVersion: number|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const displayName = (this.displayName !== null ? builder.createString(this.displayName!) : 0);
  const model = (this.model !== null ? builder.createString(this.model!) : 0);
  const manufacturer = (this.manufacturer !== null ? builder.createString(this.manufacturer!) : 0);
  const hardwareRevision = (this.hardwareRevision !== null ? builder.createString(this.hardwareRevision!) : 0);
  const firmwareVersion = (this.firmwareVersion !== null ? builder.createString(this.firmwareVersion!) : 0);
  const boardType = (this.boardType !== null ? builder.createString(this.boardType!) : 0);
  const hardwareIdentifier = (this.hardwareIdentifier !== null ? builder.createString(this.hardwareIdentifier!) : 0);

  HardwareInfo.startHardwareInfo(builder);
  HardwareInfo.addMcuId(builder, this.mcuId);
  HardwareInfo.addDisplayName(builder, displayName);
  HardwareInfo.addModel(builder, model);
  HardwareInfo.addManufacturer(builder, manufacturer);
  HardwareInfo.addHardwareRevision(builder, hardwareRevision);
  HardwareInfo.addFirmwareVersion(builder, firmwareVersion);
  HardwareInfo.addHardwareAddress(builder, (this.hardwareAddress !== null ? this.hardwareAddress!.pack(builder) : 0));
  HardwareInfo.addIpAddress(builder, (this.ipAddress !== null ? this.ipAddress!.pack(builder) : 0));
  HardwareInfo.addBoardType(builder, boardType);
  HardwareInfo.addOfficialBoardType(builder, this.officialBoardType);
  HardwareInfo.addHardwareIdentifier(builder, hardwareIdentifier);
  if (this.networkProtocolVersion !== null)
    HardwareInfo.addNetworkProtocolVersion(builder, this.networkProtocolVersion);

  return HardwareInfo.endHardwareInfo(builder);
}
}
