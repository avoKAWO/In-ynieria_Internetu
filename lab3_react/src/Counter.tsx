type CounterProps = {
    value: number;
}
export function Counter(props:CounterProps)
{
    return <div>{props.value}</div>;
}