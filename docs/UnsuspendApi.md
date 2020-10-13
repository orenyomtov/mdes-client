# MdesForMerchants.UnsuspendApi

All URIs are relative to *https://api.mastercard.com/mdes*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUnsuspend**](UnsuspendApi.md#createUnsuspend) | **POST** /digitization/#env/1/0/unsuspend | Used to unsuspend one or more previously suspended Tokens. The API is limited to 10 Tokens per request.



## createUnsuspend

> UnSuspendResponseSchema createUnsuspend(opts)

Used to unsuspend one or more previously suspended Tokens. The API is limited to 10 Tokens per request.

This API is used to unsuspend one or more previously suspended Tokens. The API is limited to 10 Tokens per request. MDES will coordinate the unsuspension of the Tokens and notify any relevant parties that the Tokens have now been unsuspended. 

### Example

```javascript
import MdesForMerchants from 'mdes_for_merchants';

let apiInstance = new MdesForMerchants.UnsuspendApi();
let opts = {
  'unsuspendRequestSchema': new MdesForMerchants.UnSuspendRequestSchema() // UnSuspendRequestSchema | Contains the details of the request message. 
};
apiInstance.createUnsuspend(opts, (error, data, response) => {
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
 **unsuspendRequestSchema** | [**UnSuspendRequestSchema**](UnSuspendRequestSchema.md)| Contains the details of the request message.  | [optional] 

### Return type

[**UnSuspendResponseSchema**](UnSuspendResponseSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

