import React from 'react'
import { PageWrapper, Button1, ButtonWrapper, Texth1 } from '../BrokeVegetarianLunch/BVLElements'

const RichVeganLunch = () => {
  return (
    <>
      <PageWrapper>
        <Texth1>Which of these dishes do you prefer?</Texth1>
        <ButtonWrapper>
          <Button1 href="/kebabhrisca">Kebab</Button1>
          <Button1 href="/sharomavegan" style={{'animation-delay':'0.07s'}}>Sharoma</Button1>
          <Button1 href="/salatagreceasca" style={{'animation-delay':'0.14s'}}>Salad</Button1>
          <Button1 href="/veganbowl" style={{'animation-delay':'0.21s'}}>Poke Bowl</Button1>
          <Button1 href="/supamazare" style={{'animation-delay':'0.28s'}}>Soup</Button1>
          <Button1 href="/morningrain" style={{'animation-delay':'0.35s'}}>Sandwich</Button1>
          <Button1 href="/veggiewild" style={{'animation-delay':'0.42s'}}>Burger</Button1>
          <Button1 href="/taiteigrau" style={{'animation-delay':'0.49s'}}>Veggie Noodles</Button1>
          <Button1 href="/falafel" style={{'animation-delay':'0.56s'}}>Falafel and hummus</Button1>
          <Button1 href="/quesadillavegana" style={{'animation-delay':'0.63s'}}>Quesadilla</Button1>
          <Button1 href="/pizzafunghi" style={{'animation-delay':'0.70s'}}>Pizza</Button1>
        </ButtonWrapper>
      </PageWrapper>
    </>
  )
}

export default RichVeganLunch