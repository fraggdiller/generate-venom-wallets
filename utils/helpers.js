// helpers.js
import { client, cryptoModule } from "./Client.js";
import { params, walletCode } from "./constants.js";


const getInitData = async (publicKey) => {
    return (await client.abi.encode_boc({
        params: params,
        data: {
            "publicKey": `0x`+publicKey,
            "timestamp": 0
        }
    })).boc;
}


const getStateInit = async (initData) => {
    return (await client.boc.encode_state_init({
        code: walletCode,
        data: initData
    })).state_init;
}


export const computePKeys = async (mnemonic) => {
    const deriveParams = {
        phrase: mnemonic,
        path: "m/44'/396'/0'/0/0"
    };

    const keyPair = await cryptoModule.mnemonic_derive_sign_keys(deriveParams)
    return { keyPair };
};


export const calculateVenomAddress = async (publicKey) => {
    const initData = await getInitData(publicKey);
    const stateInit = await getStateInit(initData)

    return `0:` + (await client.boc.get_boc_hash({boc: stateInit})).hash
};
