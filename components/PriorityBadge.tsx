interface Props {
    priority: number;
}

export default function PriorityBadge({priority} :Props) {

    

    const HighPriority = (
        <span className="badge badge-error text-white">High</span>
    )

    const MediumPriority = (
        <span className="badge badge-warning text-white">Med</span>
    )

    const LowPriority = (
        <span className="badge  badge-success text-white">Low</span>
    )

    return <div>{priority === 1 ? LowPriority : (priority === 3 ? HighPriority : MediumPriority)}</div>
}