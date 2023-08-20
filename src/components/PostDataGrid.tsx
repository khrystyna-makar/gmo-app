import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import PostDataService from '../api/PostDataService.ts';
import IPost from '../types/IPost.ts';

const columns: GridColDef<IPost>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'userId',
    headerName: 'User ID',
    width: 120,
  },
  {
    field: 'title',
    headerName: 'Title',
    flex: 1,
  },
  {
    field: 'body',
    headerName: 'Body',
    flex: 2,
  },
];

export default function PostDataGrid() {

  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    PostDataService.getAll()
      .then((response: any) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={posts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
