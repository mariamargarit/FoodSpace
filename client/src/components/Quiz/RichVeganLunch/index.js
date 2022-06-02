import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from '../BrokeVegetarianLunch/BVLElements'

const RichVeganLunch = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/brokevegetarianbreakfast">Kebab</Button1>
          <Button1 href="/brokevegetarianlunch" style={{'animation-delay':'0.07s'}}>Sharoma</Button1>
          <Button1 href="/brokevegetariandessert" style={{'animation-delay':'0.14s'}}>Salad</Button1>
          <Button1 href="/brokevegetariandessert" style={{'animation-delay':'0.21s'}}>Poke Bowl</Button1>
          <Button1 href="/brokevegetariandessert" style={{'animation-delay':'0.28s'}}>Soup</Button1>
          <Button1 href="/brokevegetariandessert" style={{'animation-delay':'0.35s'}}>Sandwich</Button1>
          <Button1 href="/brokevegetariandessert" style={{'animation-delay':'0.42s'}}>Burger</Button1>
          <Button1 href="/brokevegetariandessert" style={{'animation-delay':'0.49s'}}>Veggie Noodles</Button1>
          <Button1 href="/brokevegetariandessert" style={{'animation-delay':'0.56s'}}>Falafel and hummus</Button1>
          <Button1 href="/brokevegetariandessert" style={{'animation-delay':'0.63s'}}>Quesadilla</Button1>
          <Button1 href="/brokevegetariandessert" style={{'animation-delay':'0.70s'}}>Pizza</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichVeganLunch