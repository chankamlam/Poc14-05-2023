###Bootup
```
docker-compose up -d
```


###Clean
```
docker-compose down --rmi all
```

###Information
|Directory|Description|Package|
| :----:| :----: | :----:| 
| api | Beckend API | Express + Knex + multer(upload) + cryptojs|
| app | Frontend | React + Antd + Mobx|
| mysql | Database | Docker Image with script |