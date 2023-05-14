### 声明
这是一个十分粗糙POC，以下是不足地方：
- 没有考虑代码重构和优化
- 没有打磨UI与代码细节
- 没有过多检查验证数据合规性
- 没有检查授权和权限
- 没有考虑安全性（明文MYSQL账号密码）
- 没有编写代码单元测试和代码覆盖率

### Bootup
```
docker-compose up -d
```
### Entry
_注意：运行Docker-compose up后，请等1分钟再登录前端测试（原因是等待MYSQL数据结构初始化设定1分钟后执行）_

_Step1: 打开用户上传资料页面_
```
localhost:3000/register
```
_Step2: 上传完资料，请往此页面登录管理后端_
```
localhost:3000
```
### 


### Clean
```
docker-compose down --rmi all
```

### Directory
|Directory|Description|Package|
| :----:| :----: | :----:| 
| api | Beckend API | Express + Knex + multer(upload) + cryptojs|
| app | Frontend | React + Antd + Mobx|
| mysql | Database | Docker Image with script |

### API
|Endpiont|Method|Description|Usage|
| :----:| :----: | :----:| :----:|
| localhost:4000/users | GET | get the list of users from "users" table|获取所有用户信息|
| localhost:4000/login | POST | login admin platform (Default: username=>admin,password:123456)|登录管理后台|
| localhost:4000/register | POST | register user record with name & id card number & id card image |上传用户资料|
| localhost:4000/upload | POST | for upload id card image |上传图片或文件|

### Data Structure
<img width="978" alt="Screenshot 2023-05-14 at 3 43 03 PM" src="https://github.com/chankamlam/Poc14-05-2023/assets/9009522/69a92636-9dad-4c8c-90cc-a9900bb361ec">
<img width="1045" alt="Screenshot 2023-05-14 at 3 42 54 PM" src="https://github.com/chankamlam/Poc14-05-2023/assets/9009522/d80a3388-7bd8-4d7c-9ff6-63468a94ac36">

### Upload Image Storage Path
<img width="510" alt="Screenshot 2023-05-14 at 3 44 43 PM" src="https://github.com/chankamlam/Poc14-05-2023/assets/9009522/4cda3cfc-bde0-4901-823f-2f231e94ccd1">

### Script
- Create Database after mysql luanch
<img width="1331" alt="Screenshot 2023-05-14 at 3 46 05 PM" src="https://github.com/chankamlam/Poc14-05-2023/assets/9009522/021f8dc1-bf5f-4165-ad0b-94022d116c3c">

- Use knex migrate and seed
<img width="1005" alt="Screenshot 2023-05-14 at 3 46 22 PM" src="https://github.com/chankamlam/Poc14-05-2023/assets/9009522/de908e1a-12f4-42ba-8f1e-9faaa6f9e3ed">



