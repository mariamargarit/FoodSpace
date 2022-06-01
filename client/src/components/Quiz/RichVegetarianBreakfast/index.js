import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from '../BrokeVeganBreakfast/BVBElements'

const RichVegeterianBreakfast = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/brokevegetarianbreakfast">Salad</Button1>
          <Button1 href="/brokevegetarianlunch">Acai Bowl</Button1>
          <Button1 href="/brokevegetariandessert">Sandwich</Button1>
          <Button1 href="/brokevegetariandessert">Omelette</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichVegeterianBreakfast