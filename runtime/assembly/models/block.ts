import { Hash, ByteArray, Bytes } from "as-scale-codec";
import { Header, Extrinsic, Option } from ".";
import { DecodedData } from "../codec/decoded-data";
import { Constants } from "../constants";

/**
 * Class representing a Block into the Substrate Runtime
 */
export class Block {

    /**
     * Block Header
     */
    public header: Header

    /**
     * Block header hash
     */
    public headerHash: Option<Hash>
    
    /**
     * Array of Extrinsics
     */
    public body: Extrinsic[]
    /**
     * Block Receipt
     */
    public receipt: Option<ByteArray>
    /**
     * Block message queue
     */
    public messageQueue: Option<ByteArray>
    /**
     * Block Justification
     */
    public justification: Option<ByteArray>

    constructor(header: Header, body: Extrinsic[]) {
        this.header = header;
        this.headerHash = new Option<Hash>(null);
        this.body = body;
        this.receipt = new Option<ByteArray>(null);
        this.messageQueue = new Option<ByteArray>(null);
        this.justification = new Option<ByteArray>(null);
    }

    /**
     * SCALE Encodes the Block into u8[]
     */
    toU8a(): u8[] {
        // Encode headerHash and header
        let encoded = this.header.toU8a();
        if (this.body.length == 0) {
            encoded = encoded.concat(Constants.EMPTY_BYTE_ARRAY);
        } else {
            //TODO - support for extrinsics
            throw new Error('not supported yet');
        }

        return encoded;
    }

    /**
     * Instanciates new Block object from SCALE encoded byte array
     * @param input - SCALE encoded Block
     */
    static fromU8Array(input: u8[]): DecodedData<Block> {
        const decodedHeader: DecodedData<Header> = Header.fromU8Array(input);

        const extrinsicsLength = Bytes.decodeCompactInt(input);
        input = input.slice(extrinsicsLength.decBytes);
        let extrinsics: Extrinsic[] = [];
        for (let i = 0; i < <i32>extrinsicsLength.value; i++) {
            const decodedExtrinsic: DecodedData<Extrinsic> = Extrinsic.fromU8Array(input);
            extrinsics.push(decodedExtrinsic.result);
            input = decodedExtrinsic.input;
        }

        const block = new Block(decodedHeader.result, extrinsics);
        return new DecodedData(block, input);
    }

    @inline @operator('==')
    static eq(a: Block, b: Block): bool {
        // TODO
        return a.header == b.header;
    }

}