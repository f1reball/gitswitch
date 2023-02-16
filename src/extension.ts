// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate({ subscriptions }: vscode.ExtensionContext) {
  subscriptions.push(
    vscode.commands.registerCommand("gitswitch.activateGitSwitch", () => {
      const status = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left,
        100
      );
      status.name = "💻";
      status.text = "💻";
      status.show();
      status.command = "gitswitch.showGitSwitch";
    })
  );

  subscriptions.push(
    vscode.commands.registerCommand("gitswitch.showGitSwitch", async () => {
      await vscode.window.showInformationMessage(
        "Connection to codebase goes here from FE"
      );
    })
  );

  vscode.commands.executeCommand("gitswitch.activateGitSwitch");
}

// This method is called when your extension is deactivated
export function deactivate() {}
