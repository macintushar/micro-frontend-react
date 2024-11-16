export default function LiTwo({items}: {items: string[]}){
    return (
        <ul>
            <li>This is another component from a separate React App!</li>
            {items.reverse().map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    )
}