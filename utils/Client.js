// Client.js
import { TonClient, CryptoModule } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";

TonClient.useBinaryLibrary(libNode);

export const client = new TonClient();
export const cryptoModule = new CryptoModule(client);
export const close = async () => { client.close() }