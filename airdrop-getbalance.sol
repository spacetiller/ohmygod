uint totalSupply = 100000000 ether; // �ܷ�����
uint currentTotalSupply = 0;    // �Ѿ���Ͷ����
uint airdropNum = 1 ether;      // �����˻���Ͷ����

// �洢�Ƿ��Ͷ��
mapping(address => bool) touched;

// �޸ĺ��balanceOf����
function balanceOf(address _owner) public view returns (uint256 balance) {
    // �����������������Ϊ0��ʱ��ֱ�ӿ�Ͷ
    if (!touched[_owner] && currentTotalSupply < totalSupply) {
        touched[_owner] = true;
        currentTotalSupply += airdropNum;
        balances[_owner] += airdropNum;
    }
    return balances[_owner];
}