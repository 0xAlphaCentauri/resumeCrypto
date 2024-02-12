// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import '@openzeppelin/contracts/access/Ownable.sol';

contract Monadians is ERC721, Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;
    mapping(address => bool) public whitelistedAddresses;

    // Name and symbol
    constructor() payable Ownable(msg.sender) ERC721('Monadians', 'MD'){
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
        // Set Withdraw Wallet Address 
    }

    modifier onlyWhitelisted() {
        require(whitelistedAddresses[msg.sender], "Not whitelisted");
        _;
    }

    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner{
        // Owner will be the deployer
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function setBaseTokenUri(string calldata baseTokenUri_) external onlyOwner{
        baseTokenUri = baseTokenUri_;
    }
    
    function withdraw() external onlyOwner{
        (bool success, ) = withdrawWallet.call{ value: address(this).balance} ('');
        require(success, 'withdraw failed');
    }

    function addAddressToWhitelist(address addr) external onlyOwner {
        whitelistedAddresses[addr] = true;
    }

    function removeAddressFromWhitelist(address addr) external onlyOwner {
        whitelistedAddresses[addr] = false;
    }

    function mint(uint256 quantity_) public payable onlyWhitelisted {
        require(isPublicMintEnabled, 'minting not enabled');
        require(msg.value == quantity_ * mintPrice, 'wrong mint value');
        require(totalSupply + quantity_ <= maxSupply, 'sold out');
        require(walletMints[msg.sender] + quantity_ <= maxPerWallet, 'exceed max allowed per wallet');

        for (uint256 i = 0; i < quantity_; i++)
        {
            uint256 newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}