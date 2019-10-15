import React from "react";
import ReactApexChart from "react-apexcharts";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    'Mui-selected': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white'
    },
});


const AreaChart = (resultSet) => {

    const [selection, setSelection] = React.useState('1W')

    const getDateRange = (days) => {
        let maxDate = new Date()
        maxDate.setHours(0, 0, 0)

        let minDate = new Date(maxDate.valueOf())
        minDate.setDate(maxDate.getDate() - days)

        return {
            min: minDate.getTime(),
            max: maxDate.getTime()
        }
    }

    const [options, setOptions] = React.useState({
        annotations: {
            yaxis: [{
                y: 30,
                borderColor: '#999',
            }],
            xaxis: [{
                borderColor: '#999',
                yAxisIndex: 0,

            }]
        },
        colors: ['#e21c41'],
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
            style: 'hollow',
        },
        xaxis: {
            type: 'datetime',
            min: getDateRange(7).min,
            tickAmount: 6,
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        },
        chart: {
            toolbar: {
              show: true,
              tools: {
                download: false,
                selection: false,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: false,
                reset: true, 
                menu: false
              },
              autoSelected: 'zoom' // accepts -> zoom, pan, selection
            }
          }
    })

    const [series, setSeries] = React.useState([{
        data: resultSet.resultSet.loadResponse.data.map(obj => {
            return [obj['EnginesUsed.timestamp'], parseInt(obj['EnginesUsed.enginesUsedAvg'])]
        })
    }])


    const classes = useStyles();

    const updateData = (event, timeline) => {
        setSelection(timeline)

        let xaxis = {};
        switch (timeline) {
            case '1D':
                xaxis = getDateRange(1)
                break;
            case '1W':
                xaxis = getDateRange(7)
                break;
            case '1M':
                xaxis = getDateRange(30)
                break;
            case '6M':
                xaxis = getDateRange(180)
                break;
            case 'all':
                xaxis = {
                    min: undefined,
                    max: undefined,
                }
                break;
            default:
        }
        console.log(timeline)
        setOptions({
            xaxis: xaxis
        })
    };

    return (
        <div>
            <div className="toolbar">
                <ToggleButtonGroup
                    value={selection}
                    exclusive
                    onChange={updateData}
                >
                    <ToggleButton value="1D">
                        1D
                    </ToggleButton>
                    <ToggleButton value="1W">
                        1W
                    </ToggleButton>
                    <ToggleButton value="1M">
                        1M
                    </ToggleButton>
                    <ToggleButton value="6M">
                        6M
                    </ToggleButton>
                    <ToggleButton value="All">
                        All
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <ReactApexChart options={options} series={series} type="area" height="350" />
        </div>
    );
}

export default AreaChart;