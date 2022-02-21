import { Response } from '../utils/Response';
describe('Response class', (): void => {
  it('should be defined', (): void => {
    expect(Response).toBeDefined();
  });

  it('should be a class', (): void => {
    expect(typeof Response).toBe('function');
  });

  it('should have a property called HTTP_CONTINUE', (): void => {
    expect(Response.HTTP_CONTINUE).toBeDefined();
  });

  it('should have a property called HTTP_SWITCHING_PROTOCOLS', (): void => {
    expect(Response.HTTP_SWITCHING_PROTOCOLS).toBeDefined();
  });

  it('should have a property called HTTP_PROCESSING', (): void => {
    expect(Response.HTTP_PROCESSING).toBeDefined();
  });

  it('should have a property called HTTP_EARLY_HINTS', (): void => {
    expect(Response.HTTP_EARLY_HINTS).toBeDefined();
  });

  it('should have a property called HTTP_OK', (): void => {
    expect(Response.HTTP_OK).toBeDefined();
  });

  it('should have a property called HTTP_CREATED', (): void => {
    expect(Response.HTTP_CREATED).toBeDefined();
  });

  it('should have a property called HTTP_ACCEPTED', (): void => {
    expect(Response.HTTP_ACCEPTED).toBeDefined();
  });

  it('should have a property called HTTP_NON_AUTHORITATIVE_INFORMATION', (): void => {
    expect(Response.HTTP_NON_AUTHORITATIVE_INFORMATION).toBeDefined();
  });

  it('should have a property called HTTP_NO_CONTENT', (): void => {
    expect(Response.HTTP_NO_CONTENT).toBeDefined();
  });

  it('should have a property called HTTP_RESET_CONTENT', (): void => {
    expect(Response.HTTP_RESET_CONTENT).toBeDefined();
  });

  it('should have a property called HTTP_PARTIAL_CONTENT', (): void => {
    expect(Response.HTTP_PARTIAL_CONTENT).toBeDefined();
  });

  it('should have a property called HTTP_MULTI_STATUS', (): void => {
    expect(Response.HTTP_MULTI_STATUS).toBeDefined();
  });

  it('should have a property called HTTP_ALREADY_REPORTED', (): void => {
    expect(Response.HTTP_ALREADY_REPORTED).toBeDefined();
  });

  it('should have a property called HTTP_IM_USED', (): void => {
    expect(Response.HTTP_IM_USED).toBeDefined();
  });

  it('should have a property called HTTP_MULTIPLE_CHOICES', (): void => {
    expect(Response.HTTP_MULTIPLE_CHOICES).toBeDefined();
  });

  it('should have a property called HTTP_MOVED_PERMANENTLY', (): void => {
    expect(Response.HTTP_MOVED_PERMANENTLY).toBeDefined();
  });

  it('should have a property called HTTP_FOUND', (): void => {
    expect(Response.HTTP_FOUND).toBeDefined();
  });

  it('should have a property called HTTP_SEE_OTHER', (): void => {
    expect(Response.HTTP_SEE_OTHER).toBeDefined();
  });

  it('should have a property called HTTP_NOT_MODIFIED', (): void => {
    expect(Response.HTTP_NOT_MODIFIED).toBeDefined();
  });

  it('should have a property called HTTP_USE_PROXY', (): void => {
    expect(Response.HTTP_USE_PROXY).toBeDefined();
  });

  it('should have a property called HTTP_RESERVED', (): void => {
    expect(Response.HTTP_RESERVED).toBeDefined();
  });

  it('should have a property called HTTP_TEMPORARY_REDIRECT', (): void => {
    expect(Response.HTTP_TEMPORARY_REDIRECT).toBeDefined();
  });

  it('should have a property called HTTP_PERMANENTLY_REDIRECT', (): void => {
    expect(Response.HTTP_PERMANENTLY_REDIRECT).toBeDefined();
  });

  it('should have a property called HTTP_BAD_REQUEST', (): void => {
    expect(Response.HTTP_BAD_REQUEST).toBeDefined();
  });

  it('should have a property called HTTP_UNAUTHORIZED', (): void => {
    expect(Response.HTTP_UNAUTHORIZED).toBeDefined();
  });

  it('should have a property called HTTP_PAYMENT_REQUIRED', (): void => {
    expect(Response.HTTP_PAYMENT_REQUIRED).toBeDefined();
  });

  it('should have a property called HTTP_FORBIDDEN', (): void => {
    expect(Response.HTTP_FORBIDDEN).toBeDefined();
  });

  it('should have a property called HTTP_NOT_FOUND', (): void => {
    expect(Response.HTTP_NOT_FOUND).toBeDefined();
  });

  it('should have a property called HTTP_METHOD_NOT_ALLOWED', (): void => {
    expect(Response.HTTP_METHOD_NOT_ALLOWED).toBeDefined();
  });

  it('should have a property called HTTP_NOT_ACCEPTABLE', (): void => {
    expect(Response.HTTP_NOT_ACCEPTABLE).toBeDefined();
  });

  it('should have a property called HTTP_PROXY_AUTHENTICATION_REQUIRED', (): void => {
    expect(Response.HTTP_PROXY_AUTHENTICATION_REQUIRED).toBeDefined();
  });

  it('should have a property called HTTP_REQUEST_TIMEOUT', (): void => {
    expect(Response.HTTP_REQUEST_TIMEOUT).toBeDefined();
  });

  it('should have a property called HTTP_CONFLICT', (): void => {
    expect(Response.HTTP_CONFLICT).toBeDefined();
  });

  it('should have a property called HTTP_GONE', (): void => {
    expect(Response.HTTP_GONE).toBeDefined();
  });

  it('should have a property called HTTP_LENGTH_REQUIRED', (): void => {
    expect(Response.HTTP_LENGTH_REQUIRED).toBeDefined();
  });

  it('should have a property called HTTP_PRECONDITION_FAILED', (): void => {
    expect(Response.HTTP_PRECONDITION_FAILED).toBeDefined();
  });

  it('should have a property called HTTP_REQUEST_ENTITY_TOO_LARGE', (): void => {
    expect(Response.HTTP_REQUEST_ENTITY_TOO_LARGE).toBeDefined();
  });

  it('should have a property called HTTP_REQUEST_URI_TOO_LONG', (): void => {
    expect(Response.HTTP_REQUEST_URI_TOO_LONG).toBeDefined();
  });

  it('should have a property called HTTP_UNSUPPORTED_MEDIA_TYPE', (): void => {
    expect(Response.HTTP_UNSUPPORTED_MEDIA_TYPE).toBeDefined();
  });

  it('should have a property called HTTP_REQUESTED_RANGE_NOT_SATISFIABLE', (): void => {
    expect(Response.HTTP_REQUESTED_RANGE_NOT_SATISFIABLE).toBeDefined();
  });

  it('should have a property called HTTP_EXPECTATION_FAILED', (): void => {
    expect(Response.HTTP_EXPECTATION_FAILED).toBeDefined();
  });

  it('should have a property called HTTP_I_AM_A_TEAPOT', (): void => {
    expect(Response.HTTP_I_AM_A_TEAPOT).toBeDefined();
  });

  it('should have a property called HTTP_INTERNAL_SERVER_ERROR', (): void => {
    expect(Response.HTTP_INTERNAL_SERVER_ERROR).toBeDefined();
  });

  it('should have a property called HTTP_NOT_IMPLEMENTED', (): void => {
    expect(Response.HTTP_NOT_IMPLEMENTED).toBeDefined();
  });

  it('should have a property called HTTP_BAD_GATEWAY', (): void => {
    expect(Response.HTTP_BAD_GATEWAY).toBeDefined();
  });

  it('should have a property called HTTP_SERVICE_UNAVAILABLE', (): void => {
    expect(Response.HTTP_SERVICE_UNAVAILABLE).toBeDefined();
  });

  it('should have a property called HTTP_GATEWAY_TIMEOUT', (): void => {
    expect(Response.HTTP_GATEWAY_TIMEOUT).toBeDefined();
  });

  it('should have a property called HTTP_VERSION_NOT_SUPPORTED', (): void => {
    expect(Response.HTTP_VERSION_NOT_SUPPORTED).toBeDefined();
  });

  it('should have a property called HTTP_NETWORK_AUTHENTICATION_REQUIRED', (): void => {
    expect(Response.HTTP_NETWORK_AUTHENTICATION_REQUIRED).toBeDefined();
  });

  it('should have a property called HTTP_INSUFFICIENT_SPACE_ON_RESOURCE', (): void => {
    expect(Response.HTTP_INSUFFICIENT_SPACE_ON_RESOURCE).toBeDefined();
  });

  it('should have a property called HTTP_METHOD_FAILURE', (): void => {
    expect(Response.HTTP_METHOD_FAILURE).toBeDefined();
  });

  it('should have a property called HTTP_MISDIRECTED_REQUEST', (): void => {
    expect(Response.HTTP_MISDIRECTED_REQUEST).toBeDefined();
  });

  it('should have a property called HTTP_UNPROCESSABLE_ENTITY', (): void => {
    expect(Response.HTTP_UNPROCESSABLE_ENTITY).toBeDefined();
  });

  it('should have a property called HTTP_PRECONDITION_REQUIRED', (): void => {
    expect(Response.HTTP_PRECONDITION_REQUIRED).toBeDefined();
  });

  it('should have a property called HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE', (): void => {
    expect(Response.HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE).toBeDefined();
  });

  it('should have a property called HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL', (): void => {
    expect(Response.HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL).toBeDefined();
  });

  it('should have a property called HTTP_INSUFFICIENT_STORAGE', (): void => {
    expect(Response.HTTP_INSUFFICIENT_STORAGE).toBeDefined();
  });

  it('should have a property called HTTP_LOOP_DETECTED', (): void => {
    expect(Response.HTTP_LOOP_DETECTED).toBeDefined();
  });

  it('should have a property called HTTP_NOT_EXTENDED', (): void => {
    expect(Response.HTTP_NOT_EXTENDED).toBeDefined();
  });

  it('should have a property called HTTP_LOCKED', (): void => {
    expect(Response.HTTP_LOCKED).toBeDefined();
  });

  it('should have a property called HTTP_FAILED_DEPENDENCY', (): void => {
    expect(Response.HTTP_FAILED_DEPENDENCY).toBeDefined();
  });

  it('should have a property called HTTP_TOO_EARLY', (): void => {
    expect(Response.HTTP_TOO_EARLY).toBeDefined();
  });

  it('should have a property called HTTP_UPGRADE_REQUIRED', (): void => {
    expect(Response.HTTP_UPGRADE_REQUIRED).toBeDefined();
  });

  it('should have a property called HTTP_TOO_MANY_REQUESTS', (): void => {
    expect(Response.HTTP_TOO_MANY_REQUESTS).toBeDefined();
  });

  it('should have a property called HTTP_UNAVAILABLE_FOR_LEGAL_REASONS', (): void => {
    expect(Response.HTTP_UNAVAILABLE_FOR_LEGAL_REASONS).toBeDefined();
  });
});
