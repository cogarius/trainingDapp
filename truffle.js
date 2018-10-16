require('dotenv').config()

const HDWalletProvider = require("truffle-hdwallet-provider");

// you need to create .env file with your HD-wallet seed to set the mnemonic variable
// EXAMPLE of .env file
//
// MNEMONIC_METAMASK_TEST=<my seed words should be here...>
//
const mnemonic = process.env.MNEMONIC_METAMASK_TEST

module.exports = {
    migrations_directory: "./migrations",


    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },

        cogarius: {
            provider: function () {
                return new HDWalletProvider(mnemonic, "https://blockchain.blockexperiment.com/A4626CD5EAA07127580BCD0DCA56B477B2D98BF1AE730A94820ECBD0E508C026  ")
            },
            network_id: 29957
        }
    },


    solc: {
        optimizer: {
            enabled: true,
            runs: 500
        }
    }
};
