# create select html element for Google Languages 

To make a list of speechmatics languages for a select option for [autoEdit](http://autoEdit.io)

_inspired by [`Create-select-html-element-for-Google-Languages`](https://github.com/pietrop/Create-select-html-element-for-Google-Languages)_

## Usage


```
npm start
```

## How does it work

See [Updating list of languages](#Updating list of languages), for updating list input in local [`./languages_from_site.txt`](./languages_from_site.txt)

The module then creates a json list of languages as well as an HTML select element with the languates as options and their code as value.

List of languge in the repo is up to date to the 8th April 2018. 

## Example Output 

See [`./languages.json`](./languages.json) if interested in `json `representation.

```json
[
  {
    "code": "en-GB",
    "language": "English – British"
  },
  {
    "code": "en-AU",
    "language": "English – Australian"
  },
  {
    "code": "en-US",
    "language": "English – N. American"
  },
  {
    "code": "en",
    "language": "English – Global"
  },
  {
    "code": "bg",
    "language": "Bulgarian"
  },
 ...
```

See belwo or in[`./languages.html`](./languages.html) for html element to add to your front end.

```html
<div class="form-group">
  <label for="languageModelSpeechmatics">Speechmatics  Languages:</label>
   <select class="form-control" id="languageModelSpeechmatics">
       <option value="en-GB">English – British</option>
  <option value="en-AU">English – Australian</option>
  <option value="en-US">English – N. American</option>
  <option value="en">English – Global</option>
  <option value="bg">Bulgarian</option>
  ...

   </select>
   <p class="help-block">choose the language of your media file.</p>
</div>
 ```


## Updating list of languages
If more languages are added to the STT by speechmatics, here's how you update the list. 

_note: because the speechmatics page does not use a table it's harder to write a proper scraper like in the [google example module](https://github.com/pietrop/Create-select-html-element-for-Google-Languages), hence the manual copy and paste in local text file. Ideal solution would be a API end point that returns the list of available languages and language codes. But meanwhile this will do._

- Visit [https://www.speechmatics.com/language-support](https://www.speechmatics.com/language-support)
- Select languages in web page,
- copy 
- pase in [`./languages_from_site.txt`](./languages_from_site.txt) see existing file for expected output, languages, and then list of language codes.


```
English – British
English – Australian
English – N. American
English – Global
Bulgarian
Catalan
Croatian
Czech
Danish
Dutch
Finnish
French
German
Greek
Hindi
Hungarian
Italian
Japanese
Korean
Latvian
Lithuanian
Polish
Portuguese
Romanian
Russian
Slovak
Slovenian
Spanish
Swedish
Language
code

en-GB
en-AU
en-US
en
bg
ca
hr
cs
da
nl
fi
fr
de
el
hi
hu
it
ja
ko
lv
lt
pl
pt
ro
ru
sk
sl
es
sv
```

The follow usage instructions `npm start`  to generate json and html.

## Contributor

- [Pietro](http://twitter.com/pietropassarell)
