import React from 'react';
import { Chart } from 'react-google-charts';
import { Title } from 'react-admin';

const ClickStreamList = props => (
    <div>
        <Title title="Click Stream" />
        <Chart
            width={'100%'}
            height={'300px'}
            chartType="Sankey"
            loader={<div>Loading Chart</div>}
            data={[
                ['From', 'To', 'Weight'],
                ['Lander', 'Drama', 5],
                ['Lander', 'Documentary', 1],
                ['Lander', 'Family', 1],
                ['Lander', 'Commedy', 1],
                ['Lander', 'Drama', 1],
                ['Lander', 'Documentary', 5],
                ['Lander', 'Commedy', 1],
                ['Lander', 'Drama', 1],
                ['Lander', 'Documentary', 1],
                ['Lander', 'Family', 5],
                ['Lander', 'Commedy', 1],
                ['Lander', 'Drama', 1],
                ['Lander', 'Documentary', 1],
                ['Lander', 'Family', 1],
                ['Lander', 'Commedy', 5],
                ['Drama', 'Romance', 2],
                ['Drama', 'What to Watch', 1],
                ['Drama', 'French', 1],
                ['Drama', 'Settings', 3],
                ['Documentary', 'Romance', 1],
                ['Documentary', 'What to Watch', 3],
                ['Documentary', 'Sports', 3],
                ['Documentary', 'French', 3],
                ['Lander', 'Sharks', 10],
                ['Documentary', 'Settings', 1],
                ['Family', 'What to Watch', 1],
                ['Family', 'French', 3],
                ['Family', 'Settings', 1],
                ['Commedy', 'Romance', 1],
                ['Commedy', 'What to Watch', 1],
                ['Commedy', 'French', 2],
                ['Commedy', 'Settings', 7],
                ['Settings', 'Get It Today', 5],
                ['Settings', 'Sharks', 1],
                ['Settings', 'Trending', 3],
                ['Romance', 'Get It Today', 5],
                ['Romance', 'Sharks', 1],
                ['Romance', 'Trending', 3],
                ['What to Watch', 'Get It Today', 5],
                ['What to Watch', 'Sharks', 1],
                ['What to Watch', 'Trending', 3],
                ['Sports', 'Get It Today', 5],
                ['Sports', 'Sharks', 1],
                ['Sports', 'Trending', 3],
                ['French', 'Get It Today', 5],
                ['French', 'Sharks', 1],
                ['French', 'Trending', 3],
            ]}
            rootProps={{ 'data-testid': '2' }}
        /></div>
);

export default ClickStreamList;

