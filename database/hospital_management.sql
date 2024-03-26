/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80031 (8.0.31)
 Source Host           : localhost:3306
 Source Schema         : hospital_management

 Target Server Type    : MySQL
 Target Server Version : 80031 (8.0.31)
 File Encoding         : 65001

 Date: 13/03/2024 09:41:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for app_users
-- ----------------------------
DROP TABLE IF EXISTS `app_users`;
CREATE TABLE `app_users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `username` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `password` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `phone` varchar(35) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `email` varchar(35) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `sex` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `address` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `role` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `petname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `headphoto` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 87 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of app_users
-- ----------------------------
INSERT INTO `app_users` VALUES (2, '第一', '66666', '123456', '18378555125', 'c4ed@dn3c.cn', '男', '福建省莆田市秀屿区忠门镇', '普通用户', '贾晨璐', 'http://127.0.0.1:3000/avar_1710290989766-8700612663800114.jpg');
INSERT INTO `app_users` VALUES (62, '勇敢牛牛', 'longge', '123456789', '18378555259', '50e7@4j73x.net', '男', '宁夏回族自治区银川市西夏区镇北堡镇', '普通用户', '杨晶莹', 'http://127.0.0.1:3000/avar_1649497197433-8039568804072752.png');
INSERT INTO `app_users` VALUES (72, '牛牛惹', '老王', '123456', '13675827391', '6e15@2z55.xyz', '男', '广西壮族自治区防城港市港口区光坡镇', '普通用户', '邓淑君', 'http://127.0.0.1:3000/avar_1650456335735-5243213308938981.jpg');
INSERT INTO `app_users` VALUES (75, 'Nature', 'admin', '123', '18378555259', 'df04@82q85.com.cn', '男', '云南省迪庆藏族自治州香格里拉市迪庆扶贫民族经济开发区', '普通用户', '史明', 'http://127.0.0.1:3000/avar_1650454819360-6885496905980473.jpg');
INSERT INTO `app_users` VALUES (84, 'Mario', 'zsd', '123', '18378555259', '2489@qs3g94jv.vip', '男', '四川省广元市剑阁县演圣镇', '普通用户', '吕军', NULL);
INSERT INTO `app_users` VALUES (85, 'Loki', '王小五', '12345', '17828443364', 'efac@c4np8.com', '男', '湖南省益阳市益阳市大通湖管理区金盆镇', '普通用户', '赖晶莹', NULL);

-- ----------------------------
-- Table structure for dakamsg
-- ----------------------------
DROP TABLE IF EXISTS `dakamsg`;
CREATE TABLE `dakamsg`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `zhiwei` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `keshi` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `time` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `doctor_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 57 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dakamsg
-- ----------------------------
INSERT INTO `dakamsg` VALUES (50, '李菲', NULL, NULL, '已打卡', '2024-3-11', 1);
INSERT INTO `dakamsg` VALUES (52, '李菲', NULL, NULL, '已打卡', '2024-3-12', 1);
INSERT INTO `dakamsg` VALUES (54, '张文泽', NULL, NULL, '已打卡', '2024-3-12', 7);
INSERT INTO `dakamsg` VALUES (55, '姜芳', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `dakamsg` VALUES (56, '姜芳', NULL, NULL, '已打卡', '2024-3-13', 63);

-- ----------------------------
-- Table structure for danganmsg
-- ----------------------------
DROP TABLE IF EXISTS `danganmsg`;
CREATE TABLE `danganmsg`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `petname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `photoUrl` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `petusername` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `history` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of danganmsg
-- ----------------------------
INSERT INTO `danganmsg` VALUES (3, '贾晨璐', 'http://127.0.0.1:3000/pet_1710225768030-38209156844970815.jpg', '66666', '18378555125', '无');
INSERT INTO `danganmsg` VALUES (4, '杨晶莹', 'http://127.0.0.1:3000/pet_1710225768030-38209156844970815.jpg', 'longge', '18378555259', '无');
INSERT INTO `danganmsg` VALUES (5, '邓淑君', 'http://127.0.0.1:3000/pet_1710225768030-38209156844970815.jpg', '老王', '13675827391', '123');
INSERT INTO `danganmsg` VALUES (6, '史明', 'http://127.0.0.1:3000/pet_1650525992162-5322907311589951.jpg', 'admin', '18378555259', '无');
INSERT INTO `danganmsg` VALUES (7, '吕军', 'http://127.0.0.1:3000/pet_1710225768030-38209156844970815.jpg', 'zsd', '18378555259', NULL);
INSERT INTO `danganmsg` VALUES (8, '赖晶莹', 'http://127.0.0.1:3000/pet_1710225768030-38209156844970815.jpg', '王小五', '17828443364', '无');

-- ----------------------------
-- Table structure for doctor_users
-- ----------------------------
DROP TABLE IF EXISTS `doctor_users`;
CREATE TABLE `doctor_users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nickname` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `username` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `age` int NULL DEFAULT NULL,
  `sex` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `zhi_wei` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `ke_shi` varchar(35) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `phone` varchar(80) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `address` varchar(120) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `email` varchar(80) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `role` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `headphoto` varchar(2000) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `doctor_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 64 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctor_users
-- ----------------------------
INSERT INTO `doctor_users` VALUES (1, 'lf', '123456', '李菲', 35, '女', '主治医师', '呼吸科', '13657828712', '广西壮族自治区贺州市昭平县木格乡', '7793@qq.com', '医生', 'http://127.0.0.1:3000/pet_1710222207234-23563061358317072.jpg', 13);
INSERT INTO `doctor_users` VALUES (2, 'zws', '123456', '李德发', 36, '女', '主任医师', '妇产科', '13657828712', '黑龙江省鹤岗市兴山区沟南街道', '7793@qq.com', '医生', 'http://127.0.0.1:3000/pet_1649755670631-19598810209834738.jpg', 19);
INSERT INTO `doctor_users` VALUES (30, 'dfe', '111', '杜福尔', 29, '男', '医师', '神经外科', '18978555259', '辽宁省鞍山市千山区汤岗子街道', '2333@qq.com', '医生', 'http://127.0.0.1:3000/pet_1649757771602-134346053833569.jpg', 2);
INSERT INTO `doctor_users` VALUES (49, 'lql', '123456', '李清玲', 30, '男', NULL, '骨科', '185226974', '海南省省直辖县级行政区划文昌市潭牛镇', '2581582333@qq.com', '医师', NULL, 3);
INSERT INTO `doctor_users` VALUES (50, 'jwt', '123', '简文涛', 33, '男', NULL, '神经外科', '18378555259', '山东省泰安市宁阳县华丰镇', '2581582333@qq.com', '医师', NULL, 4);
INSERT INTO `doctor_users` VALUES (56, 'sjl', '123', '宋静玲', 25, '男', NULL, '骨科', '18535004514', '湖北省十堰市茅箭区茅塔乡', '123', '123', NULL, 5);
INSERT INTO `doctor_users` VALUES (60, 'zxf', '123456', '赵晓芳', 35, '男', NULL, '心内科', '15191998096', '广东省汕头市潮南区成田镇', '123456@qq.com', '医师', NULL, 68);
INSERT INTO `doctor_users` VALUES (61, 'qdw', '123456', '万涵越', 30, '女', NULL, '康复医学科', '18052001104', '福建省福州市闽清县池园镇', '123@163.com', '医师', NULL, 69);
INSERT INTO `doctor_users` VALUES (63, 'jf', '123456', '姜芳', 33, '女', '医生', '神经外科', '13613853691', '贵州省毕节市金沙县源村镇', 'e54a@jwj5s8.com', '医师', 'http://127.0.0.1:3000/pet_1710292989510-972485102642042.jpg', 6);

-- ----------------------------
-- Table structure for doctorlistmsg
-- ----------------------------
DROP TABLE IF EXISTS `doctorlistmsg`;
CREATE TABLE `doctorlistmsg`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `age` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `ke_shi` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `zhi_wei` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `shan_chang` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `detail` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `keshi_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `wai_jian`(`keshi_id` ASC) USING BTREE,
  INDEX `username`(`username` ASC) USING BTREE,
  CONSTRAINT `wai_jian` FOREIGN KEY (`keshi_id`) REFERENCES `keshimsg` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 72 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctorlistmsg
-- ----------------------------
INSERT INTO `doctorlistmsg` VALUES (2, '杜福尔', '56', '男', '神经外科', '13657828710', NULL, '医师', '颅脑肿瘤、脑血管病手术 脊髓病变、功能神经外科 精准导航、立体定向治疗', ' 杜福尔教授，神经外科权威，博士学历，国际交流丰富。专长于复杂颅内手术，尤其在肿瘤、血管疾病、脊髓和功能区病变治疗方面经验丰富。精于导航技术和立体定向疗法，医术精湛，深受患者信赖，致力于培养年轻医师及提升科室整体医疗品质。', 3);
INSERT INTO `doctorlistmsg` VALUES (3, '李清玲', '35', '女', '骨科', '2114214196', NULL, '医师', '关节置换、骨折复位 脊柱疾病矫正、微创手术 运动损伤修复、康复治疗', '李清玲主任医师，骨科学术领军人物，毕业于北京协和医学院，拥有博士学位。在骨科领域深耕二十余年，临床经验丰富，尤其擅长各类复杂关节置换手术，如髋膝关节置换，并在骨折精准复位及内固定技术上造诣深厚。\r\n\r\n李医生同时专注于脊柱疾病的诊治与矫正，包括颈椎病、腰椎间盘突出症等，熟练运用国际先进的微创手术技术进行治疗。此外，她在运动损伤的修复以及术后康复指导方面也具有丰富经验，致力于为患者提供全面、专业的骨骼健康服务，深受广大患者好评和同行认可。', 4);
INSERT INTO `doctorlistmsg` VALUES (4, '简文涛', '34', '男', '神经外科', '1241414889', NULL, '医师', '颅内肿瘤切除、脑血管病手术 微创脊柱治疗、功能神经调控 重症颅脑外伤救治', '简文涛主任医师，神经外科领域的知名专家，毕业于北京大学医学部神经外科专业，拥有博士学位，并在国内外多家顶级医疗机构进修学习。从事神经外科临床工作近二十年，积累了丰富的实践经验。', 3);
INSERT INTO `doctorlistmsg` VALUES (5, '宋静玲', '18', '女', '骨科', '3423423470', NULL, '医生师', '关节置换、脊柱矫正 骨折微创手术、运动损伤 骨质疏松治疗与康复', '毕业于中国医科大学骨科学专业，拥有博士学位，并在国内外多家知名医院接受过骨科专项培训。从事骨科临床工作近三十年，具有丰富的诊疗经验和深厚的学术造诣。', 4);
INSERT INTO `doctorlistmsg` VALUES (6, '姜芳', '35', '男', '神经外科', '1141442354', NULL, '副院长', '颅内肿瘤切除、脑血管病手术 脊柱疾病治疗、微创介入 功能神经外科及康复指导', '毕业于北京协和医学院神经外科专业，并取得博士学位。在国内外顶级医疗机构完成临床深造，拥有丰富的神经外科诊疗经验。', 3);
INSERT INTO `doctorlistmsg` VALUES (7, '张文泽', '40', '男', '消化内科', '3215467778', NULL, '主任医师', '胃肠疾病诊治、内镜下治疗 肝胆胰腺疾病管理、消化道出血急救 慢性胃炎、溃疡病个性化治疗', '毕业于北京大学医学部消化内科专业，获得博士学位，并在国内外知名医疗机构深造学习。从事消化内科临床工作二十余年，积累了丰富的诊疗经验。', 5);
INSERT INTO `doctorlistmsg` VALUES (8, '李芳', '35', '女', '内分泌科', '1564893775', NULL, '副主任医师', '糖尿病综合管理、甲状腺疾病诊治 肾上腺及垂体疾病处理、骨代谢异常治疗', '毕业于北京大学医学部内分泌专业，博士学位。从事内分泌临床工作多年，积累了丰富的诊疗经验，尤其在糖尿病及其并发症的全程管理和甲状腺疾病的个性化诊疗方面有着深入研究和独特见解。此外，她还擅长肾上腺、垂体疾病以及骨质疏松等骨代谢异常的诊断与治疗。', 6);
INSERT INTO `doctorlistmsg` VALUES (9, '郑美', '30', '女', '肿瘤科', '1365824972', NULL, '医师', '肿瘤化疗与靶向治疗 早期肿瘤筛查与手术指导 癌症疼痛控制与姑息关怀', '中国科学院肿瘤医院博士毕业，在国内外多家著名肿瘤中心接受过专业培训。她在肿瘤化疗、靶向治疗以及免疫治疗方面具有深厚的理论基础和实践经验，能够为患者提供全方位、个体化的治疗方案。同时，郑主任对于肿瘤的早期发现、手术前后的综合治疗以及晚期癌症患者的疼痛管理与生活质量提升等方面也有着独到之处。', 7);
INSERT INTO `doctorlistmsg` VALUES (10, '刘慧', '28', '女', '康复医学科', '1378654230', NULL, '医师', '中风康复、骨科术后康复 运动损伤康复、神经肌肉疾病康复', '拥有国内顶级医学院校康复医学硕士学位，并赴美国约翰·霍普金斯大学进修康复医学。在康复医学领域有着超过15年的实践经验，尤其擅长中风后偏瘫、骨科手术后功能恢复、各类运动损伤康复以及神经肌肉疾病的物理治疗与康复训练。', 10);
INSERT INTO `doctorlistmsg` VALUES (11, '关辉', '33', '男', '儿科', '1456879271', NULL, '主任医师', '儿童呼吸道感染防治 新生儿重症监护救治 儿童生长发育评估与干预', '毕业于首都医科大学儿科系，专注于儿科临床工作逾二十年。关主任在儿童常见病特别是呼吸道感染防治、新生儿危重症抢救以及儿童生长发育监测与营养干预等方面积累了丰富经验和高超技术，深受家长和同行好评。', 9);
INSERT INTO `doctorlistmsg` VALUES (12, '孔芳芳', '32', '女', '妇产科', '1645239877', NULL, '医师', '妊娠期高血压疾病管理 高危妊娠及产科急症处理 妇科微创手术与不孕不育治疗', '曾在北京协和医学院妇产科学习并获得博士学位，长期致力于妇产科临床实践。孔主任对妊娠期并发症如高血压疾病的预防和治疗、高危妊娠管理以及产科急症处置有深厚造诣。同时，她在妇科微创手术和女性不孕不育的诊疗方面亦有所建树，凭借精湛医术和细致入微的服务赢得了广大患者的信赖。', 8);
INSERT INTO `doctorlistmsg` VALUES (13, '李菲', '25', '女', '呼吸科', '1356498783', NULL, '医师', '慢性阻塞性肺疾病诊治 呼吸系统感染治疗 睡眠呼吸障碍与哮喘管理', '毕业于北京大学医学部呼吸内科专业，博士学位。在呼吸系统疾病诊疗方面具有丰富的临床经验和扎实的理论基础，尤其擅长慢性阻塞性肺疾病、呼吸系统感染以及睡眠呼吸障碍和哮喘等疾病的诊断与治疗。', 2);
INSERT INTO `doctorlistmsg` VALUES (14, '邓和泉', '37', '男', '肿瘤科', '1568936206', NULL, '医师', '肿瘤化疗与靶向疗法 早期肿瘤筛查与介入治疗 癌症姑息关怀与疼痛控制', '中国医学科学院肿瘤医院博士毕业，长期从事肿瘤学研究与临床工作，对恶性肿瘤的化疗、靶向治疗及综合治疗有深入理解和实践经验，同时致力于癌症早期发现与干预，以及晚期患者的生活质量提升与疼痛管理。\r\n\r\n', 7);
INSERT INTO `doctorlistmsg` VALUES (15, '阚福德', '45', '男', '内分泌科', '1786459306', NULL, '副主任医师', '糖尿病及其并发症管理 甲状腺疾病诊疗 肾上腺与垂体功能异常处理', '在内分泌领域享有盛誉，毕业于上海交通大学医学院内分泌科，并在国内外知名医疗机构深造学习。他专注于糖尿病及其并发症的个体化治疗，同时也精通于甲状腺疾病以及其他内分泌代谢性疾病的诊断与治疗。', 6);
INSERT INTO `doctorlistmsg` VALUES (16, '覃芙兰', '36', '女', '消化内科', '1564923578', NULL, '医师', '消化道出血急诊处理 胃肠疾病内镜下微创手术 肝胆胰腺疾病诊治', '毕业于中山大学附属第一医院消化内科，具有多年的消化内科临床经验。她在消化道出血的急救处理、胃肠疾病内镜下的微创手术治疗，以及肝胆胰腺等复杂疾病的诊治上均有独到之处。', 5);
INSERT INTO `doctorlistmsg` VALUES (17, '尚官美', '41', '女', '儿科', '1568795365', NULL, '医师', '儿童呼吸道感染防治 新生儿疾病诊治与保健 儿童生长发育评估与指导', '儿童健康领域的专家，毕业于北京儿童医院儿科专业。在儿童呼吸道感染、新生儿疾病诊治、婴幼儿生长发育监测与指导等方面拥有丰富经验和高超技术，深受家长信赖。', 9);
INSERT INTO `doctorlistmsg` VALUES (18, '雷美娜', '35', '女', '康复医学科', '1785896367', NULL, '医师', '中风后康复训练 骨关节损伤康复治疗 运动损伤康复与物理治疗', '毕业于华中科技大学同济医学院康复医学系，具备丰富的康复治疗经验。她专长于中风后的康复训练，骨关节损伤及运动损伤的康复治疗，通过个性化康复方案帮助患者恢复身体功能，提高生活质量。', 10);
INSERT INTO `doctorlistmsg` VALUES (19, '李德发', '30', '男', '妇产科', '1657839456', NULL, '医师', '主治心脏疾病问题', '毕业于北京大学医学部妇产科学专业，博士学位。在妇产科领域有深厚的学术造诣和丰富的临床经验，尤其擅长妇科恶性肿瘤的手术治疗、高危妊娠的全程监护以及女性内分泌疾病的诊治。', 8);
INSERT INTO `doctorlistmsg` VALUES (56, '姜佳琪', '25', '女', '心内科', '18378555289', NULL, '医师', '心血管疾病介入治疗 冠心病诊断与药物治疗 高血压及心力衰竭管理', '心血管内科专家，毕业于中国医科大学并取得博士学位。专注于心内科疾病的诊治，对冠状动脉疾病、高血压、心力衰竭等疾病的药物治疗及介入治疗有深入研究和丰富实践经验。', 1);
INSERT INTO `doctorlistmsg` VALUES (68, '赵晓芳', '25', '男', '心内科', '14913671107', NULL, '医师', '心律失常诊断与治疗 心脏瓣膜疾病评估与手术指导 心脏康复与预防心脏病学', '心内科专业，拥有多年的临床经验和扎实的专业基础。她在心律失常、心脏瓣膜疾病治疗方面具有卓越技能，并重视心脏病患者的长期康复和预防工作。', 1);
INSERT INTO `doctorlistmsg` VALUES (69, '万涵越', '28', '女', '康复医学科', '18052001104', NULL, '医师', '中风后康复训练与评估 运动损伤康复治疗 神经肌肉系统疾病康复指导', '在康复医学领域有着深厚的研究背景和实践经历，毕业于中山大学康复医学专业。她致力于中风后的康复训练及评估，同时也精通于运动损伤的康复治疗以及神经肌肉系统疾病的康复指导，帮助患者实现功能恢复和生活质量提升。', 1);
INSERT INTO `doctorlistmsg` VALUES (71, '姜芳', NULL, '女', NULL, '13613853691', NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for gonggaomsg
-- ----------------------------
DROP TABLE IF EXISTS `gonggaomsg`;
CREATE TABLE `gonggaomsg`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `time` datetime NULL DEFAULT NULL,
  `tit` varchar(1000) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `miaoshu` varchar(20000) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gonggaomsg
-- ----------------------------
INSERT INTO `gonggaomsg` VALUES (1, '2022-03-09 13:12:01', '新职位招聘', '招聘岗位需求');
INSERT INTO `gonggaomsg` VALUES (2, '2024-03-09 21:02:58', '公众号迁移', '本院荣幸地邀请到国内知名心内科专家每周日上午坐诊，欢迎有需要的患者提前预约就诊。');
INSERT INTO `gonggaomsg` VALUES (3, '2024-03-10 22:05:30', '医院新建楼栋征文工程', '基于医院资源有限，现拟要新建一栋医院治疗楼，请有意愿承包的工程公司联系我院，联系方式：156785694');
INSERT INTO `gonggaomsg` VALUES (19, '2024-03-05 00:00:00', '疫情防控提醒', '所有来院人员必须佩戴口罩，并保持至少一米的社交距离，共同遵守和配合医院的各项疫情防控措施。');

-- ----------------------------
-- Table structure for guahaomsg
-- ----------------------------
DROP TABLE IF EXISTS `guahaomsg`;
CREATE TABLE `guahaomsg`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `petname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `petuser` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `petuser_tel` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `history` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `guahao_keshi` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `doctor` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `guahaoTime` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `daytime` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `time_duan` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `doctor_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of guahaomsg
-- ----------------------------
INSERT INTO `guahaomsg` VALUES (18, '文秀英', 'admin', '123456789', NULL, '呼吸科', '李菲', '2022-03-25 00:00:00', '下午', '17:00-18:00', 13);
INSERT INTO `guahaomsg` VALUES (21, '秦艳', 'longge', '123', NULL, '呼吸科', '李菲', '2022-04-21 00:00:00', '下午', '9:00-10:00', 13);
INSERT INTO `guahaomsg` VALUES (22, '沈秀兰', 'admin', '18378555259', NULL, '呼吸科', '李菲', '2022-05-19 00:00:00', '下午', '17:00-18:00', 13);
INSERT INTO `guahaomsg` VALUES (23, '陆瑞辰', 'zsd', '18378555259', NULL, '神经外科', '简文涛', '2022-05-21 00:00:00', '下午', '17:00-18:00', 4);
INSERT INTO `guahaomsg` VALUES (24, '方佳怡', '66666', '18378555125', NULL, '神经外科', '简文涛', '2024-01-02 00:00:00', '下午', '17:00-18:00', 4);
INSERT INTO `guahaomsg` VALUES (25, '万苒溪', '老王', '18378555125', NULL, '心内科', '赵晓芳', '2024-03-11 00:00:00', '下午', '16:00-17:00', 68);
INSERT INTO `guahaomsg` VALUES (26, '阎佳玉', '66666', '18378555125', NULL, '心内科', '赵晓芳', '2024-03-11 00:00:00', '下午', '17:00-18:00', 68);
INSERT INTO `guahaomsg` VALUES (27, '孙紫轩', '66666', '18378555125', NULL, '康复医学科', '万涵越', '2024-03-11 00:00:00', '下午', '8:00-9:00', 69);
INSERT INTO `guahaomsg` VALUES (29, '贾晨璐', '66666', '18378555125', NULL, '内分泌科', '阚福德', '2024-03-15 00:00:00', '下午', '14:00-15:00', 15);
INSERT INTO `guahaomsg` VALUES (30, '贾晨璐', '66666', '18378555125', NULL, '内分泌科', '李芳', '2024-03-15 00:00:00', '下午', '14:00-15:00', 8);
INSERT INTO `guahaomsg` VALUES (31, '贾晨璐', '66666', '18378555125', NULL, '神经外科', '姜芳', '2024-03-13 00:00:00', '下午', '14:00-15:00', 6);

-- ----------------------------
-- Table structure for hospitalintroduce
-- ----------------------------
DROP TABLE IF EXISTS `hospitalintroduce`;
CREATE TABLE `hospitalintroduce`  (
  `id` int NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `tel` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `address` varchar(3000) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `introduce` varchar(15555) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hospitalintroduce
-- ----------------------------
INSERT INTO `hospitalintroduce` VALUES (1, '天津市xx医院', '0775-456987', '天津市红桥区芥园道190号', '欢迎来到“健康守护者”综合医疗中心，我们是一家集医疗、科研与预防保健于一体的现代化三级甲等医院。地处繁华市区心脏地带，医院占地面积广阔，设施齐全先进，拥有国际领先的医疗设备和一支由国内外顶尖医学专家组成的医护团队。\r\n\r\n本院以“生命至上，服务至诚”为宗旨，提供覆盖全生命周期的医疗服务，包括但不限于急救、内外科常见病及疑难杂症诊疗、康复治疗、健康管理等多个领域。尤其在心脏病学、肿瘤精准治疗以及微创手术等方面达到国际一流水平。\r\n\r\n作为全球医疗网络的一部分，我院秉持“全球视野，本土关怀”的理念，致力于引进并融合国际先进的医疗技术和管理模式，同时关注本地社区的健康需求，努力打造成为人民群众信赖的高品质医疗机构。通过持续优化服务流程，提升就医体验，我们竭力为每一位患者提供个性化、全方位的优质医疗服务。');

-- ----------------------------
-- Table structure for keshimsg
-- ----------------------------
DROP TABLE IF EXISTS `keshimsg`;
CREATE TABLE `keshimsg`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `keshi` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `keshi_desc` varchar(10255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of keshimsg
-- ----------------------------
INSERT INTO `keshimsg` VALUES (1, '心内科', '心内科主要负责心血管系统的疾病诊疗，包括高血压、冠状动脉粥样硬化性心脏病（如心绞痛和心肌梗死）、心律失常、心力衰竭、瓣膜性心脏病以及先天性心脏病等疾病的预防、诊断与治疗。科室配备有先进的介入设备，可进行冠脉造影、支架植入等手术。');
INSERT INTO `keshimsg` VALUES (2, '呼吸科', '呼吸科专注于肺部及呼吸道相关疾病的诊疗，涵盖慢性阻塞性肺病（COPD）、哮喘、肺炎、肺癌、肺结核、间质性肺病、睡眠呼吸障碍等多种疾病。科室提供支气管镜检查、肺功能测试、呼吸机支持治疗等服务。');
INSERT INTO `keshimsg` VALUES (3, '神经外科', '神经外科主要处理涉及中枢神经系统（脑和脊髓）的疾病和损伤，如颅内肿瘤、脑血管疾病（如动脉瘤、动静脉畸形）、颅脑外伤、脊柱脊髓疾病以及功能性神经外科疾病（如癫痫、帕金森病）。科室开展显微神经外科手术、立体定向放射外科（如伽玛刀）等先进治疗技术。');
INSERT INTO `keshimsg` VALUES (4, '骨科', '骨科是针对骨骼系统及其相关软组织疾病的专科，包括骨折、关节炎、脊柱疾病、运动损伤、手外科、足踝外科和小儿骨科等。科室提供关节置换、骨折复位固定、脊柱微创手术以及康复治疗等综合医疗服务。');
INSERT INTO `keshimsg` VALUES (5, '消化内科', '消化内科负责胃肠道、肝胆胰腺等消化系统器官疾病的诊治，如胃炎、胃溃疡、炎症性肠病、脂肪肝、肝硬化、胰腺炎、胃肠功能紊乱等。科室可以进行胃镜、肠镜检查及内镜下微创治疗。');
INSERT INTO `keshimsg` VALUES (6, '内分泌科', '内分泌科室专门助理内分泌疾病的专门科室，主要治疗糖尿病、肥胖症等疾病的临床诊治。\n');
INSERT INTO `keshimsg` VALUES (7, '肿瘤科', '肿瘤科集化疗、放疗、生物治疗、靶向治疗于一体，为各种实体瘤和血液肿瘤患者提供综合治疗方案，同时协同多学科团队进行肿瘤早期筛查、诊断、分期以及术后辅助治疗工作。');
INSERT INTO `keshimsg` VALUES (8, '妇产科', '妇产科关注女性生殖系统健康，涵盖妇科常见病、多发病（宫颈炎、子宫肌瘤、卵巢囊肿等）的治疗，以及妊娠期保健、分娩服务、计划生育、不孕不育等领域的诊疗。科室还进行各类妇科手术及高危妊娠管理。');
INSERT INTO `keshimsg` VALUES (9, '儿科', '儿科致力于0-18岁儿童的医疗保健服务，包括新生儿疾病、儿童感染性疾病、呼吸系统疾病、消化系统疾病、生长发育评估、免疫接种等，同时也提供儿童急重症的救治和长期慢性病的管理。');
INSERT INTO `keshimsg` VALUES (10, '康复医学科', '康复医学科专长于各类疾病恢复期、术后及残疾人士的功能恢复与重建，通过物理疗法、作业疗法、言语疗法等手段帮助患者改善或恢复生活自理能力、工作能力和社交活动能力，提高生活质量。');

-- ----------------------------
-- Table structure for manage_users
-- ----------------------------
DROP TABLE IF EXISTS `manage_users`;
CREATE TABLE `manage_users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `password` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `role` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of manage_users
-- ----------------------------
INSERT INTO `manage_users` VALUES (1, 'admin', '123456', '超级管理员');
INSERT INTO `manage_users` VALUES (15, 'admin2', '1234', '管理员');
INSERT INTO `manage_users` VALUES (16, 'admin3', '123456', '管理员');

-- ----------------------------
-- Table structure for qingjiamsg
-- ----------------------------
DROP TABLE IF EXISTS `qingjiamsg`;
CREATE TABLE `qingjiamsg`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `time` date NULL DEFAULT NULL,
  `howlong` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `li_you` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of qingjiamsg
-- ----------------------------
INSERT INTO `qingjiamsg` VALUES (20, '李菲', '2024-01-11', '8', '不想上班', '同意批准');
INSERT INTO `qingjiamsg` VALUES (21, '李菲', '2024-03-13', '8', '出去玩', '申请中');
INSERT INTO `qingjiamsg` VALUES (22, '姜芳', '2024-03-14', '8', '出去玩', '同意批准');

-- ----------------------------
-- Table structure for usuall_fill
-- ----------------------------
DROP TABLE IF EXISTS `usuall_fill`;
CREATE TABLE `usuall_fill`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title_ming` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `reason` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `sysbol` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `fangfa` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usuall_fill
-- ----------------------------
INSERT INTO `usuall_fill` VALUES (2, '高血压', '病因∶遗传、饮食高盐、肥胖、缺乏运动、酗酒、吸烟等。', '病征∶头痛、眩晕、胸闷、视力模糊、心悸。', '预防︰低盐饮食、规律锻炼、药物治疗（如ACE抑制剂、钙离子拮抗剂等）、控制体重、戒烟限酒。');
INSERT INTO `usuall_fill` VALUES (3, '胃炎', '病因︰幽门螺杆菌感染、长期服用非甾体类抗炎药、饮酒过量、不良饮食习惯。', '病征︰上腹部疼痛、恶心、呕吐、嗳气、食欲减退。', '预防︰抗生素根除HP、抑酸药物、胃黏膜保护剂、改善生活习惯和饮食结构。');
INSERT INTO `usuall_fill` VALUES (4, '腰椎间盘突出症', '腰椎退行性变、外伤、过度负荷、先天发育异常。', '腰痛、下肢放射痛、麻木、肌肉无力。', '物理治疗、卧床休息、非手术疗法（如牵引、理疗）、必要时手术治疗。');
INSERT INTO `usuall_fill` VALUES (5, '糖尿病', '胰岛素分泌不足、胰岛素抵抗、遗传因素、不良生活方式。', '多饮、多尿、多食、体重下降不明原因。', '药物治疗（口服降糖药或胰岛素）、饮食控制、适量运动、血糖监测。');
INSERT INTO `usuall_fill` VALUES (6, '冠状动脉粥样硬化性心脏病', '动脉硬化、高血压、高血脂、糖尿病、吸烟。', '胸痛、憋闷、呼吸困难、出汗。', '药物治疗（如抗血小板、降脂药、硝酸酯类等）、冠脉搭桥术、冠脉介入治疗。');
INSERT INTO `usuall_fill` VALUES (7, '上呼吸道感染', '病毒或细菌感染。', '咳嗽、喉咙痛、鼻塞、流涕、发热。', '对症支持治疗（解热镇痛、止咳化痰），抗生素（细菌感染时）、充足休息、补充水分。');
INSERT INTO `usuall_fill` VALUES (8, '颈椎病', '长期保持不良姿势、颈部劳损、退行性改变。', '颈部疼痛、肩背酸胀、头晕、上肢麻木。', '物理治疗、矫正姿势、颈部肌肉锻炼、药物缓解症状、严重时手术干预。');
INSERT INTO `usuall_fill` VALUES (10, '急性阑尾炎', '阑尾腔阻塞（粪石、淋巴滤泡增生等）、感染。', '右下腹痛、转移性右下腹痛、发热、恶心、呕吐。', '手术切除阑尾（阑尾切除术）及术前术后抗生素治疗。');
INSERT INTO `usuall_fill` VALUES (13, '痔疮', '长期便秘、久坐、妊娠、腹压增加。', '肛门不适、疼痛、出血、痔核脱出肛门外。', '药物治疗（局部消炎止痛、收敛止血）、硬化剂注射、橡皮圈套扎、外科手术。');
INSERT INTO `usuall_fill` VALUES (23, '心绞痛', '冠状动脉供血不足（通常是由于冠状动脉狭窄或痉挛）。', '胸骨后疼痛、压迫感、紧缩感、可放射至左臂、颈、颌部。', '药物治疗（硝酸甘油舌下含服缓解急性发作）、冠状动脉扩张药物、冠状动脉再灌注治疗。');

-- ----------------------------
-- Table structure for yuyuemsg
-- ----------------------------
DROP TABLE IF EXISTS `yuyuemsg`;
CREATE TABLE `yuyuemsg`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `petname` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `petuser` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `keshi` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `doctor` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `yuYueTime` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `daytime` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `time_duan` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `doctor_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 42 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of yuyuemsg
-- ----------------------------
INSERT INTO `yuyuemsg` VALUES (21, '周玥傲', 'admin', '123456789', '神经外科', '简文涛', '2022-04-16 00:00:00', '上午', '8:00-9:00', 4);
INSERT INTO `yuyuemsg` VALUES (26, '武东东', 'admin', '18378555259', '呼吸科', '李菲', '2022-05-21 00:00:00', '下午', '17:00-18:00', 13);
INSERT INTO `yuyuemsg` VALUES (36, '赖萌', 'admin', '18378555259', '呼吸科', '李菲', '2022-05-21 00:00:00', '下午', '17:00-18:00', 13);
INSERT INTO `yuyuemsg` VALUES (37, '毛春齐', 'zsd', '18378555259', '神经外科', '杜福尔', '2022-05-21 00:00:00', '上午', '8:00-9:00', 2);
INSERT INTO `yuyuemsg` VALUES (38, '余淑君', '66666', '18378555125', '骨科', '李清玲', '2024-01-02 00:00:00', '下午', '17:00-18:00', 3);
INSERT INTO `yuyuemsg` VALUES (39, '哈哈', '66666', '18378555125', '心内科', '赵晓芳', '2024-03-13 00:00:00', '下午', '17:00-18:00', 68);
INSERT INTO `yuyuemsg` VALUES (40, '贾晨璐', '66666', '18378555125', '呼吸科', '李菲', '2024-03-15 00:00:00', '下午', '14:00-15:00', 13);
INSERT INTO `yuyuemsg` VALUES (41, '贾晨璐', '66666', '18378555125', '肿瘤科', '邓和泉', '2024-03-13 00:00:00', '下午', '16:00-17:00', 14);

-- ----------------------------
-- Table structure for zhibanmsg
-- ----------------------------
DROP TABLE IF EXISTS `zhibanmsg`;
CREATE TABLE `zhibanmsg`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `mondayStatus` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `tuesdayStatus` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `wednesdayStatus` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `thursdayStatus` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `fridayStatus` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `saturdayStatus` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `sundayStatus` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `name`(`username` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 54 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of zhibanmsg
-- ----------------------------
INSERT INTO `zhibanmsg` VALUES (1, '李德发', '上班', '上班', '休息', '夜班', '上班', '上班', '调休', NULL);
INSERT INTO `zhibanmsg` VALUES (2, '杜福尔', '夜班', '休息', '上班', '上班', '休息', '夜班', '上班', NULL);
INSERT INTO `zhibanmsg` VALUES (3, '李清玲', '上班', '休息', '休息', '休息', '休息', '休息', '休息', NULL);
INSERT INTO `zhibanmsg` VALUES (4, '简文涛', '休息', '休息', '休息', '休息', '休息', '休息', '休息', NULL);
INSERT INTO `zhibanmsg` VALUES (5, '宋静玲', '上班', '休息', '休息', '休息', '休息', '休息', '休息', NULL);
INSERT INTO `zhibanmsg` VALUES (6, '万涵越', '休息', '休息', '休息', '休息', '休息', '休息', '休息', NULL);
INSERT INTO `zhibanmsg` VALUES (7, '张文泽', '休息', '休息', '休息', '休息', '休息', '休息', '休息', NULL);
INSERT INTO `zhibanmsg` VALUES (8, '李芳', '上班', '休息', '休息', '休息', '休息', '休息', '休息', NULL);
INSERT INTO `zhibanmsg` VALUES (9, '郑美', '上班', '休息', '休息', '休息', '休息', '休息', '休息', NULL);
INSERT INTO `zhibanmsg` VALUES (10, '刘慧', '上班', '上班', '上班', '上班', '上班', '上班', '上班', NULL);
INSERT INTO `zhibanmsg` VALUES (11, '邓和泉', '夜班', '上班', '上班', '上班', '上班', '上班', '上班', NULL);
INSERT INTO `zhibanmsg` VALUES (22, '尚官美', '上班', '上班', '上班', '上班', '上班', '上班', '上班', NULL);
INSERT INTO `zhibanmsg` VALUES (24, '关辉', '上班', '上夜班', '上班', '休息', '上班', '上班', '上班', NULL);
INSERT INTO `zhibanmsg` VALUES (27, '石兴隆', '上班', '休息', '休息', '休息', '休息', '休息', '休息', NULL);
INSERT INTO `zhibanmsg` VALUES (28, '孔芳芳', '上班', '上班', '上班', '上班', '上班', '上班', '上班', NULL);
INSERT INTO `zhibanmsg` VALUES (29, '李菲', '夜班', '上班', '休息', '休息', '上班', '夜班', '休息', NULL);
INSERT INTO `zhibanmsg` VALUES (50, '赵晓芳', '上班', '休息', '上班', '上班', '上班', '夜班', '休息', NULL);
INSERT INTO `zhibanmsg` VALUES (51, '雷美娜', '休息', '休息', '上班', '上班', '夜班', '休息', '上班', NULL);
INSERT INTO `zhibanmsg` VALUES (53, '姜芳', '上班', '休息', '上班', '上班', '休息', '夜班', '上班', NULL);

-- ----------------------------
-- Triggers structure for table doctor_users
-- ----------------------------
DROP TRIGGER IF EXISTS `insertDoc`;
delimiter ;;
CREATE TRIGGER `insertDoc` AFTER INSERT ON `doctor_users` FOR EACH ROW begin
    insert into doctorlistmsg (username,sex,phone) values(new.username,new.sex,new.phone);
end
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table doctorlistmsg
-- ----------------------------
DROP TRIGGER IF EXISTS `doctor_trigger`;
delimiter ;;
CREATE TRIGGER `doctor_trigger` AFTER INSERT ON `doctorlistmsg` FOR EACH ROW begin
    insert into zhibanmsg(username) values(new.username);
end
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table zhibanmsg
-- ----------------------------
DROP TRIGGER IF EXISTS `zhiban_trigger`;
delimiter ;;
CREATE TRIGGER `zhiban_trigger` AFTER INSERT ON `zhibanmsg` FOR EACH ROW begin
    insert into dakamsg (name) values(new.username);
end
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
