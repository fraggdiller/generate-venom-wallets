// MnemonicGenerator.js
import { cryptoModule } from "./Client.js";

export class MnemonicGenerator {
    static generateMnemonicPhrase = async () => {
        const generateParams = { word_count: 12, dictionary: 1 };
        const { phrase } = await cryptoModule.mnemonic_from_random(generateParams);
        return phrase;
    }
}
