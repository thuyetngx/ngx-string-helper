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
        ngxStrHelper.("image.old.gif", "old", 9);
        // => Outputs: true
```
#### Thanks and enjoy!
