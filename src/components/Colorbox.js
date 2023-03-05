import React from 'react';

 export function Colorbox({ a }) {
  const styles = {
    height: "30px",
    background: a,
    width: "580px",
    margin: "10px"
  };

  return <>
    <div style={styles} />

  </>;

}
