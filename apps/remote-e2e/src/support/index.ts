Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes(`Cannot use 'import.meta' outside a module`)) {
    return false;
  }
  return true;
});
