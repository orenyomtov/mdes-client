# MdesForMerchants.GetTaskStatusApi

All URIs are relative to *https://api.mastercard.com/mdes*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTaskStatus**](GetTaskStatusApi.md#getTaskStatus) | **POST** /digitization/#env/1/0/getTaskStatus | Used to check the status of any asynchronous task that was previously requested.



## getTaskStatus

> GetTaskStatusResponseSchema getTaskStatus(opts)

Used to check the status of any asynchronous task that was previously requested.

Used to check the status of any asynchronous task that was previously requested. 

### Example

```javascript
import MdesForMerchants from 'mdes_for_merchants';

let apiInstance = new MdesForMerchants.GetTaskStatusApi();
let opts = {
  'getTaskStatusRequestSchema': new MdesForMerchants.GetTaskStatusRequestSchema() // GetTaskStatusRequestSchema | Contains the details of the request message. 
};
apiInstance.getTaskStatus(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getTaskStatusRequestSchema** | [**GetTaskStatusRequestSchema**](GetTaskStatusRequestSchema.md)| Contains the details of the request message.  | [optional] 

### Return type

[**GetTaskStatusResponseSchema**](GetTaskStatusResponseSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

