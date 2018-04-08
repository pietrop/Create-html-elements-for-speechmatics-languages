'use strict';

// https://www.speechmatics.com/language-support/
// Select languages in web page,
// copy 
// pase in `./languages_from_site.txt` see file for expected output, languages, and then list of language codes.

const fs = require('fs');

var languagesToFormat = fs.readFileSync('./languages_from_site.txt').toString();

var languagesListToFormat = languagesToFormat.split("\n\n")[0];
var languagesCodesListToFormat = languagesToFormat.split("\n\n")[1];

var languagesList = languagesListToFormat.split("\n");
var languagesCodesList = languagesCodesListToFormat.split("\n");


var languagesListOWithCodes = [];

languagesList.forEach((l,index)=>{
  var language = {
    code: languagesCodesList[index],
    language: l
  };
  languagesListOWithCodes.push(language);
});

//removing  `Language` and `code` from the list. 
languagesListOWithCodes.pop();
languagesListOWithCodes.pop();

console.log(languagesListOWithCodes);

fs.writeFileSync('./languages.json',JSON.stringify(languagesListOWithCodes,null,2));

var languagesHTML = createOptionForAllLanguages(languagesListOWithCodes);
var result = createSelectElem(languagesHTML);

console.log(result);

fs.writeFileSync('./languages.html', result);


function createOptionForAllLanguages(languages){
  var result = "";
  
  languages.forEach(function(lang){
    result += createOneOption(lang); 
    
  });
  return result;
}

function createOneOption(lang){
  return `  <option value="${lang.code}">${lang.language}</option>\n`;
}

function createSelectElem(options){
  return `<div class="form-group">
  <label for="languageModelSpeechmatics">Speechmatics  Languages:</label>
   <select class="form-control" id="languageModelSpeechmatics">
     ${options}
   </select>
   <p class="help-block">choose the language of your media file.</p>
</div>`
}