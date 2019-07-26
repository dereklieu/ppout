# ppout
CLI tool to convert a node package's export contents to JSON

Usage

```
ppout export <path/to/module> [options]
```

Options

`-p, --pretty` pretty-print the output.

## Why?
Mainly for validating cloudformation templates that are exported from javascript modules with dependencies.

```
ppout export ./cloudformation/template.js | xargs -0 aws cloudformation validate-template --template-body
```
