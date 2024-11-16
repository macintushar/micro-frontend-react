import LiOne from "./LiOne";
import LiTwo from "./LiTwo";

export default function List({items, comp}: {items: string[]; comp: 1 | 2}){
    if (comp === 1) {
        return <LiOne items={items} />
    }
    if (comp === 2) {
        return <LiTwo items={items} />
    }
}