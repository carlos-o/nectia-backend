# Documentation of endpoint
## Create game

* Url

  http://127.0.0.1:3000/game/

* Method

  **POST**

* Url Params

  **None**

* Data Params
    ```javascript
    {
      "name": "megaman X8",
      "played": true,
      "purchased": "2022-01-10",
      "finished": "2022-01-15"
    }
    ```

* Success Response:
   * code: 201
    ```javascript
   {
    "message": "game has been store successfully"
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

## Get game

* Url

  http://127.0.0.1:3000/game/

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
        "_id": "64501541ec031806ad57eb7c",
        "name": "megaman X9",
        "played": true,
        "purchased": "2022-01-10T00:00:00.000Z",
        "finished": "2022-01-15T00:00:00.000Z",
        "createdAt": "2023-05-01T19:28:59.198Z"
    }
   ]  
   ```  
* Error Response:
  
* Notes:
 
  **None**

## Get specific game

* Url

  http://127.0.0.1:3000/game/:id/

* Method

  **GET**

* Url Params

  **id** game id

* Data Params
   **None**

* Success Response:
   * code: 200
    ```javascript
    {
        "_id": "64501541ec031806ad57eb7c",
        "name": "megaman X9",
        "played": true,
        "purchased": "2022-01-10T00:00:00.000Z",
        "finished": "2022-01-15T00:00:00.000Z",
        "createdAt": "2023-05-01T19:28:59.198Z"
    }
   ```  
* Error Response:
  * code: 404
   ```javascript
  {
    "message": "Not Found"
  }
  ```
  
* Notes:
 
  **None**


## Update specific game

* Url

  http://127.0.0.1:3000/game/:id/

* Method

  **PUT**

* Url Params

  **id** game id

* Data Params
   ```javascript
   {
      "name": "megaman X8",
      "played": true,
      "purchased": "2022-01-10",
      "finished": "2022-01-15"
  }
   ``` 
* Success Response:
   * code: 200
    ```javascript
    {
    "message": "game has been store successfully"
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
  or
  
  * code: 404
   ```javascript
  {
    "message": "Not Found"
  }
  ```
  
* Notes:
 
  **None**

## Delete specific game

* Url

  http://127.0.0.1:3000/game/:id/

* Method

  **DELETE**

* Url Params

  **id** game id

* Data Params
   **None**

* Success Response:
   * code: 204
    ```javascript
   
   ```  
* Error Response:
  * code: 404
   ```javascript
  {
    "message": "Not Found"
  }
  ```
  
* Notes:
 
  **None**