const chokidar = require('chokidar');
const { exec } = require('child_process');

// Define the directory to watch
const WATCH_DIR = process.argv.slice(2)[0];

// Define the remote directory
const REMOTE_DIR = process.argv.slice(2)[1];

// Initialize watcher
const watcher = chokidar.watch(WATCH_DIR, {
    persistent: true
});

console.log('watching', process.argv)

// Add event listener for file changes
watcher.on('change', (path) => {
  // When a file changes, copy it to the remote directory
  // Maintain the same relative directory structure
  const relativePath = path.replace(WATCH_DIR, '');
  exec(`scp -i ~/.ssh/id_raspberrypi ${path} ${REMOTE_DIR}${relativePath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
});
