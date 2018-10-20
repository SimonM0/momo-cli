const actionTemplate = functionName => `/**
 * A small description explaining where this function is used and why
 */
export const ${functionName} = () => {};
`;

module.exports = actionTemplate;
