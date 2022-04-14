import Loading from "./Loading";
import Photo from "./Photo";

export default function GalleryGrid(props) {
    const { data, loading } = props;

    if (loading) {
        return (
            <>
            <Loading />
             </>
        )
    }

    if (data?.[0]?.length === 0) {
        return (
            <div className="flex items-center justify-center py-20 text-zinc-100">No photos found.</div>
        )
    }



    return (
        <div className="container mt-12 flex flex-row flex-wrap items-stretch md:flex-nowrap ">
           
           {data.map((grid, index) => (
                <div key={`gallery-${index}`} className="">
                {grid.map((item, itemIndex) => (
                    <div key={`${item.id} - ${itemIndex}` } className="ml-2">
                        <Photo data={item} />
                    </div>
                ))}
                </div>
            ))}
           
    </div>
    )
}