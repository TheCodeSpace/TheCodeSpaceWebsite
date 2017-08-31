m.load("editor.js")

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
	});
}