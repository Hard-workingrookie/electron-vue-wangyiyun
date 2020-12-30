import { app, BrowserWindow ,ipcMain} from 'electron'
const electron = require('electron')

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\')
}

let mainWindow
const Menu = electron.Menu
const winURL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  Menu.setApplicationMenu(null)
  mainWindow = new BrowserWindow({
    height: 670, //窗口高度
    width: 1400, //窗口宽度
    frame: false, //是否显示窗口边框
    resizable: true, //可否缩放
    movable: true, //可否移动
    webPreferences: {
      /*preload: path.join(__dirname, 'preload.js')*/
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('min', e=> mainWindow.minimize());
ipcMain.on('max', e=> mainWindow.maximize());
ipcMain.on('close', e=> mainWindow.close());