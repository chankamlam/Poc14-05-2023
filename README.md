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

### Script


