<p align="center">
  <img width="200" height="152" src="https://raw.githubusercontent.com/Tquila-ANZ/fiesta/master/assets/fiestalogo.png">
</p>

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
# fiesta

This is Tquila ANZ UI library page, for some of these components they are data driven from Salesforce and there are some assumptions that will considered.

<p align="center">
  <img width="633" height="345" src="https://raw.githubusercontent.com/Tquila-ANZ/fiesta/master/assets/fiestaflow2.png">
</p>

---
## Tquila ANZ Map
```javascript
import FiestaMap from 'fiesta/tq-anz-accordion';
```
### This is the main component for maps, manually need to install google maps and registered a key with Google for iOS and Android.
#### Dependencies: React Native, react-native-maps please review https://codeburst.io/react-native-google-map-with-react-native-maps-572e3d3eee14
---
## Tquila ANZ Accordion
```javascript
import FiestaAccordion from 'fiesta/tq-anz-accordion';
```
### This is the main component that allows the render of child items. This is in early stages for version 1.x.x this is the most important structure to any application.
#### Dependencies: React Native, Salesforce, Fiesta
---
## Tquila ANZ Button
```javascript
import FiestaTqBtn from 'fiesta/tq-anz-button';
```
#### Dependencies: React Native
---
## Tquila ANZ Notes
```javascript
import FiestaTqNotes from 'fiesta/tq-anz-notes';
```
#### Dependencies: React Native