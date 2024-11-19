export default function Visual({ onClick, chartData }) {
    return (
        <div>
            <code>Data for Chart{JSON.stringify(chartData, null, 2)}</code>
            <div onClick={onClick}>
                Feedback Section
            </div>
        </div>
    )
}