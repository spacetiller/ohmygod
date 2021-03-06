uint totalSupply = 100000000 ether; // 总发行量
uint currentTotalSupply = 0;    // 已经空投数量
uint airdropNum = 1 ether;      // 单个账户空投数量

// 存储是否空投过
mapping(address => bool) touched;

// 修改后的balanceOf方法
function balanceOf(address _owner) public view returns (uint256 balance) {
    // 添加这个方法，当余额为0的时候直接空投
    if (!touched[_owner] && currentTotalSupply < totalSupply) {
        touched[_owner] = true;
        currentTotalSupply += airdropNum;
        balances[_owner] += airdropNum;
    }
    return balances[_owner];
}