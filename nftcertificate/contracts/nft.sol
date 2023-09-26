// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the ERC721 contract from OpenZeppelin
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SimpleNFT is ERC721URIStorage {
    constructor() ERC721("SimpleNFT", "SNFT") {}

    function mint(uint256 tokenId, string memory tokenURI,address to) public {
        
        require(!_exists(tokenId), "Token already exists");
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}