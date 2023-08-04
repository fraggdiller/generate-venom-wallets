// WalletGenerator.js
import { MnemonicGenerator } from "./MnemonicGenerator.js";
import { computePKeys, calculateVenomAddress } from "./helpers.js";

export class WalletGenerator {
    static getWalletData = async () => {
        const mnemonic = await MnemonicGenerator.generateMnemonicPhrase();
        const keys = await computePKeys(mnemonic);
        const publicKey = keys.keyPair.public;
        const privateKey = keys.keyPair.secret;
        const address = await calculateVenomAddress(publicKey);
        console.log(address)

        return {
            seed: mnemonic,
            address: address,
            publicKey: publicKey,
            privateKey: privateKey,
        };
    }
}
