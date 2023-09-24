import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const App = () => {
  return (
    <div className="App">
      <h2>Using CKEditor&nbsp;5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<h2>Hello from CKEditor&nbsp;5!</h2>"
        onChange={(event, editor) => {
          console.log(editor.getData());
        }}
      />
    </div>
  );
};

export default App;
