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
import ProductConfig from './ProductConfig';
import TokenInfo from './TokenInfo';

/**
 * The TokenForNTU model module.
 * @module model/TokenForNTU
 * @version 1.3.0
 */
class TokenForNTU {
    /**
     * Constructs a new <code>TokenForNTU</code>.
     * @alias module:model/TokenForNTU
     */
    constructor() { 
        
        TokenForNTU.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TokenForNTU</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenForNTU} obj Optional instance to populate.
     * @return {module:model/TokenForNTU} The populated <code>TokenForNTU</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenForNTU();

            if (data.hasOwnProperty('tokenUniqueReference')) {
                obj['tokenUniqueReference'] = ApiClient.convertToType(data['tokenUniqueReference'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('eventReasonCode')) {
                obj['eventReasonCode'] = ApiClient.convertToType(data['eventReasonCode'], 'String');
            }
            if (data.hasOwnProperty('suspendedBy')) {
                obj['suspendedBy'] = ApiClient.convertToType(data['suspendedBy'], ['String']);
            }
            if (data.hasOwnProperty('statusTimestamp')) {
                obj['statusTimestamp'] = ApiClient.convertToType(data['statusTimestamp'], 'String');
            }
            if (data.hasOwnProperty('productConfig')) {
                obj['productConfig'] = ProductConfig.constructFromObject(data['productConfig']);
            }
            if (data.hasOwnProperty('tokenInfo')) {
                obj['tokenInfo'] = TokenInfo.constructFromObject(data['tokenInfo']);
            }
        }
        return obj;
    }


}

/**
 * The unique reference allocated to the Token which is always present even if an error occurs. <br>      __Max Length:64__ 
 * @member {String} tokenUniqueReference
 */
TokenForNTU.prototype['tokenUniqueReference'] = undefined;

/**
 * The current status of Token. Must be either:    * 'INACTIVE' (Token has not yet been activated)  * 'ACTIVE' (Token is active and ready to transact)  * 'SUSPENDED' (Token is suspended and unable to transact)  * 'DEACTIVATED' (Token has been permanently deactivated).<br>      __Max Length:32__ 
 * @member {String} status
 */
TokenForNTU.prototype['status'] = undefined;

/**
 * An optional Reason Code provided by the Issuer to explain why the token status has changed.  Not present if the Issuer has not supplied a reason code.   Note: Recommended that Partners be resilient to new values as new reason codes may be added in the future without notice.    * 'DEVICE_LOST' - Cardholder confirmed token device lost.   * 'DEVICE_STOLEN' - Cardholder confirmed token device stolen.  * 'SUSPECTED_FRAUD' -  Issuer or cardholder reported fraudulent token transactions.   * 'ACCOUNT_CLOSED' - Account closed.   * 'NOT_FRAUD' - Issuer or cardholder confirmed no fraudulent token transactions.  * 'DEVICE_FOUND' - Cardholder reported token device found or not stolen.  * 'OTHER' -  Other. <br>      __Max Length:32__ 
 * @member {String} eventReasonCode
 */
TokenForNTU.prototype['eventReasonCode'] = undefined;

/**
 * (CONDITIONAL only supplied if status is SUSPENDED) Who or what caused the Token to be suspended One or more values of:     * ISSUER - Suspended by the Issuer.    * TOKEN_REQUESTOR - Suspended by the Token Requestor     * MOBILE_PIN_LOCKED - Suspended due to the Mobile PIN being locked    * CARDHOLDER - Suspended by the Cardholder <br>          __Max Length__: N/A     
 * @member {Array.<String>} suspendedBy
 */
TokenForNTU.prototype['suspendedBy'] = undefined;

/**
 * The date and time the token status was last updated. Expressed in ISO 8601 extended format as one of the following:     * YYYY-MM-DDThh:mm:ss[.sss]Z    * YYYY-MM-DDThh:mm:ss[.sss]�hh:mm    * Where [.sss] is optional and can be 1 to 3 digits. <br>  __Max Length:29__    
 * @member {String} statusTimestamp
 */
TokenForNTU.prototype['statusTimestamp'] = undefined;

/**
 * @member {module:model/ProductConfig} productConfig
 */
TokenForNTU.prototype['productConfig'] = undefined;

/**
 * @member {module:model/TokenInfo} tokenInfo
 */
TokenForNTU.prototype['tokenInfo'] = undefined;






export default TokenForNTU;

