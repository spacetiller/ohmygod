pragma solidity ^0.4.18;

contract A{
  uint stateVar;

  function somePublicFun() public{}
  function someInternalFun() internal{}
  function somePrivateFun() private{}
}

contract AccessBaseContract is A{
  function call(){

    //访问父类的`public`方法
    somePublicFun();

    //访问父类的状态变量
    stateVar = 10;

    //访问父类的`internal`方法
    someInternalFun();

    //不能访问`private`
    //somePrivateFun();
  }
}