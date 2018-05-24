var fs = require("fs");
var iconv = require("iconv-lite");

var buffer = Buffer.from(fs.readFileSync('input.txt',{encoding:'binary'}),'binary');
console.log(buffer);//�õ��ļ����ݶ�Ӧ��Buffer
var text = iconv.decode(buffer,'GBK');//ʹ��GBK����
console.log(text);
//console.log(iconv.encode(text, 'utf8'));
//console.log(iconv.encode(text, 'gbk'));
fs.writeFileSync('utfFile.txt',iconv.encode(text, 'utf8'),'binary'); //�������Ʒ�ʽд��
fs.writeFileSync('utfFile2.txt',text,'utf8'); //��UTF8д��
