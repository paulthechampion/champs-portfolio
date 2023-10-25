const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 3002;
const app = express();
const fs = require('fs')
const cheerio = require('cheerio')
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/start', (req, res, next) => {
  // Customize meta content and title here
  const customTitle = "PaulTheChampion | Clients' Questionnaire";
  const customDescription = 'Fill this Questionnaire to start your Project';

  // Load the HTML using cheerio
  const htmlFilePath = path.join(__dirname, 'build', 'index.html');
  const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
  const $ = cheerio.load(htmlContent);

  // Update the meta title and description
  $('meta[name="title"]').attr('content', customTitle);
  $('meta[name="description"]').attr('content', customDescription);
  $('title').text(customTitle);

  // Send the modified HTML back
  res.send($.html());
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port);