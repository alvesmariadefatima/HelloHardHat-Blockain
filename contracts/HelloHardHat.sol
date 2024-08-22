// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HelloHardHat {
    string public message = "Hello World";

    function helloWorld() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    } 
}