import React from 'react';

import {
  Tabs,
  Tab
} from '@material-ui/core'

const Filter = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      textColor="primary"
      indicatorColor="primary"
    >
      <Tab label="おすすめ順" />
      <Tab label="新着順" />
      <Tab label="回答待ち" />
    </Tabs>
  );
}

export default Filter;