import { Other, Consensus, ChangeTrieRoot, Seal, PreRuntime } from ".";
import { DecodedData } from "./..";

/**
 * Types of the digest items
 */
export enum DigestItemType {
    
    /**
     * Unsupported or experimental Digest Item type
     */
    Other = 0,
    
    /**
     * System digest item that contains the root of changes trie at given
	 * block. It is created for every block if runtime supports changes
	 * trie creation.
     */
    ChangeTrieRoot = 2,

    /**
     * A message from the runtime to the consensus engine. This should *never*
	 * be generated by the native code of any consensus engine, but this is not
	 * checked (yet).
     */
    Consensus = 4,

    /**
     * This is only used by native code, and is never seen by runtimes.
     * This means that this probably will not be used at all.
     */
    Seal = 5,

    /**
     * These are messages from the consensus engine to the runtime, although
	 * the consensus engine can (and should) read them itself to avoid
	 * code and state duplication.
     */
    PreRuntime = 6,
}

/**
 * Abstract class representing the different digest items in Substrate Runtime
 */
export abstract class DigestItem {

    /**
     * DigestItem type ID
     */
    public typeId: u64;

    constructor(typeId: u64) {
        this.typeId = typeId;
    }

    /**
     * Instanciates DigestItem from SCALE Encoded Bytes
     */
    static fromU8Array(input: u8[]): DecodedData<DigestItem> {
        assert(input.length >= 0, "DigestItem: Invalid input provided. EOF");

        const type = <i32>input[0];
        input = input.slice(1);

        switch (type) {
            case DigestItemType.Other: {
                return Other.fromU8Array(input);
            }
            case DigestItemType.ChangeTrieRoot: {
                return ChangeTrieRoot.fromU8Array(input);
            }
            case DigestItemType.Consensus: {
                return Consensus.fromU8Array(input);
            }
            case DigestItemType.Seal: {
                return Seal.fromU8Array(input);
            }
            case DigestItemType.PreRuntime: {
                return PreRuntime.fromU8Array(input);
            }
            default: {
                throw new Error("DigestItem: Unsupported DigestItem type: " + type.toString());
            }
        }
    }

    abstract toU8a(): u8[];
    abstract equals(other:DigestItem): bool;
    
    @inline @operator('==')
    static eq(a: DigestItem, b: DigestItem): bool {
        return a.typeId === b.typeId && a.equals(b);
    }

    @inline @operator('!=')
    static notEq(a: DigestItem, b: DigestItem): bool {
        return !DigestItem.eq(a, b);
    }
}