import './ChartBar.css';

function ChartBar(props){
    let barfillheight = '0%';

    if(props.max > 0){
        barfillheight = Math.round((props.value / props.max) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: barfillheight}}></div>
            </div>

            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}

export default ChartBar;