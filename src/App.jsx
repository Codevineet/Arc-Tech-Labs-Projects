import React, { useEffect } from 'react';
import { FetchData } from './FetchData';
import TableUI from './TableUI';
import { useDispatch } from 'react-redux';
import { setData } from './Store/Features/dataSlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchData(); 
      dispatch(setData(data));         
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <TableUI /> 
    </div>
  );
};

export default App;
