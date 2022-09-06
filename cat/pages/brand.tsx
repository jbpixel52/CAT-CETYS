import { Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Login from '../components/login';
import Image from 'next/image'


export default function BrandPage(){
    return(<Grid2 container spacing={3} sx={{flexgrow:1}}>
        <Grid2 xs={6} md={8}>
        <Typography variant='h1' gutterBottom >CAT😼</Typography>
        <Login></Login>
        </Grid2>
<Grid2>
    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id nibh at libero fermentum porttitor vel sed massa. Nullam rutrum, eros a feugiat ullamcorper, dui nibh convallis lorem, sit amet tempor turpis dui a mi. Morbi at sodales metus. Vivamus consectetur viverra felis, sit amet ultrices sapien suscipit quis. Nulla non sodales felis. In et enim porttitor risus vestibulum ultricies in quis nibh. Phasellus eleifend, est sed iaculis tempus, est massa dictum sem, eget venenatis magna nulla quis mi. Quisque iaculis sem non ornare tempus. Mauris placerat auctor nulla, sed malesuada arcu convallis vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris in rutrum sem.

Vivamus in iaculis est. Vivamus luctus fermentum ipsum vel accumsan. Donec consectetur vulputate vestibulum. Quisque mollis risus vehicula magna mollis scelerisque. Ut ornare porttitor nisl et gravida. Quisque in neque vitae nisl commodo blandit ac ut neque. Aenean vehicula sapien sit amet mattis egestas. Nulla cursus feugiat semper. Morbi odio purus, condimentum ac ligula vitae, ultrices lobortis lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam porta pretium lacus a fermentum. Sed nisl mi, convallis vitae ante eget, mattis accumsan neque. In hac habitasse platea dictumst. In consequat turpis nulla, non egestas diam dignissim eu. Pellentesque suscipit purus lorem, sit amet ullamcorper purus blandit sed.</Typography>
<Image
    width="200px"
    height="200px"
    objectFit="cover"
    src='/page_emoji.png'
    alt="Pag with curl 3d emoji"
/>
</Grid2>
<Grid2 container spacing={1}>
    <Typography>Cartas Academicas Transcritas. 2022</Typography>
</Grid2>
    </Grid2>)
}