# NFT Gallery 

# Requirements
You'll need to create a `.env` file and include the `REACT_APP_INFURA_URL` key.
# What design/implementation decisions did you make and why?
The most important decision I make was the redux store design. Instead of storing only NFTs of a single user (Mark Cuban) I created an extensible redux store of users so we could easily display NFTs or account balance of different users in the future. Also, the store was designed with the following format:

```
{
    "users": {
        "0x293ed38530005620e4b28600f196a97e1125daac": {
            "balance": string,
            "nfts": IOpenSeaNFT[],
        }, 
        ...
        ...
    }
}
```

So everytime we need to search for a user, the time complexity is O(1). If I had defined a "users" array the time complexity would be O(n).

# What would you have done if you had more time?
I would probably:
1. Create folders for each component
2. Remove inline styles and move them into the `styles.ts` file for each component.
3. Handle error messages
4. Include a loading screen while we're making API calls or Web3 calls.
5. Improve styling.
6. Add unit testing (:

# What would you need to do to make this project production ready?
We need: 
1. Get an API KEY from OpenSea API so we can overpass the rate limit.
2. Get an mainnet Infura account for the Web3 provider.