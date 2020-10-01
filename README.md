# Http Status Codes

A collection of extensive easy access and resuable HTTP status codes as defined by Request for comments (RFC).

## Install

```shell
    npm install http-status-codez --save
```

## Usage

```javascript
const express = require('express');
const { Response } = require('http-status-codez');
const User = require('./models/user');
const app = express();

app.get('/api/v1/users', catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(Response.HTTP_OK).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });

}));

app.get('/api/v1/users/:id', catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new AppError('User not found with that ID', Response.HTTP_NOT_FOUND);
    );
  }

  res.status(Response.HTTP_OK).json({
    status: 'success',
    data: {
      user,
    },
  });

}));
```

## Codes

| Code | Instance Properties                       | Phrase                          |
| ---- | ----------------------------------------- | ------------------------------- |
| 100  | HTTP_CONTINUE                             | Continue                        |
| 101  | HTTP_SWITCHING_PROTOCOLS                  | Switching Protocols             |
| 102  | HTTP_PROCESSING                           | Processing                      |
| 103  | HTTP_EARLY_HINTS                          | Early Hints                     |
| 200  | HTTP_OK                                   | OK                              |
| 201  | HTTP_CREATED                              | Created                         |
| 202  | HTTP_ACCEPTED                             | Accepted                        |
| 203  | HTTP_NON_AUTHORITATIVE_INFORMATION        | Non Authoritative Information   |
| 204  | HTTP_NO_CONTENT                           | No Content                      |
| 205  | HTTP_RESET_CONTENT                        | Reset Content                   |
| 206  | HTTP_PARTIAL_CONTENT                      | Partial Content                 |
| 207  | HTTP_MULTI_STATUS                         | Multi-Status                    |
| 208  | HTTP_ALREADY_REPORTED                     | Already Reported                |
| 226  | HTTP_IM_USED                              | IM Used                         |
| 300  | HTTP_MULTIPLE_CHOICES                     | Multiple Choices                |
| 301  | HTTP_MOVED_PERMANENTLY                    | Moved Permanently               |
| 302  | HTTP_FOUND                                | Found                           |
| 303  | HTTP_SEE_OTHER                            | See Other                       |
| 304  | HTTP_NOT_MODIFIED                         | Not Modified                    |
| 305  | HTTP_USE_PROXY                            | Use Proxy                       |
| 306  | HTTP_RESERVED                             | Reserved                        |
| 307  | HTTP_TEMPORARY_REDIRECT                   | Temporary Redirect              |
| 308  | HTTP_PERMANENTLY_REDIRECT                 | Permanent Redirect              |
| 400  | HTTP_BAD_REQUEST                          | Bad Request                     |
| 401  | HTTP_UNAUTHORIZED                         | Unauthorized                    |
| 402  | HTTP_PAYMENT_REQUIRED                     | Payment Required                |
| 403  | HTTP_FORBIDDEN                            | Forbidden                       |
| 404  | HTTP_NOT_FOUND                            | Not Found                       |
| 405  | HTTP_METHOD_NOT_ALLOWED                   | Method Not Allowed              |
| 406  | HTTP_NOT_ACCEPTABLE                       | Not Acceptable                  |
| 407  | HTTP_PROXY_AUTHENTICATION_REQUIRED        | Proxy Authentication Required   |
| 408  | HTTP_REQUEST_TIMEOUT                      | Request Timeout                 |
| 409  | HTTP_CONFLICT                             | Conflict                        |
| 410  | HTTP_GONE                                 | Gone                            |
| 411  | HTTP_LENGTH_REQUIRE                       | Length Required                 |
| 412  | HTTP_PRECONDITION_FAILED                  | Precondition Failed             |
| 413  | HTTP_REQUEST_ENTITY_TOO_LARGE             | Request Entity Too Large        |
| 414  | HTTP_REQUEST_URI_TOO_LONG                 | Request-URI Too Long            |
| 415  | HTTP_UNSUPPORTED_MEDIA_TYPE               | Unsupported Media Type          |
| 416  | HTTP_REQUESTED_RANGE_NOT_SATISFIABLE      | Requested Range Not Satisfiable |
| 417  | HTTP_EXPECTATION_FAILED                   | Expectation Failed              |
| 418  | HTTP_I_AM_A_TEAPOT                        | I'm a teapot                    |
| 419  | HTTP_INSUFFICIENT_SPACE_ON_RESOURCE       | Insufficient Space on Resource  |
| 420  | HTTP_METHOD_FAILURE                       | Method Failure                  |
| 421  | HTTP_MISDIRECTED_REQUEST                  | Misdirected Request             |
| 422  | HTTP_UNPROCESSABLE_ENTITY                 | Unprocessable Entity            |
| 423  | HTTP_LOCKED                               | Locked                          |
| 424  | HTTP_FAILED_DEPENDENCY                    | Failed Dependency               |
| 425  | HTTP_TOO_EARLY                            | Too Early                       |
| 426  | HTTP_UPGRADE_REQUIRED                     | Upgrade Required                |
| 428  | HTTP_PRECONDITION_REQUIRED                | Precondition Required           |
| 429  | HTTP_TOO_MANY_REQUESTS                    | Too Many Requests               |
| 431  | HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE      | Request Header Fields Too Large |
| 451  | HTTP_UNAVAILABLE_FOR_LEGAL_REASONS        | Unavailable For Legal Reasons   |
| 500  | HTTP_INTERNAL_SERVER_ERROR                | Internal Server Error           |
| 501  | HTTP_NOT_IMPLEMENTED                      | Not Implemented                 |
| 502  | HTTP_BAD_GATEWAY                          | Bad Gateway                     |
| 503  | HTTP_SERVICE_UNAVAILABLE                  | Service Unavailable             |
| 504  | HTTP_GATEWAY_TIMEOUT                      | Gateway Timeout                 |
| 505  | HTTP_VERSION_NOT_SUPPORTED                | HTTP Version Not Supported      |
| 506  | HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL | Variant Also Negotiates         |
| 507  | HTTP_INSUFFICIENT_STORAGE                 | Insufficient Storage            |
| 508  | HTTP_LOOP_DETECTED                        | Loop Detecte                    |
| 5010 | HTTP_NOT_EXTENDED                         | Not Extended                    |
| 511  | HTTP_NETWORK_AUTHENTICATION_REQUIRED      | Network Authentication Required |

## Contributing

If you discover a security vulnerability, please create an issue. All security vulnerabilities will be promptly addressed and appreciated.

```shell
    npm version [major | minor | patch]
    npm publish
```
