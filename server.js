const https = require('https');
const fs = require('fs');
const path = require('path');

// Read the SSL certificate files
const privateKey = fs.readFileSync(path.join(__dirname, 'cert', 'cert.key'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, 'cert', 'cert.crt'), 'utf8');
const ca = fs.readFileSync(path.join(__dirname, 'cert', 'ca.crt'), 'utf8');

const credentials = { key: privateKey, cert: certificate, ca: ca };

// Create an HTTPS server
const httpsServer = https.createServer(credentials, (req, res) => {
  // Determine the file path based on the request URL
  let filePath = '';
  if (req.url === '/') {
    filePath = path.join(__dirname, 'public', 'index.html');
  } else {
    filePath = path.join(__dirname, 'public', req.url);
  }

  // Read the file and serve it
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      // Determine the appropriate content type based on the file extension
      const ext = path.extname(filePath);
      let contentType = 'text/html';
      if (ext === '.css') {
        contentType = 'text/css';
      }

      // Set the response headers and serve the content
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

// Start the server
const port = 3000; // Use the desired port number
httpsServer.listen(port, () => {
  console.log(`HTTPS server is running on port ${port}`);
});
