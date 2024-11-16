export default function LiOne({items}: {items: string[]}){
    return (
        <ul>
            <li>This comes from a separate React App!</li>
            {items.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    )
}