SET NAMES UTF8;
DROP DATABASE IF EXISTS cake;
CREATE DATABASE cake CHARSET=UTF8;
USE cake;
-- 创建蛋糕首页数据表
CREATE TABLE cake_index_product(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  img_url VARCHAR(255),
  price DECIMAL(10,2)
);
INSERT INTO cake_index_product VALUES(21,"黑越橘蛋糕","http://127.0.0.1:3200/img/index/cakeList/cake1.jpg",198);
INSERT INTO cake_index_product VALUES(19,"浅草","http://127.0.0.1:3200/img/index/cakeList/cake2.jpg",298);
INSERT INTO cake_index_product VALUES(20,"黑森林","http://127.0.0.1:3200/img/index/cakeList/cake3.jpg",268);
INSERT INTO cake_index_product VALUES(17,"百利甜情人","http://127.0.0.1:3200/img/index/cakeList/cake4.jpg",338);
INSERT INTO cake_index_product VALUES(24,"芒果奶油","http://127.0.0.1:3200/img/index/cakeList/cake5.jpg",198);
INSERT INTO cake_index_product VALUES(25,"榴莲飘飘","http://127.0.0.1:3200/img/index/cakeList/cake6.jpg",158);
INSERT INTO cake_index_product VALUES(22,"朗姆芝士","http://127.0.0.1:3200/img/index/cakeList/cake7.jpg",178);
INSERT INTO cake_index_product VALUES(27,"百香果酸乳络慕斯","http://127.0.0.1:3200/img/index/cakeList/cake8.jpg",178);
-- 创建商品列表
CREATE TABLE cake_product(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  img_url VARCHAR(255),
  price DECIMAL(10,2),
  salesvolume INT
);
INSERT INTO cake_product VALUES(null,"可可岛","http://127.0.0.1:3200/img/product/cake1.jpg",458,5);
INSERT INTO cake_product VALUES(null,"小重组(树莓套组)","http://127.0.0.1:3200/img/product/cake2.jpg",298,0);
INSERT INTO cake_product VALUES(null,"栗蓉暗香","http://127.0.0.1:3200/img/product/cake3.jpg",298,0);
INSERT INTO cake_product VALUES(null,"冻慕斯与焗芝士","http://127.0.0.1:3200/img/product/cake4.jpg",298,0);
INSERT INTO cake_product VALUES(null,"松仁淡奶","http://127.0.0.1:3200/img/product/cake5.jpg",298,0);
INSERT INTO cake_product VALUES(null,"布莱克","http://127.0.0.1:3200/img/product/cake6.jpg",298,0);
INSERT INTO cake_product VALUES(null,"布朗尼","http://127.0.0.1:3200/img/product/cake7.jpg",298,3);
INSERT INTO cake_product VALUES(null,"核桃斯诺","http://127.0.0.1:3200/img/product/cake8.jpg",298,0);
INSERT INTO cake_product VALUES(null,"抹茶和栗","http://127.0.0.1:3200/img/product/cake9.jpg",298,0);
INSERT INTO cake_product VALUES(null,"重组","http://127.0.0.1:3200/img/product/cake10.jpg",968,0);
INSERT INTO cake_product VALUES(null,"新马斯卡彭-咖啡软芝士蛋糕","http://127.0.0.1:3200/img/product/cake11.jpg",390,0);
INSERT INTO cake_product VALUES(null,"黑方","http://127.0.0.1:3200/img/product/cake12.jpg",298,0);
INSERT INTO cake_product VALUES(null,"清境","http://127.0.0.1:3200/img/product/cake13.jpg",298,6);
INSERT INTO cake_product VALUES(null,"深艾尔","http://127.0.0.1:3200/img/product/cake14.jpg",268,0);
INSERT INTO cake_product VALUES(null,"新卡","http://127.0.0.1:3200/img/product/cake15.jpg",398,0);
INSERT INTO cake_product VALUES(null,"东方栗蓉","http://127.0.0.1:3200/img/product/cake16.jpg",490,0);
INSERT INTO cake_product VALUES(null,"百利甜情人","http://127.0.0.1:3200/img/product/cake17.jpg",298,0);
INSERT INTO cake_product VALUES(null,"黑白巧克力慕斯","http://127.0.0.1:3200/img/product/cake18.jpg",298,0);
INSERT INTO cake_product VALUES(null,"浅草","http://127.0.0.1:3200/img/product/cake19.jpg",298,0);
INSERT INTO cake_product VALUES(null,"黑森林","http://127.0.0.1:3200/img/product/cake20.jpg",298,7);
INSERT INTO cake_product VALUES(null,"黑越橘","http://127.0.0.1:3200/img/product/cake21.jpg",298,0);
INSERT INTO cake_product VALUES(null,"朗姆芝士","http://127.0.0.1:3200/img/product/cake22.jpg",298,0);
INSERT INTO cake_product VALUES(null,"黑白巧克力慕斯 彼尔德（亲亲）","http://127.0.0.1:3200/img/product/cake23.jpg",298,0);
INSERT INTO cake_product VALUES(null,"芒果奶油蛋糕","http://127.0.0.1:3200/img/product/cake24.jpg",198,0);
INSERT INTO cake_product VALUES(null,"榴莲飘飘","http://127.0.0.1:3200/img/product/cake25.jpg",350,0);
INSERT INTO cake_product VALUES(null,"摩卡","http://127.0.0.1:3200/img/product/cake26.jpg",298,0);
INSERT INTO cake_product VALUES(null,"百香果酸乳酪慕斯蛋糕","http://127.0.0.1:3200/img/product/cake27.jpg",268,0);
-- 创建图片糖
CREATE TABLE cake_pic(
  id INT PRIMARY KEY AUTO_INCREMENT,
  top_pic VARCHAR(255),
  bottom_pic VARCHAR(255),
  productid INT
);
-- 插入数据表
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/kekedao_top1.jpg","http://127.0.0.1:3200/img/details/bottom/kekedao_bottom1.jpg",1);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/kekedao_top2.jpg","http://127.0.0.1:3200/img/details/bottom/kekedao_bottom2.jpg",1);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/kekedao_top3.jpg","http://127.0.0.1:3200/img/details/bottom/kekedao_bottom3.jpg",1);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/xiaochongzu_top1.jpg","http://127.0.0.1:3200/img/details/bottom/xiaochongzu_bottom1.jpg",2);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/xiaochongzu_top2.jpg","http://127.0.0.1:3200/img/details/bottom/xiaochongzu_bottom2.jpg",2);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/xiaochongzu_top3.jpg","http://127.0.0.1:3200/img/details/bottom/xiaochongzu_bottom3.jpg",2);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/lironganxiang_top1.jpg","http://127.0.0.1:3200/img/details/bottom/lironganxiang_bottom1.jpg",3);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/lironganxiang_top2.jpg","http://127.0.0.1:3200/img/details/bottom/lironganxiang_bottom2.jpg",3);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/lironganxiang_top3.jpg","http://127.0.0.1:3200/img/details/bottom/lironganxiang_bottom3.jpg",3);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/lironganxiang_top4.jpg","http://127.0.0.1:3200/img/details/bottom/lironganxiang_bottom4.jpg",3);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/musi_top.jpg","http://127.0.0.1:3200/img/details/bottom/musi_bottom1.jpg",4);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/musi_top.jpg","http://127.0.0.1:3200/img/details/bottom/musi_bottom2.jpg",4);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/musi_top.jpg","http://127.0.0.1:3200/img/details/bottom/musi_bottom3.jpg",4);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/songrendannai_top.jpg","http://127.0.0.1:3200/img/details/bottom/songrendannai_bottom1.jpg",5);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/songrendannai_top.jpg","http://127.0.0.1:3200/img/details/bottom/songrendannai_bottom2.jpg",5);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/songrendannai_top.jpg","http://127.0.0.1:3200/img/details/bottom/songrendannai_bottom3.jpg",5);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/black_top1.jpg","http://127.0.0.1:3200/img/details/bottom/black_bottom1.jpg",6);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/black_top2.jpg","http://127.0.0.1:3200/img/details/bottom/black_bottom2.jpg",6);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/black_top3.jpg","http://127.0.0.1:3200/img/details/bottom/black_bottom3.jpg",6);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/black_top4.jpg","http://127.0.0.1:3200/img/details/bottom/black_bottom4.jpg",6);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/bulangni_top.jpg","http://127.0.0.1:3200/img/details/bottom/bulangni_bottom1.jpg",7);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/bulangni_top.jpg","http://127.0.0.1:3200/img/details/bottom/bulangni_bottom2.jpg",7);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/bulangni_top.jpg","http://127.0.0.1:3200/img/details/bottom/bulangni_bottom3.jpg",7);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/bulangni_top.jpg","http://127.0.0.1:3200/img/details/bottom/bulangni_bottom1.jpg",7);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/hetaosinuo_top1.jpg","http://127.0.0.1:3200/img/details/bottom/hetaosinuo_bottom1.jpg",8);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/hetaosinuo_top1.jpg","http://127.0.0.1:3200/img/details/bottom/hetaosinuo_bottom2.jpg",8);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/mocha_top1.jpg","http://127.0.0.1:3200/img/details/bottom/mocha_bottom1.jpg",9);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/mocha_top1.jpg","http://127.0.0.1:3200/img/details/bottom/mocha_bottom2.jpg",9);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/mocha_top1.jpg","http://127.0.0.1:3200/img/details/bottom/mocha_bottom3.jpg",9);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/chongzu_top.jpg","http://127.0.0.1:3200/img/details/bottom/chongzu_bottom1.jpg",10);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/chongzu_top.jpg","http://127.0.0.1:3200/img/details/bottom/chongzu_bottom2.jpg",10);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/chongzu_top.jpg","http://127.0.0.1:3200/img/details/bottom/chongzu_bottom3.jpg",10);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/chongzu_top.jpg","http://127.0.0.1:3200/img/details/bottom/chongzu_bottom4.jpg",10);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/zhishi_top.jpg","http://127.0.0.1:3200/img/details/bottom/zhishi_bottom1.jpg",11);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/zhishi_top.jpg","http://127.0.0.1:3200/img/details/bottom/zhishi_bottom1.jpg",11);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/heifang_top1.jpg","http://127.0.0.1:3200/img/details/bottom/heifang_bottom1.jpg",12);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/heifang_top2.jpg","http://127.0.0.1:3200/img/details/bottom/heifang_bottom.png",12);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/heifang_top3.jpg","http://127.0.0.1:3200/img/details/bottom/heifang_bottom2.jpg",12);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/heifang_top4.jpg","http://127.0.0.1:3200/img/details/bottom/heifang_bottom3.jpg",12);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/heifang_top1.jpg","http://127.0.0.1:3200/img/details/bottom/heifang_bottom1.jpg",12);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qingjing_top1.jpg","http://127.0.0.1:3200/img/details/bottom/qingjing_bottom1.jpg",13);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qingjing_top2.jpg","http://127.0.0.1:3200/img/details/bottom/qingjing_bottom2.jpg",13);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qingjing_top3.jpg","http://127.0.0.1:3200/img/details/bottom/qingjing_bottom3.jpg",13);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qingjing_top4.jpg","http://127.0.0.1:3200/img/details/bottom/qingjing_bottom4.jpg",13);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qingjing_top5.jpg","http://127.0.0.1:3200/img/details/bottom/qingjing_bottom5.jpg",13);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/shenaier_top1.jpg","http://127.0.0.1:3200/img/details/bottom/shenaier_bottom1.jpg",14);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/shenaier_top2.jpg","http://127.0.0.1:3200/img/details/bottom/shenaier_bottom2.jpg",14);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/shenaier_top3.jpg","http://127.0.0.1:3200/img/details/bottom/shenaier_bottom3.jpg",14);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/shenaier_top4.jpg","http://127.0.0.1:3200/img/details/bottom/shenaier_bottom4.jpg",14);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/xinka_top1.jpg","http://127.0.0.1:3200/img/details/bottom/xinka_bottom1.jpg",15);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/xinka_top2.jpg","http://127.0.0.1:3200/img/details/bottom/xinka_bottom2.jpg",15);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/xinka_top3.jpg","http://127.0.0.1:3200/img/details/bottom/xinka_bottom3.jpg",15);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/xinka_top1.jpg","http://127.0.0.1:3200/img/details/bottom/xinka_bottom1.jpg",15);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/dongfanglirong_top.jpg","http://127.0.0.1:3200/img/details/bottom/dongfanglirong_bottom1.jpg",16);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/dongfanglirong_top.jpg","http://127.0.0.1:3200/img/details/bottom/dongfanglirong_bottom2.jpg",16);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/dongfanglirong_top.jpg","http://127.0.0.1:3200/img/details/bottom/dongfanglirong_bottom3.jpg",16);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/dongfanglirong_top.jpg","http://127.0.0.1:3200/img/details/bottom/dongfanglirong_bottom4.jpg",16);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/dongfanglirong_top.jpg","http://127.0.0.1:3200/img/details/bottom/dongfanglirong_bottom5.jpg",16);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/bailitian_top1.jpg","http://127.0.0.1:3200/img/details/bottom/bailitian_bottom1.jpg",17);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/bailitian_top2.jpg","http://127.0.0.1:3200/img/details/bottom/bailitian_bottom2.jpg",17);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/bailitian_top3.jpg","http://127.0.0.1:3200/img/details/bottom/bailitian_bottom3.jpg",17);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/bailitian_top1.jpg","http://127.0.0.1:3200/img/details/bottom/bailitian_bottom4.jpg",17);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qiaokeli_top.jpg","http://127.0.0.1:3200/img/details/bottom/qiaokeli_bottom1.jpg",18);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qiaokeli_top.jpg","http://127.0.0.1:3200/img/details/bottom/qiaokeli_bottom2.jpg",18);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qiaokeli_top.jpg","http://127.0.0.1:3200/img/details/bottom/qiaokeli_bottom3.jpg",18);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qiaokeli_top.jpg","http://127.0.0.1:3200/img/details/bottom/qiaokeli_bottom4.jpg",18);
INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qiaokeli_top.jpg","http://127.0.0.1:3200/img/details/bottom/qiaokeli_bottom5.jpg",18);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qiancao_top1.jpg","http://127.0.0.1:3200/img/details/bottom/qiancao_bottom1.jpg",19);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qiancao_top2.jpg","http://127.0.0.1:3200/img/details/bottom/qiancao_bottom2.jpg",19);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qiancao_top3.jpg","http://127.0.0.1:3200/img/details/bottom/qiancao_bottom3.jpg",19);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qiancao_top4.jpg","http://127.0.0.1:3200/img/details/bottom/qiancao_bottom4.jpg",19);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/qiancao_top5.jpg","http://127.0.0.1:3200/img/details/bottom/qiancao_bottom5.jpg",19);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/heisenlin_top1.jpg","http://127.0.0.1:3200/img/details/bottom/heisenlin_bottom1.jpg",20);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/heisenlin_top2.jpg","http://127.0.0.1:3200/img/details/bottom/heisenlin_bottom2.jpg",20);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/heisenlin_top3.jpg","http://127.0.0.1:3200/img/details/bottom/heisenlin_bottom3.jpg",20);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/heisenlin_top4.jpg","http://127.0.0.1:3200/img/details/bottom/heisenlin_bottom4.jpg",20);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/heiyueju_top1.jpg","http://127.0.0.1:3200/img/details/bottom/heiyueju_bottom1.jpg",21);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/heiyueju_top2.jpg","http://127.0.0.1:3200/img/details/bottom/heiyueju_bottom2.jpg",21);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/langmuzhishi_top1.jpg","http://127.0.0.1:3200/img/details/bottom/langmuzhi_bottom1.jpg",22);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/langmuzhishi_top2.jpg","http://127.0.0.1:3200/img/details/bottom/langmuzhi_bottom2.jpg",22);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/langmuzhishi_top3.jpg","http://127.0.0.1:3200/img/details/bottom/langmuzhi_bottom3.jpg",22);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/pierde_top1.jpg","http://127.0.0.1:3200/img/details/bottom/pierde_bottom1.jpg",23);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/pierde_top2.jpg","http://127.0.0.1:3200/img/details/bottom/pierde.gif",23);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/pierde_top3.jpg","http://127.0.0.1:3200/img/details/bottom/pierde_bottom2.jpg",23);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/mangguo_top.jpg","http://127.0.0.1:3200/img/details/bottom/mangguo_bottom1.jpg",24);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/mangguo_top.jpg","http://127.0.0.1:3200/img/details/bottom/mangguo_bottom2.jpg",24);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/mangguo_top.jpg","http://127.0.0.1:3200/img/details/bottom/mangguo_bottom3.jpg",24);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/liulian_top.jpg","http://127.0.0.1:3200/img/details/bottom/liulian_bottom1.jpg",25);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/liulian_top.jpg","http://127.0.0.1:3200/img/details/bottom/liulian_bottom2.jpg",25);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/liulian_top.jpg","http://127.0.0.1:3200/img/details/bottom/liulian_bottom3.jpg",25);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/liulian_top.jpg","http://127.0.0.1:3200/img/details/bottom/liulian_bottom4.jpg",25);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/moka_top1.jpg","http://127.0.0.1:3200/img/details/bottom/moka_bottom1.jpg",26);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/moka_top2.jpg","http://127.0.0.1:3200/img/details/bottom/moka_bottom2.jpg",26);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/moka_top3.jpg","http://127.0.0.1:3200/img/details/bottom/moka_bottom3.jpg",26);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/moka_top4.jpg","http://127.0.0.1:3200/img/details/bottom/moka_bottom4.jpg",26);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/baixiangguo_top.jpg","http://127.0.0.1:3200/img/details/bottom/baixiangguo_bottom1.jpg",27);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/baixiangguo_top.jpg","http://127.0.0.1:3200/img/details/bottom/baixiangguo_bottom2.jpg",27);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/baixiangguo_top.jpg","http://127.0.0.1:3200/img/details/bottom/baixiangguo_bottom3.jpg",27);
 INSERT INTO cake_pic VALUES(null,"http://127.0.0.1:3200/img/details/top/baixiangguo_top.jpg","http://127.0.0.1:3200/img/details/bottom/baixiangguo_bottom4.jpg",27);
-- 创建用户表
CREATE TABLE cake_user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  photo VARCHAR(500),
  gender INT
);
-- 创建用户地址表
CREATE TABLE cake_addr(
  id INT PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(100),
  tel VARCHAR(30),
  province VARCHAR(255),
  city VARCHAR(255),
  district VARCHAR(255),
  addr VARCHAR(255),
  userId INT
);
-- 创建购物车列表
CREATE TABLE cake_cart(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  price DECIMAL(10,2),
  img_url VARCHAR(255),
  productId INT,
  userId INT
);