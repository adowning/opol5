const autoUpdater = require("electron-updater").autoUpdater
const { app, BrowserWindow } = require("electron")
let win
const development = process.env.NODE_ENV === "development"
const log = require("electron-log")
log.info("App starting...")

function sendStatusToWindow(text) {
  log.info(text)
  if (win) {
    win.webContents.send("message", text)
  }
}
// win.loadURL(
//     development ? "http://localhost:3000/" : `${__dirname}/../dist/index.html`
//   )
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  })
  log.info(
    development ? "http://localhost:3000/" : `${__dirname}/../dist/index.html`
  )
  sendStatusToWindow(
    "loading url ",
    development ? "http://localhost:3000/" : `${__dirname}/../dist/index.html`
  )
  win.loadURL("https://priceless-tesla-4fae55.netlify.com/")
  if (development) {
    win.webContents.openDevTools()
  }
  win.on("closed", () => {
    win = null
  })
}

autoUpdater.on("checking-for-update", () => {
  sendStatusToWindow("Checking for update...")
})
autoUpdater.on("update-available", info => {
  sendStatusToWindow("Update available.")
})
autoUpdater.on("update-not-available", info => {
  sendStatusToWindow("Update not available.")
})
autoUpdater.on("error", err => {
  sendStatusToWindow(`Error in auto-updater. ${err}`)
})
autoUpdater.on("download-progress", progressObj => {
  let log_message = "Download speed: " + progressObj.bytesPerSecond
  log_message = `${log_message} - Downloaded ${progressObj.percent}%`
  log_message = `${log_message} (${progressObj.transferred}/${
    progressObj.total
  })`
  sendStatusToWindow(log_message)
})
autoUpdater.on("update-downloaded", info => {
  sendStatusToWindow("Update downloaded", info)
})

app.on("ready", createWindow)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})
app.on("activate", () => {
  if (win === null) {
    sendStatusToWindow("Creating window...")
    createWindow()
  }
})
