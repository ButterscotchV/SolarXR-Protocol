// automatically generated by the FlatBuffers compiler, do not modify

package solarxr_protocol.rpc;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

public class ResetsSettingsT {
  private boolean resetMountingFeet;
  private int armsMountingResetMode;
  private float yawResetSmoothTime;
  private boolean saveMountingReset;
  private boolean resetHmdPitch;

  public boolean getResetMountingFeet() { return resetMountingFeet; }

  public void setResetMountingFeet(boolean resetMountingFeet) { this.resetMountingFeet = resetMountingFeet; }

  public int getArmsMountingResetMode() { return armsMountingResetMode; }

  public void setArmsMountingResetMode(int armsMountingResetMode) { this.armsMountingResetMode = armsMountingResetMode; }

  public float getYawResetSmoothTime() { return yawResetSmoothTime; }

  public void setYawResetSmoothTime(float yawResetSmoothTime) { this.yawResetSmoothTime = yawResetSmoothTime; }

  public boolean getSaveMountingReset() { return saveMountingReset; }

  public void setSaveMountingReset(boolean saveMountingReset) { this.saveMountingReset = saveMountingReset; }

  public boolean getResetHmdPitch() { return resetHmdPitch; }

  public void setResetHmdPitch(boolean resetHmdPitch) { this.resetHmdPitch = resetHmdPitch; }


  public ResetsSettingsT() {
    this.resetMountingFeet = false;
    this.armsMountingResetMode = 0;
    this.yawResetSmoothTime = 0.0f;
    this.saveMountingReset = false;
    this.resetHmdPitch = false;
  }
}
