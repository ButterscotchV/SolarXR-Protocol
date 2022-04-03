// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



export class DeviceStatusFeatures {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):DeviceStatusFeatures {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDeviceStatusFeatures(bb:flatbuffers.ByteBuffer, obj?:DeviceStatusFeatures):DeviceStatusFeatures {
  return (obj || new DeviceStatusFeatures()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDeviceStatusFeatures(bb:flatbuffers.ByteBuffer, obj?:DeviceStatusFeatures):DeviceStatusFeatures {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DeviceStatusFeatures()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

name():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

role():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

mountingRotation():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

rotation():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

position():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

status():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

battery():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

computed():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

signal():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

tps():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

ping():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

editable():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startDeviceStatusFeatures(builder:flatbuffers.Builder) {
  builder.startObject(12);
}

static addName(builder:flatbuffers.Builder, name:boolean) {
  builder.addFieldInt8(0, +name, +false);
}

static addRole(builder:flatbuffers.Builder, role:boolean) {
  builder.addFieldInt8(1, +role, +false);
}

static addMountingRotation(builder:flatbuffers.Builder, mountingRotation:boolean) {
  builder.addFieldInt8(2, +mountingRotation, +false);
}

static addRotation(builder:flatbuffers.Builder, rotation:boolean) {
  builder.addFieldInt8(3, +rotation, +false);
}

static addPosition(builder:flatbuffers.Builder, position:boolean) {
  builder.addFieldInt8(4, +position, +false);
}

static addStatus(builder:flatbuffers.Builder, status:boolean) {
  builder.addFieldInt8(5, +status, +false);
}

static addBattery(builder:flatbuffers.Builder, battery:boolean) {
  builder.addFieldInt8(6, +battery, +false);
}

static addComputed(builder:flatbuffers.Builder, computed:boolean) {
  builder.addFieldInt8(7, +computed, +false);
}

static addSignal(builder:flatbuffers.Builder, signal:boolean) {
  builder.addFieldInt8(8, +signal, +false);
}

static addTps(builder:flatbuffers.Builder, tps:boolean) {
  builder.addFieldInt8(9, +tps, +false);
}

static addPing(builder:flatbuffers.Builder, ping:boolean) {
  builder.addFieldInt8(10, +ping, +false);
}

static addEditable(builder:flatbuffers.Builder, editable:boolean) {
  builder.addFieldInt8(11, +editable, +false);
}

static endDeviceStatusFeatures(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDeviceStatusFeatures(builder:flatbuffers.Builder, name:boolean, role:boolean, mountingRotation:boolean, rotation:boolean, position:boolean, status:boolean, battery:boolean, computed:boolean, signal:boolean, tps:boolean, ping:boolean, editable:boolean):flatbuffers.Offset {
  DeviceStatusFeatures.startDeviceStatusFeatures(builder);
  DeviceStatusFeatures.addName(builder, name);
  DeviceStatusFeatures.addRole(builder, role);
  DeviceStatusFeatures.addMountingRotation(builder, mountingRotation);
  DeviceStatusFeatures.addRotation(builder, rotation);
  DeviceStatusFeatures.addPosition(builder, position);
  DeviceStatusFeatures.addStatus(builder, status);
  DeviceStatusFeatures.addBattery(builder, battery);
  DeviceStatusFeatures.addComputed(builder, computed);
  DeviceStatusFeatures.addSignal(builder, signal);
  DeviceStatusFeatures.addTps(builder, tps);
  DeviceStatusFeatures.addPing(builder, ping);
  DeviceStatusFeatures.addEditable(builder, editable);
  return DeviceStatusFeatures.endDeviceStatusFeatures(builder);
}

unpack(): DeviceStatusFeaturesT {
  return new DeviceStatusFeaturesT(
    this.name(),
    this.role(),
    this.mountingRotation(),
    this.rotation(),
    this.position(),
    this.status(),
    this.battery(),
    this.computed(),
    this.signal(),
    this.tps(),
    this.ping(),
    this.editable()
  );
}


unpackTo(_o: DeviceStatusFeaturesT): void {
  _o.name = this.name();
  _o.role = this.role();
  _o.mountingRotation = this.mountingRotation();
  _o.rotation = this.rotation();
  _o.position = this.position();
  _o.status = this.status();
  _o.battery = this.battery();
  _o.computed = this.computed();
  _o.signal = this.signal();
  _o.tps = this.tps();
  _o.ping = this.ping();
  _o.editable = this.editable();
}
}

export class DeviceStatusFeaturesT {
constructor(
  public name: boolean = false,
  public role: boolean = false,
  public mountingRotation: boolean = false,
  public rotation: boolean = false,
  public position: boolean = false,
  public status: boolean = false,
  public battery: boolean = false,
  public computed: boolean = false,
  public signal: boolean = false,
  public tps: boolean = false,
  public ping: boolean = false,
  public editable: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return DeviceStatusFeatures.createDeviceStatusFeatures(builder,
    this.name,
    this.role,
    this.mountingRotation,
    this.rotation,
    this.position,
    this.status,
    this.battery,
    this.computed,
    this.signal,
    this.tps,
    this.ping,
    this.editable
  );
}
}