import { DecodedData } from "../codec/decoded-data";
import { Constants } from "../constants";

/**
 * Thin wrapper of SCALE Hash that represents Account ID (SS58)
 */
export class AccountId {

    /**
     * Bytes 32 representing the public address of the Account
     */
    public address: u8[];

    constructor(bytes: u8[]) {
        assert(bytes.length == Constants.ADDRESS_LENGTH, "AccountId: invalid bytes length provided.");
        this.address = new Array<u8>();
        this.address = this.address.concat(bytes);
    }

    /**
     * Returns the Bytes that represent the address 
     */
    getAddress(): u8[] {
        return this.address;
    }

    /**
     * Instanciates new Account ID from Bytes Array
     * @param input 
     */
    static fromU8Array(input: u8[]): DecodedData<AccountId> {
        assert(input.length >= Constants.ADDRESS_LENGTH, "AccountId: Invalid bytes length provided. EOF");
        const accId = new AccountId(input.slice(0, Constants.ADDRESS_LENGTH));
        return new DecodedData<AccountId>(accId, input.slice(Constants.ADDRESS_LENGTH));
    }

}