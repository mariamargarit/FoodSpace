import React from 'react'
import { DietWrapper, Texth1, Button1, ButtonWrapper } from './VegDietElements'


const VegDietType = () => {
  return (
    <>
      <DietWrapper>
        <Texth1>What type of diet best resonates with you</Texth1>
        <ButtonWrapper>
          <Button1>Vegetarian</Button1>
          <Button1>Vegan</Button1>
        </ButtonWrapper>
      </DietWrapper>
    </>
  )
}

export default VegDietType