export default function Visual({ onClick, chartData }) {
    return (
        <div>
            <h1>This is Component 1</h1>
            <code>Data for Chart{JSON.stringify(chartData, null, 2)}</code>
            <div onClick={onClick}>
                Feedback Section
            </div>
        </div>
    )
}