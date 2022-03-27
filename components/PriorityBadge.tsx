interface Props {
    priority: string;
}

export default function PriorityBadge({priority} :Props) {

    const lowerCase = priority.toLowerCase();

    const HighPriority = (
        <span className="badge badge-error text-white">High</span>
    )

    const MediumPriority = (
        <span className="badge badge-warning text-white">Med</span>
    )

    const LowPriority = (
        <span className="badge  badge-success text-white">Low</span>
    )

    return <div>{lowerCase === "low" ? LowPriority : (lowerCase === "high" ? HighPriority : MediumPriority)}</div>
}