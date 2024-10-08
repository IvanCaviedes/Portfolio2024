module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'prettier',
    'import',
    'jest',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  settings: {},
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error', // Obliga a que las sobrecargas de funciones estén juntas
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }], // Prefiere el uso de `T[]` sobre `Array<T>`
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-expect-error': 'allow-with-description' },
    ], // Permite `ts-expect-error` con una descripción
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
    ], // Prefiere `as` para las aserciones de tipo
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // Prefiere `interface` sobre `type` para definiciones de objetos
    '@typescript-eslint/explicit-function-return-type': 'off', // No obliga a declarar el tipo de retorno en funciones
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'explicit' },
    ], // Obliga a definir el modificador de acceso en miembros de clase
    '@typescript-eslint/member-ordering': [
      'error',
      {
        // Orden de miembros en clases e interfaces
        default: [
          'signature',
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'constructor',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
        ],
      },
    ],
    '@typescript-eslint/no-array-constructor': 'error', // Prohíbe el uso de `Array<T>` en favor de `T[]`
    '@typescript-eslint/no-empty-function': 'error', // Prohíbe funciones vacías
    '@typescript-eslint/no-empty-interface': 'error', // Prohíbe interfaces vacías
    '@typescript-eslint/no-explicit-any': 'error', // Desalienta el uso de `any`
    '@typescript-eslint/no-misused-new': 'error', // Evita el mal uso del operador `new` en interfaces o tipos
    '@typescript-eslint/no-namespace': 'error', // Desalienta el uso de `namespace`
    '@typescript-eslint/no-non-null-assertion': 'error', // Prohíbe el uso del operador `!` de aserción no nula
    '@typescript-eslint/no-this-alias': 'error', // Prohíbe reasignar `this` a otra variable
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Evita variables no usadas, permitiendo ignorar argumentos que empiezan con `_`
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ], // Prohíbe el uso de variables antes de ser definidas
    '@typescript-eslint/no-useless-constructor': 'error', // Prohíbe constructores vacíos
    '@typescript-eslint/prefer-for-of': 'error', // Prefiere `for-of` sobre loops tradicionales cuando se trabaja con arrays
    '@typescript-eslint/prefer-optional-chain': 'error', // Prefiere el uso de `?.` para encadenamientos opcionales
    '@typescript-eslint/prefer-nullish-coalescing': 'error', // Prefiere el uso de `??` para valores nulos o indefinidos en lugar de `||`
    '@typescript-eslint/unified-signatures': 'error', // Agrupa firmas de métodos con tipos de parámetros similares

    // Reglas de buenas prácticas
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'], // Prefiere `Record<K, V>` sobre índices en interfaces
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase'],
      },
      {
        selector: 'function',
        format: ['PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        types: ['function'],
        format: ['PascalCase'],
        modifiers: ['exported'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'], // Prefijo para interfaces
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        prefix: ['I'], // Prefijo para alias de tipos
      },
    ], // Aplica convenciones de nombres como camelCase para variables

    '@typescript-eslint/no-dynamic-delete': 'error', // Prohíbe el uso de `delete` en propiedades dinámicas
    '@typescript-eslint/no-extraneous-class': 'error', // Prohíbe clases innecesarias
    '@typescript-eslint/no-invalid-this': 'error', // Prohíbe el uso de `this` fuera de clases o literales de objetos
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error', // Evita comparaciones booleanas innecesarias
    '@typescript-eslint/no-unnecessary-condition': 'error', // Prohíbe condiciones innecesarias en condicionales
    '@typescript-eslint/no-unnecessary-type-arguments': 'error', // Evita argumentos de tipo innecesarios
    '@typescript-eslint/no-unnecessary-type-assertion': 'error', // Prohíbe las aserciones de tipo innecesarias
    '@typescript-eslint/no-unused-expressions': 'error', // Prohíbe las expresiones sin uso
    '@typescript-eslint/prefer-as-const': 'error', // Prefiere `as const` en lugar de declaraciones constantes
    '@typescript-eslint/prefer-readonly': 'error', // Prefiere que las propiedades sean `readonly` cuando sea posible
    '@typescript-eslint/require-array-sort-compare': 'error', // Obliga a definir un comparador en `Array.sort()`
    '@typescript-eslint/restrict-plus-operands': 'error', // Restringe el uso del operador `+` a tipos permitidos
    '@typescript-eslint/strict-boolean-expressions': 'warn', // Desalienta el uso de expresiones booleanas ambiguas

    // Reglas de módulos y gestión de imports
    '@typescript-eslint/no-var-requires': 'error', // Prohíbe el uso de `require()`
    '@typescript-eslint/no-require-imports': 'error', // Prefiere `import` sobre `require()`
    '@typescript-eslint/no-shadow': ['error', { hoist: 'all' }], // Evita que las variables locales hagan sombra a las de un alcance superior
    '@typescript-eslint/explicit-module-boundary-types': 'error', // Obliga a definir tipos de retorno en funciones exportadas

    'prettier/prettier': [
      'error',
      {
        printWidth: 80, // Ancho máximo de línea
        tabWidth: 2, // Número de espacios por tabulación
        useTabs: false, // Usa espacios en lugar de tabulaciones
        semi: true, // Añade punto y coma al final de las declaraciones
        singleQuote: true, // Usa comillas simples en lugar de comillas dobles
        quoteProps: 'as-needed', // Añade comillas a las propiedades de los objetos solo cuando sea necesario
        jsxSingleQuote: false, // Usa comillas dobles en JSX
        trailingComma: 'es5', // Añade comas finales en objetos y arrays donde sea posible
        bracketSpacing: true, // Incluye espacios dentro de las llaves de los objetos
        arrowParens: 'always', // Siempre incluye paréntesis en las funciones de flecha
        endOfLine: 'lf', // Usa saltos de línea LF (line feed)
        embeddedLanguageFormatting: 'auto', // Formatea automáticamente lenguajes embebidos dentro del código
        htmlWhitespaceSensitivity: 'css', // Configura cómo Prettier maneja el espacio en blanco en HTML y JSX
        proseWrap: 'preserve', // Mantiene el formato del texto en archivos Markdown
      },
    ],

    // Reglas para variables no utilizadas
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none', // No reporta argumentos no utilizados en funciones
        ignoreRestSiblings: true, // No reporta variables no utilizadas en expresiones de desestructuración
      },
    ],

    // Reglas para variables no declaradas
    'no-undef': 'error', // No permite el uso de variables no declaradas

    // Reglas para el uso de variables
    'no-shadow': [
      'error',
      {
        allow: ['callback', 'resolve', 'reject'], // Permite el uso de estos nombres de variables en los ámbitos de funciones
      },
    ],

    // Reglas para variables declaradas
    'no-redeclare': [
      'error',
      {
        builtinGlobals: true, // Permite la redeclaración de variables globales integradas como `window` o `document`
      },
    ],

    // Reglas para la declaración de variables en funciones
    'no-use-before-define': [
      'error',
      {
        functions: false, // Permite el uso de funciones antes de su declaración
        classes: true, // No permite el uso de clases antes de su declaración
        variables: true, // No permite el uso de variables antes de su declaración
      },
    ],

    // Reglas para el nombrado de variables
    camelcase: [
      'error',
      {
        properties: 'always', // Requiere el uso de camelCase para las propiedades de los objetos
        ignoreDestructuring: false, // No permite excepciones para las destructuraciones
        ignoreImports: false, // No permite excepciones para los nombres de importaciones
        ignoreGlobals: false, // No permite excepciones para las variables globales
      },
    ],

    // Reglas para el uso de variables en el ámbito global
    'no-global-assign': 'error', // No permite la reasignación de variables globales

    // Reglas para el uso de variables en contextos de bloque
    'block-scoped-var': 'error', // Requiere el uso de variables dentro de bloques donde se declaran (por ejemplo, dentro de `if` o `for`)

    // Reglas para la declaración de variables con `var`
    'no-var': 'error', // Requiere el uso de `let` o `const` en lugar de `var`

    // Reglas para las variables declaradas con `let` o `const`
    'prefer-const': [
      'error',
      {
        destructuring: 'all', // Requiere el uso de `const` para todas las variables que no se reasignan
        ignoreReadBeforeAssign: true, // Permite el uso de `let` para variables que se leen antes de ser asignadas
      },
    ],

    // Reglas para el uso de variables en funciones de flecha
    'func-names': ['error', 'as-needed'], // Requiere nombres de funciones sólo cuando sea necesario
    'func-style': [
      'error',
      'declaration',
      {
        // Requiere el uso de funciones declarativas en lugar de expresiones de función
        allowArrowFunctions: true, // Permite el uso de funciones de flecha
      },
    ],

    // Reglas básicas de importación
    'import/no-unresolved': 'error', // Asegura que las importaciones apunten a módulos válidos
    'import/named': 'error', // Asegura que las importaciones sean nombradas y existan
    'import/default': 'error', // Asegura que las importaciones predeterminadas existan
    'import/namespace': 'error', // Asegura que las importaciones de namespaces existan

    // Reglas para el orden de importaciones
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'], // Importaciones de módulos externos
          'internal', // Importaciones internas del proyecto
          ['sibling', 'parent'], // Importaciones desde carpetas hermanas o padres
          'index', // Importaciones de archivos index
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '**/*.css',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always', // Requiere nuevas líneas entre grupos de importaciones
        alphabetize: {
          order: 'asc', // Ordena las importaciones alfabéticamente
          caseInsensitive: true, // Ignora mayúsculas/minúsculas al ordenar
        },
      },
    ],

    // Otras reglas útiles de importación
    'import/no-duplicates': 'error', // Evita duplicados en las importaciones
    'import/prefer-default-export': 'off', // Opcional: Desactiva la preferencia por exportaciones predeterminadas si usas exportaciones nombradas
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true, // Permite importar dependencias de desarrollo
      },
    ],
    'import/extensions': [
      'error',
      'never',
      {
        svg: 'always', // Configura las extensiones de archivos a incluir en las importaciones
      },
    ],
    'import/no-cycle': ['error', { maxDepth: 1 }], // Detecta ciclos en importaciones
    'import/no-named-as-default': 'error', // Previene la importación de valores nombrados como valores predeterminados

    'no-console': [
      'warn', // Emite una advertencia en lugar de un error
      { allow: ['error'] }, // Permite `console.error`
    ],

    'no-empty-function': [
      'warn', // Emite una advertencia en lugar de un error
      { allow: ['arrowFunctions', 'functions', 'methods', 'constructors'] },
    ],

    'no-debugger': [
      'warn', // Emite una advertencia en lugar de un error
    ],

    'no-magic-numbers': ['error'],
    'keyword-spacing': ['warn', { before: true, after: true }],
    'space-infix-ops': 'warn', // Espacios alrededor de operadores
    'comma-spacing': ['warn', { before: false, after: true }],
    'func-call-spacing': ['warn', 'never'],
  },
};
