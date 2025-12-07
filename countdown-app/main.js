const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

function createWindow() {
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width, height } = primaryDisplay.workAreaSize;

    const win = new BrowserWindow({
        width: 350,
        height: 180,
        x: width - 370, // Position bottom-right roughly
        y: height - 200,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        alwaysOnTop: true,
        frame: false, // Remove window frame for a cleaner widget look
        transparent: true, // Allow rounded corners/transparency
        skipTaskbar: true, // Don't show in taskbar if possible (optional, user might want to close it easily though. Let's keep it simple first)
        autoHideMenuBar: true,
        resizable: false
    });

    // Ensure it stays on top even in fullscreen apps if possible (floating)
    win.setAlwaysOnTop(true, 'screen-saver');
    win.setVisibleOnAllWorkspaces(true);

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    // Set to launch at startup
    app.setLoginItemSettings({
        openAtLogin: true,
        path: process.execPath
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
