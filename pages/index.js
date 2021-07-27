import files from "../util/pub"
import Image from "next/image"
import Masonry from 'react-masonry-css'

const pee = (props) => {
    return (
        <div>
            <style jsx global>{`
            .my-masonry-grid {
                display: -webkit-box; /* Not needed if autoprefixing */
                display: -ms-flexbox; /* Not needed if autoprefixing */
                display: flex;
                margin-left: -30px; /* gutter size offset */
                width: auto;
              }
              .my-masonry-grid_column {
                padding-left: 30px; /* gutter size */
                background-clip: padding-box;
              }
              
              /* Style your items */
              .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
                margin-bottom: 30px;
                background-color:#d9ecf1;
                border-radius: 10px;
                overflow:hidden;
              }`}</style>
              <h1 style={{
                  textAlign:"center"
              }}>Welcome to the Zephyr</h1>
    <Masonry
  breakpointCols={3}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  {files.map(v => <Image  src={v.link} width={v.width} height={v.height}/>)}
</Masonry>

        </div>
    )
}
export default pee;