/**
 * MDES for Merchants
 * The MDES APIs are designed as RPC style stateless web services where each API endpoint represents an operation to be performed.  All request and response payloads are sent in the JSON (JavaScript Object Notation) data-interchange format. Each endpoint in the API specifies the HTTP Method used to access it. All strings in request and response objects are to be UTF-8 encoded.  Each API URI includes the major and minor version of API that it conforms to.  This will allow multiple concurrent versions of the API to be deployed simultaneously. <br> __Authentication__ Mastercard uses OAuth 1.0a with body hash extension for authenticating the API clients. This requires every request that you send to  Mastercard to be signed with an RSA private key. A private-public RSA key pair must be generated consisting of: <br> 1 . A private key for the OAuth signature for API requests. It is recommended to keep the private key in a password-protected or hardware keystore. <br> 2. A public key is shared with Mastercard during the project setup process through either a certificate signing request (CSR) or the API Key Generator. Mastercard will use the public key to verify the OAuth signature that is provided on every API call.<br>  An OAUTH1.0a signer library is available on [GitHub](https://github.com/Mastercard/oauth1-signer-java) <br>  __Encryption__<br>  All communications between Issuer web service and the Mastercard gateway is encrypted using TLS. <br> __Additional Encryption of Sensitive Data__ In addition to the OAuth authentication, when using MDES Digital Enablement Service, any PCI sensitive and all account holder Personally Identifiable Information (PII) data must be encrypted. This requirement applies to the API fields containing encryptedData. Sensitive data is encrypted using a symmetric session (one-time-use) key. The symmetric session key is then wrapped with an RSA Public Key supplied by Mastercard during API setup phase (the Customer Encryption Key). <br>  Java Client Encryption Library available on [GitHub](https://github.com/Mastercard/client-encryption-java) 
 *
 * The version of the OpenAPI document: 1.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetTokenRequestSchema model module.
 * @module model/GetTokenRequestSchema
 * @version 1.3.0
 */
class GetTokenRequestSchema {
    /**
     * Constructs a new <code>GetTokenRequestSchema</code>.
     * @alias module:model/GetTokenRequestSchema
     * @param requestId {String} Unique identifier for the request. 
     * @param tokenUniqueReference {String} The specific Token to be queried.     __Max Length:64__  
     */
    constructor(requestId, tokenUniqueReference) { 
        
        GetTokenRequestSchema.initialize(this, requestId, tokenUniqueReference);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, requestId, tokenUniqueReference) { 
        obj['requestId'] = requestId;
        obj['tokenUniqueReference'] = tokenUniqueReference;
    }

    /**
     * Constructs a <code>GetTokenRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokenRequestSchema} obj Optional instance to populate.
     * @return {module:model/GetTokenRequestSchema} The populated <code>GetTokenRequestSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTokenRequestSchema();

            if (data.hasOwnProperty('responseHost')) {
                obj['responseHost'] = ApiClient.convertToType(data['responseHost'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('paymentAppInstanceId')) {
                obj['paymentAppInstanceId'] = ApiClient.convertToType(data['paymentAppInstanceId'], 'String');
            }
            if (data.hasOwnProperty('tokenUniqueReference')) {
                obj['tokenUniqueReference'] = ApiClient.convertToType(data['tokenUniqueReference'], 'String');
            }
            if (data.hasOwnProperty('includeTokenDetail')) {
                obj['includeTokenDetail'] = ApiClient.convertToType(data['includeTokenDetail'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The host that originated the request. Future calls in the same conversation may be routed to this host. 
 * @member {String} responseHost
 */
GetTokenRequestSchema.prototype['responseHost'] = undefined;

/**
 * Unique identifier for the request. 
 * @member {String} requestId
 */
GetTokenRequestSchema.prototype['requestId'] = undefined;

/**
 * Identifier for the specific Mobile Payment App instance, unique across a given Wallet Identifier. This value cannot be changed after digitization. This field is alphanumeric and additionally web-safe base64 characters per RFC 4648 (minus \"-\", underscore \"_\") up to a maximum length of 48, = should not be URL encoded. Conditional - not applicable for server-based tokens but required otherwise.     __Max Length:48__ 
 * @member {String} paymentAppInstanceId
 */
GetTokenRequestSchema.prototype['paymentAppInstanceId'] = undefined;

/**
 * The specific Token to be queried.     __Max Length:64__  
 * @member {String} tokenUniqueReference
 */
GetTokenRequestSchema.prototype['tokenUniqueReference'] = undefined;

/**
 * Flag to indicate if the encrypted token should be returned.     __Max Length:5__  
 * @member {String} includeTokenDetail
 */
GetTokenRequestSchema.prototype['includeTokenDetail'] = undefined;






export default GetTokenRequestSchema;
