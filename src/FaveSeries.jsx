export const FaveSeries = (props) => {
    return <div>
                <p>Your favourite series is <strong>{props.name}</strong>, and you have binged watched it {props.amount} times.<br />
                This series can be viewed on {props.streaming_service}</p>
            </div>
}