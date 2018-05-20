const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
	.then(createWindowsInstaller)
	.catch((error) => {
		console.error(error.message || error)
		process.exit(1)
	})

function getInstallerConfig () {
	console.log('creating windows installer')
	const rootPath = path.join('./')
	const outPath = path.join(rootPath, 'dist')

	return Promise.resolve({
		appDirectory: path.join(outPath, 'opol5/'),
		authors: 'Ash Downing',
		noMsi: true,
		outputDirectory: path.join(outPath, 'windows-installer'),
		exe: 'andrews-admin.exe',
		setupExe: 'AndrewsAdmin.exe',
		setupIcon: path.join(rootPath, 'static', 'icons', 'win', 'icon.png')
	})
}
