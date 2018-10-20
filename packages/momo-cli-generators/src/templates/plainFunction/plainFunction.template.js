const plainFunctionTemplate = functionName => `/**
 * A small description explaining where this function is used and why
 */
export const ${functionName} = () => {};
`;

module.exports = plainFunctionTemplate;
