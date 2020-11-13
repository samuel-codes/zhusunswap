pragma solidity ^0.6.12;

///领养智能合约
contract Adoption{
    //保存领养者地址
    //我们定义了一个变量：adopters。这是一个以太坊地址的数组。数组包含一种类型，长度可以固定或可变。在这种情况下，类型为address，长度为16。
    //您还会注意到adopters是公开的。公共变量具有自动getter方法，但是对于数组，则需要一个键，并且仅返回一个值。
    address[16] public adopters;

    //adopting a pet 在Solidity中，必须指定功能参数和输出的类型。在这种情况下，我们将接受一个petId（整数）并返回一个整数。
    function adopt(uint petId) public returns(uint){
        require(petId>=0 && petId<=15,"参数错误");
        //调用此功能的人或智能合约的地址用表示msg.sender
        adopters[petId] = msg.sender;
        return petId;
    }

    //检索领养者 view函数声明中的关键字表示该函数将不会修改合同的状态 
    function getAdopters() public view returns(address[16] memory){
        return adopters;
    }
    
}