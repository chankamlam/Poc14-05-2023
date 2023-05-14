### 声明
这是一个十分粗糙POC，一切从简以下是不足地方：
- 没有考虑代码重构和优化
- 没有过多检查验证数据合规性
- 没有检查授权和权限
- 没有考虑安全性
- 没有编写代码单元测试和代码覆盖率
- much i skip here

### Bootup
```
docker-compose up -d
```


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
|Endpiont|Method|Description|
| :----:| :----: | :----:| 
| localhost:4000/users | GET | get the list of users from "users" table|
| localhost:4000/login | POST | login admin platform (Default: username=>admin,password:123456)|
| localhost:4000/register | POST | register user record with name & id card number & id card image |
| localhost:4000/upload | POST | for upload id card image |

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



