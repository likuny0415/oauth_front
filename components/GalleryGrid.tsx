import Loading from "./Loading";
import Photo from "./Photo";
import Masonry from "react-responsive-masonry";
import useWindowSize from "../lib/hooks/use-windowsize";

export default function GalleryGrid(props) {
    const { data, loading } = props;
    const size = useWindowSize();


    function changeView(width: number) {
        if (width > 1024) {
            return 3;
        } else if (width > 768) {
            return 2;
        } else {
            return 1
        }
    }

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
          <Masonry columnsCount={3} gutter="20px" >
            {data.map((item, itemIndex) => (
                <div key={itemIndex}>
                    {/* <Photo data={item} /> */}
                </div>
            )) }
          </Masonry>       
      </div>
    )
}