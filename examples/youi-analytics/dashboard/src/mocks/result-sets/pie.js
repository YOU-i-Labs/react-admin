export default {
    loadResponse: {
        query: {
            dimensions: ['dimension'],
            measures: ['measure']
        },
        annotation: {
            dimensions: {
                'dimension': {
                    shortTitle: 'dimensionTitle'
                }
            },
            measures: {
                'measure': {
                    shortTitle: 'measureTitle'
                }
            }
        },
        data: [{
            'dimension': 'Apples',
            'measure': 50
        }, {
            'dimension': 'Oranges',
            'measure': 50
        }]
    }
};