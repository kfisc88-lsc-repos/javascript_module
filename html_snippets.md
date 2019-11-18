
## Handy Code Snippets


Display form fields as a flexbox with row orientation:

```css
element.class {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  margin: 7px 0px;
}
```
Sets growth, shrink, and basis for children of element.class
```css
element.class > * {
  -webkit-flex: 1 1 150px;
  flex: 1 1 150px;
}
```
