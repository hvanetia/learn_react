import React from 'react'
import Card from './Card';
import Btn from './Btn';

function Main() {

  const dummyData = [
    {
      title: 'McLaren 600LT',
      description: `The McLaren 600LT is a high-performance sports car designed for speed, precision, and driving excitement. The "LT" stands for Long Tail, signifying McLaren's focus on enhanced aerodynamics, reduced weight, and track-focused performance.`,
      image: 'https://mclaren.scene7.com/is/image/mclaren/600LT-Tile-1200x1200:crop-4x3?wid=1920&hei=1440'
    },
    {
      title: 'Porsche 911',
      description: `The Porsche 911 is an iconic sports car known for its distinctive design, exceptional performance, and precision engineering. Since its debut in 1964, the 911 has remained a symbol of speed and driving excellence.`,
      image: 'https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-carrera-gts-101-668d444c83859.jpg?crop=0.616xw:0.518xh;0.159xw,0.304xh&resize=2048:*'
    },
    {
      title: 'BMW M5',
      description: `The BMW M5 is a high-performance luxury sedan that blends power, precision, and comfort. Part of BMW’s iconic M Series, the M5 is renowned for its blistering speed, sharp handling, and refined design — making it a perfect balance of track-ready performance and daily driving comfort.`,
      image: 'https://res.cloudinary.com/exclusive-resorts/image/upload/t_Journal_Square_1360x1360/f_auto/q_auto/v1650312924/erassets/Club%20Journal/BMW-M5-COMPETITION/BMW%20M5%20010_lzonje?_a=BBDAADAD0'
    }
  ];

  return (
    <div style={{
      height: 'max-content',
    }}>
      <Btn />
      <div style={{display: "flex", gap: "20px", margin: "30px"}}>
      {dummyData.map((element, index) => (
        <Card
          key={index}
          title={element.title}
          description={element.description}
          image={element.image}
        />
      ))}
      </div>

    </div>
  )
}

export default Main