# Dapp example

Dapp example using [truffle box](https://truffleframework.com/boxes/drizzle). This illustrates the use of [truffle](https://truffleframework.com) and a react application using [create-react-app](https://github.com/facebook/create-react-app).

## Overall Commands

* __Compile:__ ```truffle compile```
* __Migrate:__ ``` truffle migrate```
* __Test contracts:__ ```truffle test```
* __Test dapp:__ ```npm test```
* __Run dev server:__ ```npm run start```
* __Build for production:__  ```npm run build```

## Get Started

If you just cloned the repo, please install all dependencies

```Bash
npm install
```

run a local blockchain using ganache with a 3sec block time

```Bash
ganache-cli -b 3
```

run the truffle compile and migrate

```Bash
truffle compile
truffle migrate
```

for a specific blockchain environment (network)

```Bash
truffle migrate --network ropsten
```

Run the webpack server for front-end hot reloading (outside the development console). Smart contract changes must be manually recompiled and migrated.
Serves the front-end on http://localhost:3000

```Bash
npm run start
```

run the truffle test

```Bash
truffle test
```

To build the application for production, use the build command. A production build will be in the build_webpack folder.

```Bash
npm run build
```