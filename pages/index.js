import files from "../util/pub"
import Image from "next/image"
import Masonry from 'react-masonry-css'
import Head from "next/head"

const pee = (props) => {
    return (
        <div>
            <Head>
<title>Zephyrbook</title>
<meta name="title" content="Zephyrbook"/>
<meta name="description" content="A virtual scrapbook website of the #zephyrbook channel!"/>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://zephyrbook.vercel.app"/>
<meta property="og:title" content="Zephyrbook"/>
<meta property="og:description" content="A virtual scrapbook website of the #zephyrbook channel!"/>
<meta property="og:image" content="https://zephyrbook.vercel.app/zephyrbook.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://zephyrbook.vercel.app"/>
<meta property="twitter:title" content="Zephyrbook"/>
<meta property="twitter:description" content="A virtual scrapbook website of the #zephyrbook channel!"/>
<meta property="twitter:image" content="https://zephyrbook.vercel.app/zephyrbook.png"/>
            </Head>
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
                cursor:pointer;
                opacity: 90%;
                top: -5px;
                -webkit-box-shadow: 0px 4px 10px 7px rgba(0,0,0,0.28); 
                box-shadow: 0px 4px 10px 7px rgba(0,0,0,0.28);
              }
              .title {
                font-family: 'Futura','Avenir Next', 'Nunito', 'Arial';
                padding: 5vw;
              }
              `}</style>
              <div className="title">
              <h1 style={{
              }}>Welcome to the Zephyrbook!</h1>
              <p>Learn more at <a href="https://zephyr.hackclub.com">zephyr.hackclub.com</a></p>
              </div>
    <Masonry
  breakpointCols={{
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  {files.map(v => <Image  src={v.link} width={v.width} height={v.height}/>)}
</Masonry>

        </div>
    )
}
export default pee;