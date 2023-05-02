# Documentation of endpoint
## Create user

* Url

  http://127.0.0.1:3000/user/

* Method

  **POST**

* Url Params

  **None**

* Data Params
    ```javascript
     {
    "name": "carlos",
    "lastName": "olivero",
    "email": "carlosolivero2@gmail.com",
    "password": "car12345*"
    }
    ```

* Success Response:
   * code: 201
    ```javascript
   {
    "message": "User has been create successfully"
   }
   ```  
* Error Response:
   
  * code: 400
   ```javascript
   {
    "errors": {
        "type": "field",
        "value": "",
        "msg": "name field cannot be empty",
        "path": "name",
        "location": "body"
    }
  }
   ``` 
  
* Notes:
 
  **None**

## Get user

* Url

  http://127.0.0.1:3000/user/

* Method

  **GET**

* Url Params

  **None**

* Data Params
   **None**

* Success Response:
   * code: 200
    ```javascript
   [
    {
        "_id": "645012876d84243fc71971e0",
        "name": "carlos",
        "lastName": "olivero",
        "gameList": [],
        "email": "carlosolivero22@gmail.com",
        "createdAt": "2023-05-01T19:19:40.525Z"
    },
    {
        "_id": "6450069294e22db6bae28d31",
        "name": "carlos",
        "lastName": "olivero",
        "gameList": [],
        "email": "carlosolivero2@gmail.com",
        "createdAt": "2023-05-01T18:32:15.785Z"
    },
    {
        "_id": "645005ffc36cc7571479d96f",
        "email": "johndoe@example.com",
        "lastName": "Doe",
        "name": "John",
        "createdAt": "2023-05-01T18:33:34.794Z",
        "gameList": []
    },
    {
        "_id": "645005ffc36cc7571479d96e",
        "email": "admin@admin.com",
        "lastName": "admin",
        "name": "admin",
        "createdAt": "2023-05-01T18:33:34.794Z",
        "gameList": []
    }
  ]
   ```  
* Error Response:
  
* Notes:
 
  **None**