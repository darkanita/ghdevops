# API Hello World

Instalar las dependencias:
```
npm install 
```

Iniciar servicio
```
npm start 
```


Construir imagen Docker
```
docker build -t helloworld:v0.0 . 
```


Correr Docker
``` 
docker run -p 3000:3000 -d --name helloworld helloworld:v0.0
```

Probando politicas 1 - Testing Policies