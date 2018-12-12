# Remediator
Node library to sort images and video based off of their filesystem metadata or exif/media metadata formatted from a predefined or custom template.

[![Travis Tests](https://travis-ci.org/shabubu/remediator.svg?branch=master)](https://travis-ci.org/shabubu/remediator)
[![Appveyor Tests](https://ci.appveyor.com/api/projects/status/github/shabubu/remediator?branch=master&svg=true)](https://ci.appveyor.com/project/shabubu/remediator)
[![Coverage Status](https://coveralls.io/repos/github/shabubu/remediator/badge.svg?branch=master)](https://coveralls.io/github/shabubu/remediator?branch=master)
[![Dependency Status](https://img.shields.io/david/shabubu/remediator.svg?style=flat-square)](https://david-dm.org/shabubu/remediator)
[![Known Vulnerabilities](https://snyk.io/test/github/shabubu/remediator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/shabubu/remediator?targetFile=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation
Installation assumes you have already installed v8.5.0 or greater of [Node.js](https://nodejs.org/). If you have not done this, or do not know how to, please follow the directions at [https://nodejs.org/](https://nodejs.org/).

#### Setup Application
Either use an existing [npm](https://www.npmjs.com) package or follow these steps to create a new application.
```bash
$ mkdir myNewApp
$ cd myNewApp
$ npm init
```

#### Get Remediator
Now install the Remediator and exiftool-vendored packages into your application and save them as dependencies.
```bash
$ npm install exiftool-vendored remediator --save
```

## Usage
Remediator is a simple to use library that accepts a single options object for its arguments.  Remediator returns a Promise that resolves successful file transformation objects and rejects any errors encountered.

### Basic Example
Assuming you have a directory named `/unsorted` that contains a single file named `image.jpg` that was taken at 1:00 AM on January 1st, 2000.  The following code could be used to sort the directory using default options settings.

```javascript
import { exiftool } from 'exiftool-vendored';
import remediator from 'remediator';

async function example() {
  const results = await remediator({
    exiftool,
    source: [
      '/unsorted',
    ],
    output: '/sorted',
  });
  
  console.log(results);
}
```
Note: In order for Exiftool to have the proper permissions a reference must be provided to remediator.<br />
Note: First run of remediator may take slightly longer as "exiftool-vendored" will need to download the Exiftool process for the given environment.

Since the we are using the default format of `:YYYY:/:MM0:. :Month:/:DD0: :Day:/:YYYY:.:MM0:.:DD0: :HH0:.:MN0:.:Ext:` the expected output from the above code would be:

```javascript
[
  {
    source: '/unsorted/image.jpg',
    output: '/sorted/2000/01. January/01 Saturday/2000.01.01 01.00.jpg',
  },
]
```
Note: If `skipErrors` option is `true` if any errors were encountered for a `source` a `error` key will be present with the error preventing transformation.

Finally, since this was using the default `mode` of "dry" `/unsorted/image.jpg` should remain and `/sorted/2000/01. January/01 Saturday/2000.01.01 01.00.jpg` should not exist.

### Remediator Options

#### Batch Size
**Description:** Amount of files to process asynchronously at a time.<br />
**Key:** batchSize<br />
**Type:** Integer<br />
**Required:** No<br />
**Default:** 20

#### Exiftool
**Description:** Reference to the Exiftool process object from "exiftool-vendored".  "exiftool-vendored" will determine the appropriate exiftool binary to install and be used by Remediator.  See usage in basic example above.<br />
**Key:** exiftool<br />
**Type:** Object<br />
**Required:** Yes<br />

#### Format
**Description:** Template string to use when building new file names.<br />
**Key:** format<br />
**Type:** String<br />
**Required:** No<br />
**Default:** :YYYY:/:MM0:. :Month:/:DD0: :Day:/:YYYY:.:MM0:.:DD0: :HH0:.:MN0:.:Ext:

#### Mode
**Description:** Remediator supports running in 3 different modes: dry, copy, or move.  <br />
* Dry - Remediator resolves only the results without actually changing any files.
* Copy - Remediator resolves results and copies files to new paths.
* Move - Remeditaor resolves results and moves original files to new paths.
 
**Key:** mode<br />
**Type:** string<br />
**Required:** No<br />
**Default:** dry

#### Output directory
**Description:** Base output directory for transformed files.  Must have read and write permissions to this directory.<br />
**Key:** output<br />
**Type:** String<br />
**Required:** Yes

#### Recurse Source Directories
**Description:** Whether or not to get all files from subdirectories of source directories.<br />
**Key:** recursive<br />
**Type:** Boolean<br />
**Required:** No<br />
**Default:** false

#### Skip Processing Errors
**Description:** If you would like to not throw or reject errors during processing you may choose to skip errors.  Skipping errors allows to continue process all files in source directories even if an error is encountered along the way.  If errors are skipped then the final results will include an array of errors that were encountered.<br />
**Key:** skipErrors<br />
**Type:** Boolean<br />
**Required:** No<br />
**Default:** false

#### Source Directories
**Description:** Directory(s) to get files to transform from.  Source may be a single directory as a string or as an array of directory strings.<br />
**Key:** source<br />
**Type:** String|Array<br />
**Required:** Yes<br />

## Building Format Strings
Format strings are simply a basic template for file output.  `:`'s are used to denote the start and end of a transformer section.  Remediator will replace the first "transformer" it encounters in a section.  If the first transformer found is empty or null everything between the `:`'s will not be added to the filename.

For example, if you have a format string of `:YYYY::-Make-:.:Ext:` and a image named `image.jpg` that was taken in the year 2000 but does NOT have any exif data for the device make the output would be: `2000.jpg`.  However, if `image.jpg` did have a device make of "Sony" the output would be: `2000-Sony-.jpg`.

The following tables list all currently supported "transformers" by Remediator.

### Transformers
#### Date based
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Transformer Markup</th>
            <th>Description</th>
            <th>Example(s) Output</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Year</td>
            <td>YYYY</td>
            <td>Date based numeric year.</td>
            <td>2018</td>
        </tr>
        <tr>
            <td rowspan="7">Month</td>
            <td>DD</td>
            <td>Date based numeric day of the month.</td>
            <td>1, 10, 20, 30</td>
        </tr>
        <tr>
            <td>DD0</td>
            <td>Date based numeric day of the month with leading zero.</td>
            <td>01, 10, 20, 30</td>
        </tr>
        <tr>
            <td>MM</td>
            <td>Date based month numeric month of the year.</td>
            <td>1, 4, 5, 12</td>
        </tr>
        <tr>
            <td>MM0</td>
            <td>Date based month numeric month of the year with leading zero.</td>
            <td>01, 04, 05, 12</td>
        </tr>
        <tr>
            <td>Month</td>
            <td>Date based name of month.</td>
            <td>January</td>
        </tr>
        <tr>
            <td>lcMonth</td>
            <td>Date based lowercase name of month.</td>
            <td>january</td>
        </tr>
        <tr>
            <td>ucMonth</td>
            <td>Date based uppercase name of month.</td>
            <td>JANUARY</td>
        </tr>
        <tr>
            <td rowspan="3">Week</td>
            <td>Day</td>
            <td>Date based day of the week.</td>
            <td>Sunday</td>
        </tr>
        <tr>
            <td>lcDay</td>
            <td>Date based lowercase day of the week.</td>
            <td>sunday</td>
        </tr>
        <tr>
            <td>ucDay</td>
            <td>Date based uppercase day of the week.</td>
            <td>SUNDAY</td>
        </tr>
    </tbody>
</table>

#### Time based
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Transformer Markup</th>
            <th>Description</th>
            <th>Example(s) Output</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2">Hour</td>
            <td>HH</td>
            <td>Time based numeric hour media was captured.</td>
            <td>0, 9, 12, 23</td>
        </tr>
        <tr>
            <td>HH0</td>
            <td>Time based numeric hour media was captured with leading zero.</td>
            <td>00, 09, 12, 23</td>
        </tr>
        <tr>
            <td rowspan="2">Minute</td>
            <td>MN</td>
            <td>Time based numeric minute media was captured.</td>
            <td>0, 7, 31, 44, 59</td>
        </tr>
        <tr>
            <td>MN0</td>
            <td>Time based numeric minute media was captured with leading zero.</td>
            <td>00, 07, 31, 44, 59</td>
        </tr>
    </tbody>
</table>

#### Device Based
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Transformer Markup</th>
            <th>Description</th>
            <th>Example(s) Output</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3">Device Make</td>
            <td>Make</td>
            <td>Make of camera used from media metadata.</td>
            <td>Sony</td>
        </tr>
        <tr>
            <td>lcMake</td>
            <td>Lowercase make of camera used from media metadata.</td>
            <td>sony</td>
        </tr>
        <tr>
            <td>ucMake</td>
            <td>Uppercase make of camera used from media metadata.</td>
            <td>SONY</td>
        </tr>
        <tr>
            <td rowspan="3">Device Model</td>
            <td>Model</td>
            <td>Model of camera used from media metadata.</td>
            <td>Nexus 5x</td>
        </tr>
        <tr>
            <td>lcModel</td>
            <td>Lowercase model of camera used from media metadata.</td>
            <td>nexus 5x</td>
        </tr>
        <tr>
            <td>ucModel</td>
            <td>Uppercase model of camera used from media metadata.</td>
            <td>NEXUS 5X</td>
        </tr>
    </tbody>
</table>

#### File Metadata Based
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Transformer Markup</th>
            <th>Description</th>
            <th>Example(s) Output</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3">Extension</td>
            <td>Ext</td>
            <td>Original file extension of source file.</td>
            <td>Jpeg</td>
        </tr>
        <tr>
            <td>lcExt</td>
            <td>Lowercase File Extension of source file.</td>
            <td>jpeg</td>
        </tr>
        <tr>
            <td>ucExt</td>
            <td>Uppercase File Extension of source file.</td>
            <td>JPEG</td>
        </tr>
        <tr>
            <td>Height</td>
            <td>Height</td>
            <td>Pixel height of media.</td>
            <td>1080</td>
        </tr>
        <tr>
            <td rowspan="3">Orientation</td>
            <td>Orientation</td>
            <td>Orientation of camera when photo was taken.</td>
            <td>Horizontal (normal)</td>
        </tr>
        <tr>
            <td>lcOrientation</td>
            <td>Lowercase orientation of camera when photo was taken.</td>
            <td>horizontal (normal)</td>
        </tr>
        <tr>
            <td>ucOrientation</td>
            <td>Uppercase orientation of camera when photo was taken.</td>
            <td>HORIZONTAL (NORMAL)</td>
        </tr>
        <tr>
            <td>Width</td>
            <td>Width</td>
            <td>Pixel width of media.</td>
            <td>1920</td>
        </tr>
    </tbody>
</table>

## Acknowledgements
Remediator would not be possible without [Exiftool by Phil Harvey](https://www.sno.phy.queensu.ca/~phil/exiftool/).  Please consider donating! 

Additionally, big thanks to [Adobe Systems](https://www.adobe.com/) for allowing work on the original prototype of Remediator during a Hackathon.
