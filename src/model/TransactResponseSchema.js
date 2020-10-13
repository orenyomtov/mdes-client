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
import EncryptedPayloadTransact from './EncryptedPayloadTransact';

/**
 * The TransactResponseSchema model module.
 * @module model/TransactResponseSchema
 * @version 1.3.0
 */
class TransactResponseSchema {
    /**
     * Constructs a new <code>TransactResponseSchema</code>.
     * @alias module:model/TransactResponseSchema
     */
    constructor() { 
        
        TransactResponseSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactResponseSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactResponseSchema} obj Optional instance to populate.
     * @return {module:model/TransactResponseSchema} The populated <code>TransactResponseSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactResponseSchema();

            if (data.hasOwnProperty('responseId')) {
                obj['responseId'] = ApiClient.convertToType(data['responseId'], 'String');
            }
            if (data.hasOwnProperty('responseHost')) {
                obj['responseHost'] = ApiClient.convertToType(data['responseHost'], 'String');
            }
            if (data.hasOwnProperty('encryptedPayload')) {
                obj['encryptedPayload'] = EncryptedPayloadTransact.constructFromObject(data['encryptedPayload']);
            }
        }
        return obj;
    }


}

/**
 * Unique identifier for the response. 
 * @member {String} responseId
 */
TransactResponseSchema.prototype['responseId'] = undefined;

/**
 * The host that originated the request. Future calls in the same conversation may be routed to this host. 
 * @member {String} responseHost
 */
TransactResponseSchema.prototype['responseHost'] = undefined;

/**
 * @member {module:model/EncryptedPayloadTransact} encryptedPayload
 */
TransactResponseSchema.prototype['encryptedPayload'] = undefined;






export default TransactResponseSchema;

