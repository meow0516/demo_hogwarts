# demo_hogwarts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### store/index.js
You can modify below function
function getList& saveList: download character list
function searchText/Radio/Selector: search student by input name, gender, or house 

### views/index.js
You can modify below views
Home Page: meta data and the template you use
4 Houses Page: the template you use

### components
#### /inroduction
Binding dataType and prop dataType into search.vue for user to choose searching type

#### /search
Receive dataType and show different input
Binding searchInput that user can type name, or select gender/house

#### /searchresult
Display search result, format: "index. CharacterName is a Male/Female student of HouseName"

#### /houseIntro
Display introduction and icon of different houses.
House information and icon url can be modified in data.HouseName paragraph or path

#### How to use this page
Home page: input 'Character Full Name' or 'Gender' or 'House' to search which house the students belong
House Page: Display introduction of each house