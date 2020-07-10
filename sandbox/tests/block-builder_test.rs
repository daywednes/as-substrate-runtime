extern crate sandbox_execution_environment;
use sandbox_execution_environment::{ Transfer, Inherent, Setup };
use sp_core::{ traits::{ CallInWasm, MissingHostFunctions }};
use parity_scale_codec::{Encode, Decode};
use sp_keyring::AccountKeyring;

#[test]
fn test_block_builder_apply_extrinsics() {
    let mut setup = Setup::new();
    let ex = Transfer {
        from: AccountKeyring::Alice.into(),
        to: AccountKeyring::Bob.into(),
        amount: 69,
        nonce: 0,
    }.into_signed_tx();
    let result = setup.executor.call_in_wasm(
        &setup.wasm_code_array,
        None,
        "BlockBuilder_apply_extrinsics",
        &ex.encode(),
        &mut setup.ext.ext(),
        MissingHostFunctions::Allow).unwrap();
    println!("{:?}", result);
    assert_eq!(result, [0u8; 0]);
}

#[test]
fn test_block_builder_inherent_extrinsics() {
    let mut setup = Setup::new();
    let inh = Inherent::new();
    let result = setup.executor.call_in_wasm(
        &setup.wasm_code_array,
        None,
        "BlockBuilder_inherent_extrinsics",
        &inh.encode(),
        &mut setup.ext.ext(),
        MissingHostFunctions::Allow).unwrap();
    let res = <Inherent>::decode(&mut result.as_ref());
    println!("{:?}", Some(&inh));
    assert_eq!(Some(&inh), res.iter().next());
}