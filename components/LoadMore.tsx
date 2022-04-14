import Loading from "./Loading"

export default function LoadMore(props) {
    const { containerRef, error, loadingMore, reachingEnd } = props
    if (error) {
        return <></>
    }


    return (
        <div ref={containerRef} >
            {loadingMore && !reachingEnd && <Loading />}
        </div>
    )
}