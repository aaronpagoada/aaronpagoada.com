import Box from "@mui/material/Box"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { galleryImages } from "../utils/galleryImages"
import { useMediaQuery } from "@mui/material"

function ImageMasonry() {
  const matches = useMediaQuery("(min-width: 768px)")

  return (
    <div className="pt-16 pb-8 md:pr-24 text-stone-800 dark:text-white">
      <h1 className="text-4xl font-bold pb-16">Gallery</h1>
      <Box >
        <ImageList variant="masonry" cols={matches ? 3 : 1} gap={8}>
          {galleryImages.map((image, index) => (
            <ImageListItem key={index}>
              <img className="object-cover w-full h-full" src={image} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  )
}

export default ImageMasonry
