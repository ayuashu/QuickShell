import React, { useState } from 'react'

const Intro = () => {
  const [cards] = useState([
    {
      title: 'Card-1',
      text: `ewkmflem dfnmlwenmdfwe nwendwend  n kjejndd dkjwndjwe nnd n wkjendwe  wndkwe w nbwdw.`
    },
    {
      title: 'Card-2',
      text: `ewkmflem dfnmlwenmdfwe nwendwend  n kjejndd dkjwndjwe nnd n wkjendwe  wndkwe w nbwdw.`
    },
    {
      title: 'Card-3',
      text: `ewkmflem dfnmlwenmdfwe nwendwend  n kjejndd dkjwndjwe nnd n wkjendwe  wndkwe w nbwdw.`
    },
    {
      title: 'Card-4',
      text: `ewkmflem dfnmlwenmdfwe nwendwend  n kjejndd dkjwndjwe nnd n wkjendwe  wndkwe w nbwdw.`
    },
    {
      title: 'Card-5',
      text: `ewkmflem dfnmlwenmdfwe nwendwend  n kjejndd dkjwndjwe nnd n wkjendwe  wndkwe w nbwdw.`
    },
    {
      title: 'Card-6',
      text: `ewkmflem dfnmlwenmdfwe nwendwend  n kjejndd dkjwndjwe nnd n wkjendwe  wndkwe w nbwdw.`
    },
    {
      title: 'Card-7',
      text: `ewkmflem dfnmlwenmdfwe nwendwend  n kjejndd dkjwndjwe nnd n wkjendwe  wndkwe w nbwdw.`
    }
  ])
  return (
    <>
      <div>
        <section>
          <div className='container'>
            <h1>Responsive Cards</h1>
            <div className='cards'>
              {
                cards.map((card,i) => (
                  <div className='card'>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                    <button className='btn'>Read More</button>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Intro