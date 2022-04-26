# API for not to do list

This api is created for not to do list react application
Here is the link for the frontend app ->

## APIS

1.  Task api endpoint
    all the task api will follow the following format `{rootUrl}/api/v1/task`

         | #   | Method      | Path    | Description                                                     |
         | --- | ------      | ------- | ----------------------------------------------------------------|
         | 1.  | `GET`       | `/`     | Get all tasks                          |
         | 2.  | `POST`      | `/` | send a task object to api and store in the database               |
         | 3.  | `DELETE`    | `/{taskID}` | It expects ID of the task and will delete a task from database  |
         | 4.  | `PATCH`     | `/` | update the task name|

2.  User api endpoint
    all the user api will follow the following format `{rootUrl}/api/v1/user`

    // database connection
    // table schema
    // query over table/schema
