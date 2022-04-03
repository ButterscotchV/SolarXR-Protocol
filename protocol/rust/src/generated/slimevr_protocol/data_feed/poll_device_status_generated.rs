// automatically generated by the FlatBuffers compiler, do not modify
extern crate flatbuffers;
use std::mem;
use std::cmp::Ordering;
use self::flatbuffers::{EndianScalar, Follow};
use super::*;
pub enum PollDeviceStatusOffset {}
#[derive(Copy, Clone, PartialEq)]

/// Requests for a single `DeviceStatus` to be sent. This is helpful when getting
/// initial info about the device.
pub struct PollDeviceStatus<'a> {
  pub _tab: flatbuffers::Table<'a>,
}

impl<'a> flatbuffers::Follow<'a> for PollDeviceStatus<'a> {
  type Inner = PollDeviceStatus<'a>;
  #[inline]
  fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    Self { _tab: flatbuffers::Table { buf, loc } }
  }
}

impl<'a> PollDeviceStatus<'a> {
  pub const VT_MASK: flatbuffers::VOffsetT = 4;

  #[inline]
  pub fn init_from_table(table: flatbuffers::Table<'a>) -> Self {
    PollDeviceStatus { _tab: table }
  }
  #[allow(unused_mut)]
  pub fn create<'bldr: 'args, 'args: 'mut_bldr, 'mut_bldr>(
    _fbb: &'mut_bldr mut flatbuffers::FlatBufferBuilder<'bldr>,
    args: &'args PollDeviceStatusArgs<'args>
  ) -> flatbuffers::WIPOffset<PollDeviceStatus<'bldr>> {
    let mut builder = PollDeviceStatusBuilder::new(_fbb);
    if let Some(x) = args.mask { builder.add_mask(x); }
    builder.finish()
  }


  #[inline]
  pub fn mask(&self) -> Option<DeviceStatusMask<'a>> {
    self._tab.get::<flatbuffers::ForwardsUOffset<DeviceStatusMask>>(PollDeviceStatus::VT_MASK, None)
  }
}

impl flatbuffers::Verifiable for PollDeviceStatus<'_> {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    v.visit_table(pos)?
     .visit_field::<flatbuffers::ForwardsUOffset<DeviceStatusMask>>("mask", Self::VT_MASK, false)?
     .finish();
    Ok(())
  }
}
pub struct PollDeviceStatusArgs<'a> {
    pub mask: Option<flatbuffers::WIPOffset<DeviceStatusMask<'a>>>,
}
impl<'a> Default for PollDeviceStatusArgs<'a> {
  #[inline]
  fn default() -> Self {
    PollDeviceStatusArgs {
      mask: None,
    }
  }
}

pub struct PollDeviceStatusBuilder<'a: 'b, 'b> {
  fbb_: &'b mut flatbuffers::FlatBufferBuilder<'a>,
  start_: flatbuffers::WIPOffset<flatbuffers::TableUnfinishedWIPOffset>,
}
impl<'a: 'b, 'b> PollDeviceStatusBuilder<'a, 'b> {
  #[inline]
  pub fn add_mask(&mut self, mask: flatbuffers::WIPOffset<DeviceStatusMask<'b >>) {
    self.fbb_.push_slot_always::<flatbuffers::WIPOffset<DeviceStatusMask>>(PollDeviceStatus::VT_MASK, mask);
  }
  #[inline]
  pub fn new(_fbb: &'b mut flatbuffers::FlatBufferBuilder<'a>) -> PollDeviceStatusBuilder<'a, 'b> {
    let start = _fbb.start_table();
    PollDeviceStatusBuilder {
      fbb_: _fbb,
      start_: start,
    }
  }
  #[inline]
  pub fn finish(self) -> flatbuffers::WIPOffset<PollDeviceStatus<'a>> {
    let o = self.fbb_.end_table(self.start_);
    flatbuffers::WIPOffset::new(o.value())
  }
}

impl std::fmt::Debug for PollDeviceStatus<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    let mut ds = f.debug_struct("PollDeviceStatus");
      ds.field("mask", &self.mask());
      ds.finish()
  }
}