require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name response toss upgrade include prison metal gauge'; 
let testAccounts = [
"0x5ac8b0dbc53752b26aa312d22e1b5b446baea2ff5673d85362f0f5c0c50365d5",
"0x0645d9b92a469a4efc131282bdb7c53e4d91208e658fa2261dfd057ec3f848da",
"0x2c0d0b76b2f8aaf7f04f7285c6a4068c2c5c4b69f78b0ef58758c0ac1bc00c3f",
"0x3394b56856f0137c69c55bc621b06434851678c96b8a3f3ef5be232ab5a5b822",
"0xa58f35c9f0929de6aa9564608327a7202bfdd34963b8e4cc26944c748e9e2877",
"0xc74b3f37f671ed28dd845b12133d15a129805b3b380d876a9d44a45145a16887",
"0x25c4d4594501fa54c5b9d1fed30c196fde117b5511b033c5e05eb133e487e373",
"0x8bc5bb3a4c97e8f208e1ea826784ded92d4d157696808969a4e229207080e46c",
"0xea78675736a5ab3301da67eab02d9673d8d19d6431aa503190bfde4bf9b0dac3",
"0x794cd55a52dfcf1c3788507a30c3dbb1ebbb79a8c95bf3dcb16cc7670f0dac01"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


