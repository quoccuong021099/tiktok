# 1. Cài đặt customize-cra để config webpack

- Đầu tiên cài đặt bằng lệnh sau:
  `yarn add customize-cra react-app-rewired --dev`

- Tiếp theo: `Create a config-overrides.js file in the root directory`

- Tiếp theo: dán cái này vào file vừa tạo

```javascript
module.exports = function override(config, env) {
  return config;
};
```

# 2. Customize import paths by babel-plugin-module-resolver

- Đầu tiên cài đặt bằng lệnh sau: `yarn add --dev babel-plugin-module-resolver`
- Tiếp theo tạo file .babelrc ở ngang hàng cùng folder root, sau đó dán lệnh sau vào:

```javascript
{
  "plugins": [
    [
      "module-resolver",
      {
        "alias": {
          "~": "./src"
        }
      }
    ]
  ]
}
```

- tiếp theo hỗ trợ autocompletion import, tạo file `jsconfig.json` và dán đoạn sau vào:

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/": ["src/*"]
    }
  }
}
```

- tiếp theo sử file `config-overrides.js` như sau:

```js
const { override, useBabelRc } = require('customize-cra');

module.exports = override(
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc(),
);
```

# 3. Cài đặt và cấu hình Prettier

- tạo file `.prettierrc`
- dán đoạn code sau đây vào

```json
{
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "jsxSingleQuote": true,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": true,
  "singleAttributePerLine": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false,
  "vueIndentScriptAndStyle": false
}
```

- tạo file `settings.json` ở trong folder `.vscode` (chưa có thì tự tạo), sau đó dán đoạn mã sau vào:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

# 4. Cấu hình router từng layout cho dự án

- cài đặt: `npm i react-router-dom`
