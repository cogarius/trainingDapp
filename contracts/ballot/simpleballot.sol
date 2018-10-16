
pragma solidity >=0.4.24 <0.6.0;


contract SimpleBallot {

    bool public voted;
   
    function set(bool x) public {
        voted = x;
    }

    function get() public view returns (bool)  {
        return voted;
    }

}
