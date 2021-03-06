bootstrap3-input-group-file
===========================

A simple bootstrap3 plugin to style inputs of type file.

example.html can be tested as a standalone.

<h2>Requirements</h2>
<ul>
  <li>Bootstrap3</li>
  <li>jQuery</li>
</ul>

<h2>Info</h2>

In order to support IE8, this plugin uses the 'for' attribute of the 'label' tag. Make sure the 'for' attribute holds the same value as the 'id' of your input of type file. The label is used as the button. 

The input of type 'file' is hidden, but without using the hidden attribute. Some browsers won't react correctly if the input of type 'file' is set to display:none (hidden).

The input of type 'text' is used to display the file name. The file name is striped of its local path. Clicking this input will also open the browse file dialog.

<h4>Markup Snippet</h4>

Note: Don't forget to include the .js and .css files found in the 'src' folder of this repo.
```html
<div class="input-group-file">
  <input type="text" class="form-control" readonly="">
  <label class="btn btn-primary" for="file1">Select File</label>
  <input type="file" id="file1" name="file_name1">
</div>		
```
<h4>jQuery function call</h4>
Simply call the following function at document ready.
```javascript
$(document).ready(function(){
  input_group_file();
});
```
<h2>Compatible Browsers (tested)</h2>
<ul>
  <li>Chrome 33</li>
  <li>Firefox 28</li>
  <li>Safari 7.0.2</li>
  <li>Internet Explorer 8 (YES, please use respond.js and a local copy of Bootstrap3)</li>
</ul>

