// WalletGenerator.js
import { MnemonicGenerator } from "./MnemonicGenerator.js";
import { computePKeys, getAddressFromPublicKey } from "./helpers.js";

export class WalletGenerator {
    static getWalletData = async () => {
        const mnemonic = await MnemonicGenerator.generateMnemonicPhrase();
        const keys = await computePKeys(mnemonic);
        const publicKey = keys.publicKey;
        const privateKey = keys.privateKey;
        const address = await getAddressFromPublicKey(publicKey);
        console.log(address)

        return {
            seed: mnemonic,
            address: address,
            publicKey: publicKey,
            privateKey: privateKey,
        };
    }
}
