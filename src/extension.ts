// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "gitswitch.activateGitSwitch",
    () => {
      const status = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left,
        100
      );
      status.name = "🐱";
      status.text = "🐱";
      status.show();
      status.command = "gitswitch.showGitSwitch";
    }
  );

  disposable = vscode.commands.registerCommand(
    "gitswitch.showGitSwitch",
    async () => {
      await vscode.window.showInformationMessage("Hellow from the catto");
    }
  );
  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
