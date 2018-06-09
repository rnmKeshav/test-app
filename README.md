# What

- Test App

### Sublime text packages

- Babel
- ESLint
  - Need to have `.eslintrc` file in root of repo
  - Install it globally in system `npm install -g eslint`
  - Update `sublime-text` user-settings to
    ```
    {
      "node_path": "/usr/local/bin"
    }
    ```
- JavaScriptNext-ES6 Syntax

- JsPrettier
  - Install it globally in system `npm install -g prettier`
  - Update `sublime-text` user-settings
    ```
    {
      "auto_format_on_save": true,
      "prettier_options": {
        "printWidth": 100
      }
    }
    ```
- SublimeLinter
- SublimeLinter-eslint
