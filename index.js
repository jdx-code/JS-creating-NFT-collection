/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const iplNFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (teamName, jerseyColor, titlesWon, owner, captain) {
    const iplTeam = {
        teamName,
        jerseyColor,
        titlesWon,
        owner,
        captain,
    }
    iplNFTs.push(iplTeam)
    console.log(`${teamName} minted successfully`);
    console.log("**************************************")
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<iplNFTs.length; i++){
        console.log(`\nID  \t\t\t ${i+1}`)
        console.log(`Team  \t\t\t ${iplNFTs[i].teamName}`)
        console.log(`Jersey color  \t ${iplNFTs[i].jerseyColor}`)
        console.log(`Titles won \t\t ${iplNFTs[i].titlesWon}`)
        console.log(`Owner  \t\t\t ${iplNFTs[i].owner}`)
        console.log(`Captain  \t\t ${iplNFTs[i].captain}`)
        console.log("****************************************")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total NFTs in supply : ${iplNFTs.length}`)
}

// call your functions below this line

mintNFT ("mumbai-indians", "blue", 4, "Indiawin Sports (Anil Ambani)", "rohit sharma")
mintNFT ("gujarat titans", "navy-blue", 1, "VC Capital Partners", "shubhman gill")
mintNFT ("chennai-superkings", "yellow", 3, "N. Srinivasan", "m.s. dhoni")

listNFTs()

getTotalSupply()