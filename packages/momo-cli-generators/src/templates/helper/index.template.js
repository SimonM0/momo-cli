const indexTemplate = functionName => (
  `export { ${functionName} } from './${functionName}';
`
);

module.exports = indexTemplate;
