# Remediator
Node library to sort images and video based off of their filesystem metadata or exif/media metadata based off of a predefined or custom template.

[![Travis Tests](https://travis-ci.org/shabubu/remediator.svg?branch=master)](https://travis-ci.org/shabubu/remediator)
[![Appveyor Tests](https://ci.appveyor.com/api/projects/status/github/shabubu/remediator?branch=master&svg=true)](https://ci.appveyor.com/project/shabubu/remediator)
[![Coverage Status](https://coveralls.io/repos/github/shabubu/remediator/badge.svg?branch=master)](https://coveralls.io/github/shabubu/remediator?branch=master)
[![Dependency Status](https://img.shields.io/david/shabubu/remediator.svg?style=flat-square)](https://david-dm.org/shabubu/remediator)
[![Known Vulnerabilities](https://snyk.io/test/github/shabubu/remediator/badge.svg?targetFile=package.json)](https://snyk.io/test/github/shabubu/remediator?targetFile=package.json)

## Installation
Installation assumes you have already installed [Node.js](https://nodejs.org/). If you have not done this or do not know how to please follow the directions at [https://nodejs.org/](https://nodejs.org/).

#### Setup Application
Either use an existing [npm](https://www.npmjs.com) package or follow these steps to create a new application.
```bash
$ mkdir myNewApp
$ cd myNewApp
$ npm init
```

#### Get Remediator
Now install the Remediator package into your application and save it as a dependency.
```bash
$ npm install remediator --save
```

## Transformers
### Date based
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

### Time based
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

### Device Based
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

### File Metadata Based
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
