# font-analyze-script

Search tool that website use what web font.

## usage

```shell
git clone https://github.com/ryokryok/font-analyze-script.git
cd font-analyze-script
yarn
yarn start https://github.com/

# expected
[
  '-apple-system',
  '"system-ui"',
  '"Segoe UI"',
  '"Noto Sans"',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"'
]
```

## license

MIT
