## Angular 2+ String Helper

Ngx lacks complete string manipulation operations. This is an attempt to fill that gap.

## Installation

Install via npm
```sh
$ npm i ngx-string-helper --save
```

<!--```sh-->
<!--$ npm i ngx-string-helper --save-->
<!--```-->

[![NPM](https://nodei.co/npm/ngx-string-helper.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/ngx-string-helper)


## API Usage

#### 
```
        To use it in your Angular 2 app import the module in your root module(app.module.ts) as shown below.

        import { NgxStrHelperModule } from 'ngx-string-helper';
        ...
        ...
        @NgModule({

        imports:[
                NgxStrHelperModule
        ],

        })

        In your components simply import the service.

        import { NgxStrHelper } from 'ngx-string-helper';
        ...
        ...
        export class YOUR_MODULE {

                constructor(private ngxStrHelper: NgxStrHelper) {

                }

        }
```
#### NgxStrHelper.isNullOrEmpty();
```javascript
        let sampleString = "Input is a string";
        let isNullOrEmpty = ngxStrHelper.isNullOrEmpty(sampleString);
        // => Outputs: True
```
#### NgxStrHelper.isBlank();
```javascript
        isBlank(""); // => Outputs: true
        isBlank("\n"); // => Outputs: true
        isBlank(" "); // => Outputs: true
        isBlank("a"); // => Outputs: false
```
#### NgxStrHelper.contains();
```javascript
        //returns true
        if (ngxStrHelper.contains('Input is a string', 'is')) {
            //Do something awesome here..
        }
```
#### NgxStrHelper.truncate();
```javascript
        var sampleString = "Input is a string";
        var str = ngxStrHelper.truncate(sampleString, 9);
        // => Outputs: Input is a string ...
```
#### NgxStrHelper.toSlug();
```javascript
        var sampleString = "Input is a string";
        var slug = ngxStrHelper.toSlug(sampleString);
        // => Outputs: input-is-a-string
```
#### NgxStrHelper.decapitalize();
Converts first letter of the string to lowercase.
```javascript
        ngxStrHelper.decapitalize("Foo Bar");
        // => Outputs: "foo Bar"
```
#### NgxStrHelper.capitalize();
Converts first letter of the string to uppercase. If true is passed as second argument the rest of the string will be converted to lower case.
```javascript
        ngxStrHelper.capitalize("foo Bar");
        // => Outputs: "Foo Bar"

        ngxStrHelper.capitalize("FOO Bar", true);
        // => Outputs: "Foo bar"
```
#### NgxStrHelper.clean();
Trim and replace multiple spaces with a single space.
```javascript
        ngxStrHelper.clean(" foo    bar   ");
        // => Outputs: "foo bar"
```
#### NgxStrHelper.chars();
```javascript
        ngxStrHelper.chars("Hello");
        // => Outputs: ["H", "e", "l", "l", "o"]
```
#### NgxStrHelper.swapCase();
Returns a copy of the string in which all the case-based characters have had their case swapped.
```javascript
        ngxStrHelper.swapCase("hELLO");
        // => Outputs: "Hello"
```
#### NgxStrHelper.include();
Tests if string contains a substring.
```javascript
        ngxStrHelper.include("foobar", "ob");
        // => Outputs: true
```
#### NgxStrHelper.count();
Returns number of occurrences of substring in string.
```javascript
        ngxStrHelper.count("Hello world", "l");
        // => Outputs: 3
```
#### NgxStrHelper.escapeHTML();
Converts HTML special characters to their entity equivalents. This function supports cent, yen, euro, pound, lt, gt, copy, reg, quote, amp, apos.
```javascript
        ngxStrHelper.escapeHTML("<div>Blah blah blah</div>");
        // => Outputs: "&lt;div&gt;Blah blah blah&lt;/div&gt;"
```
#### NgxStrHelper.unescapeHTML();
Converts entity characters to HTML equivalents. This function supports cent, yen, euro, pound, lt, gt, copy, reg, quote, amp, apos, nbsp.
```javascript
        ngxStrHelper.unescapeHTML("&lt;div&gt;Blah&nbsp;blah blah&lt;/div&gt;");
        // => Outputs: "<div>Blah blah blah</div>"
```
#### NgxStrHelper.insert();
```javascript
        ngxStrHelper.insert("Hellworld", 4, "o ");
        // => Outputs: "Hello world"
```
#### NgxStrHelper.replaceAll();
```javascript
        ngxStrHelper.replaceAll("foo", "o", "a");
        // => Outputs: "faa"
```
#### NgxStrHelper.reverse();
Return reversed string
```javascript
        ngxStrHelper.reverse("foobar");
        // => Outputs: "raboof"
```
#### NgxStrHelper.startsWith();
This method checks whether the string begins with starts at position (default: 0)
```javascript
        ngxStrHelper.startsWith("image.gif", "image");
        // => Outputs: true
        ngxStrHelper.startsWith(".vimrc", "vim", 1);
        // => Outputs: true
```
#### NgxStrHelper.endsWith();
This method checks whether the string ends with ends at position (default: string.length).
```javascript
        ngxStrHelper.endsWith("image.gif", "gif");
        // => Outputs: true
        ngxStrHelper.endsWith("image.old.gif", "old", 9);
        // => Outputs: true
```
#### NgxStrHelper.pred();
Returns the predecessor to str.
```javascript
        ngxStrHelper.pred("b");
        // => Outputs: "a"
        ngxStrHelper.pred("B");
        // => Outputs: "A"
```
#### NgxStrHelper.succ();
Returns the successor to str.
```javascript
        ngxStrHelper.succ("a");
        // => Outputs: "b"
        ngxStrHelper.succ("A");
        // => Outputs: "B"
```
#### NgxStrHelper.titleize();
```javascript
        ngxStrHelper.titleize("my name is thuyet");
        // => Outputs: "My Name Is Thuyet"
```
#### NgxStrHelper.camelize();
Converts underscored or dasherized string to a camelized one. Begins with a lower case letter unless it starts with an underscore, dash or an upper case letter.
```javascript
        ngxStrHelper.camelize("moz-transform");
        // => Outputs: "mozTransform"
        ngxStrHelper.camelize("-moz-transform");
        // => Outputs: "MozTransform"
        ngxStrHelper.camelize("_moz_transform");
        // => Outputs: "MozTransform"
        ngxStrHelper.camelize("Moz-transform");
        // => Outputs: "MozTransform"
        ngxStrHelper.camelize("-moz-transform", true);
        // => Outputs: "mozTransform"
```
#### NgxStrHelper.classify();
Converts string to camelized class name. First letter is always upper case
```javascript
        ngxStrHelper.classify("thuyet_le_van");
        // => Outputs: "ThuyetLeVan"
```
#### NgxStrHelper.underscored();
Converts a camelized or dasherized string into an underscored one
```javascript
        ngxStrHelper.underscored("ThuyetLeVan");
        // => Outputs: "thuyet_le_van"
```
#### NgxStrHelper.dasherize();
Converts a underscored or camelized string into an dasherized one
```javascript
        ngxStrHelper.underscored("ThuyetLeVan");
        // => Outputs: "thuyet-le-van"
```
#### NgxStrHelper.humanize();
Converts an underscored, camelized, or dasherized string into a humanized one. Also removes beginning and ending whitespace, and removes the postfix '_id'.
```javascript
        ngxStrHelper.humanize("  capitalize dash-CamelCase_underscore trim  ");
        // => Outputs: "Capitalize dash camel case underscore trim"
```
#### NgxStrHelper.toNumber();
Parse string to number. Returns NaN if string can't be parsed to number.
```javascript
        ngxStrHelper.toNumber("2.556");
        // => Outputs: 3
        ngxStrHelper.toNumber("2.556", 1);
        // => Outputs: 2.6
        ngxStrHelper.toNumber("999.999", -1);
        // => Outputs: 990
```
#### NgxStrHelper.stripTags();
Removes all html tags from string.
```javascript
        ngxStrHelper.stripTags("a <a href=\"#\">link</a>");
        // => Outputs: "a link"
        ngxStrHelper.stripTags("a <a href=\"#\">link</a><script>alert(\"hello world!\")</script>");
        // => Outputs: "a linkalert("hello world!")"
```
#### NgxStrHelper.repeat();
Repeats a string count times.
```javascript
        ngxStrHelper.repeat("HEY", 3);
        // => Outputs: "HEYHEYHEY";
        ngxStrHelper.repeat("HEY", 3, "HI");
        // => Outputs: "HEYHEYHEYHI";
```
#### NgxStrHelper.surround();
Surround a string with another string.
```javascript
        ngxStrHelper.surround("HEY", "NAME");
        // => Outputs: "NAMEHEYNAME";
```
#### NgxStrHelper.quote();
Quotes a string. quoteChar defaults to ".
```javascript
        ngxStrHelper.quote("DEMO", '"');
        // => Outputs: '"DEMO"';
```
#### NgxStrHelper.unquote();
Unquotes a string. quoteChar defaults to ".
```javascript
        ngxStrHelper.unquote('"DEMO"');
        // => Outputs: "DEMO"
        ngxStrHelper.unquote("'DEMO'", "'");
        // => Outputs: "DEMO"
```
#### NgxStrHelper.toBoolean();
Turn strings that can be commonly considered as booleas to real booleans. Such as "true", "false", "1" and "0". This function is case insensitive.
```javascript
        ngxStrHelper.toBoolean("true");
        // => Outputs: true
        ngxStrHelper.toBoolean("FALSE");
        // => Outputs: false
        ngxStrHelper.toBoolean("random");
        // => Outputs: undefined
```
It can be customized by giving arrays of truth and falsy value matcher as parameters. Matchers can be also RegExp objects.
```javascript
        ngxStrHelper.toBoolean("truthy", ["truthy"], ["falsy"]);
        // => Outputs: true
        ngxStrHelper.toBoolean("true only at start", [/^true/]);
        // => Outputs: true
```
#### NgxStrHelper.chop();
```javascript
        ngxStrHelper.chop("whitespace", 3);
        // => Outputs: ["whi", "tes", "pac", "e"]
```
#### Thanks and enjoy!
