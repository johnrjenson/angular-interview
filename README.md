# Angular Interview - Load Data From API

### Directions
To complete this exercise, open `app.component.ts` and `app.component.html`and modify them to produce the output below. 
It must fetch the data from the API below. For this exercise, there is no need write a service. You should however 
demonstrate proper use of rxjs.

### API
HTTP GET https://api.spacexdata.com/v2/launches

#### Response:
```js
[
  {
    flight_number: 1,
    mission_name: "FalconSat"
  },
  {
    flight_number: 2,
    mission_name: "DemoSat"
  },
  {
    flight_number: 3,
    mission_name: "TrailBlazer"
  },
  {
    flight_number: 4,
    mission_name: "RatSat"
  },
  {
    flight_number: 5,
    mission_name: "RazakSat"
  }
]
```

### Output
The component should render a list of the mission names in html.
- FalconSat
- DemoSat
- Trailblazer
- RatSat
- RazakSat



# Instructions for Glider
This was created using node v16.15.1
### Commands
- `npm start` runs the project
- `npm run test` runs the tests and outputs the test results in `./testOutput.json` 
