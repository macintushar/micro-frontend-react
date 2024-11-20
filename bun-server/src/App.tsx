type VisualProps = {
  onClick: () => void;
  chartData: any;
}

export default function App({ onClick, chartData }: VisualProps) {
  return (
    <div>
      <h1>This is Component 2</h1>
      <code>Data for Chart{JSON.stringify(chartData, null, 2)}</code>
      <div onClick={onClick}>
        Feedback Section
      </div>
    </div>
  );
}
