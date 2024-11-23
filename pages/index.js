import CommentedImage from '../components/Commented Image'
import CornyQuestion from '../components/Corny Question'
import RandomButton from '../components/Random Button'
import { useRef, useState } from 'react'
import { Analytics } from "@vercel/analytics/react"

import {
  Button,
  Code,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'

export default function Home() 
{
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
  const [confirmed, setConfirmation] = useState(false)

  return (
    <>
    
      <div className="flex flex-row justify-center items-center w-full h-full bg-pink-200 p-10 drop-shadow-xl">
        <div className="w-2/3 h-64 bg-gradient-to-r from-pink-300 to-pink-200 drop-shadow-xl rounded-full text-center transition-all duration-300">
          <h1 className="p-20 tracking-wide text-8xl font-bold text-white uppercase drop-shadow-lg">HELLO ANERI</h1>
        </div>
      </div>

      <div className="flex flex-row items-center justify-evenly w-full h-96 bg-pink-50">
        <CommentedImage src='/yoooo.png' text="woah so cool"/>
        <CommentedImage src='/art.JPG' text="art!"/>
        <CommentedImage src='/sunset.png' text="sunsets"/>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">So I heard...</h1>
      </div>

      <div className="flex flex-col items-center text-center w-full h-96 bg-pink-50 p-10">
        <div className="flex flex-row items-center text-center w-full h-5/6 bg-pink-50">
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'></h1>
          <h1 className='w-1/3 text-pink-300 font-bold text-6xl'>You were on the fence!</h1>
        </div>
        <h1 className="w-full h-1/4 text-pink-300 font-bold text-6xl uppercase"></h1>
      </div>

      <div className="text-center w-full h-64 bg-pink-200 drop-shadow-xl">
        <h1 className="p-20 tracking-wide text-6xl font-bold text-pink-400 uppercase drop-shadow-xl">so here are a couple reasons you should!</h1>
      </div>

      <CornyQuestion 
        question="1. We are both vegetarian and jain (SAME FOOD!!)"
        nonactive="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-vegetarian-symbol-leaf-illustration-nature-png-image_4806856.png"
        active="https://static.thenounproject.com/png/5414-200.png"
        primary
        left
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-200 p-5">
        <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>2. We really vibe well together (in person we did) </h1>
      </div>

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 p-5">
        <h1 className='w-2/3 text-pink-300 font-bold text-6xl'>3. I want to see what the hype behind love island is about.</h1>
      </div>

      <CornyQuestion 
        question="4. I can cook you lots of good food!"
        nonactive="https://www.marselsitalianrestaurant.com/wp-content/uploads/2020/09/slider-2.png"
        active="https://tastybite.com/cdn/shop/products/782733000013_-__4_-_Tasty_Bite_285g_Indian_Bombay_Potatoes_Pouch_USA_Dual_NIP_Plate-removebg-preview_600x.png?v=1690825506"
        secondary
        right
      />

      <CornyQuestion 
        question="5. We are both in engineering!"
        nonactive="https://www.lssu.edu/school-of-engineering-and-technology/wp-content/uploads/sites/12/2024/06/Body-4.png"
        active="https://t6gkdv23hbps-u942.pressidiumcdn.com/wp-content/uploads/2020/11/Europlanet_Machine_Learning_Logo_Combined_Black.png"
        primary
        left
      />

      <CornyQuestion 
        question="6. We are both from the bay, so we could hang out over breaks! (it sucks) "
        nonactive="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bayarea_map.png/1200px-Bayarea_map.png"
        active="https://openclipart.org/image/2000px/320884"
        secondary
        right
      />

      <div className="flex flex-row justify-around items-center text-center w-full h-96 bg-pink-50 px-5 pt-5">
      <h1 className="w-2/3 text-pink-400 font-bold text-6xl">{`you can't say no`}</h1>
      </div>

      <div className="flex flex-row justify-around items-start text-center w-full h-36 bg-pink-50 pb-5">
        <RandomButton 
          text="No"
          minHeight={ 4600 }
          maxHeight={ 5000 }
        />

        <button 
          className="w-36 bg-pink-400 text-white text-2xl p-5 rounded-2xl"
          onClick={ onOpen }
        >
          YES
        </button>

        <AlertDialog
          isOpen={ isOpen }
          leastDestructiveRef={ cancelRef }
          onClose={ onClose } 
        >
          <AlertDialogOverlay>
            <AlertDialogContent>

              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                OMG.
              </AlertDialogHeader>

              <AlertDialogBody>
                NO WAY SHE JUST SAID YES?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button 
                  colorScheme='pink' 
                  ref={ cancelRef } 
                  onClick={
                    () => 
                    {
                      onClose();
                      setConfirmation(true);
                    }
                  }
                >
                  Confirm
                </Button>
              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>

      {
        confirmed ? 
        <div className="flex flex-col justify-around items-center text-center w-full h-[58em] bg-pink-200 p-5">
          <h1 className='w-2/3 text-pink-400 font-bold text-6xl'>Confirmation Ticket / Review</h1>
          <div className="flex flex-col items-center gap-5 text-center w-3/4 h-5/6 bg-white p-5 rounded-3xl shadow-xl">
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
            <h1 className='w-2/3 text-black font-bold text-4xl underline'>
              Thank You For Your Confirmation!
            </h1>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Name of Partner
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Piam Parekh
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Location
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Secret location, Bay Area
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Time
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Unspecified
            </h3>
            <h2 className='w-2/3 text-black opacity-75 font-bold italic text-2xl'>
              Events
            </h2>
            <h3 className='w-2/3 text-black opacity-90 font-bold text-2xl'>
              Secret!
            </h3>
            <img className="h-24" src="https://cdn.pixabay.com/photo/2018/02/19/20/28/abstract-3166168__480.png" alt=""/>
          </div>
        </div>
        : 
        <></>
      }
    
    </>
  )
}
