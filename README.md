# Multiline Ellipsis for Text

A JQuery plugin to set ellipsis to a text by line count. Converts the text to multiple lines and after the line count reached, it will set ellipsis and set tooltip.

  - Works in and tested in `IE` and `Chrome`
  - Tooltip is applied only if ellipsis has set
  - Default line count is 2

# Usage

Include libraries
```sh
<script type="text/javascript" src="src/multiLineEllipsis.min.js"></script>
<link rel="stylesheet" type="text/css" href="src/css/multiLineEllipsis.css">
```

```sh
$(".threeLineEllipsis").multiLineEllipsis({
    line:3,
    tooltip:true
});
```

## Development
Make changes to .src/ folder and run `gulp` from root directory, that will make build as per `gulpfile.js`
`Note: Make sure to run 'npm install' before running above command`

## Contributions
I'm just getting started. Please help me to shape this plugin better

## License
Released under MIT by, and copyright 2017 by satheesht.
