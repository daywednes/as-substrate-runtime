import { Storage } from '@as-substrate/core-modules';
import { InherentData, Inherent } from '@as-substrate/models';
import { UInt64, Bool, ByteArray, BIT_LENGTH, CompactInt } from 'as-scale-codec';
import { Log } from '@as-substrate/core-modules';

export class Timestamp{

    /**
     * Minimum period between timestamps
     */
    public static readonly MINIMUM_PERIOD: u64 = 5000;
    /**
     * Scale encoded key {scale("timestamp")}{scale("now")} 
     * Scale encoded key {scale("timestamp")}{scale("didupdate")} 
     */
    public static readonly SCALE_TIMESTAMP_NOW: u8[] = [36, 116, 105, 109, 101, 115, 116, 97, 109, 112, 12, 110, 111, 119];
    public static readonly SCALE_TIMESTAMP_DID_UPDATE: u8[] = [36, 116, 105, 109, 101, 115, 116, 97, 109, 112, 36, 100, 105, 100, 117, 112, 100, 97, 116, 101];
    public static readonly INHERENT_IDENTIFIER: string = "timstap0";
    public static readonly EXTRINSIC_LENGTH: u8[] = [40];
    public static readonly CALL_INDEX: u8[] = [2, 0];
    public static readonly API_VERSION: u8 = 4;
    public static readonly PREFIX: u8 = 11;

    /**
     * Toggles the current value of didUpdate
     */
    static toggleUpdate(): void {
        const didUpdate = Storage.get(Timestamp.SCALE_TIMESTAMP_DID_UPDATE);
        const didUpdateValue: Bool = didUpdate.isSome() ? Bool.fromU8a((<ByteArray>didUpdate.unwrap()).values) : new Bool(false);
        if(didUpdateValue.value){
            const falseu8 = new Bool(false);
            Storage.set(Timestamp.SCALE_TIMESTAMP_DID_UPDATE, falseu8.toU8a());
        }
        else{
            const trueu8 = new Bool(true);
            Storage.set(Timestamp.SCALE_TIMESTAMP_DID_UPDATE, trueu8.toU8a());
        }
    }

    /**
     * Sets the current time. When setting the new time, 
     * it must be greater than the last one (set into storage) with at least a MinimumPeriod
     * @param now timestamp number
     */
    static set(now: u64): void {
        const didUpdate = Storage.get(Timestamp.SCALE_TIMESTAMP_DID_UPDATE);
        const didUpdateValue: Bool = didUpdate.isSome() ? Bool.fromU8a((<ByteArray>didUpdate.unwrap()).values) : new Bool(false);
        if(didUpdateValue.value){
            Log.error('Validation error: Timestamp must be updated only once in the block');
            return;
        }
        const prev: u64 = Timestamp.get();
                
        if(now < prev + Timestamp.MINIMUM_PERIOD){
            Log.error('Validation error: Timestamp must increment by at least <MinimumPeriod> between sequential blocks');
            return;
        }

        const nowu8 = new UInt64(now);
        const trueu8 = new Bool(true);
        Storage.set(Timestamp.SCALE_TIMESTAMP_DID_UPDATE, trueu8.toU8a());
        Storage.set(Timestamp.SCALE_TIMESTAMP_NOW, nowu8.toU8a());
    }

    /**
     *  Gets the current time that was set. If this function is called prior 
     *  to setting the timestamp, it will return the timestamp of the previous block.
     */
    static get(): u64 {
        const now = Storage.get(Timestamp.SCALE_TIMESTAMP_NOW);
        const res = now.isSome() ? (<ByteArray>now.unwrap()).values : [4, 0];
        const val: UInt64 = UInt64.fromU8a(res);
        return val.value;

    }

    /**
     * Creates timestamp inherent data
     * @param data inherent data to extract timestamp from
     */
    static createInherent(data: InherentData): Inherent {
        const timestampData: UInt64 = UInt64.fromU8a(extractInherentData(data).values);
        const nextTime: u64 = <u64>(Math.max(<f64>timestampData.value, <f64>(Timestamp.get() + Timestamp.MINIMUM_PERIOD)));
        const arg: UInt64 = new UInt64(nextTime);
        const inherent = new Inherent(
            new CompactInt(10), 
            Timestamp.CALL_INDEX, 
            Timestamp.API_VERSION, 
            Timestamp.PREFIX,
            arg
            );
        return inherent;
    }

    /**
     * Checks if the new value can be set as inherent data
     * @param t new value of the timestamp inherent data
     * @param data inherent data to extract timestamp from
     */
    static checkInherent(t: u64, data: InherentData): bool {
        const MAX_TIMESTAMP_DRIFT_MILLS: u64 = 30 * 1000;
        const timestampData: UInt64 = UInt64.fromU8a(extractInherentData(data).values);
        const minimum: u64 = Timestamp.get() + Timestamp.MINIMUM_PERIOD;
        if (t > timestampData.value + MAX_TIMESTAMP_DRIFT_MILLS){
            return false;
        }
        else if(t < minimum){
            return false;
        }
        else{
            return true;
        }
    }
}
 
/**
 * Gets timestamp inherent data
 * @param inhData inherentData instance provided 
 */
export function extractInherentData(inhData: InherentData): ByteArray {
    return inhData.data.get(Timestamp.INHERENT_IDENTIFIER);
}