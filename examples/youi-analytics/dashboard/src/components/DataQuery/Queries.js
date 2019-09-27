export const queryDevice = {
    "measures": [
        "Sessions.count"
    ],
    "timeDimensions": [],
    "dimensions": [
        "Sessions.manufacturemodel"
    ],
    "filters": [
        {
            "dimension": "Sessions.manufacturemodel",
            "operator": "set"
        }
    ]
}

export const queryMovie = {
    measures: ['Sessions.count'],
    timeDimensions: [],
    dimensions: ['Sessions.title'],
    filters: [
        {
            dimension: 'Sessions.title',
            operator: 'set',
        },
        {
            dimension: 'Sessions.eventtype',
            operator: 'equals',
            values: ['playStart'],
        },
    ],
    limit: 10,
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
