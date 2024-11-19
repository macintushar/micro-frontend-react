type VisualProps = {
    onClick: () => void;
    chartData: any;
}

export default function Visual({ onClick, chartData }: VisualProps) {
    return (
        <div>
            <code>Data for Chart{JSON.stringify(chartData, null, 2)}</code>
            <div onClick={onClick}>
                Feedback Section
            </div>
        </div>
    )
}