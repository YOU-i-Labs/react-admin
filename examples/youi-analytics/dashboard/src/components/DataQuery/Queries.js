export const queryDevice = {
    "measures": [
        "Sessionrecords.count"
    ],
    "timeDimensions": [],
    "dimensions": [
        "Sessionrecords.clientdataManufacturemodel"
    ],
    "filters": [
        {
            "dimension": "Sessionrecords.clientdataManufacturemodel",
            "operator": "set"
        }
    ]
}

export const queryMovie = {
    "measures": [
        "Sessionrecords.count"
    ],
    "timeDimensions": [],
    "dimensions": ["Sessionrecords.clientdataTitle"],
    "filters": [
        {
            "dimension": "Sessionrecords.clientdataTitle",
            "operator": "set",
        },
        // {
        //     "dimension": "Sessionrecords.eventtype",
        //     "operator": "equals",
        //     "values": ["playStart"],
        // },
    ],
    "limit": 10,
};

export const queryGeoLocation = {
    "dimensions": [
        "Rawtemp.latitude",
        "Rawtemp.longitude"
    ],
    "timeDimensions": [],
    "filters": [
        {
            "dimension": "Rawtemp.latitude",
            "operator": "set"
        },
        {
            "dimension": "Rawtemp.longitude",
            "operator": "set"
        },
        {
            "dimension": "Rawtemp.latitude",
            "operator": "notContains",
            "values": [
                "null"
            ]
        },
        {
            "dimension": "Rawtemp.longitude",
            "operator": "notContains",
            "values": [
                "null"
            ]
        }
    ],
    "measures": []
}


export const queryEnginesUsedByDay = {
    "dimensions": [],
    "timeDimensions": [
        {
            "dimension": "EnginesUsed.timestamp",
            "granularity": "day",
            "dateRange": "Last 30 days"
        }
    ],
    "measures": [
        "EnginesUsed.enginesUsedAvg"
    ],
    "filters": []
}

export const buildMovieQuery = (filter) => {
    return {
        "dimensions": [
          "SessionMoviesDevices.title"
        ],
        "timeDimensions": [],
        "filters": filter ? [{
            "dimension": filter.dimension,
            "operator": "contains",
            "values": [
              filter.value
            ]
        }] : [],
        "measures": [
          "SessionMoviesDevices.count"
        ]
      }
};

export const buildDeviceQuery = (filter) => {
    return {
        "dimensions": [
          "SessionMoviesDevices.model"
        ],
        "timeDimensions": [],
        "filters": filter ? [{
            "dimension": filter.dimension,
            "operator": "contains",
            "values": [
              filter.value
            ]
        }] : [],
        "measures": [
          "SessionMoviesDevices.count"
        ]
      }
};