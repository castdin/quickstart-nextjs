## How to use this template

1. Create repository from template

   ```
   gh repo create --clone --template castdin/quickstart-nextjs --private $projectName
   ```

2. Install dependencies

   ```
   bun install
   ```

3. Install cypress

   ```
   bun cypress install
   ```

## How to update this template

### Updating dependencies

```
rm bun.lockb
```

```
jq '.dependencies | keys[]' package.json | xargs bun add $1
```

```
jq '.devDependencies | keys[]' package.json | xargs bun add --dev $1
```

### Updating all files

1.  Clone template repository

    ```
    git clone git@github.com:castdin/quickstart-nextjs.git
    ```

1.  Reset Git index

    ```
    git rm -rf .
    ```

    ```
    git clean -fxd
    ```

    ```
    git reset
    ```

1.  Re-create NextJS project

    ```
    bunx create-next-app . --typescript --eslint --tailwind --src-dir --app --use-bun
    ```

1.  Change dependencies to range versions

    ```
    jq '.dependencies | keys[]' package.json | xargs bun add $1
    ```

    ```
    jq '.devDependencies | keys[]' package.json | xargs bun add --dev $1
    ```

1.  Sort dependencies in `package.json`

    ```
    bunx sort-package-json
    ```

1.  Add Prettier dependencies

    ```
    bun add --dev prettier eslint-config-prettier prettier-plugin-tailwindcss prettier-plugin-css-order
    ```

1.  Create or update the following configuration files:

    - `.editorconfig`

      ```ini
      root = true

      [*]
      indent_style = tab
      insert_final_newline = true
      trim_trailing_whitespace = true

      ```

    - `.eslintrc.json`

      ```json
      {
      	"extends": ["next", "prettier"]
      }
      ```

    - `.prettierrc.json`

      ```json
      {
      	"plugins": ["prettier-plugin-tailwindcss"]
      }
      ```

1.  Run Prettier

    ```
    bun prettier --write .
    ```

1.  Add Cypress

    ```
    bun add --dev cypress
    ```

    ```
    bun cypress install
    ```

1.  Generate Cypress files for component testing and E2E testing

    ```
    bun cypress open
    ```
