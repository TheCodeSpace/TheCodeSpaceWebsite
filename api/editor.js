m.load("editor.js")

var editorRepo;

function initEditorCreation() {
    loadScript("../vs/loader.js")
    m.init("editor.js")
}

function createEditor(container_name, code_value, language_value) {
    require.config({ paths: { 'vs': '../vs' }});
	require(['vs/editor/editor.main'], function() {
		var editor = monaco.editor.create(document.getElementById(container_name), {
			value: code_value,
            language: language_value,
            lineNumbers: true,
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            theme: "vs-dark"
        });

        var nestingElement = document.getElementById("nesting_element")
        var varElement = document.createElement("var")
        var modelID = editor.getModel().id.replace("$model","");
        varElement.innerHTML = modelID
        varElement.id = "var__" + container_name
        nestingElement.appendChild(varElement)

	});
}