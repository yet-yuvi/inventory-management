import React, { useEffect, useState } from 'react'
import { Stack } from '../ui';

export const TestPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(
            'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
        )
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((e) => console.error(e));
    },[])
  return (
    <Stack>
        {items.map((item) => (
            <h1 key={item.name}>{item.name}</h1>
        ))}
    </Stack>
  )
}
