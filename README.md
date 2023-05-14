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