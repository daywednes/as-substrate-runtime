/**
 * Namespace exporting all SCALE Encoded MOCKs used in the tests
 */
export namespace MockConstants {

    export const EMPTY_BLOCK: u8[] = [
        69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69,
        4,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        0,
        0
    ];

    export const BLOCK_WITH_EXTRINSIC: u8[] = [
        69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69,
        4,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        0,
        12,
        69, 2,
        1, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162,
        125, 142, 175, 4, 21, 22, 135, 115, 99, 38, 201, 254, 161, 126, 37, 252, 82, 135, 97, 54, 147, 201, 18, 144, 156, 178, 38, 170, 71, 148, 242, 106,
        70, 0, 0, 0, 0, 0, 0, 0,
        16, 0, 0, 0, 0, 0, 0, 0,
        154, 181, 53, 178, 59, 111, 32, 130, 99, 37, 197, 152, 241, 213, 158, 82, 17, 131, 141, 106, 171, 61, 147, 104, 43, 78, 86, 206, 167, 192, 161, 
        114, 180, 8, 163, 76, 243, 226, 237, 59, 227, 71, 85, 169, 227, 4, 83, 111, 224, 122, 159, 232, 29, 105, 13, 120, 202, 114, 188, 86, 78, 67, 177, 140, 0,
        69, 2,
        1, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162,
        125, 142, 175, 4, 21, 22, 135, 115, 99, 38, 201, 254, 161, 126, 37, 252, 82, 135, 97, 54, 147, 201, 18, 144, 156, 178, 38, 170, 71, 148, 242, 106,
        69, 0, 0, 0, 0, 0, 0, 0,
        5, 0, 0, 0, 0, 0, 0, 0,
        72, 43, 234, 45, 159, 200, 43, 162, 117, 34, 73, 0, 41, 24, 219, 106, 202, 41, 220, 128, 114, 102, 33, 40, 235, 200, 34, 98, 249, 135, 134, 116, 39, 94, 
        159, 122, 148, 102, 158, 5, 178, 195, 144, 165, 149, 149, 118, 250, 97, 192, 228, 0, 216, 37, 219, 207, 7, 240, 82, 75, 243, 191, 237, 138, 0,
        40, 4, 2, 0, 11, 41, 207, 250, 5, 0, 0
    ];

    export const BLOCK_WITH_EXTRINSIC_AND_DIGESTS: u8[] = [
        69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69,
        4,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        20,
        0, 12, 1, 1, 1,
        2, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        4, 97, 117, 114, 97, 12, 1, 1, 1,
        5, 1, 1, 1, 1, 12, 2, 2, 2,
        6, 1, 1, 1, 1, 12, 2, 2, 2,
        12,
        69, 2,
        1, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162,
        125, 142, 175, 4, 21, 22, 135, 115, 99, 38, 201, 254, 161, 126, 37, 252, 82, 135, 97, 54, 147, 201, 18, 144, 156, 178, 38, 170, 71, 148, 242, 106,
        69, 0, 0, 0, 0, 0, 0, 0,
        5, 0, 0, 0, 0, 0, 0, 0,
        72, 43, 234, 45, 159, 200, 43, 162, 117, 34, 73, 0, 41, 24, 219, 106, 202, 41, 220, 128, 114, 102, 33, 40, 235, 200, 34, 98, 249, 135, 134, 116, 39, 94, 
        159, 122, 148, 102, 158, 5, 178, 195, 144, 165, 149, 149, 118, 250, 97, 192, 228, 0, 216, 37, 219, 207, 7, 240, 82, 75, 243, 191, 237, 138, 0,
        69, 2,
        1, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162,
        125, 142, 175, 4, 21, 22, 135, 115, 99, 38, 201, 254, 161, 126, 37, 252, 82, 135, 97, 54, 147, 201, 18, 144, 156, 178, 38, 170, 71, 148, 242, 106,
        70, 0, 0, 0, 0, 0, 0, 0,
        16, 0, 0, 0, 0, 0, 0, 0,
        154, 181, 53, 178, 59, 111, 32, 130, 99, 37, 197, 152, 241, 213, 158, 82, 17, 131, 141, 106, 171, 61, 147, 104, 43, 78, 86, 206, 167, 192, 161, 114, 
        180, 8, 163, 76, 243, 226, 237, 59, 227, 71, 85, 169, 227, 4, 83, 111, 224, 122, 159, 232, 29, 105, 13, 120, 202, 114, 188, 86, 78, 67, 177, 140, 0,
        40, 4, 2, 0, 11, 41, 207, 250, 5, 0, 0
    ]

    export const HEADER_WITHOUT_DIGEST: u8[] = [
        69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69,
        4,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        0
    ];
    
    export const HEADER_WITH_DIGEST: u8[] = [
        69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69,
        4,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        20,
        0, 12, 1, 1, 1,
        2, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
        4, 97, 117, 114, 97, 12, 1, 1, 1,
        5, 1, 1, 1, 1, 12, 2, 2, 2,
        6, 1, 1, 1, 1, 12, 2, 2, 2
    ];

    export const DEFAULT_SIGNED_TX_INSTANCE: u8[] = [
        69, 2, 
        1, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162,
        125, 142, 175, 4, 21, 22, 135, 115, 99, 38, 201, 254, 161, 126, 37, 252, 82, 135, 97, 54, 147, 201, 18, 144, 156, 178, 38, 170, 71, 148, 242, 106,
        69, 0, 0, 0, 0, 0, 0, 0,
        5, 0, 0, 0, 0, 0, 0, 0,
        72, 43, 234, 45, 159, 200, 43, 162, 117, 34, 73, 0, 41, 24, 219, 106, 202, 41, 220, 128, 114, 102, 33, 40, 235, 200, 34, 98, 249, 135, 134, 116, 39, 94, 159, 122, 148, 102, 158, 5, 178, 195, 144, 165, 149, 149, 118, 250, 97, 192, 228, 0, 216, 37, 219, 207, 7, 240, 82, 75, 243, 191, 237, 138, 0
    ];

    export const DEFAULT_INHERENT_DATA: u8[] = [
        16, 
        98, 97, 98, 101, 115, 108, 111, 116, 
        32, 2, 0, 0, 0, 0, 0, 0, 0, 
        102, 105, 110, 97, 108, 110, 117, 109, 
        4, 4, 
        116, 105, 109, 115, 116, 109, 112, 48, 
        32, 1, 0, 0, 0, 0, 0, 0, 0, 
        117, 110, 99, 108, 101, 115, 48, 48, 
        141, 1, 4, 
        69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 
        4, 
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 
        255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 
        0
    ];

    export const EXTRINSIC_DATA: u8[] = [
        12,
        0, 0, 0, 0,
        40, 4, 2, 0, 11, 41, 207, 250, 5, 0, 0,
        1, 0, 0, 0,
        69, 2,
        1, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162,
        125, 142, 175, 4, 21, 22, 135, 115, 99, 38, 201, 254, 161, 126, 37, 252, 82, 135, 97, 54, 147, 201, 18, 144, 156, 178, 38, 170, 71, 148, 242, 106,
        70, 0, 0, 0, 0, 0, 0, 0,
        16, 0, 0, 0, 0, 0, 0, 0,
        154, 181, 53, 178, 59, 111, 32, 130, 99, 37, 197, 152, 241, 213, 158, 82, 17, 131, 141, 106, 171, 61, 147, 104, 43, 78, 86, 206, 167, 192, 161, 
        114, 180, 8, 163, 76, 243, 226, 237, 59, 227, 71, 85, 169, 227, 4, 83, 111, 224, 122, 159, 232, 29, 105, 13, 120, 202, 114, 188, 86, 78, 67, 177, 140, 0,
        2, 0, 0, 0,
        69, 2,
        1, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162,
        125, 142, 175, 4, 21, 22, 135, 115, 99, 38, 201, 254, 161, 126, 37, 252, 82, 135, 97, 54, 147, 201, 18, 144, 156, 178, 38, 170, 71, 148, 242, 106,
        70, 0, 0, 0, 0, 0, 0, 0,
        16, 0, 0, 0, 0, 0, 0, 0,
        154, 181, 53, 178, 59, 111, 32, 130, 99, 37, 197, 152, 241, 213, 158, 82, 17, 131, 141, 106, 171, 61, 147, 104, 43, 78, 86, 206, 167, 192, 161, 114, 
        180, 8, 163, 76, 243, 226, 237, 59, 227, 71, 85, 169, 227, 4, 83, 111, 224, 122, 159, 232, 29, 105, 13, 120, 202, 114, 188, 86, 78, 67, 177, 140, 0
    ];

    export const EXTRINSIC_DATA_ENUMERATED_VALUES: u8[] = [
        12,
        44,
        40, 4, 2, 0, 11, 41, 207, 250, 5, 0, 0,
        77, 2,
        69, 2,
        1, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162,
        125, 142, 175, 4, 21, 22, 135, 115, 99, 38, 201, 254, 161, 126, 37, 252, 82, 135, 97, 54, 147, 201, 18, 144, 156, 178, 38, 170, 71, 148, 242, 106,
        70, 0, 0, 0, 0, 0, 0, 0,
        16, 0, 0, 0, 0, 0, 0, 0,
        154, 181, 53, 178, 59, 111, 32, 130, 99, 37, 197, 152, 241, 213, 158, 82, 17, 131, 141, 106, 171, 61, 147, 104, 43, 78, 86, 206, 167, 192, 161, 
        114, 180, 8, 163, 76, 243, 226, 237, 59, 227, 71, 85, 169, 227, 4, 83, 111, 224, 122, 159, 232, 29, 105, 13, 120, 202, 114, 188, 86, 78, 67, 177, 140, 0,
        77, 2,
        69, 2,
        1, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162,
        125, 142, 175, 4, 21, 22, 135, 115, 99, 38, 201, 254, 161, 126, 37, 252, 82, 135, 97, 54, 147, 201, 18, 144, 156, 178, 38, 170, 71, 148, 242, 106,
        70, 0, 0, 0, 0, 0, 0, 0,
        16, 0, 0, 0, 0, 0, 0, 0,
        154, 181, 53, 178, 59, 111, 32, 130, 99, 37, 197, 152, 241, 213, 158, 82, 17, 131, 141, 106, 171, 61, 147, 104, 43, 78, 86, 206, 167, 192, 161, 114, 
        180, 8, 163, 76, 243, 226, 237, 59, 227, 71, 85, 169, 227, 4, 83, 111, 224, 122, 159, 232, 29, 105, 13, 120, 202, 114, 188, 86, 78, 67, 177, 140, 0
    ];

    export const EXT_1 = [
        69, 2,
        1, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162,
        125, 142, 175, 4, 21, 22, 135, 115, 99, 38, 201, 254, 161, 126, 37, 252, 82, 135, 97, 54, 147, 201, 18, 144, 156, 178, 38, 170, 71, 148, 242, 106,
        70, 0, 0, 0, 0, 0, 0, 0,
        16, 0, 0, 0, 0, 0, 0, 0,
        154, 181, 53, 178, 59, 111, 32, 130, 99, 37, 197, 152, 241, 213, 158, 82, 17, 131, 141, 106, 171, 61, 147, 104, 43, 78, 86, 206, 167, 192, 161, 
        114, 180, 8, 163, 76, 243, 226, 237, 59, 227, 71, 85, 169, 227, 4, 83, 111, 224, 122, 159, 232, 29, 105, 13, 120, 202, 114, 188, 86, 78, 67, 177, 140, 0,
    ];

    export const EXT_2 = [
        69, 2,
        1, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162,
        125, 142, 175, 4, 21, 22, 135, 115, 99, 38, 201, 254, 161, 126, 37, 252, 82, 135, 97, 54, 147, 201, 18, 144, 156, 178, 38, 170, 71, 148, 242, 106,
        70, 0, 0, 0, 0, 0, 0, 0,
        16, 0, 0, 0, 0, 0, 0, 0,
        154, 181, 53, 178, 59, 111, 32, 130, 99, 37, 197, 152, 241, 213, 158, 82, 17, 131, 141, 106, 171, 61, 147, 104, 43, 78, 86, 206, 167, 192, 161, 114, 
        180, 8, 163, 76, 243, 226, 237, 59, 227, 71, 85, 169, 227, 4, 83, 111, 224, 122, 159, 232, 29, 105, 13, 120, 202, 114, 188, 86, 78, 67, 177, 140, 0
    ];

    export const ALICE_ADDRESS: u8[] = [1, 212, 53, 147, 199, 21, 253, 211, 28, 97, 20, 26, 189, 4, 169, 159, 214, 130, 44, 133, 88, 133, 76, 205, 227, 154, 86, 132, 231, 165, 109, 162];
    export const BOB_ADDRESS: u8[] = [125, 142, 175, 4, 21, 22, 135, 115, 99, 38, 201, 254, 161, 126, 37, 252, 82, 135, 97, 54, 147, 201, 18, 144, 156, 178, 38, 170, 71, 148, 242, 106];

    export const OTHER_DIGEST: u8[] = [0, 12, 1, 1, 1];
    export const CHANGE_TRIE_ROOT_DIGEST: u8[] = [2, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
    export const CONSENSUS_DIGEST: u8[] = [4, 97, 117, 114, 97, 12, 1, 1, 1];
    export const SEAL_DIGEST: u8[] = [5, 1, 1, 1, 1, 12, 2, 2, 2];
    export const PRERUNTIME_DIGEST: u8[] = [6, 1, 1, 1, 1, 12, 2, 2, 2];
}