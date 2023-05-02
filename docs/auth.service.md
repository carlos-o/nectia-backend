# Documentation of endpoint
## Login
Grants access to a user to start in Page or App

* Url

  http://127.0.0.1:3000/signin/

* Method

  **POST**

* Url Params

  **None**

* Data Params
    ```javascript
     {
      "email": "admin@admin.com",
      "password": "admin123"
    }
    ```
 you can also send the mail

* Success Response:
   * code: 200
    ```javascript
   {
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY0NTAwNWZmYzM2Y2M3NTcxNDc5ZDk2ZSIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0.b4u1aqJxAaYmDeFw_KUy25a_Gkc8s1NOaZGQowjfPDM"
   }
   ```  
* Error Response:
   
   In case username or password incorrect 
  * code: 400
   ```javascript
   {
    "message": "user or password is invalid"
   }
   ``` 
  or
  
  in case password is empty or do not send inside json
  * code: 400
   ```javascript
   {
    "message": "user or password is invalid"
   }
   ``` 
* Notes:
 
  **None**