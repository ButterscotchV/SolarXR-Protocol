// automatically generated by the FlatBuffers compiler, do not modify

package solarxr_protocol.rpc

import java.nio.*
import kotlin.math.sign
import com.google.flatbuffers.*

@Suppress("unused")
class FirmwareUpdateStopQueuesRequest : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : FirmwareUpdateStopQueuesRequest {
        __init(_i, _bb)
        return this
    }
    companion object {
        @JvmStatic
        fun validateVersion() = Constants.FLATBUFFERS_22_10_26()
        @JvmStatic
        fun getRootAsFirmwareUpdateStopQueuesRequest(_bb: ByteBuffer): FirmwareUpdateStopQueuesRequest = getRootAsFirmwareUpdateStopQueuesRequest(_bb, FirmwareUpdateStopQueuesRequest())
        @JvmStatic
        fun getRootAsFirmwareUpdateStopQueuesRequest(_bb: ByteBuffer, obj: FirmwareUpdateStopQueuesRequest): FirmwareUpdateStopQueuesRequest {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        @JvmStatic
        fun startFirmwareUpdateStopQueuesRequest(builder: FlatBufferBuilder) = builder.startTable(0)
        @JvmStatic
        fun endFirmwareUpdateStopQueuesRequest(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}
