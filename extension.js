// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const sassBemCompiler = require("./sass_compiler")

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed



/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "sass-bem-compiler" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('sass-bem-compiler.compile', function () {
		// The code you place here will be executed every time your command is executed
    
    //const workspaceFolder = vscode.workspace.workspaceFolders[0];
    //I need to get a file path called 'index.scss' in the root directory of the project that will run the extension, can you help?
    let workspaceFolderPath = vscode.workspace.workspaceFolders[0].uri.path.slice(1)
    //const  file = vscode.workspace.path.join(workspaceFolderPath, 'index.scss');
    let file = workspaceFolderPath + "/index.scss" //  /c:/Users/spame/Desktop/test


    console.log(workspaceFolderPath)
    console.log(file)


    //console.log(workspaceFolder)
    sassBemCompiler(file,workspaceFolderPath)
		// Display a message box to the user
		vscode.window.showInformationMessage('Compiling SASS into BEM CSS!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
