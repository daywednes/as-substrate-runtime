export namespace Utils {

    /**
     * Returns new Array<u8> from Uint8 Typed array
     * @param typedArr 
     */
    export function toU8Array(typedArr: Uint8Array): u8[] {
        let res = new Array<u8>(2);
        for (let i = 0; i < typedArr.length; i++) {
            res[i] = typedArr[i];
        }
        return res;
    }

    /**
     * Returns true/false depending on the Option whether it is Some or None
     * @param bytes - SCALE Encoded bytes
     */
    export function isSet(bytes: u8[]): bool {
        return bytes[0] != 0;
    }

    /**
     * By given 2 arrays, checks whether their values are equal (strict equal by index)
     */
    export function areArraysEqual<T>(a: Array<T>, b: Array<T>): bool {
        if (a.length != b.length) {
            return false;
        }

        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }

}