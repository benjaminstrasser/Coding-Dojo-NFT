# Coding Dojo

## External Requirements

- Install Metamask Browser Plugin from https://metamask.io/
- Use this mnemonic: ```test test test test test test test test test test test junk```
- Add local network to metamask (right upper circle -> settings)
```
localnetwork config:
network name: localhost:8545
rpc-url: http://127.0.0.1:8545/
chain-id: 69905 or 0x11111
symbol: ETH (might be buggy - not that important)
```

## Setup
### Svelte Frontend
- `cd ./svelte`
- `npm install`

### Hardhat Test Blockchain
- `cd ./hardhat`
- `npm install`

## Start
### Svelte Frontend
- `cd ./svelte`
- `npm run dev`

### Hardhat Test Blockchain
- `cd ./hardhat`
- `npm run node` start the local blockchain in one terminal
- `npm run compile` compile your contracts from ./contracts folder
- `npm run deploy` compile and deploy your contract from ./contracts folder
- `npm run test` run the tests from your ./test folder

## Other Resources
ERC721 Specification: https://eips.ethereum.org/EIPS/eip-721 \
Solidity by Example: https://solidity-by-example.org/ \
Svelte Basics: https://svelte.dev/tutorial/basics \
SvelteKit Basics: https://kit.svelte.dev/docs/introduction
