import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useFetch from './useFetch';
import { FadeLoader } from 'react-spinners';
import { Search } from '@mui/icons-material';
import { useState } from 'react';

export default function ImageCardList() {

  const ApiUrl = "https://jsonplaceholder.org/posts";
  const { data, loading, error } = useFetch(ApiUrl);

  const [searchItem, setsearchItem] = useState('');

  if (error)
    return (<div className='flex flex-col justify-center items-center'>No Posts
    </div>)

  return (
    <>
      <div className='border-1 border-sky-700 flex justify-center items-center my-9 '>
        <input className='border-3 p-3 w-[50%] rounded-xl ' type="text" placeholder="Search" onChange={(e) => setsearchItem(e.target.value)} />
        <Search />
      </div>
      {(loading || !data) ? (
        <div className='flex flex-col justify-center items-center'><FadeLoader color="#36d7b7" />
        </div>) : (
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-extrabold text-blue-500 underline uppercase'>Dummy Data</h1>
          <div className='p-4 flex flex-wrap justify-center sm:flex-row sm:gap-8 gap-x-2 gap-y-8 flex-col items-center w-11/12 py-4  mx-auto sm:ml-0 ml-2'>
            {data.filter(
              (val) => {
                console.log(val)
                if (searchItem === "") {
                  return val;
                } else if (val.slug.toLowerCase().includes(searchItem.toLowerCase())) {
                  return val;
                }
              }
            ).map((item, key) => (
              <Card sx={{ maxWidth: 250 }} key={key} >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={item.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" className='uppercase line-clamp-1'>
                    {item.slug}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.url}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">{item.category}</Button>
                  <Button size="small">{item.publishedAt}</Button>
                </CardActions>
              </Card>))}
          </div>
        </div>
      )}
    </>
  );
}
