export default {
    loadResponse: {
        query: {
            dimensions: ['dimension'],
            measures: ['measure']
        },
        annotation: {
            dimensions: {
                'dimension': {
                    shortTitle: 'Count'
                }
            },
            measures: {
                'measure': {
                    shortTitle: 'measureTitle'
                }
            }
        },
        data: [{
            'dimension': 'Count',
            'measure': 50
        }, {
            'dimension': 'Count',
            'measure': 50
        }]
    }
};