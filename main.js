// Todo: Create a function that loads the country, state, city, zip

const countryStateInfo = {
    INDIA: {
      ANDHRAPRADESH: {
        "VIJAYAWADA": ["90001", "90002", "90003", "90004"],
        "GUNTUR": ["92093", "92101"],
      },
      TELANGANA: {
        HYDERABAD: ["75201", "75202"],
        VARANGAL: ["73301", "73344"],
      },
    },
    AMERICA: {
      DALLAS: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      LOSANGELS: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
  };



  window.onload = function () {
    //todo: Get all input html elements from the DOM
  
    const countrySelection = document.querySelector("#Country"),
      stateSelection = document.querySelector("#State"),
      citySelection = document.querySelector("#City"),
      zipSelection = document.querySelector("#Zip");
  
  // todo: Disable all  Selection by setting disabled to false
  stateSelection.disabled = true; // remove all options bar first
  citySelection.disabled = true; // remove all options bar first
  zipSelection.disabled = true; // remove all options bar first
  for (let country in countryStateInfo) {
    countrySelection.options[countrySelection.options.length] = new Option(
      country,
      country
    );
  }
  //Todo: state Changed

  countrySelection.onchange = (e) => {
    stateSelection.disabled = false;
    // todo: Clear all options from State Selection
    stateSelection.length = 1; // remove all options bar first
    citySelection.length = 1; // remove all options bar first
    zipSelection.length = 1; // remove all options bar first

    // if (e.target.selectedIndex < 1) return; // done

    // todo: Load states by looping over countryStateInfo
    for (let state in countryStateInfo[e.target.value]) {
      stateSelection.options[stateSelection.options.length] = new Option(
        state,
        state
      );
    }
  };
  //todo: State Changed
  stateSelection.onchange = (e) => {
    citySelection.disabled = false;

    citySelection.length = 1; // remove all options bar first
    zipSelection.length = 1; // remove all options bar first
    for (let city in countryStateInfo[countrySelection.value][e.target.value]) {
      citySelection.options[citySelection.options.length] = new Option(
        city,
        city
      );
    }
  };
  //todo: State Changed
  citySelection.onchange = (e) => {
    zipSelection.disabled = false; // remove all options bar first
    zipSelection.length = 1; // remove all options bar first

    let zips = 
    countryStateInfo[countrySelection.value][stateSelection.value][e.target.value];

    for(let i=0 ; i< zips.length; i++){
        zipSelection.options[zipSelection.options.length] = new Option(
          zips[i],
          zips[i]
        );
    }

    };
  };