[![Typing SVG](https://readme-typing-svg.demolab.com?font=Raleway&weight=500&size=50&duration=3000&pause=1000&color=20F700&center=true&vCenter=true&width=640&height=90&lines=Generate+Venom+Wallets)](https://git.io/typing-svg)

# Venom wallets generator

This code will allow you to generate a specified number of Venom wallets and save them to files.

## Install dependencies
For the code to work, you need to install the following dependencies:

- @eversdk/core - 1.44.1
- @eversdk/lib-node - 1.44.1
- everscale-standalone-client - 2.1.19

You can install it using:
```
npm i
```

or
```
npm i @eversdk/core@1.44.1 @eversdk/lib-node@1.44.1 everscale-standalone-client@2.1.19
```

## Wallet generator

In index.js set:
1. `numWallets = N` you want to generate.


## Saving to files

Generated wallets are saved in several files:

- wallets.csv: a CSV file (.csv) containing a list of wallets with addresses, private keys, public keys, and seed phrases.
- seeds.txt: a text file (.txt) listing the LED phrases of each wallet.
- addresses.txt: a text file (.txt) listing the addresses of each wallet.
- private_keys.txt: a text file (.txt) listing the private keys of each wallet.
- public_keys.txt: a text file (.txt) listing the public keys of each wallet.


## Conclusion
```
git clone https://github.com/SYBIL-MAFIA/generate-venom-wallets.git
cd generate-venom-wallets
npm i
open index.js
node index.js
```

### Support / Qs

`Telegram:` https://t.me/retrodropTools | https://t.me/fraggdiller
