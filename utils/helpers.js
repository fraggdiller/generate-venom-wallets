import { EverWalletAccount } from "everscale-standalone-client/nodejs.js";
import { cryptoModule, close } from "./Client.js";

export const computePKeys = async (mnemonic) => {
    const deriveParams = {
        phrase: mnemonic,
        path: "m/44'/396'/0'/0/0"
    };

    const keyPair = await cryptoModule.mnemonic_derive_sign_keys(deriveParams)
    const publicKey = keyPair.public;
    const privateKey = keyPair.secret;
    await close()
    return { keyPair, publicKey, privateKey };
};


export const getAddressFromPublicKey = async (publicKey) => {
    const account = await EverWalletAccount.fromPubkey({
        publicKey: publicKey,
        workchain: 0,
    });
    return account.address._address;
};