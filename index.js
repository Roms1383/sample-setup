// malformed code that will get correctly formatted on 'npm run format' (cf package.json)
// VSC Standard plugin must be replaced by ESLint plugin (otherwise code will be formatted correctly
// but IDE will keep highlighting code as malformed)

const prefix = {
  log: "successfully returned",
  error: 'ended up with an error'
}
const display = ( message, type) => { console[ type](`${prefix[type]}: ${message}`)}

module.exports = () => Promise.resolve(true)
.then(response => display(response, 'log'))
  .catch(error => display(error, 'error'))
