import React, { Suspense, useMemo } from 'react';

type CustomVisualProps = {
    onClick: () => void;
    chartData: any;
    id: string;
}


export default function CustomVisual({ onClick, chartData, id }: CustomVisualProps) {
    const RemoteVisualComponent = useMemo(
        () => React.lazy(() => import(`${import.meta.env.VITE_API_HOST}/jsx?id=${id}`)),
        [id]
    );

    return (
        <Suspense>
            <RemoteVisualComponent onClick={onClick} chartData={chartData} />
        </Suspense>
    )
}
