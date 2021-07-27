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
                margin-left: -15px; /* gutter size offset */
                margin-right: 15px;
                width: auto;
              }
              .my-masonry-grid_column {
                padding-left: 2rem; /* gutter size */
                background-clip: padding-box;
              }
              
              /* Style your items */
              .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
                margin-bottom: 2rem !important;
                padding: 15px;
                padding-bottom: 20px;
                background-color:#d9ecf1;
                border-radius: 5px;
                overflow:hidden;
                transition: 1s;
              }
              .my-masonry-grid_column > div:hover {
                opacity: 90%;
                top: -5px;
                -webkit-box-shadow: 0px 4px 10px 7px rgba(0,0,0,0.28); 
                box-shadow: 0px 4px 10px 7px rgba(0,0,0,0.28);
              }
              .title {
                font-family: 'Futura','Avenir Next', 'Nunito', 'Arial';
                padding: 5rem;
                font-size: 2.5rem;
              }`}</style>
              <div className="title">
              <h1 style={{
              }}>Welcome to the Zephyrbook!</h1>
              <p>Learn more at <a href="https://zephyr.hackclub.com">zephyr.hackclub.com</a></p>
              </div>
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