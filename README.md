Forma Addin creating user defined JS commands using WSM C++ APIs.
========================

![Main Preview](preview.png)

To load this plugin, run this in the FormIt console-
```
FormIt.LoadPlugin("https://formit3d.github.io/FormItForma");
```
```
var path = FormIt.FormaAddIn.SaveCurrentAXMtoTemp(true);
console.log(path);
FormIt.FormaAddIn.DeleteTempFile(path);
```
