pragma solidity ^0.4.18;

contract A{
  uint stateVar;

  function somePublicFun() public{}
  function someInternalFun() internal{}
  function somePrivateFun() private{}
}

contract AccessBaseContract is A{
  function call(){

    //���ʸ����`public`����
    somePublicFun();

    //���ʸ����״̬����
    stateVar = 10;

    //���ʸ����`internal`����
    someInternalFun();

    //���ܷ���`private`
    //somePrivateFun();
  }
}