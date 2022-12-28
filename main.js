const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    center: true,
  })
  win.loadFile(__dirname + '/pages/index.html')
}

app.whenReady().then(() => {
  createWindow()
})
