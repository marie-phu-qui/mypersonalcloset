# mypersonalcloset

 ---
## The Project

An app using authentification to display a personal user database of clothing item and matching them together.

* As a non registered user I want to be able to :
- Log in
- Register
- Access a description of the app with images
- Contact the App team via an email form

* As a registered user I want to be able to :
- Access my personal closet :
    - Have a full view of all items
    - Have a view by seasonnal items as :
        - spring/summer
        - autumn/winter
    - Have a view by type of items as :
        - tops
        - bottoms
        - dresses
        - shoes
        - accessories
- Add an item
- Upload an item
- Delete an item

 ---

## Back end tasks
* 1 DB Table  
* 2 DB Table 
* 3 Make seed 
* 4 Make seed 
* 5 Server API 
* 6 Server API 
* 7 Server API
* 8 Server API
* 9 Deploy 1 

 ---
## API DOCUMENTATION
Method : POST 
Route : / API/AUTH/REGISTER

(body) - an object / if correct new user :
```sh
{"user_name":"OTHERbob",
"contact_details":"123 valley alley",
"email_address":"abc@gmail.com",
"password":"bob"
} 
```
Will return
```sh
{"message":"Authentication successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJib2JCT0IiLCJpYXQiOjE1Mzc0ODM4MDMsImV4cCI6MTUzNzU3MDIwM30.UfxJJQ8b0ppekGycWMu6FydSb3RaW0i8couDx3bOwjc"}
```

(body) - an object /if user name exists :
```sh
{"user_name":"bob",
"contact_details":"123 valley alley",
"email_address":"abc@gmail.com",
"hash":"bob"
} 
```
Will return
```sh
{"message":"User Name Taken"}
```

/!\ only mandatory to habe a name a password as a string
```sh
{
"user_name":"OTTERbob",
"password":""
} 
```
Will return
```sh
{"message":"Authentication successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJPVFRFUmJvYiIsImlhdCI6MTUzNzQ4NTEwOCwiZXhwIjoxNTM3NTcxNTA4fQ.g8J41Y5dZHMVSOY-_aJHRZUbVJfYOglUVRVjneFshxs"}
```


Method : POST 
Route : / API/AUTH/LOGIN 

(body) - an object / if correct combinaison :
```sh
{"user_name":"bob",
"password":"krunk"
} 
```
Will return
```sh
{"message":"Authentication successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJib2IiLCJpYXQiOjE1Mzc0ODQ4MTUsImV4cCI6MTUzNzU3MTIxNX0.wNY3GveyZIeBKwDVpJ3ulkYE_KQv-T4cnuQz4bAsCWw"}
```

(body) - an object / if incorrect password :
```sh
{"user_name":"bob",
"password":"bob"
} 
```
Will return
```sh
{"message":"Password is incorrect"}
```
(body) - an object / if incorrect name :
```sh
{"user_name":"maurice123",
"password":"krunk"
} 
```
Will return
```sh
{"message":"User does not exist"}
```
 ---