import { NextPage } from 'next'
import { PrimaryButton, SecondaryButton } from '@locol23/component-library'

const Home: NextPage = () => (
  <>
    <PrimaryButton fontSize="1rem" text="Primary Button" />
    <SecondaryButton fontSize="1rem" text="Secondary Button" />
  </>
)

export default Home
