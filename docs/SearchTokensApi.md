# MdesForMerchants.SearchTokensApi

All URIs are relative to *https://api.mastercard.com/mdes*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchTokens**](SearchTokensApi.md#searchTokens) | **POST** /digitization/#env/1/0/searchTokens | Used to get basic token information for all tokens on a specified device, or all tokens mapped to the given Account PAN.



## searchTokens

> SearchTokensResponseSchema searchTokens(opts)

Used to get basic token information for all tokens on a specified device, or all tokens mapped to the given Account PAN.

This API is used to get basic token information for all tokens on a specified device, or all tokens mapped to the given Account PAN. It may be used to check current Token(s) state or, in exception scenarios (such as network time out), to ensure that external systems remain in sync with the Token state as maintained by MDES. Deactivated tokens are not returned. 

### Example

```javascript
import MdesForMerchants from 'mdes_for_merchants';

let apiInstance = new MdesForMerchants.SearchTokensApi();
let opts = {
  'searchTokensRequestSchema': new MdesForMerchants.SearchTokensRequestSchema() // SearchTokensRequestSchema | Contains the details of the request message. 
};
apiInstance.searchTokens(opts, (error, data, response) => {
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
 **searchTokensRequestSchema** | [**SearchTokensRequestSchema**](SearchTokensRequestSchema.md)| Contains the details of the request message.  | [optional] 

### Return type

[**SearchTokensResponseSchema**](SearchTokensResponseSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

