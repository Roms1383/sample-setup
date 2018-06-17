# Usage
run `npm run lint` inside your CLI terminal to see the badly formatted `index.js` handled.

# How does it work ?
*  `.vscode/extension.json` will suggest you the appropriate VSC plugins to use with this sample.
*  `.eslintrc.yml` will inherit from **Standard** with additional custom rules.
*  `prettierrc.yml` will add custom rules for **Prettier**.
*  in `package.json` you will find :
   *  all shortcuts CLI commands
   *  **Husky** and **Lint-Staged** to automatically plug some commands on `git commit` and `git push`.

Enjoy !