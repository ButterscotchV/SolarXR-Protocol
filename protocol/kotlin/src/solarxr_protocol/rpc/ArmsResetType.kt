// automatically generated by the FlatBuffers compiler, do not modify

package solarxr_protocol.rpc

@Suppress("unused")
class ArmsResetType private constructor() {
    companion object {
        /**
         * Upper arm going back and forearm going forward
         */
        const val BACK: UByte = 0u
        /**
         * Arms going to the side
         */
        const val TPOSE: UByte = 1u
        /**
         * Arms going forward
         */
        const val FRONT: UByte = 2u
        val names : Array<String> = arrayOf("BACK", "TPOSE", "FRONT")
        @JvmStatic
        fun name(e: Int) : String = names[e]
    }
}
