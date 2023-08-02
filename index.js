import { WalletGenerator } from "./utils/WalletGenerator.js";
import { WalletSaver } from "./utils/WalletSaver.js";
import { fileURLToPath } from 'url';
import path from 'path';

const numWallets = 100000; // number of wallets to generate
const walletsData = [];

(async () => {
    console.log(`Start generating ${numWallets} Venom wallets`);
    try {

        const walletPromises = Array.from({ length: numWallets }, () => WalletGenerator.getWalletData());

        const generatedWallets = await Promise.all(walletPromises);

        walletsData.push(...generatedWallets);

        const currentModulePath = path.dirname(fileURLToPath(import.meta.url));
        const dataFolderPath = path.join(currentModulePath, 'data');
        WalletSaver.saveDataToFiles(walletsData, dataFolderPath, 'venom');
        console.log("Venom wallets successfully generated and saved to data folder.");
    } catch (error) {
        console.error("Error:", error);
    }
})();
